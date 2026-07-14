const e={id:"decimaux-6e",titre:"Nombres entiers et décimaux",sous:"Numération, comparer, ranger, arrondir.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Un nombre décimal permet d'écrire des quantités « entre les entiers » : une taille de 1,72 m, un prix de 4,95 €. Tout se joue autour de la <b>virgule</b>, qui sépare ce qui est entier de ce qui ne l'est pas.</h2>

<h3><span class="n">1</span>La valeur des chiffres</h3>
<p>Dans un nombre, chaque chiffre a une <span class="kw">valeur</span> qui dépend de sa <b>position</b>. À gauche de la virgule : unités, dizaines, centaines… À droite, on continue en divisant par 10 à chaque rang : les <span class="kw">dixièmes</span>, les <span class="kw">centièmes</span>, les <span class="kw">millièmes</span>.</p>
<div class="figbox"><svg viewBox="0 0 380 100">
  <g font-family="Space Mono" font-size="12">
  <rect x="20" y="20" width="340" height="52" fill="none" stroke="#3457B2"/>
  <line x1="105" y1="20" x2="105" y2="72" stroke="#3457B2"/><line x1="160" y1="20" x2="160" y2="72" stroke="#3457B2" stroke-width="2.5"/><line x1="245" y1="20" x2="245" y2="72" stroke="#3457B2"/>
  <text x="62" y="38" text-anchor="middle">dizaines</text><text x="132" y="38" text-anchor="middle">unités</text><text x="202" y="38" text-anchor="middle">dixièmes</text><text x="302" y="38" text-anchor="middle">centièmes</text>
  <text x="62" y="62" text-anchor="middle" font-size="20">1</text><text x="132" y="62" text-anchor="middle" font-size="20">2</text><text x="202" y="62" text-anchor="middle" font-size="20">4</text><text x="302" y="62" text-anchor="middle" font-size="20">5</text>
  <text x="160" y="90" text-anchor="middle" fill="#3457B2">12,45 : la virgule sépare la partie entière et la partie décimale</text></g>
</svg><figcaption>La valeur de chaque chiffre selon sa position</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">partie entière</span> est à gauche de la virgule, la <span class="kw">partie décimale</span> à droite. Chaque rang après la virgule vaut dix fois moins que le précédent.</p></div>

<h3><span class="n">2</span>Comparer et ranger</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour comparer deux décimaux :</p>
<ol class="demo-steps">
<li>On compare d'abord les <b>parties entières</b>.</li>
<li>Si elles sont égales, on compare les <b>dixièmes</b>, puis les <b>centièmes</b>, rang par rang.</li>
<li>Le premier rang qui diffère décide : le plus grand chiffre donne le plus grand nombre.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Les zéros inutiles à droite ne changent rien : <mark>3,7 = 3,70 = 3,700</mark>. En revanche <b>3,7 ≠ 3,07</b> — la position compte !</p></div>

<h3><span class="n">3</span>Fractions décimales</h3>
<p>Une <span class="kw">fraction décimale</span> a pour dénominateur 10, 100, 1000… On la lit directement en décimal :</p>
<table>
<tr><th>Fraction</th><th>Décimal</th></tr>
<tr><td>7/10</td><td>0,7</td></tr>
<tr><td>45/100</td><td>0,45</td></tr>
<tr><td>128/1000</td><td>0,128</td></tr>
</table>

<h3><span class="n">4</span>Arrondir</h3>
<div class="box exemple"><span class="lab">Exemple</span><p>Arrondir <b>4,58</b> à l'unité :</p>
<ol class="demo-steps">
<li>Le rang voulu est l'unité : le chiffre est <span class="num">4</span>.</li>
<li>On regarde le chiffre juste après : c'est <span class="num">5</span>.</li>
<li>Comme il est ≥ 5, on arrondit au-dessus : <mark>4,58 ≈ 5</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>virgule</b> sépare partie entière et partie décimale ; chaque rang vaut dix fois moins vers la droite. On compare de gauche à droite, les zéros finaux sont inutiles, et pour arrondir on regarde le chiffre <b>juste après</b> le rang voulu.</p></div>
`,fiche:[[",","La virgule sépare partie entière et partie décimale."],["1/10","Dixièmes, centièmes, millièmes après la virgule."],["<","Comparer : partie entière, puis dixièmes, puis centièmes."],["=","3,7 = 3,70 (zéros inutiles à droite)."],["/10","7/10 = 0,7 ; 45/100 = 0,45."],["≈","Arrondir : chiffre suivant ≥ 5 → au-dessus."]],qcm:[{t:"num",q:"Dans 4,58, quel est le chiffre des centièmes ?",a:8,tol:.01,unit:"",ex:"Le 8 est le 2ᵉ chiffre après la virgule : les centièmes."},{t:"qcm",q:"Quel est le plus grand nombre ?",choices:["6,8","6,08","6,79","6,5"],a:0,ex:"6,8 est le plus grand (6,8 > 6,79 > 6,5 > 6,08)."},{t:"num",q:"Écris 7/10 en nombre décimal : 0,… . Quel est le chiffre après la virgule ?",a:7,tol:.01,unit:"",ex:"7/10 = 0,7."},{t:"num",q:"Arrondis 4,58 à l'unité.",a:5,tol:.01,unit:"",ex:"Le chiffre après l'unité est 5 (≥ 5) : on arrondit à 5."},{t:"vf",q:"3,7 est égal à 3,70.",a:!0,ex:"Vrai : le zéro à droite ne change pas la valeur."}],exos:[{titre:"Valeur des chiffres",niv:"Application",n:8,desc:"Reconnaître dixièmes, centièmes, millièmes."},{titre:"Comparer et ranger",niv:"Application",n:8,desc:"Ordonner des décimaux."},{titre:"Arrondir",niv:"Réflexion",n:6,desc:"Arrondir à l'unité, au dixième."}]},s={id:"operations-6e",titre:"Les quatre opérations",sous:"Poser addition, soustraction, multiplication et division.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Additionner une facture, rendre la monnaie, partager équitablement une part de gâteau : les quatre opérations posées permettent de calculer sur le papier des nombres qu'on ne peut plus faire de tête.</h2>

<h3><span class="n">1</span>Poser une addition et une soustraction</h3>
<p>On écrit les nombres les uns <b>sous les autres</b>, en alignant les chiffres selon leur rang : <span class="kw">unités</span> sous unités, dizaines sous dizaines… On calcule <b>de droite à gauche</b> en gérant les <span class="kw">retenues</span>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour poser une addition ou une soustraction :</p>
<ol class="demo-steps">
<li>J'aligne les chiffres <b>colonne par colonne</b> selon leur rang.</li>
<li>Je calcule en commençant par les <b>unités</b>, à droite.</li>
<li>Quand une colonne dépasse 9, je note la <span class="kw">retenue</span> sur la colonne suivante à gauche.</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour <b>128 + 45</b> : <span class="num">8</span> + <span class="num">5</span> = 13, j'écris 3 et je retiens 1 ; puis <span class="num">2</span> + <span class="num">4</span> + 1 = 7 ; enfin 1. Résultat : <mark>128 + 45 = 173</mark>.</p></div>

<h3><span class="n">2</span>Poser une multiplication</h3>
<p>On multiplie le premier nombre par <b>chaque chiffre</b> du second, en décalant d'un rang à chaque ligne, puis on <b>additionne</b> les <span class="kw">produits partiels</span>.</p>
<div class="figbox"><svg viewBox="0 0 280 215">
  <g font-family="Space Mono" font-size="26" fill="#15233F" text-anchor="end">
    <text x="150" y="38">2 3</text>
    <text x="150" y="74">× 1 2</text>
    <text x="150" y="120">4 6</text>
    <text x="150" y="158">2 3 0</text>
    <text x="150" y="204">2 7 6</text>
  </g>
  <line x1="35" y1="86" x2="152" y2="86" stroke="#15233F" stroke-width="2"/>
  <line x1="35" y1="170" x2="152" y2="170" stroke="#15233F" stroke-width="2"/>
  <g font-family="Space Mono" font-size="13" fill="#EA8C00" text-anchor="start">
    <text x="164" y="120">(23 × 2)</text>
    <text x="164" y="158">(23 × 10)</text>
  </g>
</svg><figcaption>La multiplication posée 23 × 12 : produits partiels (46 + 230) puis somme = 276</figcaption></div>
<div class="box attention"><span class="lab">Attention</span><p>À la deuxième ligne, on multiplie par un chiffre des <b>dizaines</b> : il faut donc <b>décaler d'un rang vers la gauche</b> (ou écrire un 0 à droite). Oublier ce décalage est l'erreur la plus fréquente.</p></div>

<h3><span class="n">3</span>Poser une division (sur feuille)</h3>
<p>La division se pose « en <span class="kw">potence</span> » : on partage chiffre par chiffre, en abaissant les chiffres un par un. On obtient un <span class="kw">quotient</span> et un <span class="kw">reste</span>, avec toujours <b>reste &lt; diviseur</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Toute division se vérifie par l'égalité : <mark>dividende = diviseur × quotient + reste</mark>. Par exemple 47 ÷ 5 donne quotient <span class="num">9</span> et reste <span class="num">2</span>, car 5 × 9 + 2 = 47 et 2 &lt; 5.</p></div>

<h3><span class="n">4</span>À toi de jouer</h3>
<p>Utilise l'outil ci-dessous pour <b>poser et comprendre</b> chaque opération, puis <b>entraîne-toi</b> : calcule sur ta feuille et vérifie la correction posée.</p>

<div class="emb-tool">
  <div class="emb-head">🔧 Poseur d'opérations</div>
  <div class="emb-sub">Entre deux nombres, choisis l'opération, et vois-la posée et résolue étape par étape.</div>
  <div class="tool-form" id="eoOps">
    <input id="eoA" type="text" inputmode="numeric" placeholder="nombre" style="width:100px">
    <button class="opbtn on" data-op="+" onclick="eoSetOp('+')">+</button>
    <button class="opbtn" data-op="−" onclick="eoSetOp('−')">−</button>
    <button class="opbtn" data-op="×" onclick="eoSetOp('×')">×</button>
    <button class="opbtn" data-op="÷" onclick="eoSetOp('÷')">÷</button>
    <input id="eoB" type="text" inputmode="numeric" placeholder="nombre" style="width:100px">
    <button class="tool-go" onclick="eoPose()">Poser et résoudre</button>
  </div>
  <div id="eoOut"></div>
  <div class="emb-sep"></div>
  <div class="emb-head">✏️ Entraîne-toi</div>
  <div class="emb-sub">Choisis un type, génère une opération, calcule-la sur ta feuille puis vérifie.</div>
  <div class="tool-form" id="eoPops">
    <button class="opbtn on" data-op="+" onclick="eoSetPop('+')">+</button>
    <button class="opbtn" data-op="−" onclick="eoSetPop('−')">−</button>
    <button class="opbtn" data-op="×" onclick="eoSetPop('×')">×</button>
    <button class="opbtn" data-op="÷" onclick="eoSetPop('÷')">÷</button>
    <button class="tool-go" onclick="eoGen()">Nouvelle opération</button>
  </div>
  <div id="eoQ"></div><div id="eoAnsWrap"></div><div id="eoFb"></div>
</div>

<div class="box cle recap"><span class="lab">À retenir</span><p>On aligne toujours les chiffres selon leur <b>rang</b> et on gère les <b>retenues</b>. La multiplication additionne des produits partiels <b>décalés</b> ; la division en potence donne un quotient et un <b>reste &lt; diviseur</b>, que l'on vérifie par <b>dividende = diviseur × quotient + reste</b>.</p></div>
`,fiche:[["+","<b>Addition</b> : aligner les chiffres, gérer les retenues."],["−","<b>Soustraction</b> : aligner, avec les retenues."],["×","<b>Multiplication</b> : produits partiels décalés, puis somme."],["÷","<b>Division</b> posée en potence : quotient et reste."],["<","Dans une division, le <b>reste &lt; diviseur</b>."],["=","Vérif : dividende = diviseur × quotient + reste."]],qcm:[{t:"num",q:"Pose et calcule 128 + 45.",a:173,tol:.01,unit:"",ex:"128 + 45 = 173."},{t:"num",q:"Pose et calcule 200 − 47.",a:153,tol:.01,unit:"",ex:"200 − 47 = 153."},{t:"num",q:"Pose et calcule 23 × 12.",a:276,tol:.01,unit:"",ex:"23 × 12 = 276."},{t:"num",q:"Division 47 ÷ 5 : quel est le quotient (entier) ?",a:9,tol:.01,unit:"",ex:"5 × 9 = 45, il reste 2 : quotient 9."},{t:"num",q:"Division 47 ÷ 5 : quel est le reste ?",a:2,tol:.01,unit:"",ex:"47 − 45 = 2, et 2 < 5."}],exos:[{titre:"Additions et soustractions posées",niv:"Application",n:10,desc:"S'entraîner à poser et calculer."},{titre:"Multiplications posées",niv:"Application",n:8,desc:"Produits partiels et somme."},{titre:"Divisions en potence",niv:"Réflexion",n:8,desc:"Quotient, reste et vérification."}]},t={id:"points-droites",titre:"Points, droites, segments, demi-droites",sous:"Le vocabulaire de base : par où tout commence.",dom:"",cours:`
<h2 class="chap-intro">En géométrie, tout part d'objets très simples : le <b>point</b>, la <b>droite</b>, le <b>segment</b>, la <b>demi-droite</b>. Avant de construire des figures, il faut savoir les nommer et les noter correctement : c'est le langage commun des mathématiciens.</h2>

<h3><span class="n">1</span>Le point</h3>
<p>Un <span class="kw">point</span> marque une position précise. Il n'a ni longueur ni largeur : c'est juste un endroit. On le représente par une petite croix <b>×</b> (et pas un gros rond !) et on le nomme par une <b>lettre majuscule</b>.</p>
<div class="box def"><span class="lab">À retenir</span><p>On écrit « le point \\(A\\) » : une seule lettre <b>majuscule</b> pour un point.</p></div>

<h3><span class="n">2</span>La droite</h3>
<p>Une <span class="kw">droite</span> est <mark>infinie</mark> : elle continue sans fin des deux côtés. On ne peut donc jamais la dessiner en entier — on trace seulement un morceau, avec des flèches ou en la prolongeant.</p>
<div class="box def"><span class="lab">Notation</span><p>On nomme une droite de deux façons :</p>
<ul>
<li>par une lettre minuscule : la droite \\((d)\\) ;</li>
<li>par deux de ses points : la droite \\((AB)\\).</li>
</ul></div>
<div class="figbox"><svg viewBox="0 0 460 120">
  <line x1="20" y1="60" x2="440" y2="60" class="seg-a"/>
  <polygon points="20,60 34,54 34,66" fill="#2F6BED"/><polygon points="440,60 426,54 426,66" fill="#2F6BED"/>
  <circle cx="140" cy="60" r="4.5" class="pt-dot"/><text x="132" y="48" class="pt-label">A</text>
  <circle cx="320" cy="60" r="4.5" class="pt-dot"/><text x="312" y="48" class="pt-label">B</text>
  <text x="380" y="82" class="pt-label" fill="#1B4FCB">(AB)</text>
</svg><figcaption>La droite (AB) — infinie dans les deux sens</figcaption></div>

<h3><span class="n">3</span>Le segment</h3>
<p>Un <span class="kw">segment</span> est un morceau de droite <b>limité par deux points</b> appelés ses <b>extrémités</b>. Il a une longueur, que l'on peut mesurer.</p>
<div class="box def"><span class="lab">Notation</span><p>Le segment se note avec des crochets fermés : \\([AB]\\). Sa <b>longueur</b> se note \\(AB\\) (sans crochets), par exemple \\(AB = 5\\) cm.</p></div>

<h3><span class="n">4</span>La demi-droite</h3>
<p>Une <span class="kw">demi-droite</span> a un <b>point de départ</b> (son origine) mais pas de fin : elle part dans une seule direction, à l'infini. On la note \\([OA)\\) : crochet fermé du côté de l'origine \\(O\\), parenthèse ouverte du côté infini.</p>
<div class="figbox"><svg viewBox="0 0 460 130">
  <line x1="60" y1="40" x2="440" y2="40" class="seg"/>
  <polygon points="440,40 426,34 426,46" fill="#15233F"/>
  <circle cx="60" cy="40" r="4.5" class="pt-dot-a"/><text x="50" y="30" class="pt-label">O</text>
  <circle cx="240" cy="40" r="4.5" class="pt-dot"/><text x="232" y="30" class="pt-label">A</text>
  <text x="330" y="62" class="pt-label" fill="#1B4FCB">[OA)</text>

  <line x1="20" y1="95" x2="440" y2="95" class="seg"/>
  <circle cx="80" cy="95" r="4.5" class="pt-dot"/><text x="72" y="85" class="pt-label">A</text>
  <circle cx="380" cy="95" r="4.5" class="pt-dot"/><text x="372" y="85" class="pt-label">B</text>
  <text x="200" y="117" class="pt-label" fill="#1B4FCB">[AB] segment</text>
</svg><figcaption>Demi-droite [OA) d'origine O, et segment [AB]</figcaption></div>

<div class="box prop"><span class="lab">Récapitulatif des notations</span>
<table>
<tr><th>Objet</th><th>Notation</th><th>Description</th></tr>
<tr><td>Droite</td><td>\\((AB)\\)</td><td>sans limite, infinie des deux côtés</td></tr>
<tr><td>Demi-droite</td><td>\\([AB)\\)</td><td>une origine \\(A\\), infinie d'un seul côté</td></tr>
<tr><td>Segment</td><td>\\([AB]\\)</td><td>deux extrémités \\(A\\) et \\(B\\)</td></tr>
<tr><td>Longueur</td><td>\\(AB\\)</td><td>un nombre (en cm, mm…)</td></tr>
</table></div>

<h3><span class="n">5</span>Points alignés · appartenance</h3>
<p>Trois points sont <span class="kw">alignés</span> s'ils sont sur une même droite. On utilise le symbole \\(\\in\\) (« appartient à ») : \\(A \\in (d)\\) signifie « le point \\(A\\) est sur la droite \\((d)\\) ».</p>
<div class="box attention"><span class="lab">Erreur fréquente</span><p>Ne confonds pas \\([AB]\\) (le <b>segment</b>, un dessin) et \\(AB\\) (sa <b>longueur</b>, un nombre). On n'écrit jamais « \\([AB] = 5\\) cm ».</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <span class="kw">point</span> se note par une lettre majuscule ; une <span class="kw">droite</span> \\((AB)\\) est infinie, un <span class="kw">segment</span> \\([AB]\\) est limité par deux extrémités, une <span class="kw">demi-droite</span> \\([AB)\\) a une seule origine. La longueur \\(AB\\) est un nombre, et \\(A \\in (d)\\) veut dire que \\(A\\) est sur la droite \\((d)\\).</p></div>
`,fiche:[["A","Un <b>point</b> se note par une lettre majuscule (A, B, M…) et se marque par une croix ×."],["d","Une <b>droite</b> est infinie : notée (d) ou (AB). Deux points suffisent à la définir."],["[ ]","Un <b>segment</b> [AB] est limité par deux extrémités. Sa longueur se note AB."],["[ )","Une <b>demi-droite</b> [OA) a une origine O et part à l'infini dans un seul sens."],["∈","<b>Appartenance</b> : A ∈ (d) veut dire « A est sur la droite (d) »."],["⚠","On distingue [AB] (le dessin) et AB (la longueur, un nombre)."]],qcm:[{t:"qcm",q:"Comment note-t-on correctement un segment d'extrémités A et B ?",choices:["(AB)","[AB]","[AB)","AB"],a:1,ex:"Les crochets fermés des deux côtés [AB] désignent le segment. (AB) est la droite, [AB) une demi-droite, et AB est la longueur."},{t:"qcm",q:"Quel objet géométrique est infini des deux côtés ?",choices:["Le segment","La demi-droite","La droite","Le point"],a:2,ex:"Seule la droite se prolonge sans fin dans les deux directions. La demi-droite n'est infinie que d'un côté."},{t:"vf",q:"L'écriture « AB = 4 cm » est correcte pour parler de la longueur du segment.",a:!0,ex:"Oui : AB (sans crochets) désigne la longueur, c'est un nombre. On peut donc écrire AB = 4 cm."},{t:"vf",q:"Un point se note par une lettre minuscule, comme le point « a ».",a:!1,ex:"Faux : un point se note toujours par une lettre MAJUSCULE (A, B, M…). Les minuscules servent pour les droites (d)."},{t:"qcm",q:"La demi-droite [OA) …",choices:["a deux extrémités","a une origine O et pas de fin","est un morceau limité","est identique au segment [OA]"],a:1,ex:"La demi-droite [OA) part de l'origine O et se prolonge indéfiniment en passant par A."}],exos:[{titre:"Vocabulaire & notations",niv:"Application",n:8,desc:"Nommer points, droites, segments et demi-droites sur des figures données."},{titre:"Placer et nommer",niv:"Construction",n:6,desc:"Tracer des droites, segments et demi-droites à partir de consignes."},{titre:"Vrai / Faux notations",niv:"Réflexion",n:10,desc:"Repérer les erreurs de notation les plus fréquentes."}]},a={id:"positions-droites",titre:"Droites sécantes, perpendiculaires, parallèles",sous:"Comment deux droites se rencontrent — ou pas.",dom:"",cours:`
<h2 class="chap-intro">Quand on trace deux droites sur une feuille, il n'y a que deux possibilités : soit elles se croisent, soit elles ne se croisent jamais. Ce chapitre met des mots précis sur ces situations et sur la façon de les <b>coder</b> sur une figure.</h2>

<h3><span class="n">1</span>Droites sécantes</h3>
<p>Deux droites sont <span class="kw">sécantes</span> si elles se coupent en <b>un seul point</b>, appelé le <span class="kw">point d'intersection</span>.</p>
<div class="box def"><span class="lab">Définition</span><p>Deux droites \\(d\\) et \\(d'\\) sont <span class="kw">sécantes</span> lorsqu'elles ont exactement un point commun. Si elles ne sont pas parallèles, alors elles sont sécantes.</p></div>

<h3><span class="n">2</span>Droites perpendiculaires</h3>
<p>Deux droites sont <span class="kw">perpendiculaires</span> si elles se coupent en formant un <b>angle droit</b> (\\(90°\\)). On le vérifie avec l'équerre, et on le code par un petit carré à l'intersection.</p>
<div class="box def"><span class="lab">Notation</span><p>« La droite \\(d\\) est perpendiculaire à \\(d'\\) » s'écrit \\(d \\perp d'\\).</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <line x1="60" y1="150" x2="400" y2="150" class="seg"/>
  <line x1="200" y1="30" x2="200" y2="180" class="seg-a"/>
  <path d="M200 132 L218 132 L218 150" fill="none" stroke="#15233F" stroke-width="1.6"/>
  <circle cx="200" cy="150" r="4.5" class="pt-dot"/>
  <text x="70" y="142" class="pt-label">(d)</text><text x="210" y="45" class="pt-label" fill="#1B4FCB">(d')</text>
  <text x="150" y="185" class="pt-label" fill="#B77800">angle droit 90°</text>
</svg><figcaption>(d) ⊥ (d') : elles forment un angle droit</figcaption></div>
<div class="box methode"><span class="lab">Méthode</span><p>Tracer la perpendiculaire à \\(d\\) passant par un point \\(A\\), à l'équerre :</p>
<ol class="demo-steps">
<li>On pose un <b>côté de l'angle droit</b> de l'équerre le long de la droite \\(d\\).</li>
<li>On fait glisser l'équerre jusqu'à ce que l'<b>autre côté</b> passe par le point \\(A\\).</li>
<li>On trace le long de ce second côté : la droite obtenue est \\(\\perp\\) à \\(d\\).</li>
</ol></div>

<h3><span class="n">3</span>Droites parallèles</h3>
<p>Deux droites sont <span class="kw">parallèles</span> si elles ne se coupent <b>jamais</b>, même en les prolongeant à l'infini. Elles gardent partout le même écartement.</p>
<div class="box def"><span class="lab">Notation</span><p>« \\(d\\) est parallèle à \\(d'\\) » s'écrit \\(d \\parallel d'\\). On les repère par des petites flèches identiques.</p></div>
<div class="box methode"><span class="lab">Méthode</span><p>Tracer la parallèle à \\(d\\) passant par un point \\(A\\), à la règle et à l'équerre :</p>
<ol class="demo-steps">
<li>On trace d'abord une droite \\(t\\) <b>perpendiculaire</b> à \\(d\\).</li>
<li>On trace ensuite la perpendiculaire à \\(t\\) passant par \\(A\\).</li>
<li>Cette dernière est \\(\\parallel\\) à \\(d\\) : deux droites \\(\\perp\\) à une même droite sont parallèles.</li>
</ol></div>

<h3><span class="n">4</span>Trois propriétés très utiles</h3>
<div class="box prop"><span class="lab">Propriété 1</span><p>Si deux droites sont <b>parallèles à une même troisième</b>, alors elles sont parallèles entre elles.</p><p>Si \\(d_1 \\parallel d\\) et \\(d_2 \\parallel d\\), alors \\(d_1 \\parallel d_2\\).</p></div>
<div class="box prop"><span class="lab">Propriété 2</span><p>Si deux droites sont <b>perpendiculaires à une même troisième</b>, alors elles sont parallèles entre elles.</p><p>Si \\(d_1 \\perp t\\) et \\(d_2 \\perp t\\), alors \\(d_1 \\parallel d_2\\).</p></div>
<div class="box prop"><span class="lab">Propriété 3</span><p>Si une droite est perpendiculaire à l'une de deux droites parallèles, alors elle est <b>perpendiculaire à l'autre</b>.</p><p>Si \\(t \\perp d_1\\) et \\(d_1 \\parallel d_2\\), alors \\(t \\perp d_2\\).</p></div>
<div class="figbox"><svg viewBox="0 0 460 190">
  <line x1="40" y1="60" x2="420" y2="60" class="seg-a"/>
  <line x1="40" y1="140" x2="420" y2="140" class="seg-a"/>
  <line x1="150" y1="20" x2="150" y2="180" class="seg"/>
  <path d="M150 78 L168 78 L168 60" fill="none" stroke="#15233F" stroke-width="1.5"/>
  <path d="M150 158 L168 158 L168 140" fill="none" stroke="#15233F" stroke-width="1.5"/>
  <path d="M280 55 l8 5 l-8 5" fill="none" stroke="#1B4FCB" stroke-width="1.6"/>
  <path d="M280 135 l8 5 l-8 5" fill="none" stroke="#1B4FCB" stroke-width="1.6"/>
  <text x="360" y="52" class="pt-label" fill="#1B4FCB">(d₁)</text>
  <text x="360" y="132" class="pt-label" fill="#1B4FCB">(d₂)</text>
</svg><figcaption>(t) ⊥ (d₁) et (d₁) ∥ (d₂) ⟹ (t) ⊥ (d₂)</figcaption></div>

<div class="box attention"><span class="lab">Attention</span><p><mark>« Sécantes » ne veut pas dire « perpendiculaires »</mark> ! Des droites \\(\\perp\\) sont toujours sécantes, mais des droites sécantes ne sont pas forcément perpendiculaires : l'angle n'est pas forcément droit.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Deux droites sont <b>sécantes</b> (un point commun), <b>perpendiculaires</b> \\(d \\perp d'\\) (angle droit) ou <b>parallèles</b> \\(d \\parallel d'\\) (jamais de point commun). Retiens les propriétés : deux droites \\(\\perp\\) à une même troisième sont \\(\\parallel\\), et si \\(t \\perp d_1\\) avec \\(d_1 \\parallel d_2\\) alors \\(t \\perp d_2\\).</p></div>
`,fiche:[["⨯","<b>Sécantes</b> : se coupent en un seul point (le point d'intersection)."],["⊥","<b>Perpendiculaires</b> : se coupent à angle droit (90°). Notation (d) ⊥ (d')."],["∥","<b>Parallèles</b> : ne se coupent jamais, écartement constant. Notation (d) ∥ (d')."],["P1","Parallèles à une même droite ⟹ parallèles entre elles."],["P2","Perpendiculaires à une même droite ⟹ parallèles entre elles."],["P3","⊥ à l'une de deux parallèles ⟹ ⊥ à l'autre."]],qcm:[{t:"qcm",q:"Deux droites perpendiculaires forment un angle de :",choices:["45°","60°","90°","180°"],a:2,ex:"Perpendiculaire signifie « à angle droit », soit exactement 90°."},{t:"vf",q:"Deux droites parallèles finissent toujours par se couper si on les prolonge assez loin.",a:!1,ex:"Faux : c'est justement la définition — des droites parallèles ne se coupent JAMAIS, même à l'infini."},{t:"qcm",q:"On sait que (d₁) ⊥ (t) et (d₂) ⊥ (t). Que peut-on conclure ?",choices:["(d₁) ⊥ (d₂)","(d₁) ∥ (d₂)","(d₁) et (d₂) sont sécantes","On ne peut rien dire"],a:1,ex:"Propriété : deux droites perpendiculaires à une même troisième sont parallèles entre elles."},{t:"vf",q:"Des droites sécantes sont forcément perpendiculaires.",a:!1,ex:"Faux : sécantes signifie seulement qu'elles se coupent. L'angle n'est pas forcément droit."},{t:"qcm",q:"On a (d) ∥ (d') et (t) ⊥ (d). Alors :",choices:["(t) ∥ (d')","(t) ⊥ (d')","(t) coupe (d) en 2 points","rien"],a:1,ex:"Si une droite est ⊥ à l'une de deux parallèles, elle est ⊥ à l'autre : (t) ⊥ (d')."}],exos:[{titre:"Reconnaître les positions",niv:"Application",n:8,desc:"Identifier sécantes, ⊥ et ∥ sur des figures codées."},{titre:"Tracés à l'équerre",niv:"Construction",n:6,desc:"Construire perpendiculaires et parallèles avec règle et équerre."},{titre:"Raisonner avec les propriétés",niv:"Réflexion",n:6,desc:"Déduire des positions de droites à partir des 3 propriétés."}]},n={id:"milieu-mediatrice",titre:"Distances, milieu, médiatrice",sous:"Mesurer, couper en deux, et l'ensemble des points équidistants.",dom:"",cours:`
<h2 class="chap-intro">Mesurer la <b>distance</b> entre deux points, trouver le point exactement au <b>milieu</b>, puis tracer la droite de tous les points « à égale distance » des deux bouts : c'est la <b>médiatrice</b>. Trois idées liées par une même mesure, la longueur.</h2>

<h3><span class="n">1</span>Distance entre deux points</h3>
<p>La <span class="kw">distance</span> entre deux points A et B est la longueur du segment [AB], que l'on note simplement \\(AB\\). C'est le <b>plus court chemin</b> pour aller de A à B.</p>
<div class="box def"><span class="lab">Définition</span><p>La distance entre A et B est la longueur \\(AB\\) du segment [AB]. On l'exprime dans une unité de longueur (cm, m…).</p></div>

<h3><span class="n">2</span>Le milieu d'un segment</h3>
<p>Le <span class="kw">milieu</span> \\(M\\) d'un segment [AB] est le point de [AB] situé à <b>égale distance</b> de A et de B. Il partage le segment en deux parts égales.</p>
<div class="box def"><span class="lab">Définition</span><p>\\(M\\) est le milieu de [AB] signifie : \\(M\\) appartient à [AB] <b>et</b> \\(MA = MB\\). On a alors \\(MA = MB = AB \\div 2\\).</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Si \\(AB = 9\\) cm et \\(M\\) est le milieu de [AB], alors <mark>\\(MA = MB = 9 \\div 2 = 4{,}5\\) cm</mark>. Inversement, si \\(MA = 6{,}5\\) cm, alors \\(AB = 2 \\times 6{,}5 = 13\\) cm.</p></div>
<div class="figbox"><svg viewBox="0 0 460 90">
  <line x1="50" y1="45" x2="410" y2="45" class="seg"/>
  <circle cx="50" cy="45" r="4.5" class="pt-dot"/><text x="42" y="32" class="pt-label">A</text>
  <circle cx="230" cy="45" r="5" class="pt-dot-a"/><text x="223" y="32" class="pt-label" fill="#1B4FCB">M</text>
  <circle cx="410" cy="45" r="4.5" class="pt-dot"/><text x="402" y="32" class="pt-label">B</text>
  <path d="M130 60 l6 -6 M136 66 l6 -6" stroke="#F2A100" stroke-width="2"/>
  <path d="M310 60 l6 -6 M316 66 l6 -6" stroke="#F2A100" stroke-width="2"/>
  <text x="120" y="80" class="pt-label" fill="#B77800">MA</text><text x="300" y="80" class="pt-label" fill="#B77800">= MB</text>
</svg><figcaption>M milieu de [AB] : les deux parts (codées) sont égales</figcaption></div>

<h3><span class="n">3</span>La médiatrice d'un segment</h3>
<p>La <span class="kw">médiatrice</span> d'un segment [AB] est la droite qui coupe [AB] <b>en son milieu</b> et qui lui est <b>perpendiculaire</b>.</p>
<div class="box prop"><span class="lab">Propriété fondamentale</span><p>La médiatrice de [AB] est l'ensemble de <b>tous les points situés à égale distance de A et de B</b>. Autrement dit : \\(M\\) est sur la médiatrice de [AB] <b>si et seulement si</b> \\(MA = MB\\).</p></div>
<div class="figbox"><svg viewBox="0 0 460 220">
  <line x1="70" y1="150" x2="390" y2="150" class="seg"/>
  <line x1="230" y1="25" x2="230" y2="200" class="seg-a"/>
  <path d="M230 132 L248 132 L248 150" fill="none" stroke="#15233F" stroke-width="1.5"/>
  <circle cx="70" cy="150" r="4.5" class="pt-dot"/><text x="60" y="170" class="pt-label">A</text>
  <circle cx="390" cy="150" r="4.5" class="pt-dot"/><text x="382" y="170" class="pt-label">B</text>
  <circle cx="230" cy="150" r="4" class="pt-dot"/>
  <circle cx="230" cy="60" r="4.5" class="pt-dot-a"/><text x="238" y="55" class="pt-label" fill="#1B4FCB">M</text>
  <line x1="70" y1="150" x2="230" y2="60" class="dash" stroke="#F2A100" stroke-width="1.6"/>
  <line x1="390" y1="150" x2="230" y2="60" class="dash" stroke="#F2A100" stroke-width="1.6"/>
  <text x="120" y="95" class="pt-label" fill="#B77800">MA</text><text x="300" y="95" class="pt-label" fill="#B77800">MB</text>
  <text x="245" y="200" class="pt-label" fill="#1B4FCB">médiatrice</text>
</svg><figcaption>Tout point M de la médiatrice vérifie MA = MB</figcaption></div>

<h3><span class="n">4</span>Construire la médiatrice au compas</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour tracer la médiatrice de [AB] à la règle et au compas :</p>
<ol class="demo-steps">
<li>On écarte le compas de <b>plus de la moitié</b> de \\(AB\\).</li>
<li>On pique en A et on trace deux arcs, l'un au-dessus, l'autre en dessous de [AB].</li>
<li>Sans changer l'écartement, on pique en B et on trace deux arcs qui coupent les premiers.</li>
<li>On trace la droite passant par les <b>deux points d'intersection</b> : c'est la médiatrice de [AB].</li>
</ol></div>
<p>Les deux points d'intersection sont chacun à égale distance de A et de B (même écartement de compas) : ils vérifient donc \\(MA = MB\\) et se trouvent bien sur la médiatrice.</p>
<div class="box attention"><span class="lab">Ne pas confondre</span><p>Le <span class="kw">milieu</span> est un <b>point</b>. La <span class="kw">médiatrice</span> est une <b>droite</b> (la perpendiculaire passant par ce milieu).</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>distance</b> de A à B est la longueur \\(AB\\). Le <b>milieu</b> \\(M\\) de [AB] vérifie \\(MA = MB = AB \\div 2\\). La <b>médiatrice</b> de [AB] est la droite perpendiculaire à [AB] en son milieu, c'est-à-dire l'ensemble des points tels que \\(MA = MB\\) ; on la construit au compas avec deux paires d'arcs de même rayon depuis A et B.</p></div>
`,fiche:[["d","<b>Distance</b> AB = longueur du plus court chemin entre A et B."],["M","<b>Milieu</b> de [AB] : point M avec M ∈ [AB] et MA = MB = AB÷2."],["⊥","<b>Médiatrice</b> : droite ⊥ à [AB] passant par son milieu."],["=","<b>Propriété</b> : M sur la médiatrice ⟺ MA = MB (points équidistants)."],["✎","Se construit au compas (2 paires d'arcs de même rayon depuis A et B)."],["⚠","Milieu = un point ; médiatrice = une droite. À ne pas confondre."]],qcm:[{t:"num",q:"M est le milieu de [AB] avec AB = 9 cm. Combien mesure MA ?",a:4.5,tol:.01,unit:"cm",ex:"MA = AB ÷ 2 = 9 ÷ 2 = 4,5 cm."},{t:"qcm",q:"La médiatrice d'un segment [AB] est :",choices:["un point au milieu","une droite ⊥ passant par le milieu","le segment lui-même","une demi-droite"],a:1,ex:"C'est la droite perpendiculaire à [AB] qui passe par son milieu."},{t:"vf",q:"Si un point M vérifie MA = MB, alors M est sur la médiatrice de [AB].",a:!0,ex:"Vrai : la médiatrice est exactement l'ensemble des points équidistants de A et B."},{t:"num",q:"M milieu de [AB], et MA = 6,5 cm. Combien mesure AB ?",a:13,tol:.01,unit:"cm",ex:"AB = 2 × MA = 2 × 6,5 = 13 cm."},{t:"vf",q:"La médiatrice de [AB] est perpendiculaire à [AB].",a:!0,ex:"Vrai, c'est dans sa définition : perpendiculaire ET passant par le milieu."}],exos:[{titre:"Milieu et longueurs",niv:"Application",n:8,desc:"Calculer MA, MB, AB à partir du milieu."},{titre:"Construire une médiatrice",niv:"Construction",n:5,desc:"Tracé au compas, pas à pas."},{titre:"Points équidistants",niv:"Réflexion",n:6,desc:"Utiliser la propriété MA = MB pour raisonner."}]},i={id:"cercle",titre:"Le cercle et le disque",sous:"Centre, rayon, diamètre, corde et arc.",dom:"",cours:`
<h2 class="chap-intro">Une roue, une horloge, une pièce de monnaie : le cercle est partout. On le trace d'un seul geste avec un <b>compas</b>, dont la pointe marque le centre et l'écartement fixe le rayon. Tout part de cette idée : rester toujours à la <b>même distance</b> d'un point.</h2>

<h3><span class="n">1</span>Le vocabulaire du cercle</h3>
<p>Un <span class="kw">cercle</span> de centre O est l'ensemble de <b>tous les points situés à la même distance de O</b>. Cette distance commune, c'est le <span class="kw">rayon</span>.</p>
<div class="figbox"><svg viewBox="0 0 460 240">
  <circle cx="230" cy="120" r="95" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2.4"/>
  <circle cx="230" cy="120" r="4.5" class="pt-dot"/><text x="236" y="135" class="pt-label">O</text>
  <line x1="230" y1="120" x2="325" y2="120" class="seg-a"/><text x="268" y="112" class="pt-label" fill="#1B4FCB">rayon</text>
  <line x1="135" y1="120" x2="325" y2="120" class="dash" stroke="#F2A100" stroke-width="2"/><text x="150" y="112" class="pt-label" fill="#B77800">diamètre</text>
  <line x1="175" y1="42" x2="305" y2="55" stroke="#15233F" stroke-width="2"/><text x="220" y="40" class="pt-label">corde</text>
  <circle cx="325" cy="120" r="4" class="pt-dot"/><text x="332" y="123" class="pt-label">A</text>
</svg><figcaption>Cercle de centre O : rayon, diamètre, corde</figcaption></div>
<div class="box def"><span class="lab">Vocabulaire</span><p>Le <b>centre</b> O est le point d'où tout part. Le <span class="kw">rayon</span> relie le centre à un point du cercle. Une <span class="kw">corde</span> relie deux points du cercle. Un <span class="kw">diamètre</span> est une corde qui passe par le centre. Un <span class="kw">arc</span> est un morceau du cercle.</p></div>

<h3><span class="n">2</span>Rayon et diamètre</h3>
<p>Un diamètre est fait de <b>deux rayons</b> alignés : il traverse le cercle en passant par le centre. C'est aussi la <b>plus longue corde</b> possible.</p>
<div class="box prop"><span class="lab">Propriété</span><p>\\(\\text{diamètre} = 2\\times\\text{rayon}\\qquad\\text{rayon}=\\text{diamètre}\\div 2\\)</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Un cercle de rayon <span class="num">3</span> cm a pour diamètre \\(2\\times 3 = 6\\) cm. Un cercle de diamètre <span class="num">10</span> cm a pour rayon \\(10\\div 2 = 5\\) cm.</p></div>

<h3><span class="n">3</span>Cercle et disque</h3>
<p>Deux mots proches, à ne pas confondre :</p>
<ul>
<li>le <span class="kw">cercle</span> est seulement le <b>bord</b>, le trait rond ;</li>
<li>le <span class="kw">disque</span> est le <b>cercle plus tout l'intérieur</b>, la surface pleine.</li>
</ul>
<div class="box attention"><span class="lab">Attention</span><p>On <mark>trace un cercle</mark> (une ligne), mais on <mark>colorie un disque</mark> (une surface). Une pièce de monnaie est un disque ; son bord est un cercle.</p></div>

<h3><span class="n">4</span>Où se trouve un point ?</h3>
<p>Pour un point M et un cercle de centre O et de rayon r, on compare la distance OM au rayon r.</p>
<div class="box methode"><span class="lab">Méthode</span><p>On mesure OM, puis on regarde :</p>
<ol class="demo-steps">
<li>si \\(OM &lt; r\\), le point M est <b>à l'intérieur</b> du cercle ;</li>
<li>si \\(OM = r\\), le point M est <b>sur</b> le cercle ;</li>
<li>si \\(OM &gt; r\\), le point M est <b>à l'extérieur</b> du cercle.</li>
</ol></div>

<h3><span class="n">5</span>Tracer au compas</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour tracer un cercle de centre O et de rayon 3 cm :</p>
<ol class="demo-steps">
<li>on écarte le compas de <span class="num">3</span> cm à l'aide d'une règle ;</li>
<li>on pique la <b>pointe</b> sur le centre O ;</li>
<li>on fait tourner le crayon d'un tour complet sans changer l'écartement.</li>
</ol></div>
<p>Avec le même écartement, on peut aussi <b>reporter une longueur</b> : le compas garde le rayon en mémoire.</p>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <span class="kw">cercle</span> regroupe les points à la <b>même distance</b> (le <span class="kw">rayon</span>) du centre. Le <span class="kw">diamètre</span> vaut \\(2\\times\\text{rayon}\\) et c'est la plus longue <span class="kw">corde</span>. Le cercle est le <b>bord</b>, le disque est la <b>surface</b>. On compare \\(OM\\) à \\(r\\) pour situer un point, et on trace tout au <b>compas</b>.</p></div>
`,fiche:[["O","<b>Centre</b> : tous les points du cercle sont à la même distance de O."],["r","<b>Rayon</b> : distance du centre à un point du cercle."],["D","<b>Diamètre</b> = 2 × rayon (la plus longue corde, passe par O)."],["—","<b>Corde</b> : segment entre deux points du cercle. <b>Arc</b> : un morceau du cercle."],["○","<b>Cercle</b> = le bord seul. <b>Disque</b> = bord + intérieur."],["?","Point M : OM &lt; r intérieur, OM = r sur le cercle, OM &gt; r extérieur."]],qcm:[{t:"num",q:"Un cercle a un rayon de 7 cm. Quel est son diamètre ?",a:14,tol:.01,unit:"cm",ex:"Diamètre = 2 × rayon = 2 × 7 = 14 cm."},{t:"num",q:"Un cercle a un diamètre de 18 cm. Quel est son rayon ?",a:9,tol:.01,unit:"cm",ex:"Rayon = diamètre ÷ 2 = 18 ÷ 2 = 9 cm."},{t:"qcm",q:"La partie pleine (le bord ET l'intérieur) s'appelle :",choices:["le cercle","le disque","la corde","l'arc"],a:1,ex:"Le disque comprend le bord (cercle) et toute la surface intérieure."},{t:"qcm",q:"La plus longue corde d'un cercle est :",choices:["le rayon","un arc","le diamètre","une tangente"],a:2,ex:"Le diamètre est la plus longue corde car il passe par le centre."},{t:"vf",q:"Un point M tel que OM = r (le rayon) se trouve exactement sur le cercle.",a:!0,ex:"Vrai : le cercle est l'ensemble des points situés à la distance r du centre."}],exos:[{titre:"Vocabulaire du cercle",niv:"Application",n:7,desc:"Nommer rayon, diamètre, corde, arc sur une figure."},{titre:"Rayon ↔ diamètre",niv:"Calcul",n:8,desc:"Passer du rayon au diamètre et inversement."},{titre:"Constructions au compas",niv:"Construction",n:6,desc:"Tracer cercles, cordes et reporter des longueurs."}]},l={id:"angles",titre:"Les angles : nommer, mesurer, tracer",sous:"Aigu, droit, obtus, plat — et le rapporteur.",dom:"",cours:`
<h2 class="chap-intro">Deux demi-droites qui partent d'un même point : voilà un <b>angle</b>. Selon leur écartement, il est petit, grand, tout ouvert… Pour le décrire précisément, on lui donne un nom et une mesure en <b>degrés</b>, lue au <b>rapporteur</b>.</h2>

<h3><span class="n">1</span>Qu'est-ce qu'un angle ?</h3>
<p>Un <span class="kw">angle</span> est formé par <b>deux demi-droites de même origine</b>. Cette origine est le <span class="kw">sommet</span> de l'angle, et les deux demi-droites en sont les <b>côtés</b>. L'angle mesure « l'écartement » entre les deux côtés.</p>
<div class="box def"><span class="lab">Notation</span><p>On nomme un angle avec <b>trois lettres</b>, la lettre du sommet <b>au milieu</b>, surmontées d'un chapeau : <span class="notation">ABC&#770;</span>. Ici le sommet est le point <mark>B</mark>, et les côtés passent par A et C.</p></div>

<h3><span class="n">2</span>Mesurer avec le rapporteur</h3>
<p>On mesure un angle en <span class="kw">degrés</span> (symbole °) à l'aide d'un <b>rapporteur</b>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour mesurer un angle au rapporteur :</p>
<ol class="demo-steps">
<li>On place le <b>centre</b> du rapporteur sur le <b>sommet</b> de l'angle.</li>
<li>On aligne le <b>0</b> d'une graduation sur l'un des côtés.</li>
<li>On lit la mesure là où passe l'<b>autre côté</b>, en suivant la même graduation.</li>
</ol></div>
<div class="box attention"><span class="lab">Piège des deux graduations</span><p>Le rapporteur porte <b>deux graduations</b> (0→180 et 180→0). Pars toujours du 0 du côté choisi. Vérifie le résultat à l'œil : un angle qui « a l'air » aigu doit avoir une mesure <b>inférieure à 90°</b>, pas 150° !</p></div>

<h3><span class="n">3</span>Les types d'angles</h3>
<p>On classe les angles d'après leur mesure : <span class="kw">aigu</span>, <span class="kw">droit</span>, <span class="kw">obtus</span> ou <span class="kw">plat</span>.</p>
<div class="figbox"><svg viewBox="0 0 480 160">
  <g transform="translate(20,10)">
    <line x1="0" y1="120" x2="80" y2="120" class="seg"/><line x1="0" y1="120" x2="55" y2="55" class="seg"/>
    <path d="M35 120 A35 35 0 0 0 24 96" class="arc"/><text x="20" y="150" class="pt-label">aigu &lt;90°</text>
  </g>
  <g transform="translate(140,10)">
    <line x1="0" y1="120" x2="80" y2="120" class="seg"/><line x1="0" y1="120" x2="0" y2="45" class="seg"/>
    <path d="M0 100 L20 100 L20 120" fill="none" stroke="#15233F" stroke-width="1.5"/><text x="14" y="150" class="pt-label">droit 90°</text>
  </g>
  <g transform="translate(255,10)">
    <line x1="0" y1="120" x2="80" y2="120" class="seg"/><line x1="0" y1="120" x2="-25" y2="55" class="seg"/>
    <path d="M35 120 A35 35 0 0 0 -12 106" class="arc"/><text x="0" y="150" class="pt-label">obtus &gt;90°</text>
  </g>
  <g transform="translate(370,10)">
    <line x1="-40" y1="120" x2="80" y2="120" class="seg"/>
    <path d="M25 120 A25 25 0 0 0 -25 120" class="arc"/><text x="-8" y="150" class="pt-label">plat 180°</text>
  </g>
</svg><figcaption>Les quatre types d'angles selon leur mesure</figcaption></div>
<table>
<tr><th>Type d'angle</th><th>Mesure</th></tr>
<tr><td>Nul</td><td>0°</td></tr>
<tr><td><span class="kw">Aigu</span></td><td>entre 0° et 90°</td></tr>
<tr><td><span class="kw">Droit</span></td><td>exactement 90°</td></tr>
<tr><td><span class="kw">Obtus</span></td><td>entre 90° et 180°</td></tr>
<tr><td><span class="kw">Plat</span></td><td>180°</td></tr>
</table>

<h3><span class="n">4</span>La bissectrice</h3>
<p>La <span class="kw">bissectrice</span> d'un angle est la demi-droite issue du <b>sommet</b> qui <b>partage l'angle en deux angles égaux</b>.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>La bissectrice d'un angle de <span class="num">80</span>° le partage en deux angles de :</p>
<ol class="demo-steps">
<li>On divise la mesure en deux parts égales : 80 ÷ 2.</li>
<li>Chacun des deux angles mesure donc <mark>40°</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>angle</b> = deux demi-droites de même <b>sommet</b> ; on le note avec trois lettres, sommet au milieu (ABC&#770;). On le mesure en <b>degrés</b> au rapporteur (centre sur le sommet, 0 sur un côté). Selon la mesure : <span class="kw">aigu</span> &lt; 90°, <span class="kw">droit</span> = 90°, <span class="kw">obtus</span> entre 90° et 180°, <span class="kw">plat</span> = 180°. La <b>bissectrice</b> coupe l'angle en deux angles égaux.</p></div>
`,fiche:[["∠","Un <b>angle</b> = deux demi-droites de même origine (le sommet)."],["Â","<b>Notation</b> : 3 lettres, sommet au milieu, avec un chapeau (ABC&#770;)."],["°","On mesure en <b>degrés</b> au rapporteur (centre sur le sommet)."],["◺","<b>Aigu</b> &lt;90° · <b>Droit</b> =90° · <b>Obtus</b> entre 90° et 180° · <b>Plat</b> =180°."],["½","<b>Bissectrice</b> : coupe l'angle en deux angles égaux."],["⚠","Rapporteur : bien choisir la graduation (aigu &lt; 90°)."]],qcm:[{t:"qcm",q:"Un angle qui mesure 90° est un angle :",choices:["aigu","droit","obtus","plat"],a:1,ex:"Exactement 90° = angle droit."},{t:"qcm",q:"Un angle de 130° est :",choices:["aigu","droit","obtus","plat"],a:2,ex:"130° est entre 90° et 180° : c'est un angle obtus."},{t:"num",q:"La bissectrice partage un angle de 80° en deux angles de … degrés.",a:40,tol:.01,unit:"°",ex:"La bissectrice divise en deux parts égales : 80 ÷ 2 = 40°."},{t:"vf",q:"Dans la notation ABC&#770;, le sommet de l'angle est le point A.",a:!1,ex:"Faux : le sommet est la lettre du MILIEU, donc le point B."},{t:"qcm",q:"Un angle plat mesure :",choices:["0°","90°","180°","360°"],a:2,ex:"Un angle plat mesure 180° : les deux demi-droites sont alignées."}],exos:[{titre:"Lire le rapporteur",niv:"Application",n:8,desc:"Mesurer des angles donnés et éviter le piège de graduation."},{titre:"Classer les angles",niv:"Application",n:6,desc:"Aigu / droit / obtus / plat selon la mesure."},{titre:"Construire un angle",niv:"Construction",n:6,desc:"Tracer un angle de mesure donnée et sa bissectrice."}]},r={id:"symetrie-axiale",titre:"La symétrie axiale",sous:"Le reflet dans un miroir : l'axe de symétrie.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Poser un miroir sur une droite, c'est ce que fait la <span class="kw">symétrie axiale</span> : chaque point a un reflet exact de l'autre côté de la droite. Cette droite, l'<span class="kw">axe</span>, garde tout — les longueurs, les angles, les aires — et ne change que le sens de la figure.</h2>

<h3><span class="n">1</span>Idée générale</h3>
<p>La <span class="kw">symétrie axiale</span> transforme une figure en son <b>reflet</b> par rapport à une droite appelée <span class="kw">axe de symétrie</span>. C'est exactement l'effet d'un miroir posé sur l'axe : la figure et son image se font face de part et d'autre de la droite.</p>

<h3><span class="n">2</span>Symétrique d'un point</h3>
<div class="box def"><span class="lab">Définition</span><p>Le point A' est le <span class="kw">symétrique</span> de A par rapport à l'axe \\((d)\\) lorsque \\((d)\\) est la <span class="kw">médiatrice</span> du segment [AA'].</p></div>
<div class="box prop"><span class="lab">Concrètement</span><p>Dire que \\((d)\\) est la <span class="kw">médiatrice</span> de [AA'] signifie deux choses à la fois : la droite \\((d)\\) est <b>perpendiculaire</b> à [AA'], et elle passe par le <b>milieu</b> de [AA'] — donc A et A' sont à la <b>même distance</b> de \\((d)\\).</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <line x1="230" y1="15" x2="230" y2="190" class="seg-a"/><text x="238" y="30" class="pt-label" fill="#1B4FCB">(d)</text>
  <line x1="130" y1="70" x2="330" y2="70" class="dash" stroke="#F2A100" stroke-width="1.6"/>
  <circle cx="130" cy="70" r="5" class="pt-dot"/><text x="118" y="60" class="pt-label">A</text>
  <circle cx="330" cy="70" r="5" class="pt-dot"/><text x="338" y="60" class="pt-label">A'</text>
  <circle cx="230" cy="70" r="3.5" class="pt-dot"/>
  <path d="M230 55 L245 55 L245 70" fill="none" stroke="#15233F" stroke-width="1.4"/>
  <path d="M175 82 l5 -5 M181 88 l5 -5" stroke="#F2A100" stroke-width="2"/>
  <path d="M275 82 l5 -5 M281 88 l5 -5" stroke="#F2A100" stroke-width="2"/>
</svg><figcaption>(d) est la médiatrice de [AA'] : A' est le symétrique de A</figcaption></div>

<h3><span class="n">3</span>Construire le symétrique d'un point</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour placer le symétrique A' d'un point A par rapport à l'axe \\((d)\\) :</p>
<ol class="demo-steps">
<li>Depuis A, trace la <b>perpendiculaire</b> à l'axe \\((d)\\).</li>
<li>Mesure la <b>distance</b> entre A et l'axe, sur cette perpendiculaire.</li>
<li><b>Reporte</b> la même distance de l'autre côté de l'axe : tu obtiens A'.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Si le point est <b>sur</b> l'axe, il est son propre symétrique : il ne bouge pas. On dit qu'il est <b>invariant</b>.</p></div>

<h3><span class="n">4</span>Propriétés : ce que la symétrie conserve</h3>
<p>La symétrie axiale <b>conserve tout</b> sauf le sens : elle « retourne » la figure comme dans un miroir.</p>
<div class="box prop"><span class="lab">Conservation</span><p>Les <b>longueurs</b>, les <b>angles</b>, les <b>aires</b>, le <b>parallélisme</b>, l'<b>alignement</b> et le <b>milieu</b> sont conservés. Une figure et son symétrique sont <b>superposables</b>.</p></div>
<table>
<tr><th>Grandeur</th><th>Conservée ?</th></tr>
<tr><td>Longueur d'un segment</td><td>oui</td></tr>
<tr><td>Mesure d'un angle</td><td>oui</td></tr>
<tr><td>Aire d'une figure</td><td>oui</td></tr>
<tr><td>Alignement, milieu</td><td>oui</td></tr>
<tr><td>Sens (gauche / droite)</td><td>non (inversé)</td></tr>
</table>

<h3><span class="n">5</span>Axes de symétrie des figures usuelles</h3>
<p>Une figure peut avoir un ou plusieurs <span class="kw">axes de symétrie</span> — parfois aucun, parfois une infinité.</p>
<div class="box exemple"><span class="lab">Exemple</span>
<ul>
<li>Le <b>segment</b> : sa médiatrice — 1 axe.</li>
<li>Le <b>rectangle</b> : les 2 médiatrices de ses côtés — 2 axes.</li>
<li>Le <b>losange</b> : ses 2 diagonales — 2 axes.</li>
<li>Le <b>carré</b> : les 2 médiatrices des côtés et les 2 diagonales — 4 axes.</li>
<li>Le <b>triangle équilatéral</b> : 3 axes.</li>
<li>Le <b>cercle</b> : toute droite passant par le centre — une <b>infinité</b> d'axes.</li>
</ul></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>A' est le <span class="kw">symétrique</span> de A par rapport à \\((d)\\) quand \\((d)\\) est la <span class="kw">médiatrice</span> de [AA'] : perpendiculaire à [AA'] et passant par son milieu. La symétrie axiale <b>conserve</b> longueurs, angles, aires, alignement et milieu, mais inverse le sens. Nombre d'axes : carré 4, rectangle et losange 2, triangle équilatéral 3, cercle une infinité.</p></div>
`,fiche:[["↔","<b>Symétrie axiale</b> = reflet par rapport à un axe (miroir)."],["(d)","A' symétrique de A ⟺ (d) est la <b>médiatrice</b> de [AA']."],["=","(d) est ⊥ à [AA'] et passe par son milieu (A et A' équidistants de l'axe)."],["✓","<b>Conserve</b> longueurs, angles, aires, alignement, parallélisme, milieu."],["▢","Carré : 4 axes · Rectangle/losange : 2 · Triangle équilatéral : 3 · Cercle : ∞."],["✎","Construction : perpendiculaire à l'axe + report de la même distance."]],qcm:[{t:"qcm",q:"A' est le symétrique de A par rapport à (d) quand (d) est :",choices:["parallèle à [AA']","la médiatrice de [AA']","le milieu de [AA']","une bissectrice"],a:1,ex:"Par définition, l'axe (d) est la médiatrice du segment [AA']."},{t:"num",q:"Combien d'axes de symétrie possède un carré ?",a:4,tol:.01,unit:"axes",ex:"Le carré a 4 axes : les 2 médiatrices des côtés et les 2 diagonales."},{t:"vf",q:"La symétrie axiale conserve les longueurs et les angles.",a:!0,ex:"Vrai : une figure et son symétrique sont superposables ; tout est conservé sauf le sens."},{t:"num",q:"Combien d'axes de symétrie a un rectangle (non carré) ?",a:2,tol:.01,unit:"axes",ex:"Le rectangle a 2 axes : les médiatrices de ses côtés. (Ses diagonales ne sont pas des axes.)"},{t:"qcm",q:"Combien un cercle possède-t-il d'axes de symétrie ?",choices:["1","2","4","une infinité"],a:3,ex:"Toute droite passant par le centre est un axe : il y en a une infinité."}],exos:[{titre:"Construire un symétrique",niv:"Construction",n:6,desc:"Symétrique de points et de figures par rapport à un axe."},{titre:"Axes de symétrie",niv:"Application",n:8,desc:"Trouver et compter les axes des figures usuelles."},{titre:"Propriétés de conservation",niv:"Réflexion",n:6,desc:"Utiliser la conservation pour trouver longueurs et angles."}]},o={id:"figures-usuelles",titre:"Triangles et quadrilatères usuels",sous:"Reconnaître, coder et décrire les figures de base.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Un triangle a trois côtés, un quadrilatère en a quatre. Parmi eux, quelques figures reviennent partout : le triangle <b>isocèle</b>, le <b>carré</b>, le <b>rectangle</b>… On apprend ici à les reconnaître, à lire leur <b>codage</b> et à décrire leurs propriétés.</h2>

<h3><span class="n">1</span>Les triangles particuliers</h3>
<div class="box def"><span class="lab">Trois cas</span><p><b>Isocèle</b> : deux côtés de même longueur (et deux angles égaux). · <b>Équilatéral</b> : trois côtés égaux (et trois angles de 60°). · <b>Rectangle</b> : un angle droit.</p></div>
<div class="figbox"><svg viewBox="0 0 480 170">
  <g transform="translate(10,10)">
    <path d="M20 130 L120 130 L70 30 Z" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M42 90 l6 3 M62 55 l6 3" stroke="#F2A100" stroke-width="2"/>
    <path d="M98 90 l-6 3 M78 55 l-6 3" stroke="#F2A100" stroke-width="2"/>
    <text x="45" y="160" class="pt-label">isocèle</text>
  </g>
  <g transform="translate(170,10)">
    <path d="M20 130 L120 130 L70 43 Z" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M40 95 l6 3 M60 60 l6 3" stroke="#F2A100" stroke-width="2"/>
    <path d="M100 95 l-6 3 M80 60 l-6 3" stroke="#F2A100" stroke-width="2"/>
    <path d="M63 130 l6 0 M67 128 l0 4" stroke="#F2A100" stroke-width="2"/>
    <text x="35" y="160" class="pt-label">équilatéral</text>
  </g>
  <g transform="translate(330,10)">
    <path d="M20 130 L120 130 L20 40 Z" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M20 112 L38 112 L38 130" fill="none" stroke="#15233F" stroke-width="1.4"/>
    <text x="40" y="160" class="pt-label">rectangle</text>
  </g>
</svg><figcaption>Triangles isocèle, équilatéral et rectangle (avec codages)</figcaption></div>

<h3><span class="n">2</span>Les quadrilatères usuels</h3>
<div class="box def"><span class="lab">Définitions</span><p><b>Rectangle</b> : 4 angles droits. · <b>Losange</b> : 4 côtés de même longueur. · <b>Carré</b> : 4 angles droits ET 4 côtés égaux (rectangle + losange). · <b>Parallélogramme</b> : côtés opposés parallèles.</p></div>
<div class="box prop"><span class="lab">Familles</span><p>Le <mark>carré</mark> est à la fois un rectangle <b>et</b> un losange : il possède toutes leurs propriétés. Rectangle, losange et carré sont tous des <b>parallélogrammes</b> particuliers.</p></div>
<div class="figbox"><svg viewBox="0 0 480 150">
  <g transform="translate(10,15)">
    <rect x="15" y="30" width="110" height="70" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M15 48 L33 48 L33 30" fill="none" stroke="#15233F" stroke-width="1.3"/>
    <text x="35" y="130" class="pt-label">rectangle</text>
  </g>
  <g transform="translate(160,15)">
    <polygon points="70,25 120,65 70,105 20,65" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M43 47 l4 5 M43 83 l4 -5 M97 47 l-4 5 M97 83 l-4 -5" stroke="#F2A100" stroke-width="2"/>
    <text x="52" y="130" class="pt-label">losange</text>
  </g>
  <g transform="translate(320,15)">
    <rect x="35" y="30" width="72" height="72" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M35 48 L53 48 L53 30" fill="none" stroke="#15233F" stroke-width="1.3"/>
    <path d="M62 30 l5 0 M71 30 l5 0" stroke="#F2A100" stroke-width="2"/>
    <path d="M35 60 l0 5 M35 74 l0 5" stroke="#F2A100" stroke-width="2"/>
    <text x="55" y="130" class="pt-label">carré</text>
  </g>
</svg><figcaption>Rectangle, losange et carré avec leurs codages</figcaption></div>

<h3><span class="n">3</span>Le codage des figures</h3>
<p>Sur une figure, on <span class="kw">code</span> les informations pour ne pas avoir à tout écrire :</p>
<div class="box methode"><span class="lab">Les quatre codages</span>
<ul>
<li>petits traits identiques (|, ||) = <b>longueurs égales</b> ;</li>
<li>petit carré ⌐ = <b>angle droit</b> ;</li>
<li>arcs identiques = <b>angles égaux</b> ;</li>
<li>flèches identiques &gt; = <b>droites parallèles</b>.</li>
</ul></div>
<div class="box attention"><span class="lab">Attention</span><p>Deux longueurs ne sont égales que si elles portent le <b>même</b> codage. Sans codage ni mesure, on ne peut rien affirmer : on ne se fie <b>jamais</b> à l'allure du dessin.</p></div>

<h3><span class="n">4</span>Diagonales</h3>
<div class="box prop"><span class="lab">À connaître</span><p><b>Rectangle</b> : diagonales de même longueur, se coupent en leur milieu. · <b>Losange</b> : diagonales perpendiculaires, se coupent en leur milieu. · <b>Carré</b> : les deux à la fois (égales, perpendiculaires, milieu commun).</p></div>
<p>On peut résumer les propriétés des quadrilatères usuels dans un tableau :</p>
<table>
<tr><th>Figure</th><th>Côtés</th><th>Angles</th><th>Diagonales</th></tr>
<tr><td>Rectangle</td><td>opposés égaux et parallèles</td><td>4 angles droits</td><td>égales, milieu commun</td></tr>
<tr><td>Losange</td><td>4 côtés égaux</td><td>opposés égaux</td><td>perpendiculaires, milieu commun</td></tr>
<tr><td>Carré</td><td>4 côtés égaux</td><td>4 angles droits</td><td>égales, perpendiculaires, milieu commun</td></tr>
<tr><td>Parallélogramme</td><td>opposés égaux et parallèles</td><td>opposés égaux</td><td>milieu commun</td></tr>
</table>

<div class="box cle recap"><span class="lab">À retenir</span><p>Les triangles se distinguent par leurs <b>côtés</b> (isocèle : 2 égaux ; équilatéral : 3 égaux et angles de 60°) ou un <b>angle droit</b> (rectangle). Chez les quadrilatères, le <b>carré</b> réunit rectangle (angles droits) et losange (côtés égaux). Le <b>codage</b> (traits, angle droit, arcs, flèches) dit tout : on lit la figure, on ne devine pas.</p></div>
`,fiche:[["△","<b>Isocèle</b> : 2 côtés égaux · <b>Équilatéral</b> : 3 côtés égaux (angles 60°) · <b>Rectangle</b> : un angle droit."],["▭","<b>Rectangle</b> : 4 angles droits."],["◇","<b>Losange</b> : 4 côtés égaux."],["◻","<b>Carré</b> : rectangle + losange (4 angles droits + 4 côtés égaux)."],["▱","<b>Parallélogramme</b> : côtés opposés parallèles."],["✎","Codage : traits = longueurs égales · ⌐ = angle droit · flèches = parallèles."]],qcm:[{t:"qcm",q:"Un triangle qui a trois côtés de même longueur est :",choices:["isocèle","équilatéral","rectangle","quelconque"],a:1,ex:"Trois côtés égaux = équilatéral (ses trois angles valent alors 60°)."},{t:"qcm",q:"Un quadrilatère qui a 4 angles droits ET 4 côtés égaux est un :",choices:["rectangle","losange","carré","trapèze"],a:2,ex:"C'est le carré : à la fois rectangle (angles droits) et losange (côtés égaux)."},{t:"vf",q:"Dans un losange, les diagonales sont perpendiculaires.",a:!0,ex:"Vrai : les diagonales d'un losange sont perpendiculaires et se coupent en leur milieu."},{t:"qcm",q:"Un triangle isocèle possède :",choices:["3 côtés égaux","2 côtés égaux","un angle droit","aucun côté égal"],a:1,ex:"Isocèle = exactement deux côtés de même longueur (et deux angles égaux)."},{t:"vf",q:"Un carré est un cas particulier de rectangle.",a:!0,ex:"Vrai : un carré a 4 angles droits, c'est donc un rectangle (particulier, avec côtés égaux)."}],exos:[{titre:"Reconnaître les figures",niv:"Application",n:8,desc:"Identifier triangles et quadrilatères d'après le codage."},{titre:"Coder une figure",niv:"Application",n:6,desc:"Placer les codages (traits, angles droits, flèches)."},{titre:"Propriétés des diagonales",niv:"Réflexion",n:6,desc:"Raisonner sur les diagonales des quadrilatères."}]},c={id:"perimetres-aires",titre:"Périmètres et aires",sous:"Mesurer le tour et la surface des figures.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Une figure a deux mesures bien distinctes : le <b>périmètre</b>, la longueur du tour que l'on parcourt en suivant son contour, et l'<b>aire</b>, la surface que l'on recouvre à l'intérieur. Confondre les deux est l'erreur la plus fréquente : l'une se compte en cm, l'autre en cm².</h2>

<h3><span class="n">1</span>Le périmètre</h3>
<p>Le <span class="kw">périmètre</span> d'une figure est la <b>longueur de son contour</b> : le tour complet. On l'obtient en additionnant les longueurs de tous les côtés. Il se mesure en unités de <b>longueur</b> (mm, cm, m…).</p>
<div class="box def"><span class="lab">Définition</span><p>Le <span class="kw">périmètre</span> est la longueur totale du bord d'une figure. Pour un polygone, c'est la somme des longueurs de tous ses côtés.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Périmètre d'un rectangle de longueur \\(L = 8\\text{ cm}\\) et de largeur \\(l = 5\\text{ cm}\\) :</p>
<ol class="demo-steps">
<li>On additionne les deux longueurs et les deux largeurs : \\(8 + 5 + 8 + 5\\).</li>
<li>Plus rapide, on double la somme \\(L + l\\) : <mark>\\(P = 2\\times(L+l) = 2\\times 13 = 26\\text{ cm}\\)</mark>.</li>
</ol></div>

<h3><span class="n">2</span>La circonférence du cercle</h3>
<p>Le tour d'un cercle porte un nom particulier : la <span class="kw">circonférence</span>. On la calcule avec le nombre \\(\\pi\\) (« pi »), qui vaut environ <span class="num">3,14</span>. Si \\(r\\) est le rayon et \\(D = 2r\\) le diamètre :</p>
<div class="box prop"><span class="lab">Propriété</span><p>La circonférence d'un cercle est : <mark>\\(P = 2\\pi r = \\pi D\\)</mark>.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>On multiplie par le <b>rayon</b> dans \\(2\\pi r\\), mais par le <b>diamètre</b> dans \\(\\pi D\\). Comme \\(D = 2r\\), les deux formules donnent bien le même résultat — ne pas les mélanger !</p></div>

<h3><span class="n">3</span>L'aire</h3>
<p>L'<span class="kw">aire</span> mesure la <b>surface</b> occupée par une figure, c'est-à-dire son intérieur. Elle se mesure en unités <b>carrées</b> (mm², cm², m²…) : on compte combien de petits carrés d'un côté remplissent la figure.</p>
<div class="box def"><span class="lab">Formules d'aires</span><p>Les aires des figures usuelles (\\(c\\) = côté, \\(L\\) = longueur, \\(l\\) = largeur, \\(b\\) = base, \\(h\\) = hauteur, \\(r\\) = rayon) :</p>
<ol class="demo-steps">
<li><b>Carré</b> : \\(A = c\\times c = c^2\\).</li>
<li><b>Rectangle</b> : \\(A = L\\times l\\).</li>
<li><b>Triangle</b> : \\(A = \\dfrac{b\\times h}{2}\\).</li>
<li><b>Disque</b> : <mark>\\(A = \\pi r^2\\)</mark>.</li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 460 160">
  <g transform="translate(20,20)">
    <rect x="0" y="20" width="140" height="90" fill="rgba(47,107,237,.06)" stroke="#2F6BED" stroke-width="2"/>
    <text x="55" y="70" class="pt-label">L × l</text>
    <text x="55" y="130" class="pt-label" fill="#1B4FCB">rectangle</text>
  </g>
  <g transform="translate(230,20)">
    <path d="M0 110 L150 110 L100 20 Z" fill="rgba(242,161,0,.09)" stroke="#F2A100" stroke-width="2"/>
    <line x1="100" y1="20" x2="100" y2="110" class="dash" stroke="#15233F" stroke-width="1.4"/>
    <text x="105" y="70" class="pt-label">h</text>
    <text x="30" y="130" class="pt-label" fill="#B77800">(base × h) ÷ 2</text>
  </g>
</svg><figcaption>Aire du rectangle et aire du triangle (avec sa hauteur)</figcaption></div>
<div class="box attention"><span class="lab">Attention</span><p>La <span class="kw">hauteur</span> d'un triangle doit être <b>perpendiculaire</b> à la base choisie : c'est la distance du sommet opposé à cette base, pas la longueur d'un côté.</p></div>

<h3><span class="n">4</span>Ne pas confondre périmètre et aire</h3>
<div class="box attention"><span class="lab">Distinction essentielle</span><p>Le <b>périmètre</b> est une longueur (le tour, en cm). L'<b>aire</b> est une surface (l'intérieur, en cm²). Deux figures peuvent avoir le <b>même périmètre</b> mais des <b>aires différentes</b> !</p>
<ol class="demo-steps">
<li>Carré \\(4\\times 4\\) : \\(P = 16\\text{ cm}\\) et \\(A = 16\\text{ cm}^2\\).</li>
<li>Rectangle \\(6\\times 2\\) : \\(P = 16\\text{ cm}\\) aussi, mais \\(A = 12\\text{ cm}^2\\).</li>
</ol></div>

<h3><span class="n">5</span>Le tableau des formules</h3>
<table>
<tr><th>Figure</th><th>Périmètre</th><th>Aire</th></tr>
<tr><td>Carré</td><td>\\(4c\\)</td><td>\\(c^2\\)</td></tr>
<tr><td>Rectangle</td><td>\\(2(L+l)\\)</td><td>\\(L\\times l\\)</td></tr>
<tr><td>Triangle</td><td>somme des côtés</td><td>\\(\\dfrac{b\\times h}{2}\\)</td></tr>
<tr><td>Cercle / disque</td><td>\\(2\\pi r=\\pi D\\)</td><td>\\(\\pi r^2\\)</td></tr>
</table>

<h3><span class="n">6</span>Attention aux unités</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Avant tout calcul :</p>
<ol class="demo-steps">
<li>On met toutes les longueurs dans la <b>même unité</b>.</li>
<li>Un périmètre garde cette unité (cm) ; une aire l'élève au carré (cm²).</li>
<li>Pour convertir une aire, on multiplie deux longueurs : <mark>\\(1\\text{ m}^2 = 10\\,000\\text{ cm}^2\\)</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Le <b>périmètre</b> est le tour (en cm) ; l'<b>aire</b> est la surface (en cm²). Carré : \\(P=4c\\), \\(A=c^2\\). Rectangle : \\(P=2(L+l)\\), \\(A=L\\times l\\). Triangle : \\(A=\\tfrac{b\\times h}{2}\\). Cercle : \\(P=2\\pi r\\), disque : \\(A=\\pi r^2\\). Même unité avant de calculer, et ne jamais confondre longueur et surface.</p></div>
`,fiche:[["P","<b>Périmètre</b> = longueur du contour (en cm, m…)."],["▭","Rectangle : P = 2(L+l) et A = L × l."],["◻","Carré : P = 4c et A = c²."],["△","Triangle : A = (base × hauteur) ÷ 2."],["○","Cercle : P = 2πr = πD · Disque : A = πr²."],["⚠","Périmètre en cm, aire en cm². Ne jamais les confondre !"]],qcm:[{t:"num",q:"Un rectangle mesure 8 cm sur 5 cm. Quel est son périmètre ?",a:26,tol:.01,unit:"cm",ex:"P = 2 × (8 + 5) = 2 × 13 = 26 cm."},{t:"num",q:"Un rectangle mesure 8 cm sur 5 cm. Quelle est son aire ?",a:40,tol:.01,unit:"cm²",ex:"A = L × l = 8 × 5 = 40 cm²."},{t:"num",q:"Un carré a un côté de 6 cm. Quelle est son aire ?",a:36,tol:.01,unit:"cm²",ex:"A = c² = 6 × 6 = 36 cm²."},{t:"num",q:"Un triangle a une base de 10 cm et une hauteur de 6 cm. Son aire ?",a:30,tol:.01,unit:"cm²",ex:"A = (base × hauteur) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm²."},{t:"vf",q:"Deux figures ayant le même périmètre ont forcément la même aire.",a:!1,ex:"Faux : un carré 4×4 et un rectangle 6×2 ont tous deux un périmètre de 16 cm, mais des aires de 16 cm² et 12 cm²."}],exos:[{titre:"Périmètres",niv:"Calcul",n:8,desc:"Calculer le tour de carrés, rectangles, triangles, cercles."},{titre:"Aires",niv:"Calcul",n:8,desc:"Appliquer les formules d'aire des figures usuelles."},{titre:"Problèmes concrets",niv:"Réflexion",n:6,desc:"Situations avec conversions et figures composées."}]},p={id:"solides-6e",titre:"Solides, patrons et perspective",sous:"Pavé droit, cube : faces, arêtes, sommets, patrons.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Une boîte de céréales, un dé, une canette : ce sont des <b>solides</b>, des objets de l'espace. Pour les décrire on compte leurs <b>faces</b>, leurs <b>arêtes</b> et leurs <b>sommets</b> ; pour les dessiner on utilise la <b>perspective cavalière</b> ; pour les fabriquer on trace leur <b>patron</b>.</h2>

<h3><span class="n">1</span>Les solides usuels</h3>
<p>Un <span class="kw">solide</span> est un objet de l'espace, limité par des <span class="kw">faces</span>. Les plus courants sont le <b>pavé droit</b> (ou parallélépipède rectangle, dont les faces sont des rectangles), le <b>cube</b> (un pavé dont toutes les arêtes sont égales, ses faces sont donc des carrés), le <b>prisme droit</b> et le <b>cylindre</b>.</p>
<div class="box def"><span class="lab">Vocabulaire</span><p>Trois mots décrivent un solide :</p>
<ul>
<li>une <span class="kw">face</span> est une surface plane (ou courbe pour le cylindre) qui limite le solide ;</li>
<li>une <span class="kw">arête</span> est le segment où deux faces se rencontrent ;</li>
<li>un <span class="kw">sommet</span> est un coin, un point où des arêtes se rejoignent.</li>
</ul></div>
<div class="figbox"><svg viewBox="0 0 460 230">
  <polygon points="70,200 250,200 250,80 70,80" fill="#EAF0FB" stroke="#2F6BED" stroke-width="2.4"/>
  <line x1="70" y1="80" x2="140" y2="35" class="seg-a"/><line x1="250" y1="80" x2="320" y2="35" class="seg-a"/>
  <line x1="250" y1="200" x2="320" y2="155" class="seg-a"/><line x1="140" y1="35" x2="320" y2="35" class="seg-a"/>
  <line x1="320" y1="35" x2="320" y2="155" class="seg-a"/>
  <line x1="70" y1="200" x2="140" y2="155" class="seg-a dash"/><line x1="140" y1="35" x2="140" y2="155" class="seg-a dash"/><line x1="140" y1="155" x2="320" y2="155" class="seg-a dash"/>
</svg><figcaption>Un cube en perspective cavalière : les arêtes cachées sont en pointillés</figcaption></div>
<p>On peut alors dénombrer les éléments des principaux <span class="kw">polyèdres</span> (solides à faces planes) :</p>
<table>
<tr><th>Solide</th><th>Faces</th><th>Arêtes</th><th>Sommets</th></tr>
<tr><td>Pavé droit</td><td>6 rectangles</td><td>12</td><td>8</td></tr>
<tr><td>Cube</td><td>6 carrés</td><td>12</td><td>8</td></tr>
<tr><td>Prisme droit (base triangle)</td><td>5</td><td>9</td><td>6</td></tr>
</table>
<div class="box attention"><span class="lab">Attention</span><p>Le <b>cylindre n'est pas un polyèdre</b> : il a <mark>2 disques</mark> (le dessus et le dessous) et une surface latérale courbée. On ne lui compte donc pas d'arêtes ni de sommets comme aux pavés.</p></div>

<h3><span class="n">2</span>La perspective cavalière</h3>
<p>La <span class="kw">perspective cavalière</span> est une façon de dessiner un solide de l'espace sur une feuille plane, en donnant l'impression du relief.</p>
<div class="box prop"><span class="lab">Règles de dessin</span>
<ol class="demo-steps">
<li>La <b>face avant</b> est dessinée en <b>vraie grandeur</b> (les rectangles restent des rectangles).</li>
<li>Les <b>arêtes fuyantes</b> (celles qui s'enfoncent vers l'arrière) sont <b>parallèles</b> entre elles et tracées avec le même angle, souvent <b>réduites</b>.</li>
<li>Les arêtes <b>cachées</b>, que l'on ne verrait pas de face, se tracent en <b>pointillés</b>.</li>
</ol></div>

<h3><span class="n">3</span>Le patron</h3>
<div class="box def"><span class="lab">Définition</span><p>Un <span class="kw">patron</span> est le dessin à plat qui, une fois découpé et plié, forme exactement le solide. Il montre toutes les faces à côté les unes des autres.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Quelques patrons usuels :</p>
<ul>
<li>le patron d'un <b>cube</b> est formé de <b>6 carrés</b> reliés (il existe 11 dispositions possibles) ;</li>
<li>le patron d'un <b>pavé droit</b> est formé de <b>6 rectangles</b> (les faces opposées sont identiques) ;</li>
<li>le patron d'un <b>cylindre</b> est formé de <b>2 disques</b> et d'un <b>rectangle</b> enroulé pour la surface latérale.</li>
</ul></div>

<h3><span class="n">4</span>Le volume du pavé droit</h3>
<p>Le <span class="kw">volume</span> mesure la place occupée dans l'espace. Pour un pavé droit, il se calcule à partir de ses trois dimensions.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Volume d'un pavé droit : \\(V = \\text{Longueur}\\times\\text{largeur}\\times\\text{hauteur}\\). Pour un cube d'arête \\(a\\), les trois dimensions sont égales : \\(V = a\\times a\\times a\\).</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Volume d'un cube d'arête <span class="num">3</span> cm :</p>
<ol class="demo-steps">
<li>Les trois dimensions valent 3 cm.</li>
<li>On multiplie : \\(V = 3\\times 3\\times 3\\).</li>
<li>On obtient <mark>V = 27 cm³</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Un volume s'exprime en unités de <b>cube</b> : <span class="kw">cm³</span>, dm³, m³. Ne pas confondre avec l'<b>aire</b> (en cm²) qui mesure une surface !</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un solide se décrit par ses <b>faces</b>, ses <b>arêtes</b> et ses <b>sommets</b> : le pavé droit et le cube en ont 6, 12 et 8. En <b>perspective cavalière</b>, la face avant est en vraie grandeur et les arêtes cachées sont en <b>pointillés</b>. Le <b>patron</b> est le dessin à plat qui, plié, forme le solide (cube = 6 carrés). Le volume du pavé vaut \\(V = L\\times l\\times h\\) et s'exprime en cm³.</p></div>
`,fiche:[["◱","<b>Pavé droit</b> : 6 faces, 12 arêtes, 8 sommets."],["■","<b>Cube</b> : pavé dont toutes les arêtes sont égales."],["┈","<b>Perspective cavalière</b> : arêtes cachées en pointillés."],["✂","<b>Patron</b> du cube = 6 carrés reliés."],["V","Volume du pavé : V = L × l × h."],["cm³","Le volume s'exprime en cm³, dm³, m³."]],qcm:[{t:"num",q:"Combien d'<b>arêtes</b> possède un pavé droit ?",a:12,tol:.01,unit:"",ex:"Un pavé droit a 12 arêtes."},{t:"num",q:"Combien de <b>sommets</b> possède un cube ?",a:8,tol:.01,unit:"",ex:"Un cube (comme tout pavé droit) a 8 sommets."},{t:"vf",q:"En perspective cavalière, les arêtes cachées se dessinent en pointillés.",a:!0,ex:"Vrai : c'est la règle de la perspective cavalière."},{t:"qcm",q:"Le patron d'un cube est formé de :",choices:["4 carrés","6 carrés","8 carrés","6 rectangles"],a:1,ex:"Le cube a 6 faces carrées : son patron a 6 carrés."},{t:"num",q:"Volume d'un cube d'arête 3 cm (en cm³) ?",a:27,tol:.01,unit:"cm³",ex:"V = 3 × 3 × 3 = 27 cm³."}],exos:[{titre:"Compter faces, arêtes, sommets",niv:"Application",n:6,desc:"Dénombrer les éléments de solides usuels."},{titre:"Reconnaître un patron",niv:"Réflexion",n:6,desc:"Dire si un patron permet de construire le cube."},{titre:"Volumes de pavés",niv:"Calcul",n:8,desc:"Calculer des volumes de pavés droits."}]},d={id:"fractions-6e",titre:"Les fractions",sous:"Partager, écrire et comparer des fractions.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Partager une pizza en parts égales, prendre les trois quarts d'une tablette de chocolat : dès qu'on découpe un tout en parts égales, on écrit le résultat avec une <b>fraction</b>.</h2>

<h3><span class="n">1</span>Qu'est-ce qu'une fraction ?</h3>
<p>Une <span class="kw">fraction</span> représente un <b>partage</b> en parts égales. Elle s'écrit avec deux nombres séparés par une barre. Dans 3/4 : le <span class="kw">dénominateur</span> (4) indique en combien de parts égales on partage le tout, le <span class="kw">numérateur</span> (3) indique combien de ces parts on prend.</p>
<div class="figbox"><svg viewBox="0 0 440 90">
  <rect x="20" y="20" width="100" height="50" fill="#2F6BED" stroke="#15233F"/><rect x="120" y="20" width="100" height="50" fill="#2F6BED" stroke="#15233F"/><rect x="220" y="20" width="100" height="50" fill="#2F6BED" stroke="#15233F"/><rect x="320" y="20" width="100" height="50" fill="#EAF0FB" stroke="#15233F"/>
  <text x="200" y="88" class="pt-label">3 parts sur 4 sont coloriées : 3/4</text>
</svg><figcaption>La fraction 3/4 : 3 parts prises sur 4</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Dans une fraction, le <span class="kw">numérateur</span> (en haut) est le nombre de parts prises, le <span class="kw">dénominateur</span> (en bas) est le nombre de parts égales. Une fraction est aussi un <b>quotient</b> : 3/4 = 3 ÷ 4.</p></div>

<h3><span class="n">2</span>Fraction d'une quantité</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour calculer une fraction d'un nombre, on <b>divise</b> par le dénominateur puis on <b>multiplie</b> par le numérateur.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer 3/4 de <span class="num">20</span> :</p>
<ol class="demo-steps">
<li>On divise par le dénominateur : <span class="num">20</span> ÷ <span class="num">4</span> = <span class="num">5</span>.</li>
<li>On multiplie par le numérateur : <span class="num">5</span> × <span class="num">3</span> = <span class="num">15</span>.</li>
<li>Donc <mark>3/4 de 20 = 15</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Fractions égales</h3>
<p>On obtient une <span class="kw">fraction égale</span> en multipliant (ou en divisant) le numérateur <b>et</b> le dénominateur par un même nombre : la valeur de la fraction ne change pas.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Multiplier le haut et le bas par le même nombre donne une fraction égale : <mark>3/4 = 6/8</mark> (on a multiplié par <span class="num">2</span>). De même, en divisant : 6/8 = 3/4.</p></div>

<h3><span class="n">4</span>Comparer à 1</h3>
<div class="box prop"><span class="lab">Propriété</span><p>Si le numérateur est plus petit que le dénominateur, la fraction est plus petite que 1. S'ils sont égaux, elle vaut exactement 1. Si le numérateur est plus grand, la fraction est plus grande que 1.</p></div>
<table>
<tr><th>Fraction</th><th>Comparaison</th></tr>
<tr><td>3/4</td><td>&lt; 1 (num &lt; dénom)</td></tr>
<tr><td>4/4</td><td>= 1 (num = dénom)</td></tr>
<tr><td>5/4</td><td>&gt; 1 (num &gt; dénom)</td></tr>
</table>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une fraction, c'est un <b>partage</b> en parts égales : numérateur sur dénominateur. On calcule une fraction d'un nombre en <b>divisant</b> par le dénominateur puis en <b>multipliant</b> par le numérateur. Multiplier (ou diviser) le haut et le bas par un même nombre donne une <b>fraction égale</b>. Enfin, on compare à 1 en regardant si le numérateur est plus petit, égal ou plus grand que le dénominateur.</p></div>
`,fiche:[["a/b","<b>Numérateur</b> / <b>dénominateur</b> : parts prises / parts totales."],["×","Fraction d'un nombre : ÷ dénominateur puis × numérateur."],["=","3/4 = 6/8 : on multiplie en haut et en bas par le même nombre."],["1","1 = 4/4 : numérateur = dénominateur."],["<","num &lt; dénom ⟹ fraction &lt; 1."],["½","Une fraction est un quotient : 3/4 = 3 ÷ 4."]],qcm:[{t:"num",q:"Calcule 3/4 de 20.",a:15,tol:.01,unit:"",ex:"(20 ÷ 4) × 3 = 5 × 3 = 15."},{t:"qcm",q:"Dans la fraction 5/8, le dénominateur est :",choices:["5","8","13","40"],a:1,ex:"Le dénominateur est le nombre du bas : 8."},{t:"num",q:"Calcule 2/5 de 30.",a:12,tol:.01,unit:"",ex:"(30 ÷ 5) × 2 = 6 × 2 = 12."},{t:"vf",q:"6/8 est égale à 3/4.",a:!0,ex:"Vrai : on divise 6 et 8 par 2 → 3/4."},{t:"num",q:"Combien de quarts dans une unité ? (1 = … /4)",a:4,tol:.01,unit:"",ex:"1 = 4/4 : il y a 4 quarts dans une unité."}],exos:[{titre:"Fraction d'une quantité",niv:"Application",n:8,desc:"Calculer des fractions de nombres."},{titre:"Fractions égales",niv:"Application",n:6,desc:"Compléter des égalités de fractions."},{titre:"Placer et comparer",niv:"Réflexion",n:6,desc:"Placer des fractions et les comparer à 1."}]},u={id:"divisibilite-6e",titre:"Multiples, diviseurs et divisibilité",sous:"Critères de divisibilité par 2, 3, 5, 9, 10.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Certains partages « tombent juste » et d'autres non : 12 bonbons se répartissent exactement entre 3 enfants, mais pas 13. Derrière cette idée simple se cachent deux mots-clés — <b>multiple</b> et <b>diviseur</b> — et quelques astuces pour deviner d'un coup d'œil si une division tombe juste.</h2>

<h3><span class="n">1</span>Multiples et diviseurs</h3>
<p>Un <span class="kw">multiple</span> de 7 s'obtient en multipliant 7 par un entier : 7, 14, 21, 28, \\(\\dots\\) On écrit par exemple \\(21 = 7 \\times 3\\). On dit alors que 7 est un <span class="kw">diviseur</span> de 21, et que 21 est <mark>divisible</mark> par 7.</p>
<div class="figbox"><svg viewBox="0 0 440 70">
  <line x1="20" y1="40" x2="420" y2="40" class="seg-a"/>
  <g font-family="Space Mono" font-size="12" fill="#15233F" text-anchor="middle">
  <circle cx="20" cy="40" r="9" fill="#EA8C00"/><text x="20" y="44" fill="#fff">0</text>
  <circle cx="140" cy="40" r="9" fill="#EA8C00"/><text x="140" y="44" fill="#fff">3</text>
  <circle cx="260" cy="40" r="9" fill="#EA8C00"/><text x="260" y="44" fill="#fff">6</text>
  <circle cx="380" cy="40" r="9" fill="#EA8C00"/><text x="380" y="44" fill="#fff">9</text>
  <text x="80" y="44">1·2</text><text x="200" y="44">4·5</text><text x="320" y="44">7·8</text></g>
</svg><figcaption>Les multiples de 3 (en orange) : 0, 3, 6, 9, …</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Dire que \\(b\\) est un <span class="kw">diviseur</span> de \\(a\\), c'est dire que la division de \\(a\\) par \\(b\\) tombe juste (reste nul). C'est la même chose que dire que \\(a\\) est un <span class="kw">multiple</span> de \\(b\\).</p></div>

<h3><span class="n">2</span>Les critères de divisibilité</h3>
<p>Plutôt que de poser la division, on peut souvent conclure en regardant le nombre. Ces <span class="kw">critères</span> sont à connaître par cœur.</p>
<div class="box prop"><span class="lab">À connaître</span>
<table>
<tr><th>Divisible par</th><th>Critère</th><th>Exemple</th></tr>
<tr><td>2</td><td>le chiffre des unités est 0, 2, 4, 6 ou 8 (nombre pair)</td><td>58</td></tr>
<tr><td>5</td><td>le chiffre des unités est 0 ou 5</td><td>75</td></tr>
<tr><td>10</td><td>le chiffre des unités est 0</td><td>240</td></tr>
<tr><td>3</td><td>la somme des chiffres est un multiple de 3</td><td>51</td></tr>
<tr><td>9</td><td>la somme des chiffres est un multiple de 9</td><td>72</td></tr>
</table></div>

<h3><span class="n">3</span>Appliquer un critère</h3>
<div class="box exemple"><span class="lab">Exemple</span><p>Le nombre <b>72</b> est-il divisible par 2, par 3, par 9 ?</p>
<ol class="demo-steps">
<li>Son chiffre des unités est 2 (pair) : 72 est divisible par 2.</li>
<li>La somme de ses chiffres est \\(7 + 2 = 9\\), multiple de 3 : 72 est divisible par 3.</li>
<li>Cette somme 9 est aussi un multiple de 9 : 72 est divisible par 9.</li>
</ol></div>

<h3><span class="n">4</span>Le lien entre 9 et 3</h3>
<div class="box attention"><span class="lab">Attention</span><p>Un nombre divisible par <b>9</b> est <mark>toujours</mark> divisible par 3, car un multiple de 9 est aussi un multiple de 3. Mais l'inverse est faux : 15 est divisible par 3 (\\(1 + 5 = 6\\)) sans être divisible par 9 (6 n'est pas multiple de 9).</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>« \\(b\\) divise \\(a\\) » et « \\(a\\) est un multiple de \\(b\\) » disent la même chose. On teste 2, 5 et 10 sur le <b>chiffre des unités</b> ; 3 et 9 sur la <b>somme des chiffres</b>. Et tout nombre divisible par 9 l'est aussi par 3, mais pas l'inverse.</p></div>
`,fiche:[["×","<b>Multiple</b> de 7 : 7, 14, 21… (7 × un entier)."],["÷","7 est un <b>diviseur</b> de 14."],["2","Divisible par 2 : unités 0,2,4,6,8."],["5","Par 5 : unités 0 ou 5. Par 10 : unités 0."],["3","Par 3 : somme des chiffres multiple de 3."],["9","Par 9 : somme des chiffres multiple de 9."]],qcm:[{t:"num",q:"Quel est le plus petit multiple non nul de 7 ?",a:7,tol:.01,unit:"",ex:"7 × 1 = 7."},{t:"vf",q:"24 est divisible par 3.",a:!0,ex:"2 + 4 = 6, multiple de 3 : oui."},{t:"qcm",q:"Un nombre est divisible par 5 si son chiffre des unités est :",choices:["0 ou 5","pair","3 ou 6","1"],a:0,ex:"Divisible par 5 : unités 0 ou 5."},{t:"num",q:"Combien de diviseurs a le nombre 6 ? (1, 2, 3, 6)",a:4,tol:.01,unit:"",ex:"Ses diviseurs sont 1, 2, 3 et 6 : il y en a 4."},{t:"vf",q:"90 est divisible par 9.",a:!0,ex:"9 + 0 = 9, multiple de 9 : oui."}],exos:[{titre:"Multiples et diviseurs",niv:"Application",n:8,desc:"Lister multiples et diviseurs."},{titre:"Critères de divisibilité",niv:"Application",n:8,desc:"Tester la divisibilité par 2, 3, 5, 9, 10."},{titre:"Problèmes de partage",niv:"Réflexion",n:6,desc:"Utiliser la divisibilité dans des situations."}]},m={id:"proportionnalite-6e",titre:"La proportionnalité",sous:"Tableaux, coefficient, pourcentages.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Si 3 stylos coûtent 6 €, alors 6 stylos coûtent 12 € : le prix suit le nombre de stylos. C'est une situation de <b>proportionnalité</b>, et elle se cache derrière les prix, les recettes, les échelles et les pourcentages.</h2>

<h3><span class="n">1</span>Situation de proportionnalité</h3>
<p>Deux grandeurs sont <span class="kw">proportionnelles</span> quand on passe de l'une à l'autre en multipliant toujours par le <b>même nombre</b>, appelé <span class="kw">coefficient de proportionnalité</span>.</p>
<div class="figbox"><svg viewBox="0 0 440 100">
  <rect x="30" y="20" width="380" height="60" fill="none" stroke="#15233F"/>
  <line x1="30" y1="50" x2="410" y2="50" stroke="#15233F"/><line x1="140" y1="20" x2="140" y2="80" stroke="#15233F"/>
  <g font-family="Space Mono" font-size="13" fill="#15233F" text-anchor="middle">
  <text x="85" y="40">Stylos</text><text x="85" y="70">Prix (€)</text>
  <text x="200" y="40">3</text><text x="200" y="70">6</text><text x="300" y="40">5</text><text x="300" y="70">10</text></g>
  <text x="250" y="98" font-family="Space Mono" font-size="11" fill="#EA8C00" text-anchor="middle">× 2 (coefficient)</text>
</svg><figcaption>Tableau de proportionnalité : coefficient × 2</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Dans un <span class="kw">tableau de proportionnalité</span>, on obtient chaque nombre de la 2ᵉ ligne en multipliant celui de la 1ʳᵉ ligne par le coefficient. Ici : \\(3 \\times 2 = 6\\) et \\(5 \\times 2 = 10\\), donc le coefficient est <mark>2</mark>.</p></div>
<div class="box methode"><span class="lab">Méthode</span><p>Pour trouver le coefficient, on divise une valeur de la 2ᵉ ligne par la valeur correspondante de la 1ʳᵉ ligne :</p>
<ol class="demo-steps">
<li>Je choisis une colonne complète, par exemple <span class="num">3</span> stylos pour <span class="num">6</span> €.</li>
<li>Je calcule \\(6 \\div 3 = 2\\) : le coefficient est <mark>2</mark>.</li>
<li>Pour 7 stylos, je multiplie : \\(7 \\times 2 = 14\\) €.</li>
</ol></div>

<h3><span class="n">2</span>Le produit en croix</h3>
<p>Quand il manque une valeur dans le tableau et que le coefficient n'est pas commode à trouver, on utilise le <span class="kw">produit en croix</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans un tableau de proportionnalité \\(\\frac{a}{b} = \\frac{x}{d}\\), la valeur manquante vaut \\(x = \\frac{a \\times d}{b}\\) : on multiplie les deux nombres « en croix », puis on divise par le troisième.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>4 croissants coûtent 3 €. Combien coûtent 12 croissants ? On pose \\(\\frac{4}{3} = \\frac{12}{x}\\) :</p>
<ol class="demo-steps">
<li>Je repère la valeur manquante \\(x\\) (le prix de 12 croissants).</li>
<li>Produit en croix : \\(x = \\frac{3 \\times 12}{4}\\).</li>
<li>Je calcule : \\(3 \\times 12 = 36\\), puis \\(36 \\div 4 = 9\\). Donc <mark>9 €</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Les pourcentages</h3>
<p>Un <span class="kw">pourcentage</span> est un cas de proportionnalité : prendre 25 % d'un nombre, c'est en prendre 25 sur 100, donc le multiplier par \\(\\frac{25}{100}\\).</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer 25 % de 80 : \\(80 \\times \\frac{25}{100} = \\frac{80 \\times 25}{100} = \\frac{2000}{100} = 20\\). Donc 25 % de 80 vaut <mark>20</mark>.</p></div>

<h3><span class="n">4</span>Les échelles</h3>
<p>Sur un plan ou une carte, l'<span class="kw">échelle</span> est le coefficient de proportionnalité entre les longueurs du dessin et les longueurs réelles. Une échelle \\(\\frac{1}{100}\\) signifie que 1 cm sur le plan représente 100 cm en vrai, soit 1 m.</p>

<div class="box attention"><span class="lab">Attention</span><p>Toutes les situations ne sont pas proportionnelles : l'<b>âge</b> et la <b>taille</b> d'une personne, par exemple, ne le sont pas — à 20 ans on ne mesure pas deux fois plus qu'à 10 ans.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant par un <b>coefficient</b> constant. On trouve une valeur manquante par le coefficient ou par le <b>produit en croix</b> \\(x = \\frac{a \\times d}{b}\\). Un <b>pourcentage</b> revient à multiplier par \\(\\frac{p}{100}\\), et une <b>échelle</b> est le coefficient entre le plan et la réalité.</p></div>
`,fiche:[["×k","<b>Proportionnalité</b> : on multiplie par le même coefficient k."],["⊞","<b>Tableau</b> : deux lignes, coefficient constant."],["✕","<b>Produit en croix</b> : x = a × d ÷ b."],["%","<b>25 %</b> = × 25/100."],["≠","Toutes les situations ne sont pas proportionnelles."],["📏","Échelle : rapport entre le plan et la réalité."]],qcm:[{t:"num",q:"3 stylos coûtent 6 €. Combien coûtent 5 stylos (en €) ?",a:10,tol:.01,unit:"€",ex:"Coefficient : 6 ÷ 3 = 2. Puis 5 × 2 = 10 €."},{t:"num",q:"Dans un tableau de proportionnalité, 4 donne 12. Quel est le coefficient ?",a:3,tol:.01,unit:"",ex:"12 ÷ 4 = 3."},{t:"num",q:"Calcule 25 % de 80.",a:20,tol:.01,unit:"",ex:"80 × 25 ÷ 100 = 20."},{t:"vf",q:"Dans un tableau de proportionnalité, on multiplie toujours par le même nombre.",a:!0,ex:"Vrai : c'est le coefficient de proportionnalité."},{t:"num",q:"Produit en croix : 2/3 = x/12. Combien vaut x ?",a:8,tol:.01,unit:"",ex:"x = 2 × 12 ÷ 3 = 8."}],exos:[{titre:"Compléter un tableau",niv:"Application",n:8,desc:"Trouver des valeurs par le coefficient."},{titre:"Pourcentages",niv:"Application",n:8,desc:"Calculer des pourcentages simples."},{titre:"Échelles et vitesses",niv:"Réflexion",n:6,desc:"Problèmes de proportionnalité."}]},b={id:"donnees-6e",titre:"Organisation de données",sous:"Effectifs, tableaux et diagrammes.",dom:"Statistiques",noTrace:!0,cours:`
<h2 class="chap-intro">Combien d'élèves prennent le bus ? Quel est le sport préféré de la classe ? Pour répondre, on <b>recueille</b> des données, on les <b>range</b> dans un tableau, puis on les <b>dessine</b> pour les voir d'un coup d'œil.</h2>

<h3><span class="n">1</span>Recueillir et organiser</h3>
<p>Après avoir recueilli des <span class="kw">données</span>, on les range dans un <b>tableau d'effectifs</b>. L'<span class="kw">effectif</span> d'une valeur est le nombre de fois où elle apparaît.</p>
<div class="box def"><span class="lab">Définition</span><p>L'<span class="kw">effectif total</span> est la somme de tous les effectifs : c'est le nombre total de données recueillies.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>On demande à 25 élèves leur moyen de transport. On obtient le tableau :</p>
<table>
<tr><th>Transport</th><th>Bus</th><th>Vélo</th><th>À pied</th><th>Voiture</th></tr>
<tr><td>Effectif</td><td><span class="num">10</span></td><td><span class="num">4</span></td><td><span class="num">8</span></td><td><span class="num">3</span></td></tr>
</table>
<p>L'effectif total se retrouve en additionnant : <mark>10 + 4 + 8 + 3 = 25</mark>.</p></div>

<h3><span class="n">2</span>Représenter les données</h3>
<div class="box prop"><span class="lab">Diagrammes</span><p>Le <b>diagramme en barres</b> compare des effectifs : plus une barre est haute, plus l'effectif est grand. Le <b>diagramme circulaire</b> (camembert) montre les parts d'un tout : le disque entier représente <span class="num">360</span>°.</p></div>
<div class="figbox"><svg viewBox="0 0 440 150">
  <line x1="40" y1="120" x2="420" y2="120" class="seg-a"/><line x1="40" y1="120" x2="40" y2="20" class="seg-a"/>
  <rect x="70" y="60" width="50" height="60" fill="#0FA36B"/><rect x="150" y="30" width="50" height="90" fill="#0FA36B"/><rect x="230" y="80" width="50" height="40" fill="#0FA36B"/><rect x="310" y="50" width="50" height="70" fill="#0FA36B"/>
  <g font-family="Space Mono" font-size="12" fill="#15233F" text-anchor="middle"><text x="95" y="138">Lun</text><text x="175" y="138">Mar</text><text x="255" y="138">Mer</text><text x="335" y="138">Jeu</text></g>
</svg><figcaption>Un diagramme en barres compare des effectifs</figcaption></div>
<div class="box methode"><span class="lab">Méthode</span><p>Pour trouver l'<b>angle</b> d'un secteur dans un diagramme circulaire :</p>
<ol class="demo-steps">
<li>On écrit la part de la valeur : <b>effectif ÷ effectif total</b>.</li>
<li>On multiplie cette part par <span class="num">360</span>°.</li>
<li>Exemple pour le bus : \\(\\dfrac{10}{25}\\times 360 = 144\\) degrés.</li>
</ol></div>

<h3><span class="n">3</span>Lire un graphique</h3>
<p>Pour lire un graphique, on repère l'axe <b>horizontal</b> (les valeurs) et l'axe <b>vertical</b> (les effectifs), puis on lit la <b>hauteur</b> de chaque barre en se reportant sur l'axe des effectifs.</p>
<div class="box attention"><span class="lab">Attention</span><p>Il faut toujours regarder la <b>graduation</b> de l'axe vertical : une barre deux fois plus haute représente un effectif deux fois plus grand seulement si l'axe commence à zéro.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>L'<b>effectif</b> d'une valeur est son nombre d'apparitions ; l'<b>effectif total</b> est leur somme. Le <b>diagramme en barres</b> compare les effectifs, le <b>diagramme circulaire</b> partage un disque de <b>360°</b>. On lit un graphique en croisant l'axe des valeurs et l'axe des effectifs.</p></div>
`,fiche:[["#","<b>Effectif</b> : nombre de fois qu'une valeur apparaît."],["Σ","<b>Effectif total</b> : somme de tous les effectifs."],["▮","<b>Diagramme en barres</b> : compare des effectifs."],["◔","<b>Diagramme circulaire</b> : parts d'un tout (360°)."],["⊞","<b>Tableau</b> : valeurs et effectifs."],["👁","Lire : axe des valeurs, axe des effectifs."]],qcm:[{t:"num",q:"Dans une classe : 12 filles et 13 garçons. Quel est l'effectif total ?",a:25,tol:.01,unit:"",ex:"12 + 13 = 25."},{t:"qcm",q:"Un diagramme en barres sert surtout à :",choices:["dessiner des angles","comparer des effectifs","tracer des cercles","mesurer des longueurs"],a:1,ex:"Il compare visuellement des effectifs."},{t:"num",q:"Effectif total 20, dont 5 aiment le foot. Combien n'aiment pas le foot ?",a:15,tol:.01,unit:"",ex:"20 − 5 = 15."},{t:"vf",q:"L'effectif d'une valeur est le nombre de fois qu'elle apparaît.",a:!0,ex:"Vrai : c'est la définition de l'effectif."},{t:"num",q:"Dans un diagramme circulaire, le disque entier représente combien de degrés ?",a:360,tol:.01,unit:"°",ex:"Le disque complet fait 360°."}],exos:[{titre:"Tableaux d'effectifs",niv:"Application",n:8,desc:"Construire et lire des tableaux."},{titre:"Lire des diagrammes",niv:"Application",n:8,desc:"Extraire l'information d'un graphique."},{titre:"Diagramme circulaire",niv:"Réflexion",n:6,desc:"Calculer des angles de secteurs."}]},x={id:"conversions-6e",titre:"Mesures et conversions",sous:"Longueurs, masses, contenances et leurs conversions.",dom:"Grandeurs et mesures",noTrace:!0,cours:`
<h2 class="chap-intro">Une même longueur peut s'écrire de plusieurs façons : 3 m, c'est aussi 300 cm ou 0,003 km. <b>Convertir</b>, c'est changer d'unité sans changer la grandeur. Il suffit de connaître l'ordre des unités et de faire glisser la virgule au bon endroit.</h2>

<h3><span class="n">1</span>Les unités de mesure</h3>
<p>Chaque grandeur a ses <span class="kw">unités</span>, rangées de la plus grande à la plus petite. Une unité vaut toujours <b>dix fois</b> celle qui la suit à droite.</p>
<table>
<tr><th>Grandeur</th><th colspan="7">Unités (de la plus grande à la plus petite)</th></tr>
<tr><td><b>Longueurs</b></td><td>km</td><td>hm</td><td>dam</td><td><b>m</b></td><td>dm</td><td>cm</td><td>mm</td></tr>
<tr><td><b>Masses</b></td><td>kg</td><td>hg</td><td>dag</td><td><b>g</b></td><td>dg</td><td>cg</td><td>mg</td></tr>
<tr><td><b>Contenances</b></td><td>kL</td><td>hL</td><td>daL</td><td><b>L</b></td><td>dL</td><td>cL</td><td>mL</td></tr>
</table>
<div class="box def"><span class="lab">Définition</span><p>Le préfixe donne le sens : <span class="kw">kilo</span> vaut 1000 unités, <span class="kw">hecto</span> 100, <span class="kw">déca</span> 10 ; puis <span class="kw">déci</span> vaut un dixième, <span class="kw">centi</span> un centième, <span class="kw">milli</span> un millième.</p></div>
<div class="figbox"><svg viewBox="0 0 440 90">
  <g font-family="Space Mono" font-size="13">
  <rect x="20" y="20" width="400" height="50" fill="none" stroke="#A16207"/>
  <line x1="77" y1="20" x2="77" y2="70" stroke="#A16207"/><line x1="134" y1="20" x2="134" y2="70" stroke="#A16207"/><line x1="191" y1="20" x2="191" y2="70" stroke="#A16207"/><line x1="248" y1="20" x2="248" y2="70" stroke="#A16207"/><line x1="305" y1="20" x2="305" y2="70" stroke="#A16207"/><line x1="362" y1="20" x2="362" y2="70" stroke="#A16207"/>
  <text x="48" y="40" text-anchor="middle">km</text><text x="105" y="40" text-anchor="middle">hm</text><text x="162" y="40" text-anchor="middle">dam</text><text x="220" y="40" text-anchor="middle" fill="#A16207">m</text><text x="277" y="40" text-anchor="middle">dm</text><text x="334" y="40" text-anchor="middle">cm</text><text x="391" y="40" text-anchor="middle">mm</text>
  <text x="220" y="62" text-anchor="middle">3</text><text x="277" y="62" text-anchor="middle">0</text><text x="334" y="62" text-anchor="middle">0</text></g>
</svg><figcaption>3 m = 300 cm : on décale de deux colonnes</figcaption></div>

<h3><span class="n">2</span>Convertir avec le tableau</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour convertir une mesure d'une unité vers une autre :</p>
<ol class="demo-steps">
<li>On place le <b>chiffre des unités</b> dans la colonne de l'unité de départ (un chiffre par colonne).</li>
<li>On complète avec des <span class="num">0</span> jusqu'à la colonne de l'unité d'arrivée.</li>
<li>On lit le nombre dans la colonne d'arrivée : la <mark>virgule se place juste après cette colonne</mark>.</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Convertir 3 m en cm : on place le 3 dans la colonne des mètres, puis on descend de deux colonnes (dm, cm) en ajoutant deux zéros. On obtient <mark>3 m = 300 cm</mark>. On a multiplié par 100.</p>
<p>Convertir 2500 g en kg : le nombre s'étale des grammes vers la gauche jusqu'aux kilogrammes (trois colonnes). La virgule remonte de trois rangs : <mark>2500 g = 2,5 kg</mark>. On a divisé par 1000.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>Une seule virgule et un seul chiffre par colonne. Vers une <b>plus petite</b> unité (m → cm), le nombre grandit : on <b>multiplie</b>. Vers une <b>plus grande</b> unité (g → kg), le nombre diminue : on <b>divise</b>.</p></div>

<h3><span class="n">3</span>À toi de jouer</h3>
<p>Avec le tableau ci-dessous, place une valeur puis lis toutes les conversions ; ensuite <b>entraîne-toi</b>.</p>

<div class="emb-tool">
  <div class="emb-head">🔧 Tableau de conversion</div>
  <div class="emb-sub">Choisis la grandeur, entre une valeur et son unité : le tableau place les chiffres et donne toutes les conversions.</div>
  <div class="tool-form">
    <select id="ecCat" onchange="ecCat()"><option value="longueurs">Longueurs</option><option value="masses">Masses</option><option value="capacites">Contenances</option><option value="aires">Aires</option><option value="volumes">Volumes</option></select>
    <input id="ecVal" type="text" inputmode="decimal" placeholder="valeur" style="width:100px">
    <select id="ecFrom"><option value="0">km</option><option value="1">hm</option><option value="2">dam</option><option value="3" selected>m</option><option value="4">dm</option><option value="5">cm</option><option value="6">mm</option></select>
    <button class="tool-go" onclick="ecShow()">Compléter le tableau</button>
  </div>
  <div id="ecOut"></div>
  <div class="emb-sep"></div>
  <div class="emb-head">✏️ Entraîne-toi</div>
  <div class="emb-sub">Une conversion t'est proposée : réponds, puis vérifie sur le tableau.</div>
  <div class="tool-form"><button class="tool-go" onclick="ecGen()">Nouvelle conversion</button></div>
  <div id="ecQ"></div><div id="ecAnsWrap"></div><div id="ecFb"></div>
</div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Les unités se rangent de la plus grande à la plus petite, et chaque colonne vaut <b>dix fois</b> la suivante. Pour convertir, on place un chiffre par colonne puis on décale la virgule : vers une plus petite unité on <b>multiplie</b> (3 m = 300 cm), vers une plus grande on <b>divise</b> (2500 g = 2,5 kg).</p></div>
`,fiche:[["m","<b>Longueurs</b> : km hm dam m dm cm mm."],["g","<b>Masses</b> : kg hg dag g dg cg mg."],["L","<b>Contenances</b> : kL hL daL L dL cL mL."],["×10","Chaque colonne vaut 10 fois la suivante."],["→","3 m = 300 cm (×100)."],["←","2500 g = 2,5 kg (÷1000)."]],qcm:[{t:"num",q:"Convertis 3 m en cm.",a:300,tol:.01,unit:"cm",ex:"3 × 100 = 300 cm."},{t:"num",q:"Convertis 2500 g en kg.",a:2.5,tol:.01,unit:"kg",ex:"2500 ÷ 1000 = 2,5 kg."},{t:"num",q:"Convertis 1,5 L en mL.",a:1500,tol:.01,unit:"mL",ex:"1,5 × 1000 = 1500 mL."},{t:"num",q:"Convertis 4 km en m.",a:4e3,tol:.01,unit:"m",ex:"4 × 1000 = 4000 m."},{t:"vf",q:"Pour passer des mètres aux centimètres, on multiplie par 100.",a:!0,ex:"Vrai : 1 m = 100 cm."}],exos:[{titre:"Conversions de longueurs",niv:"Application",n:10,desc:"km, m, cm, mm."},{titre:"Masses et contenances",niv:"Application",n:8,desc:"kg, g ; L, mL."},{titre:"Problèmes de mesures",niv:"Réflexion",n:6,desc:"Convertir pour comparer et calculer."}]},g={id:"durees-6e",titre:"Les durées",sous:"Heures, minutes, secondes et calculs.",dom:"Grandeurs et mesures",noTrace:!0,cours:`
<h2 class="chap-intro">Combien de temps dure un film, un trajet, une récréation ? Pour répondre, on manie des <b>heures</b>, des <b>minutes</b> et des <b>secondes</b>. Mais attention : le temps ne se compte pas de dix en dix comme les nombres — il se compte en <b>base 60</b>.</h2>

<h3><span class="n">1</span>Les unités de durée</h3>
<p>Les durées ne se comptent pas de 10 en 10 mais en <span class="kw">base 60</span> : \\(1\\ \\text{h} = 60\\ \\text{min}\\) et \\(1\\ \\text{min} = 60\\ \\text{s}\\). En enchaînant les deux, on obtient \\(1\\ \\text{h} = 60 \\times 60 = 3600\\ \\text{s}\\).</p>
<div class="figbox"><svg viewBox="0 0 380 70">
  <g font-family="Space Mono" font-size="16" fill="#A16207" text-anchor="middle">
  <text x="190" y="40">1 h = 60 min = 3600 s</text></g>
  <text x="190" y="62" font-family="Space Mono" font-size="12" fill="#15233F" text-anchor="middle">Attention : 1 h 30 min = 90 min (et non 1,30 h « décimale »)</text>
</svg><figcaption>Les durées se comptent en base 60</figcaption></div>
<div class="box attention"><span class="lab">Attention</span><p>Une durée n'est pas un nombre décimal. <mark>1 h 30 min = 90 minutes</mark>, et non « 1,30 h ». La demi-heure vaut 30 minutes, donc \\(\\tfrac{1}{2}\\ \\text{h} = 30\\ \\text{min}\\), pas 50.</p></div>

<h3><span class="n">2</span>Convertir</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour changer d'unité, on suit la chaîne \\(\\text{h} \\to \\text{min} \\to \\text{s}\\) :</p>
<ol class="demo-steps">
<li>Des <b>heures</b> vers les <b>minutes</b>, puis des minutes vers les <b>secondes</b> : on <b>multiplie par 60</b> à chaque étape.</li>
<li>Dans l'autre sens (s vers min, min vers h) : on <b>divise par 60</b>.</li>
</ol></div>
<table>
<tr><th>Heures</th><th>Minutes</th><th>Secondes</th></tr>
<tr><td>1 h</td><td>60 min</td><td>3600 s</td></tr>
<tr><td>2 h</td><td>120 min</td><td>7200 s</td></tr>
<tr><td>1 h 30 min</td><td>90 min</td><td>5400 s</td></tr>
</table>
<div class="box exemple"><span class="lab">Exemple</span><p>Combien de secondes dans 3 min ? On multiplie par 60 : \\(3 \\times 60 = 180\\), soit 180 secondes.</p></div>

<h3><span class="n">3</span>Calculer une durée</h3>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">durée</span> d'un événement se calcule par \\(\\text{heure de fin} - \\text{heure de début}\\). Par exemple, de 14 h à 16 h, la durée est \\(16 - 14 = 2\\ \\text{h}\\).</p></div>
<div class="box attention"><span class="lab">Attention</span><p>On soustrait <b>en base 60</b>, pas comme des nombres ordinaires. Quand les minutes du haut sont trop petites, on « emprunte » une heure qui vaut 60 minutes.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Durée entre 14 h 20 et 16 h 05 :</p>
<ol class="demo-steps">
<li>Les minutes de fin (05) sont plus petites que celles de début (20) : on <b>convertit une heure en 60 minutes</b>. On écrit 16 h 05 comme 15 h 65.</li>
<li>On soustrait les minutes : \\(65 - 20 = 45\\) min.</li>
<li>On soustrait les heures : \\(15 - 14 = 1\\) h.</li>
<li>La durée est <mark>1 h 45 min</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Les durées se comptent en <b>base 60</b> : \\(1\\ \\text{h} = 60\\ \\text{min} = 3600\\ \\text{s}\\). On <b>multiplie par 60</b> pour descendre d'unité, on <b>divise par 60</b> pour remonter. Une durée = <b>heure de fin − heure de début</b>, en pensant à emprunter 60 minutes quand c'est nécessaire.</p></div>
`,fiche:[["h","1 h = 60 min."],["min","1 min = 60 s ; 1 h = 3600 s."],["×60","Heures → minutes → secondes : on multiplie par 60."],["÷60","Dans l'autre sens : on divise par 60."],["−","Durée = heure de fin − heure de début."],["⚠","1 h 30 min = 90 min (pas 1,30 h)."]],qcm:[{t:"num",q:"Combien de minutes y a-t-il dans 2 h ?",a:120,tol:.01,unit:"min",ex:"2 × 60 = 120 min."},{t:"num",q:"Combien de secondes dans 3 min ?",a:180,tol:.01,unit:"s",ex:"3 × 60 = 180 s."},{t:"num",q:"Un film commence à 14 h et finit à 16 h. Durée (en heures) ?",a:2,tol:.01,unit:"h",ex:"16 − 14 = 2 h."},{t:"num",q:"Combien de minutes dans 1 h 30 min ?",a:90,tol:.01,unit:"min",ex:"60 + 30 = 90 min."},{t:"vf",q:"Une minute vaut 60 secondes.",a:!0,ex:"Vrai : 1 min = 60 s."}],exos:[{titre:"Convertir des durées",niv:"Application",n:8,desc:"h, min, s dans les deux sens."},{titre:"Calculer une durée",niv:"Application",n:8,desc:"Fin − début, franchir l'heure."},{titre:"Problèmes d'horaires",niv:"Réflexion",n:6,desc:"Emplois du temps, trajets."}]},v={id:"prog-6e",titre:"Initiation à la programmation",sous:"Déplacements, instructions, boucles.",dom:"Algorithmique",noTrace:!0,cours:`
<h2 class="chap-intro">Programmer, c'est donner à une machine une suite d'ordres clairs qu'elle exécute sans réfléchir. Sur un quadrillage, un petit personnage — un <b>lutin</b> — obéit à nos <span class="kw">instructions</span> : avancer, tourner… Il suffit de les écrire dans le bon ordre pour dessiner un chemin ou une figure.</h2>

<h3><span class="n">1</span>Coder des déplacements</h3>
<p>Sur un <b>quadrillage</b>, on décrit un chemin avec des <span class="kw">instructions</span> simples : <b>avancer</b> d'un nombre de cases, <b>tourner</b> à droite ou à gauche. Le lutin part d'une case, orienté dans une direction, et suit les ordres l'un après l'autre.</p>
<div class="figbox"><svg viewBox="0 0 200 140">
  <g stroke="#Dfe6f0" stroke-width="1">
  <line x1="20" y1="20" x2="180" y2="20"/><line x1="20" y1="60" x2="180" y2="60"/><line x1="20" y1="100" x2="180" y2="100"/>
  <line x1="20" y1="20" x2="20" y2="120"/><line x1="60" y1="20" x2="60" y2="120"/><line x1="100" y1="20" x2="100" y2="120"/><line x1="140" y1="20" x2="140" y2="120"/><line x1="180" y1="20" x2="180" y2="120"/>
  <line x1="20" y1="120" x2="180" y2="120"/></g>
  <path d="M40 100 L140 100 L140 40" fill="none" stroke="#0E7490" stroke-width="3"/>
  <polygon points="140,40 134,52 146,52" fill="#0E7490"/>
  <circle cx="40" cy="100" r="5" fill="#0E7490"/>
</svg><figcaption>Un déplacement codé : avancer, tourner, avancer</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour tracer le chemin ci-dessus, le lutin suit ces ordres :</p>
<ol class="demo-steps">
<li><span class="kw">avancer</span> de 2 cases (vers la droite) ;</li>
<li><span class="kw">tourner</span> à gauche ;</li>
<li><span class="kw">avancer</span> de 1 case (vers le haut).</li>
</ol></div>

<h3><span class="n">2</span>Un programme, une suite d'instructions</h3>
<div class="box def"><span class="lab">Définition</span><p>Un <span class="kw">programme</span> est une <b>suite d'instructions</b> exécutées <b>dans l'ordre</b>, de haut en bas. La machine lit la première ligne, l'exécute, passe à la suivante, et ainsi de suite jusqu'à la fin.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>L'<b>ordre des instructions compte</b> ! « avancer puis tourner » ne trace pas le même chemin que « tourner puis avancer ». Changer l'ordre, c'est changer le résultat.</p></div>

<h3><span class="n">3</span>Répéter avec une boucle</h3>
<p>Quand on doit refaire plusieurs fois les mêmes ordres, on n'a pas besoin de tout réécrire : on utilise une <span class="kw">boucle</span> « répéter … fois ». C'est plus court et plus clair.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour tracer un <b>carré</b> avec une boucle :</p>
<ol class="demo-steps">
<li>Un carré a <span class="num">4</span> côtés égaux, avec un angle droit à chaque coin.</li>
<li>Un côté se trace par : <span class="kw">avancer</span> puis <span class="kw">tourner</span> à droite (quart de tour).</li>
<li>On place ce bloc dans une boucle : <mark>répéter 4 fois [avancer ; tourner à droite]</mark>.</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Même idée pour un <b>triangle équilatéral</b> : ses 3 côtés sont égaux, on répète donc <span class="num">3</span> fois le bloc <mark>[avancer ; tourner de 120 degrés]</mark>. Le nombre de répétitions est toujours le nombre de côtés de la figure.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>programme</b> est une suite d'<b>instructions</b> exécutées dans l'ordre, de haut en bas : l'ordre compte. Sur un quadrillage, un <b>lutin</b> obéit à « avancer » et « tourner ». Pour répéter des ordres identiques, on utilise une <b>boucle</b> « répéter … fois » — le nombre de répétitions égale le nombre de côtés de la figure.</p></div>
`,fiche:[["▦","<b>Quadrillage</b> : on code des déplacements."],["→","<b>Avancer</b> de n cases ; <b>tourner</b> à droite/gauche."],["⬇","Un programme s'exécute dans l'ordre, de haut en bas."],["🔁","<b>Boucle</b> : « répéter … fois »."],["◻","Répéter 4 fois (avancer, tourner) → un carré."],["⚑","Un lutin (Scratch) suit les instructions."]],qcm:[{t:"num",q:"Pour parcourir les 4 côtés d'un carré, on répète (avancer, tourner) combien de fois ?",a:4,tol:.01,unit:"",ex:"Un carré a 4 côtés : on répète 4 fois."},{t:"qcm",q:"Sur un quadrillage, « avancer de 3 » signifie :",choices:["tourner 3 fois","se déplacer de 3 cases","effacer 3 cases","attendre 3 s"],a:1,ex:"On se déplace de 3 cases."},{t:"vf",q:"Un programme s'exécute instruction par instruction, dans l'ordre.",a:!0,ex:"Vrai : de haut en bas, dans l'ordre."},{t:"qcm",q:"Répéter plusieurs fois les mêmes instructions se fait avec :",choices:["une boucle","une gomme","un angle","une règle"],a:0,ex:"C'est le rôle de la boucle « répéter »."},{t:"num",q:"Pour un triangle, on répète (avancer, tourner de 120°) combien de fois ?",a:3,tol:.01,unit:"",ex:"Un triangle a 3 côtés : 3 répétitions."}],exos:[{titre:"Coder un déplacement",niv:"Application",n:8,desc:"Décrire un chemin sur quadrillage."},{titre:"Suivre un programme",niv:"Application",n:6,desc:"Prévoir le trajet d'un lutin."},{titre:"Boucles et figures",niv:"Réflexion",n:6,desc:"Tracer des polygones avec des boucles."}]};export{a,l as b,i as c,e as d,c as e,o as f,p as g,d as h,u as i,m as j,b as k,x as l,n as m,g as n,s as o,t as p,v as q,r as s};
