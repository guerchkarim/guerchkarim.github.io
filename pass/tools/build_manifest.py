#!/usr/bin/env python3
"""Valide les banques de questions et met à jour data/ues.json.

- Vérifie chaque fichier data/<ue>/<ch>.json : JSON valide, ids uniques et
  cohérents avec le fichier, 5 propositions par question, 1 à 4 vraies,
  champs obligatoires présents.
- Injecte dans data/ues.json le nombre de questions ("n") de chaque chapitre,
  pour que l'application affiche les compteurs sans télécharger les banques.

À relancer après chaque lot de questions :  python3 tools/build_manifest.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"


def fail(msg):
    print(f"ERREUR : {msg}")
    sys.exit(1)


def check_question(f, q, seen_ids, prefix):
    qid = q.get("id", "")
    if qid in seen_ids:
        fail(f"{f} : id dupliqué {qid}")
    seen_ids.add(qid)
    if not qid.startswith(prefix):
        fail(f"{f} : id {qid} incohérent avec le fichier (attendu préfixe {prefix})")
    if not q.get("enonce") or not q.get("notion"):
        fail(f"{f} : {qid} sans énoncé ou sans notion")
    if q.get("diff") not in (1, 2, 3):
        fail(f"{f} : {qid} difficulté invalide")
    props = q.get("props", [])
    if len(props) != 5:
        fail(f"{f} : {qid} a {len(props)} propositions au lieu de 5")
    vraies = 0
    for p in props:
        if not p.get("t") or not p.get("e") or not isinstance(p.get("v"), bool):
            fail(f"{f} : {qid} proposition incomplète (t/v/e)")
        vraies += 1 if p["v"] else 0
    if not 1 <= vraies <= 4:
        fail(f"{f} : {qid} a {vraies} propositions vraies (attendu 1 à 4)")


def main():
    manifest_path = DATA / "ues.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    seen_ids = set()
    total = 0
    manquants = []

    for ue in manifest["ues"]:
        for chap in ue["chapitres"]:
            f = DATA / ue["id"] / f"{chap['id']}.json"
            if not f.exists():
                manquants.append(str(f.relative_to(ROOT)))
                chap["n"] = 0
                continue
            data = json.loads(f.read_text(encoding="utf-8"))
            if data.get("ue") != ue["id"] or data.get("chapitre") != chap["id"]:
                fail(f"{f} : en-tête ue/chapitre incohérent")
            prefix = f"{ue['id']}-{chap['id']}-q"
            for q in data.get("questions", []):
                check_question(f, q, seen_ids, prefix)
            chap["n"] = len(data.get("questions", []))
            total += chap["n"]

    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"OK : {total} questions validées.")
    if manquants:
        print(f"Chapitres sans banque ({len(manquants)}) :")
        for m in manquants:
            print(f"  - {m}")


if __name__ == "__main__":
    main()
