# Usine à vidéos — L'Atelier des Maths

Fabrique automatiquement des vidéos verticales (1080×1920, format YouTube Shorts / TikTok / Reels) avec voix off française, à partir d'un simple fichier JSON décrivant les scènes.

## Comment ça marche

```
videos/001-multiplier-par-11.json   →   node generer.mjs videos/001-....json
        (le scénario)                            ↓
                                    sorties/001-multiplier-par-11.mp4   (la vidéo)
                                    sorties/001-multiplier-par-11.txt   (titre + description + hashtags à coller)
```

Chaîne technique, 100 % locale et gratuite :
1. **Voix off** : synthèse vocale française [Piper](https://github.com/rhasspy/piper) (voix masculine `fr_FR-tom-medium` par défaut, téléchargée automatiquement au premier lancement ; voix féminine `fr_FR-siwis-medium` disponible via `VOIX=fr_FR-siwis-medium`).
2. **Images** : chaque scène est une animation HTML/CSS (`template.html`) rendue image par image avec Chromium (Playwright), parfaitement synchronisée sur la durée réelle de la voix.
3. **Assemblage** : ffmpeg encode le tout en MP4 H.264 + AAC, prêt à publier.

## Prérequis

- Node.js avec Playwright et Chromium
- Python 3 avec `pip install piper-tts imageio-ffmpeg`

## Écrire une nouvelle vidéo

Copiez un fichier de `videos/` et modifiez-le :

```json
{
  "slug": "002-table-de-9",
  "titre": "[Astuce] La table de 9 avec les doigts 🖐️",
  "niveau": "Primaire",
  "description": "…",
  "hashtags": ["#maths", "#primaire"],
  "scenes": [
    {
      "narration": "Ce que dit la voix off pendant cette scène.",
      "lines": [
        { "text": "Ce qui s'affiche à l'écran", "style": "math" },
        { "text": "→ 27", "style": "accent" }
      ]
    }
  ]
}
```

- La durée de chaque scène s'adapte automatiquement à la voix.
- Les lignes apparaissent une à une pendant que la voix parle.
- Styles disponibles : `kicker` (petit titre), `titre`, `math` (grand calcul), `accent` (résultat en orange), `etape`, `note`, `emoji`.
- Écrivez les nombres en chiffres dans `narration` (« 23 fois 11 ») : la voix les lit correctement en français.

## Génération

```bash
cd usine-videos
node generer.mjs videos/002-table-de-9.json
```

Environ 2 minutes de calcul pour une vidéo de 50–60 secondes.

## Limites et améliorations possibles

- La voix est synthétique : correcte et claire, mais une vraie voix humaine engage davantage. Le pipeline accepte facilement un fichier audio enregistré à la place de Piper.
- Le gabarit `template.html` est volontairement sobre (marque, calculs, progression). On peut créer d'autres gabarits (tableau blanc, géométrie animée, courbes de fonctions) sur le même principe `setTime(t)`.
