# QCM Santé — PASS

Application statique d'entraînement aux QCM de première année d'études de santé
(PASS), servie sous `/pass/` du site. Aucune dépendance, aucun build : HTML,
CSS et JavaScript natifs, données en JSON.

## Fonctions

- **7 UE** découpées en chapitres (74 au total), chacune avec ses banques de
  questions originales « type annales » : 5 propositions à juger vrai/faux,
  corrigées et justifiées proposition par proposition.
- **Carnet d'erreurs** (fonction centrale) : toute question ratée y entre,
  groupée par notion ; elle en sort après **deux succès consécutifs**.
- **Concours blanc** par UE : 30 questions tirées au sort dans toute l'UE,
  note ramenée sur 20.
- Progression persistée dans le navigateur (localStorage), aucun compte,
  aucune donnée envoyée.

## Architecture des fichiers

```
pass/
  index.html            coquille
  app.js                application (routeur, sessions, carnet)
  styles.css
  data/
    ues.json            manifeste : UE, chapitres, compteurs ("n")
    ue1/ch01.json …     une banque de questions par chapitre
  tools/
    build_manifest.py   validation des banques + mise à jour des compteurs
```

## Schéma d'une banque de chapitre

```json
{
  "ue": "ue1",
  "chapitre": "ch01",
  "titre": "Structure de l'atome et liaisons chimiques",
  "questions": [
    {
      "id": "ue1-ch01-q01",
      "enonce": "Concernant … :",
      "props": [
        { "t": "proposition A", "v": true,  "e": "justification d'une phrase" },
        { "t": "proposition B", "v": false, "e": "… donne la version correcte" }
      ],
      "notion": "étiquette courte (vocabulaire contrôlé du chapitre)",
      "diff": 2
    }
  ]
}
```

Règles : exactement 5 propositions par question, 1 à 4 vraies, ids uniques de
la forme `<ue>-<ch>-qNN`, `notion` prise dans un petit vocabulaire réutilisé
(elle sert au regroupement du carnet d'erreurs), `diff` de 1 à 3.

## Livraison par lots

L'objectif est de **100 questions par chapitre** (voir `objectifParChapitre`
dans `ues.json`). Les banques s'enrichissent par lots, une matière à la fois,
calées sur l'avancement des cours. Pour ajouter un lot :

1. compléter les tableaux `questions` des fichiers `data/<ue>/<ch>.json`
   (en poursuivant la numérotation `qNN`) ;
2. relancer `python3 tools/build_manifest.py` — il valide tout et met à jour
   les compteurs du manifeste ;
3. committer.

## À corriger en priorité à la rentrée

Le découpage en chapitres a été reconstitué à partir des programmes usuels de
PASS ; les intitulés varient selon les universités et les années. Dès réception
du **syllabus officiel**, ajuster `data/ues.json` (titres, ajouts/suppressions
de chapitres) puis relancer le script de validation. Les ids (`ue1`, `ch01`…)
sont stables et indépendants des titres : les renommer ne casse ni la
progression ni le carnet d'erreurs déjà enregistrés.
