const e={id:"pythagore",titre:"Le théorème de Pythagore",sous:"La relation reine du triangle rectangle.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Poser une échelle contre un mur, vérifier qu'un angle est bien droit, mesurer une diagonale : dès qu'un <b>triangle rectangle</b> apparaît, le <b>théorème de Pythagore</b> relie ses trois côtés et permet d'en calculer un que l'on ne connaît pas.</h2>

<h3><span class="n">1</span>Le triangle rectangle et son hypoténuse</h3>
<p>Dans un <span class="kw">triangle rectangle</span>, le côté opposé à l'angle droit — le plus long — s'appelle l'<span class="kw">hypoténuse</span>. Les deux autres côtés sont ceux qui <b>forment l'angle droit</b>.</p>
<div class="box def"><span class="lab">Définition</span><p>L'<span class="kw">hypoténuse</span> est le côté opposé à l'angle droit d'un triangle rectangle. C'est toujours le <b>plus long</b> des trois côtés.</p></div>

<h3><span class="n">2</span>Le théorème de Pythagore</h3>
<div class="box prop"><span class="lab">Théorème de Pythagore</span><p>Si un triangle ABC est <b>rectangle en A</b>, alors :</p><p><mark>BC² = AB² + AC²</mark></p><p>(le carré de l'hypoténuse = la somme des carrés des deux autres côtés).</p></div>
<div class="figbox"><svg viewBox="0 0 460 220">
  <path d="M80 180 L320 180 L80 40 Z" fill="rgba(15,163,107,.07)" stroke="#0FA36B" stroke-width="2.5"/>
  <path d="M80 158 L102 158 L102 180" fill="none" stroke="#15233F" stroke-width="1.6"/>
  <circle cx="80" cy="180" r="4.5" class="pt-dot"/><text x="66" y="198" class="pt-label">A</text>
  <circle cx="320" cy="180" r="4.5" class="pt-dot"/><text x="326" y="198" class="pt-label">B</text>
  <circle cx="80" cy="40" r="4.5" class="pt-dot"/><text x="60" y="36" class="pt-label">C</text>
  <text x="185" y="105" class="pt-label" fill="#B77800">hypoténuse</text>
</svg><figcaption>ABC rectangle en A : BC² = AB² + AC²</figcaption></div>

<h3><span class="n">3</span>Calculer l'hypoténuse</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour trouver l'hypoténuse, on <b>additionne</b> les carrés des deux autres côtés, puis on prend la <b>racine carrée</b>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>ABC rectangle en A, avec AB = <span class="num">3</span> cm et AC = <span class="num">4</span> cm :</p>
<ol class="demo-steps">
<li>On applique le théorème : BC² = 3² + 4².</li>
<li>On calcule les carrés puis la somme : 9 + 16 = 25.</li>
<li>On prend la racine carrée : BC = √25, donc <mark>BC = 5 cm</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Calculer un côté de l'angle droit</h3>
<p>Si on connaît l'hypoténuse et un côté de l'angle droit, on retrouve l'autre côté en <b>soustrayant</b> les carrés.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Triangle rectangle avec BC = <span class="num">13</span> (hypoténuse) et AB = <span class="num">5</span> :</p>
<ol class="demo-steps">
<li>On isole le côté cherché : AC² = BC² − AB².</li>
<li>On calcule : 169 − 25 = 144.</li>
<li>On prend la racine carrée : AC = √144, donc <mark>AC = 12 cm</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Erreur classique</span><p>Pour trouver un côté de l'angle droit, on <b>soustrait</b> (BC² − AB²), on n'additionne pas ! On additionne uniquement pour trouver l'hypoténuse.</p></div>

<h3><span class="n">5</span>La réciproque : prouver qu'un triangle est rectangle</h3>
<div class="box prop"><span class="lab">Réciproque de Pythagore</span><p>Si dans un triangle, <b>le carré du plus grand côté est égal à la somme des carrés des deux autres</b>, alors ce triangle est rectangle (l'angle droit est opposé au plus grand côté).</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Un triangle a pour côtés 6, 8 et 10. On teste l'égalité de Pythagore :</p>
<ol class="demo-steps">
<li>Carré du plus grand côté : 10² = 100.</li>
<li>Somme des carrés des deux autres : 6² + 8² = 36 + 64 = 100.</li>
<li>Il y a égalité, donc le triangle est <mark>rectangle</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Dans un triangle <b>rectangle en A</b> : BC² = AB² + AC², où BC est l'<b>hypoténuse</b>. Pour l'hypoténuse, on <b>additionne</b> les carrés puis on prend la racine ; pour un côté de l'angle droit, on <b>soustrait</b> (BC² − AB²). Enfin, la <b>réciproque</b> permet de prouver qu'un triangle est rectangle : si (grand côté)² = somme des carrés des deux autres, alors il est rectangle.</p></div>
`,fiche:[["⊾","<b>Hypoténuse</b> = côté opposé à l'angle droit (le plus long)."],["=","<b>Pythagore</b> : rectangle en A ⟹ BC² = AB² + AC²."],["+","<b>Hypoténuse</b> : on additionne les carrés, puis racine carrée."],["−","<b>Côté de l'angle droit</b> : on soustrait (BC² − AB²)."],["⟲","<b>Réciproque</b> : si (grand côté)² = somme des 2 autres carrés ⟹ rectangle."],["⚠","Additionner pour l'hypoténuse, soustraire pour un côté de l'angle droit."]],qcm:[{t:"num",q:"ABC rectangle en A, AB = 6 cm, AC = 8 cm. Combien mesure l'hypoténuse BC ?",a:10,tol:.01,unit:"cm",ex:"BC² = 6² + 8² = 36 + 64 = 100, donc BC = √100 = 10 cm."},{t:"num",q:"Triangle rectangle : hypoténuse = 13 cm, un côté = 5 cm. L'autre côté mesure ?",a:12,tol:.01,unit:"cm",ex:"c² = 13² − 5² = 169 − 25 = 144, donc c = √144 = 12 cm."},{t:"vf",q:"Un triangle de côtés 6, 8 et 10 est rectangle.",a:!0,ex:"Vrai : 10² = 100 = 6² + 8² = 36 + 64. Par la réciproque, il est rectangle."},{t:"vf",q:"Un triangle de côtés 4, 5 et 6 est rectangle.",a:!1,ex:"Faux : 6² = 36, mais 4² + 5² = 16 + 25 = 41 ≠ 36. Il n'est pas rectangle."},{t:"qcm",q:"Pour trouver un côté de l'angle droit (autre que l'hypoténuse), on :",choices:["additionne les carrés","soustrait les carrés","multiplie les côtés","divise par 2"],a:1,ex:"On soustrait : (côté)² = (hypoténuse)² − (autre côté)²."}],exos:[{titre:"Calculer l'hypoténuse",niv:"Calcul",n:8,desc:"Application directe du théorème."},{titre:"Calculer un côté",niv:"Calcul",n:8,desc:"Retrouver un côté de l'angle droit par soustraction."},{titre:"Réciproque : rectangle ou non ?",niv:"Réflexion",n:8,desc:"Prouver qu'un triangle est (ou non) rectangle."}]},s={id:"cosinus",titre:"Cosinus dans le triangle rectangle",sous:"Relier un angle aigu et les longueurs.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Mesurer la hauteur d'un arbre sans y grimper, calculer l'inclinaison d'une rampe : dans un triangle rectangle, le <b>cosinus</b> relie un angle aigu à deux longueurs de côtés.</h2>

<h3><span class="n">1</span>Repérer les côtés d'un angle aigu</h3>
<p>Dans un triangle rectangle, on choisit un <span class="kw">angle aigu</span>. On donne alors un nom à chaque côté <b>par rapport à cet angle</b> :</p>
<ul>
<li>le <span class="kw">côté adjacent</span> à l'angle est celui qui « touche » l'angle (mais qui n'est pas l'hypoténuse) ;</li>
<li>l'<span class="kw">hypoténuse</span> reste le côté opposé à l'angle droit — le plus long côté du triangle.</li>
</ul>
<div class="box attention"><span class="lab">Attention</span><p>Les noms « adjacent » et « hypoténuse » dépendent de l'angle choisi : si on change d'angle aigu, le côté adjacent change aussi. Seule l'hypoténuse ne bouge jamais, car elle est fixée par l'angle droit.</p></div>

<h3><span class="n">2</span>Définition du cosinus</h3>
<p>Le <span class="kw">cosinus</span> d'un angle aigu est le <b>quotient</b> de la longueur du côté adjacent par la longueur de l'hypoténuse.</p>
<div class="box def"><span class="lab">Définition</span><p>Pour un angle aigu d'un triangle rectangle :</p>
<div class="formula">\\(\\cos(\\text{angle}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}\\)</div></div>
<div class="figbox"><svg viewBox="0 0 460 210">
  <path d="M80 170 L340 170 L80 50 Z" fill="rgba(15,163,107,.07)" stroke="#0FA36B" stroke-width="2.4"/>
  <path d="M80 148 L102 148 L102 170" fill="none" stroke="#15233F" stroke-width="1.5"/>
  <path d="M310 170 A35 35 0 0 0 300 148" class="arc"/>
  <text x="300" y="188" class="pt-label" fill="#B77800">angle</text>
  <text x="180" y="188" class="pt-label" fill="#1B4FCB">adjacent</text>
  <text x="205" y="100" class="pt-label" fill="#B77800">hypoténuse</text>
</svg><figcaption>cos = adjacent / hypoténuse (pour l'angle marqué)</figcaption></div>
<div class="box prop"><span class="lab">Propriété</span><p>Comme l'adjacent est toujours plus court que l'hypoténuse, le cosinus d'un angle aigu est <b>toujours compris entre 0 et 1</b> : <mark>0 &lt; cos(angle) &lt; 1</mark>.</p></div>

<h3><span class="n">3</span>Calculer une longueur</h3>
<p>Quand on connaît l'angle et l'hypoténuse, on retrouve le côté adjacent en <b>multipliant</b> l'hypoténuse par le cosinus de l'angle.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Angle de <span class="num">40</span>°, hypoténuse = <span class="num">10</span> cm. Quel est le côté adjacent ?</p>
<ol class="demo-steps">
<li>Je lis le cosinus à la calculatrice : cos(40°) ≈ <span class="num">0,766</span>.</li>
<li>Je multiplie l'hypoténuse par ce cosinus : 10 × 0,766.</li>
<li>Donc <mark>adjacent = 10 × cos(40°) ≈ 7,66 cm</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Calculer un angle</h3>
<p>Si on connaît l'adjacent et l'hypoténuse, on calcule d'abord leur quotient, puis on retrouve l'angle avec la touche <b>cos⁻¹</b> (ou « arccos ») de la calculatrice.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Adjacent = <span class="num">6</span>, hypoténuse = <span class="num">10</span>. Quel est l'angle ?</p>
<ol class="demo-steps">
<li>Je calcule le cosinus de l'angle : cos(angle) = 6/10 = <span class="num">0,6</span>.</li>
<li>J'applique la touche <b>cos⁻¹</b> à ce résultat : cos⁻¹(0,6).</li>
<li>Donc <mark>angle = cos⁻¹(0,6) ≈ 53°</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Réglage calculatrice</span><p>Vérifie que ta calculatrice est en mode <b>DEGRÉ</b> (D ou DEG), sinon les résultats seront faux !</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Dans un triangle rectangle, <b>cos(angle) = adjacent ÷ hypoténuse</b> (astuce <b>CAH</b> : Cosinus Adjacent Hypoténuse). Pour une longueur : adjacent = hypoténuse × cos(angle). Pour un angle : on calcule adjacent ÷ hypoténuse, puis <b>cos⁻¹</b>. Le cosinus d'un angle aigu est toujours entre 0 et 1, et la calculatrice doit rester en mode <b>DEGRÉ</b>.</p></div>
`,fiche:[["adj","<b>Adjacent</b> : côté qui touche l'angle (≠ hypoténuse)."],["cos","<b>cos(angle) = adjacent ÷ hypoténuse</b>."],["→L","Longueur : adjacent = hyp × cos(angle)."],["→∠","Angle : cos⁻¹(adjacent ÷ hypoténuse)."],["DEG","Calculatrice toujours en mode DEGRÉ."],["0-1","Le cosinus d'un angle aigu est toujours entre 0 et 1."]],qcm:[{t:"qcm",q:"Le cosinus d'un angle aigu dans un triangle rectangle est égal à :",choices:["opposé ÷ hypoténuse","adjacent ÷ hypoténuse","adjacent ÷ opposé","hypoténuse ÷ adjacent"],a:1,ex:"cos = adjacent / hypoténuse. (Astuce : CAH — Cosinus Adjacent Hypoténuse.)"},{t:"num",q:"Hypoténuse = 10 cm, angle = 60°. Côté adjacent ? (cos 60° = 0,5)",a:5,tol:.05,unit:"cm",ex:"adjacent = hyp × cos(60°) = 10 × 0,5 = 5 cm."},{t:"vf",q:"Le cosinus d'un angle aigu peut être supérieur à 1.",a:!1,ex:"Faux : l'adjacent est toujours plus court que l'hypoténuse, donc 0 < cos < 1."},{t:"num",q:"Adjacent = 8 cm, hypoténuse = 8 cm : que vaut le cosinus de l'angle ?",a:1,tol:.01,unit:"",ex:"cos = 8/8 = 1. (Ce cas limite correspond à un angle de 0°.)"},{t:"qcm",q:"Pour retrouver un angle à partir de son cosinus, on utilise :",choices:["cos","cos⁻¹ (arccos)","tan","√"],a:1,ex:"La touche cos⁻¹ (ou arccos) donne l'angle dont on connaît le cosinus."}],exos:[{titre:"Calculer une longueur",niv:"Calcul",n:8,desc:"Utiliser le cosinus pour trouver un côté."},{titre:"Calculer un angle",niv:"Calcul",n:6,desc:"Utiliser cos⁻¹ pour retrouver un angle."},{titre:"Problèmes concrets",niv:"Réflexion",n:6,desc:"Échelle contre un mur, rampe, toit…"}]},a={id:"thales-4e",titre:"Le théorème de Thalès",sous:"Proportionnalité des longueurs et droite des milieux.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Mesurer la hauteur d'un arbre à partir de son ombre, ou vérifier qu'une pièce est bien découpée : le <b>théorème de Thalès</b> relie les longueurs de deux triangles emboîtés dès que deux droites sont <b>parallèles</b>.</h2>

<h3><span class="n">1</span>La configuration de Thalès</h3>
<p>Le théorème s'utilise dans une <span class="kw">configuration</span> précise : deux droites <b>sécantes</b> en un même point A, coupées par <b>deux droites parallèles</b>. On reconnaît alors deux triangles emboîtés qui partagent le sommet A.</p>
<div class="box prop"><span class="lab">Théorème de Thalès</span><p>Soit deux droites (BM) et (CN) sécantes en A. Si <b>(MN) ∥ (BC)</b>, alors les longueurs sont <span class="kw">proportionnelles</span> :</p><p><mark>AM/AB = AN/AC = MN/BC</mark></p></div>
<div class="figbox"><svg viewBox="0 0 460 220">
  <line x1="230" y1="25" x2="70" y2="200" class="seg"/>
  <line x1="230" y1="25" x2="390" y2="200" class="seg"/>
  <line x1="160" y1="105" x2="300" y2="105" class="seg-a"/>
  <line x1="70" y1="200" x2="390" y2="200" class="seg-a"/>
  <circle cx="230" cy="25" r="4.5" class="pt-dot"/><text x="222" y="18" class="pt-label">A</text>
  <circle cx="160" cy="105" r="4.5" class="pt-dot"/><text x="142" y="102" class="pt-label">M</text>
  <circle cx="300" cy="105" r="4.5" class="pt-dot"/><text x="306" y="102" class="pt-label">N</text>
  <circle cx="70" cy="200" r="4.5" class="pt-dot"/><text x="56" y="216" class="pt-label">B</text>
  <circle cx="390" cy="200" r="4.5" class="pt-dot"/><text x="396" y="216" class="pt-label">C</text>
  <path d="M225 95 l8 0 M229 93 l0 4" stroke="#B77800" stroke-width="1.6"/>
  <path d="M225 190 l8 0 M229 188 l0 4" stroke="#B77800" stroke-width="1.6"/>
</svg><figcaption>(MN) ∥ (BC) ⟹ AM/AB = AN/AC = MN/BC</figcaption></div>

<h3><span class="n">2</span>Méthode de calcul</h3>
<p>Pour trouver une longueur manquante, on écrit l'égalité des <span class="kw">rapports</span>, puis on utilise le <b>produit en croix</b>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>On choisit les deux rapports qui contiennent la longueur cherchée, on écrit leur égalité, puis on isole l'inconnue par <b>produit en croix</b>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>On donne AM = <span class="num">3</span>, AB = <span class="num">6</span>, AN = <span class="num">4</span> et l'on cherche AC :</p>
<ol class="demo-steps">
<li>On écrit l'égalité des rapports qui contiennent AC : AM/AB = AN/AC, soit <span class="num">3</span>/<span class="num">6</span> = <span class="num">4</span>/AC.</li>
<li>Produit en croix : AC = (<span class="num">6</span> × <span class="num">4</span>) ÷ <span class="num">3</span>.</li>
<li>Donc <mark>AC = 8</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Le théorème de la droite des milieux</h3>
<p>C'est un cas particulier très utile de Thalès, lorsque les points M et N sont les <span class="kw">milieux</span> des côtés :</p>
<div class="box prop"><span class="lab">Droite des milieux</span><p><b>①</b> Si une droite passe par les <b>milieux de deux côtés</b> d'un triangle, alors elle est <b>parallèle au troisième côté</b>.</p><p><b>②</b> De plus, le segment qui joint ces deux milieux mesure <b>la moitié</b> du troisième côté.</p></div>

<h3><span class="n">4</span>Bien identifier la configuration</h3>
<div class="box attention"><span class="lab">Points de vigilance</span><p>Le point A (l'intersection) doit apparaître dans <b>tous</b> les rapports. On aligne toujours : petit triangle « en haut », grand triangle « en bas ». Les points doivent être dans le <b>même ordre</b> sur chaque droite.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Le <b>théorème de Thalès</b> s'applique quand deux droites sécantes en A sont coupées par deux <b>parallèles</b> : les longueurs deviennent proportionnelles, <b>AM/AB = AN/AC = MN/BC</b>. On trouve une longueur manquante par <b>produit en croix</b>. Cas particulier, la <b>droite des milieux</b> : joindre deux milieux donne une droite parallèle au troisième côté, moitié de sa longueur. Enfin, le sommet A doit figurer dans tous les rapports, en respectant l'ordre des points.</p></div>
`,fiche:[["∥","Configuration : 2 droites sécantes en A + 2 parallèles (MN)∥(BC)."],["=","<b>Thalès</b> : AM/AB = AN/AC = MN/BC."],["✕","Longueur manquante : produit en croix."],["½","<b>Droite des milieux</b> : joint 2 milieux ⟹ parallèle au 3ᵉ côté, moitié de sa longueur."],["A","Le sommet A doit être dans tous les rapports."],["↕","Respecter l'ordre des points (petit triangle / grand triangle)."]],qcm:[{t:"num",q:"(MN)∥(BC). AM = 3, AB = 6, AN = 4. Combien vaut AC ?",a:8,tol:.01,unit:"",ex:"AM/AB = AN/AC ⟹ 3/6 = 4/AC ⟹ AC = (6×4)/3 = 8."},{t:"num",q:"Droite des milieux : le 3ᵉ côté d'un triangle mesure 14 cm. Le segment des milieux mesure ?",a:7,tol:.01,unit:"cm",ex:"Le segment des milieux vaut la moitié du 3ᵉ côté : 14 ÷ 2 = 7 cm."},{t:"vf",q:"Le théorème de Thalès exige que deux droites soient parallèles.",a:!0,ex:"Vrai : la configuration repose sur deux droites parallèles coupant deux sécantes."},{t:"num",q:"(MN)∥(BC). AM = 4, AB = 10, MN = 6. Combien mesure BC ?",a:15,tol:.01,unit:"cm",ex:"AM/AB = MN/BC ⟹ 4/10 = 6/BC ⟹ BC = (10×6)/4 = 15 cm."},{t:"qcm",q:"Pour trouver une longueur avec Thalès, on utilise :",choices:["Pythagore","le produit en croix","le rapporteur","la calculatrice en radians"],a:1,ex:"On écrit l'égalité des rapports puis on applique le produit en croix."}],exos:[{titre:"Calculer une longueur",niv:"Calcul",n:8,desc:"Appliquer Thalès et le produit en croix."},{titre:"Droite des milieux",niv:"Application",n:6,desc:"Parallélisme et longueur moitié."},{titre:"Configurations variées",niv:"Réflexion",n:6,desc:"Reconnaître et bien poser les rapports."}]},n={id:"translations",titre:"Les translations",sous:"Faire glisser une figure sans la déformer.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Répéter un motif sur une frise, faire glisser un carrelage sans le tourner : la <b>translation</b> déplace une figure en bloc, en gardant sa forme, sa taille et son orientation.</h2>

<h3><span class="n">1</span>Idée générale</h3>
<p>Une <span class="kw">translation</span> fait <b>glisser</b> une figure : tous les points se déplacent de la <b>même distance</b>, dans la <b>même direction</b> et le <b>même sens</b>. La figure garde exactement sa forme et son orientation.</p>
<div class="box def"><span class="lab">Définition</span><p>Une <span class="kw">translation</span> est un <b>glissement</b> : chaque point de la figure se déplace de la même façon — même direction, même sens, même longueur.</p></div>

<h3><span class="n">2</span>Définir une translation</h3>
<p>Une translation est définie par un <b>déplacement</b> : « qui transforme A en B ». On dit alors qu'un point M est envoyé sur M' si le quadrilatère ABM'M est un <span class="kw">parallélogramme</span> (glissement identique).</p>
<div class="box def"><span class="lab">Caractérisation</span><p>M' est l'<b>image</b> de M par la translation qui transforme A en B lorsque <b>[AM'] et [BM] ont le même milieu</b> (autrement dit ABM'M est un parallélogramme).</p></div>
<div class="figbox"><svg viewBox="0 0 460 190">
  <polygon points="60,150 130,150 95,90" fill="rgba(15,163,107,.08)" stroke="#0FA36B" stroke-width="2"/>
  <polygon points="270,110 340,110 305,50" fill="rgba(47,107,237,.06)" stroke="#2F6BED" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="95" y1="120" x2="305" y2="80" stroke="#F2A100" stroke-width="2"/>
  <polygon points="305,80 291,78 296,88" fill="#F2A100"/>
  <text x="150" y="90" class="pt-label" fill="#B77800">translation</text>
</svg><figcaption>La figure glisse : même direction, même sens, même longueur</figcaption></div>

<h3><span class="n">3</span>Propriétés</h3>
<div class="box prop"><span class="lab">Conservation</span><p>La translation conserve les <b>longueurs</b>, les <b>angles</b>, les <b>aires</b>, l'<b>alignement</b>, le <b>parallélisme</b> — et aussi l'<b>orientation</b> (contrairement aux symétries, elle ne « retourne » pas la figure).</p></div>

<h3><span class="n">4</span>Différences avec les symétries</h3>
<p>Toutes ces transformations produisent une figure <b>superposable</b> à celle de départ, mais elles ne la placent pas de la même manière :</p>
<ul>
<li><b>Translation</b> : glissement, même sens — la figure n'est pas retournée.</li>
<li><b>Symétrie axiale</b> : effet miroir — la figure est retournée.</li>
<li><b>Symétrie centrale</b> : demi-tour — la figure est renversée.</li>
</ul>
<div class="box exemple"><span class="lab">Dans la vie</span><p>Les <span class="kw">frises</span> et <span class="kw">pavages</span> (carrelages, papiers peints) se construisent souvent par translations répétées d'un même motif.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>translation</b> fait glisser une figure : même direction, même sens, même longueur. M' est l'image de M lorsque <b>ABM'M est un parallélogramme</b>. Elle conserve <b>longueurs, angles, aires, parallélisme</b> et l'<b>orientation</b> — à la différence des symétries qui retournent la figure. On l'utilise pour construire <b>frises et pavages</b>.</p></div>
`,fiche:[["→","<b>Translation</b> = glissement : même direction, même sens, même longueur."],["▱","M' image de M ⟺ ABM'M est un parallélogramme."],["=","Conserve longueurs, angles, aires, parallélisme."],["↑","Conserve l'orientation (la figure n'est pas retournée)."],["≠","Différente des symétries (qui retournent la figure)."],["▦","Sert à construire frises et pavages."]],qcm:[{t:"qcm",q:"Dans une translation, tous les points se déplacent :",choices:["vers un même centre","de la même façon (direction, sens, longueur)","en tournant","en se rapprochant"],a:1,ex:"Tous les points glissent identiquement : même direction, même sens, même distance."},{t:"vf",q:"Une translation conserve les longueurs et les angles.",a:!0,ex:"Vrai : la figure image est identique (superposable) à la figure de départ."},{t:"vf",q:"Une translation retourne la figure comme un miroir.",a:!1,ex:"Faux : c'est la symétrie axiale qui retourne. La translation conserve l'orientation."},{t:"qcm",q:"M' est l'image de M par la translation transformant A en B si :",choices:["ABMM' est un parallélogramme","ABM'M est un parallélogramme","M est le milieu de [AB]","AM = BM'"],a:1,ex:"Il faut ABM'M parallélogramme (les segments [AM'] et [BM] ont le même milieu)."},{t:"qcm",q:"Quelle transformation sert typiquement à construire une frise ?",choices:["la translation","la symétrie centrale uniquement","aucune","l'homothétie"],a:0,ex:"Les frises et pavages sont générés en répétant un motif par translation."}],exos:[{titre:"Construire une image",niv:"Construction",n:6,desc:"Image d'un point/figure par une translation."},{titre:"Propriétés",niv:"Application",n:6,desc:"Utiliser la conservation des longueurs et angles."},{titre:"Frises et pavages",niv:"Réflexion",n:5,desc:"Reconnaître les translations dans des motifs."}]},t={id:"espace-4e",titre:"L'espace : pyramides et cônes",sous:"Représenter et calculer des volumes dans l'espace.",dom:"",cours:`
<h2 class="chap-intro">Une tente de camping, une glace en cornet, la pyramide du Louvre : dès qu'un solide se resserre en une seule <b>pointe</b> au-dessus de sa base, son volume s'obtient toujours de la même façon — en <b>divisant par 3</b>.</h2>

<h3><span class="n">1</span>Vocabulaire</h3>
<p>Une <span class="kw">pyramide</span> a une base polygonale et des faces triangulaires qui se rejoignent en un point : le <b>sommet</b>. Un <span class="kw">cône de révolution</span> a une base en forme de disque et un sommet.</p>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">hauteur</span> d'une pyramide ou d'un cône est le segment reliant le sommet à la base, <b>perpendiculairement</b> à celle-ci.</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <g transform="translate(20,10)">
    <polygon points="30,160 150,160 175,130 55,130" fill="rgba(15,163,107,.05)" stroke="#0FA36B" stroke-width="1.6"/>
    <line x1="30" y1="160" x2="100" y2="30" stroke="#0FA36B" stroke-width="1.6"/>
    <line x1="150" y1="160" x2="100" y2="30" stroke="#0FA36B" stroke-width="1.6"/>
    <line x1="175" y1="130" x2="100" y2="30" stroke="#0FA36B" stroke-width="1.6"/>
    <line x1="55" y1="130" x2="100" y2="30" stroke="#0FA36B" stroke-width="1" stroke-dasharray="4 3"/>
    <line x1="100" y1="30" x2="100" y2="145" stroke="#F2A100" stroke-width="1.6" stroke-dasharray="5 4"/>
    <text x="105" y="90" class="pt-label" fill="#B77800">h</text>
    <text x="60" y="190" class="pt-label">pyramide</text>
  </g>
  <g transform="translate(260,10)">
    <ellipse cx="90" cy="150" rx="55" ry="16" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="1.6"/>
    <line x1="35" y1="150" x2="90" y2="30" stroke="#2F6BED" stroke-width="1.6"/>
    <line x1="145" y1="150" x2="90" y2="30" stroke="#2F6BED" stroke-width="1.6"/>
    <line x1="90" y1="30" x2="90" y2="150" stroke="#F2A100" stroke-width="1.6" stroke-dasharray="5 4"/>
    <text x="95" y="95" class="pt-label" fill="#B77800">h</text>
    <text x="75" y="190" class="pt-label" fill="#1B4FCB">cône</text>
  </g>
</svg><figcaption>Pyramide et cône : la hauteur relie le sommet à la base</figcaption></div>

<h3><span class="n">2</span>Volume d'une pyramide et d'un cône</h3>
<p>Pour ces deux solides pointus, le volume se calcule avec une <b>seule</b> formule.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Le volume d'une pyramide ou d'un cône est : <mark>\\(\\text{Volume} = \\dfrac{\\text{Aire de la base}\\times\\text{hauteur}}{3}\\)</mark>.</p></div>
<p>La grande différence avec le prisme et le cylindre : on <b>divise par 3</b>.</p>
<div class="box def"><span class="lab">En détail</span>
<ol class="demo-steps">
<li><b>Pyramide</b> : V = (aire de la base × h) ÷ 3.</li>
<li><b>Cône</b> : V = (π × r² × h) ÷ 3 — le disque de base × hauteur, divisé par 3.</li>
</ol></div>

<h3><span class="n">3</span>Exemple de calcul</h3>
<div class="box exemple"><span class="lab">Exemple</span><p>Pyramide à base carrée de côté <span class="num">6</span> cm, hauteur <span class="num">10</span> cm :</p>
<ol class="demo-steps">
<li>Aire de la base : 6 × 6 = <span class="num">36</span> cm².</li>
<li>Volume : (36 × 10) ÷ 3 = 360 ÷ 3 = <mark>120 cm³</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Représentation en perspective cavalière</h3>
<p>Pour dessiner un solide, on utilise la <span class="kw">perspective cavalière</span> : les arêtes cachées sont en pointillés, et les longueurs parallèles à la profondeur sont réduites (souvent multipliées par un coefficient).</p>
<div class="box attention"><span class="lab">Attention</span><p>Pour la pyramide et le cône, on divise <b>TOUJOURS</b> par 3. C'est l'erreur la plus fréquente de ce chapitre.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>pyramide</b> a une base polygonale et un sommet ; un <b>cône</b> a une base en disque et un sommet. La <b>hauteur</b> relie le sommet à la base, perpendiculairement. Le volume des deux vaut <b>(aire de la base × hauteur) ÷ 3</b> ; pour le cône, V = (π × r² × h) ÷ 3. On <b>divise toujours par 3</b> — c'est ce qui les distingue du prisme et du cylindre.</p></div>
`,fiche:[["△","<b>Pyramide</b> : base polygonale + sommet."],["◭","<b>Cône</b> : base disque + sommet."],["h","<b>Hauteur</b> : du sommet à la base, perpendiculairement."],["÷3","<b>Volume</b> = (aire de la base × hauteur) ÷ 3."],["◭","Cône : V = (π × r² × h) ÷ 3."],["⚠","Toujours diviser par 3 (différence avec prisme/cylindre)."]],qcm:[{t:"num",q:"Pyramide à base carrée de côté 6 cm, hauteur 10 cm. Volume ?",a:120,tol:.5,unit:"cm³",ex:"Base = 36 cm² ; V = (36 × 10) ÷ 3 = 360 ÷ 3 = 120 cm³."},{t:"num",q:"Pyramide : aire de base 15 cm², hauteur 8 cm. Volume ?",a:40,tol:.5,unit:"cm³",ex:"V = (15 × 8) ÷ 3 = 120 ÷ 3 = 40 cm³."},{t:"vf",q:"Le volume d'un cône se calcule en divisant par 3.",a:!0,ex:"Vrai : V = (π × r² × h) ÷ 3. Comme la pyramide, on divise par 3."},{t:"qcm",q:"Sur une figure en perspective cavalière, les arêtes cachées sont :",choices:["en gras","en pointillés","en couleur","effacées"],a:1,ex:"Les arêtes cachées se dessinent en pointillés."},{t:"num",q:"Un prisme de base 12 cm² et hauteur 5 cm a un volume de … cm³.",a:60,tol:.5,unit:"cm³",ex:"Pour un prisme (pas de division par 3) : V = 12 × 5 = 60 cm³."}],exos:[{titre:"Volumes de pyramides",niv:"Calcul",n:8,desc:"Appliquer la formule ÷ 3."},{titre:"Volumes de cônes",niv:"Calcul",n:6,desc:"Avec π et le disque de base."},{titre:"Perspective & patrons",niv:"Réflexion",n:5,desc:"Lire des représentations et des patrons."}]},i={id:"milieux-4e",titre:"Le théorème des milieux",sous:"La droite des milieux dans un triangle.",dom:"",cours:`
<h2 class="chap-intro">Dans un triangle, il suffit de relier les <b>milieux de deux côtés</b> pour tracer un segment très spécial : il est toujours <b>parallèle au troisième côté</b> et exactement <b>deux fois plus court</b>.</h2>

<h3><span class="n">1</span>La droite des milieux</h3>
<p>Dans un triangle, la droite qui joint les <span class="kw">milieux de deux côtés</span> a des propriétés remarquables. On appelle <b>I</b> le milieu de [AB] et <b>J</b> le milieu de [AC] : le segment [IJ] est ce qu'on appelle la <span class="kw">droite des milieux</span>.</p>
<div class="figbox"><svg viewBox="0 0 460 220">
  <polygon points="200,35 60,195 340,195" fill="#EAF7F1" stroke="#0FA36B" stroke-width="2.4"/>
  <line x1="130" y1="115" x2="270" y2="115" stroke="#E0723A" stroke-width="2.8"/>
  <circle cx="130" cy="115" r="5" class="pt-dot"/><text x="108" y="112" class="pt-label">I</text>
  <circle cx="270" cy="115" r="5" class="pt-dot"/><text x="278" y="112" class="pt-label">J</text>
  <text x="192" y="28" class="pt-label">A</text><text x="46" y="210" class="pt-label">B</text><text x="330" y="210" class="pt-label">C</text>
</svg><figcaption>I et J milieux : (IJ) ∥ (BC) et IJ = BC ÷ 2</figcaption></div>

<h3><span class="n">2</span>Le théorème des milieux (direct)</h3>
<div class="box prop"><span class="lab">Propriété</span><p>Si <b>I</b> est le milieu de [AB] et <b>J</b> le milieu de [AC], alors la droite <b>(IJ) est parallèle à (BC)</b> et sa longueur vaut la moitié : <mark>IJ = BC ÷ 2</mark>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Dans un triangle où <b>BC = 10 cm</b>, avec I et J milieux de [AB] et [AC] :</p>
<ol class="demo-steps">
<li>On applique la formule : IJ = BC ÷ 2 = <span class="num">10</span> ÷ <span class="num">2</span>.</li>
<li>On calcule : <mark>IJ = 5 cm</mark>.</li>
</ol></div>
<div class="box methode"><span class="lab">Méthode</span><p>La formule se lit aussi <b>dans l'autre sens</b> : si l'on connaît IJ, alors <b>BC = 2 × IJ</b>. Par exemple, si IJ = <span class="num">4</span> cm, alors BC = <span class="num">2</span> × <span class="num">4</span> = <mark>8 cm</mark>.</p></div>

<h3><span class="n">3</span>La réciproque</h3>
<p>La réciproque permet de démontrer qu'un point est un <b>milieu</b> à partir d'un parallélisme.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans un triangle ABC, si une droite passe par le <b>milieu de [AB]</b> et est <b>parallèle à (BC)</b>, alors elle coupe [AC] en son <b>milieu</b>.</p></div>

<h3><span class="n">4</span>Lien avec Thalès</h3>
<div class="box def"><span class="lab">Un cas particulier</span><p>Le théorème des milieux est un <b>cas particulier</b> du <span class="kw">théorème de Thalès</span>, avec un coefficient égal à 2.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Si I et J sont les <b>milieux</b> de [AB] et [AC], alors <b>(IJ) ∥ (BC)</b> et <b>IJ = BC ÷ 2</b> (donc BC = 2 × IJ). La <b>réciproque</b> : une droite passant par le milieu de [AB] et parallèle à (BC) coupe [AC] en son milieu. C'est un <b>cas particulier du théorème de Thalès</b> (coefficient 2), utile pour démontrer un parallélisme ou calculer une longueur.</p></div>
`,fiche:[["∥","Milieux I, J ⟹ <b>(IJ) ∥ (BC)</b>."],["½","<b>IJ = BC ÷ 2</b> (la longueur est divisée par 2)."],["↩","Réciproque : milieu + parallèle ⟹ milieu de l'autre côté."],["Th","Cas particulier du <b>théorème de Thalès</b> (coefficient 2)."],["×2","Connaissant IJ : BC = 2 × IJ."],["△","Sert à démontrer parallélisme et calculer des longueurs."]],qcm:[{t:"num",q:"Dans un triangle, BC = 10 cm. I, J milieux de [AB] et [AC]. Combien mesure <b>IJ</b> (en cm) ?",a:5,tol:.01,unit:"cm",ex:"IJ = BC ÷ 2 = 10 ÷ 2 = 5 cm."},{t:"vf",q:"Avec I, J milieux de [AB] et [AC], la droite (IJ) est parallèle à (BC).",a:!0,ex:"Vrai : c'est le théorème des milieux."},{t:"num",q:"I, J milieux et IJ = 4 cm. Combien mesure <b>BC</b> (en cm) ?",a:8,tol:.01,unit:"cm",ex:"BC = 2 × IJ = 2 × 4 = 8 cm."},{t:"qcm",q:"Le théorème des milieux est un cas particulier du théorème de :",choices:["Pythagore","Thalès","Al-Kashi","la médiane"],a:1,ex:"C'est un cas particulier du théorème de Thalès."},{t:"vf",q:"Une droite passant par le milieu de [AB] et parallèle à (BC) coupe [AC] en son milieu.",a:!0,ex:"Vrai : c'est la réciproque du théorème des milieux."}],exos:[{titre:"Calculer une longueur",niv:"Application",n:8,desc:"Utiliser IJ = BC ÷ 2 dans les deux sens."},{titre:"Démontrer un parallélisme",niv:"Raisonnement",n:6,desc:"Justifier que deux droites sont parallèles."},{titre:"Milieux successifs",niv:"Réflexion",n:6,desc:"Enchaîner le théorème dans une figure."}]},l={id:"puissances-4e",titre:"Les puissances",sous:"Exposants, règles, puissances de 10.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Écrire 2 × 2 × 2 × 2 × 2 devient vite fastidieux : on préfère la notation courte 2⁵. Une <b>puissance</b> est ce raccourci d'écriture pour un produit de facteurs tous égaux.</h2>

<h3><span class="n">1</span>Notation puissance</h3>
<p>Une <span class="kw">puissance</span> est un <b>produit de facteurs égaux</b> : aⁿ = a × a × … × a (n fois). Le nombre a est la <span class="kw">base</span>, le nombre n est l'<span class="kw">exposant</span> : il indique combien de fois on répète le facteur. On lit 2³ « <b>2 puissance 3</b> ».</p>
<div class="figbox"><svg viewBox="0 0 440 80">
  <text x="30" y="50" font-family="Space Mono" font-size="26" fill="#15233F">2³ = 2 × 2 × 2 = 8</text>
  <text x="30" y="72" font-family="Space Mono" font-size="13" fill="#EA8C00">exposant = nombre de facteurs</text>
</svg><figcaption>La puissance : un produit de facteurs égaux</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Pour un exposant n entier, aⁿ = a × a × … × a avec <b>n facteurs</b> égaux à la <span class="kw">base</span> a. Ainsi 2³ = <span class="num">2</span> × <span class="num">2</span> × <span class="num">2</span> = <mark>8</mark>. On dit aussi que a² se lit « a au carré ».</p></div>

<h3><span class="n">2</span>Règles de calcul</h3>
<p>Pour multiplier ou diviser deux puissances d'une <b>même base</b>, inutile de tout développer : on agit directement sur les <span class="kw">exposants</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Avec une même base a : aᵐ × aⁿ = aᵐ⁺ⁿ (on <b>additionne</b> les exposants) et aᵐ ÷ aⁿ = aᵐ⁻ⁿ (on <b>soustrait</b> les exposants). Par convention, <mark>a⁰ = 1</mark> (avec a ≠ 0).</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer 3² × 3¹ :</p>
<ol class="demo-steps">
<li>Même base <span class="num">3</span> : on additionne les exposants <span class="num">2</span> + <span class="num">1</span> = <span class="num">3</span>.</li>
<li>Donc 3² × 3¹ = 3³.</li>
<li>Soit <mark>3² × 3¹ = 27</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Puissances de 10</h3>
<p>10ⁿ est le nombre <b>1 suivi de n zéros</b> : 10⁴ = 10 000. Ces <span class="kw">puissances de 10</span> servent à écrire commodément de très grands nombres.</p>
<table>
<tr><th>Puissance</th><th>Écriture décimale</th></tr>
<tr><td>10¹</td><td>10</td></tr>
<tr><td>10²</td><td>100</td></tr>
<tr><td>10³</td><td>1 000</td></tr>
<tr><td>10⁴</td><td>10 000</td></tr>
</table>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>puissance</b> aⁿ est un produit de n facteurs égaux à la base a, où l'exposant n compte les facteurs. Sur une <b>même base</b>, on <b>additionne</b> les exposants pour un produit (aᵐ × aⁿ = aᵐ⁺ⁿ) et on les <b>soustrait</b> pour un quotient (aᵐ ÷ aⁿ = aᵐ⁻ⁿ), avec la convention a⁰ = 1. Enfin, 10ⁿ est le <b>1 suivi de n zéros</b>, pratique pour les grands nombres.</p></div>
`,fiche:[["aⁿ","<b>aⁿ</b> = a × a × … × a (n facteurs)."],["×","aᵐ × aⁿ = aᵐ⁺ⁿ (même base)."],["÷","aᵐ ÷ aⁿ = aᵐ⁻ⁿ."],["a⁰","a⁰ = 1 (a ≠ 0)."],["10ⁿ","10ⁿ = 1 suivi de n zéros."],["²","a² se lit « a au carré »."]],qcm:[{t:"num",q:"Calcule 2³.",a:8,tol:.01,unit:"",ex:"2 × 2 × 2 = 8."},{t:"num",q:"Calcule 5².",a:25,tol:.01,unit:"",ex:"5 × 5 = 25."},{t:"num",q:"Calcule 10⁴.",a:1e4,tol:.01,unit:"",ex:"1 suivi de 4 zéros : 10 000."},{t:"vf",q:"a⁰ = 1 (avec a ≠ 0).",a:!0,ex:"Vrai : c'est une convention."},{t:"num",q:"3² × 3¹ = 3^? Quel est l'exposant du résultat ?",a:3,tol:.01,unit:"",ex:"On additionne les exposants : 2 + 1 = 3."}],exos:[{titre:"Calculer des puissances",niv:"Application",n:8,desc:"Évaluer des puissances entières."},{titre:"Règles des exposants",niv:"Application",n:8,desc:"Produits et quotients de même base."},{titre:"Puissances de 10",niv:"Réflexion",n:6,desc:"Grands nombres et puissances de 10."}]},r={id:"stats-4e",titre:"Moyenne pondérée et étendue",sous:"Pondérer, mesurer la dispersion.",dom:"Statistiques",noTrace:!0,cours:`
<h2 class="chap-intro">Au collège, un contrôle « qui compte double » pèse plus lourd dans la moyenne qu'une simple interrogation : c'est une <b>moyenne pondérée</b>. Et pour savoir si des résultats sont resserrés ou dispersés, on regarde l'<b>étendue</b>.</h2>

<h3><span class="n">1</span>La moyenne pondérée</h3>
<p>Quand des valeurs ont des <span class="kw">effectifs</span> (ou des <span class="kw">coefficients</span>) différents, on ne peut pas simplement les additionner et diviser par leur nombre. On calcule alors une <span class="kw">moyenne pondérée</span> : chaque valeur est comptée autant de fois que le dit son effectif.</p>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">moyenne pondérée</span> s'obtient en multipliant chaque valeur par son <b>effectif</b>, en additionnant tous ces produits, puis en divisant par l'<b>effectif total</b> : Σ(valeur × effectif) ÷ effectif total.</p></div>
<div class="figbox"><svg viewBox="0 0 440 100">
  <rect x="30" y="20" width="380" height="60" fill="none" stroke="#15233F"/>
  <line x1="30" y1="50" x2="410" y2="50" stroke="#15233F"/><line x1="150" y1="20" x2="150" y2="80" stroke="#15233F"/>
  <g font-family="Space Mono" font-size="13" fill="#15233F" text-anchor="middle">
  <text x="90" y="40">Note</text><text x="90" y="70">Coeff.</text>
  <text x="220" y="40">10</text><text x="220" y="70">2</text><text x="320" y="40">16</text><text x="320" y="70">2</text></g>
  <text x="250" y="97" font-family="Space Mono" font-size="11" fill="#0E8C8C" text-anchor="middle">Moyenne = (10×2 + 16×2) ÷ 4 = 13</text>
</svg><figcaption>Moyenne pondérée par les coefficients</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Deux notes : <span class="num">10</span> (coefficient <span class="num">2</span>) et <span class="num">16</span> (coefficient <span class="num">2</span>).</p>
<ol class="demo-steps">
<li>On multiplie chaque note par son coefficient : <span class="num">10</span> × <span class="num">2</span> = <span class="num">20</span> et <span class="num">16</span> × <span class="num">2</span> = <span class="num">32</span>.</li>
<li>On additionne les produits : <span class="num">20</span> + <span class="num">32</span> = <span class="num">52</span>.</li>
<li>On divise par l'effectif total <span class="num">2</span> + <span class="num">2</span> = <span class="num">4</span> : <mark>52 ÷ 4 = 13</mark>.</li>
</ol></div>

<h3><span class="n">2</span>L'étendue</h3>
<p>La moyenne ne dit pas tout : deux séries peuvent avoir la même moyenne mais des valeurs plus ou moins <b>dispersées</b>. Pour mesurer cette dispersion, on utilise l'<span class="kw">étendue</span>.</p>
<div class="box def"><span class="lab">Définition</span><p>L'<span class="kw">étendue</span> d'une série est la différence entre la <b>plus grande</b> valeur et la <b>plus petite</b> valeur : étendue = max − min. Elle mesure l'écart total de la série.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Série <span class="num">5</span>, <span class="num">8</span>, <span class="num">12</span>, <span class="num">20</span> :</p>
<ol class="demo-steps">
<li>La plus grande valeur est <span class="num">20</span>, la plus petite est <span class="num">5</span>.</li>
<li>On soustrait : <mark>20 − 5 = 15</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Une étendue <b>nulle</b> signifie que toutes les valeurs sont égales : la série 7, 7, 7 a pour étendue 7 − 7 = 0.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>moyenne pondérée</b> compte chaque valeur selon son effectif : Σ(valeur × effectif) ÷ effectif total. L'<b>étendue</b> = plus grande valeur − plus petite valeur ; elle mesure la <b>dispersion</b> de la série. Plus l'étendue est grande, plus les valeurs sont écartées ; une étendue nulle veut dire que toutes les valeurs sont identiques.</p></div>
`,fiche:[["x̄","<b>Moyenne pondérée</b> : Σ(valeur × effectif) ÷ effectif total."],["×","Chaque valeur compte selon son effectif."],["Σ","On additionne tous les produits."],["max−min","<b>Étendue</b> = plus grande − plus petite valeur."],["↔","L'étendue mesure la dispersion."],["0","Étendue nulle : toutes les valeurs égales."]],qcm:[{t:"num",q:"Deux notes : 10 (coeff 2) et 16 (coeff 2). Moyenne pondérée ?",a:13,tol:.01,unit:"",ex:"(10×2 + 16×2) ÷ 4 = 52 ÷ 4 = 13."},{t:"num",q:"Étendue de la série 5, 8, 12, 20 ?",a:15,tol:.01,unit:"",ex:"20 − 5 = 15."},{t:"num",q:"Moyenne pondérée : 8 (coeff 1) et 14 (coeff 3). Résultat ?",a:12.5,tol:.01,unit:"",ex:"(8 + 42) ÷ 4 = 50 ÷ 4 = 12,5."},{t:"vf",q:"L'étendue est la différence entre la plus grande et la plus petite valeur.",a:!0,ex:"Vrai : c'est la définition de l'étendue."},{t:"num",q:"Étendue de 7, 7, 7 ?",a:0,tol:.01,unit:"",ex:"7 − 7 = 0 : valeurs toutes égales."}],exos:[{titre:"Moyenne pondérée",niv:"Application",n:8,desc:"Calculer avec des effectifs/coefficients."},{titre:"Étendue",niv:"Application",n:6,desc:"Calculer l'étendue d'une série."},{titre:"Comparer des séries",niv:"Réflexion",n:6,desc:"Moyenne et dispersion."}]},o={id:"proba-4e",titre:"Probabilités",sous:"Équiprobabilité et événement contraire.",dom:"Probabilités",noTrace:!0,cours:`
<h2 class="chap-intro">Lancer un dé, tirer une carte, faire tourner une roue : on ne peut pas prévoir le résultat, mais on peut mesurer sa chance de se produire grâce à une <b>probabilité</b>, un nombre toujours compris entre 0 et 1.</h2>

<h3><span class="n">1</span>Calculer une probabilité</h3>
<p>Une <span class="kw">expérience aléatoire</span> a plusieurs résultats possibles, appelés <span class="kw">issues</span>. On est en situation d'<span class="kw">équiprobabilité</span> quand toutes les issues ont <b>la même chance</b> de se produire.</p>
<div class="box def"><span class="lab">Définition</span><p>Dans une situation d'<b>équiprobabilité</b>, la probabilité d'un événement se calcule par : <mark>P(événement) = (cas favorables) ÷ (cas possibles)</mark>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>On lance un dé à 6 faces et on cherche la probabilité d'obtenir un nombre <b>pair</b> :</p>
<ol class="demo-steps">
<li>Cas possibles : les <span class="num">6</span> faces du dé (1, 2, 3, 4, 5, 6).</li>
<li>Cas favorables : les faces paires <span class="num">2</span>, <span class="num">4</span>, <span class="num">6</span>, soit <span class="num">3</span> cas.</li>
<li>Donc <mark>P(pair) = 3/6 = 1/2</mark>.</li>
</ol></div>
<p>Une probabilité est toujours un nombre <b>compris entre 0 et 1</b> : un événement <span class="kw">impossible</span> a une probabilité de 0, un événement <span class="kw">certain</span> une probabilité de 1.</p>
<div class="figbox"><svg viewBox="0 0 440 60">
  <line x1="20" y1="35" x2="420" y2="35" class="seg-a"/>
  <g font-family="Space Mono" font-size="12" fill="#15233F" text-anchor="middle">
  <circle cx="20" cy="35" r="6" fill="#D97706"/><text x="20" y="20">0</text>
  <circle cx="220" cy="35" r="6" fill="#D97706"/><text x="220" y="20">0,5</text>
  <circle cx="420" cy="35" r="6" fill="#D97706"/><text x="420" y="20">1</text>
  <text x="90" y="55">impossible</text><text x="340" y="55">certain</text></g>
</svg><figcaption>L'échelle des probabilités, de 0 à 1</figcaption></div>

<h3><span class="n">2</span>Événement contraire</h3>
<p>L'événement <span class="kw">contraire</span> de A, noté Ā, se réalise exactement quand A <b>ne se réalise pas</b>. Ensemble, ils couvrent toutes les issues : leurs probabilités se complètent.</p>
<div class="box prop"><span class="lab">Propriété</span><p>L'événement <b>contraire</b> de A se réalise quand A ne se réalise pas. On a toujours : <mark>P(A) + P(contraire de A) = 1</mark>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Si P(A) = 0,3, alors P(contraire de A) = 1 − 0,3 = <mark>0,7</mark>.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>En situation d'<b>équiprobabilité</b>, on calcule une probabilité par <b>cas favorables ÷ cas possibles</b>. Le résultat est toujours <b>entre 0 et 1</b> (0 pour l'impossible, 1 pour le certain). Enfin, un événement et son <b>contraire</b> se complètent : <b>P(A) + P(Ā) = 1</b>, donc P(Ā) = 1 − P(A).</p></div>
`,fiche:[["P","P = cas favorables ÷ cas possibles."],["0–1","Une probabilité est entre 0 et 1."],["Ā","<b>Contraire</b> de A : A ne se réalise pas."],["+","P(A) + P(Ā) = 1."],["1−","P(Ā) = 1 − P(A)."],["=","Équiprobabilité : toutes les issues ont la même chance."]],qcm:[{t:"num",q:"Dé à 6 faces : probabilité d'un nombre pair (2, 4, 6), en décimal ?",a:.5,tol:.01,unit:"",ex:"3 ÷ 6 = 0,5."},{t:"num",q:"Si P(A) = 0,3, alors P(contraire de A) = ?",a:.7,tol:.01,unit:"",ex:"1 − 0,3 = 0,7."},{t:"vf",q:"P(A) + P(contraire de A) = 1.",a:!0,ex:"Vrai : c'est la propriété de l'événement contraire."},{t:"num",q:"Dé : probabilité d'obtenir un multiple de 3 (3 ou 6), en décimal (arrondi centième) ?",a:.33,tol:.02,unit:"",ex:"2 ÷ 6 ≈ 0,33."},{t:"qcm",q:"Un événement impossible a pour probabilité :",choices:["0","0,5","1","−1"],a:0,ex:"Un événement impossible a une probabilité de 0."}],exos:[{titre:"Calculs de probabilités",niv:"Application",n:8,desc:"Équiprobabilité (dés, urnes, cartes)."},{titre:"Événement contraire",niv:"Application",n:6,desc:"Utiliser P(Ā) = 1 − P(A)."},{titre:"Situations variées",niv:"Réflexion",n:6,desc:"Modéliser et calculer."}]},u={id:"developper-4e",titre:"Développer et factoriser",sous:"Distributivité dans les deux sens.",dom:"Calcul littéral",noTrace:!0,cours:`
<h2 class="chap-intro">La <b>distributivité</b> fonctionne dans les deux sens : elle permet de <b>développer</b> un produit pour l'écrire en somme, et de <b>factoriser</b> une somme pour la ramener à un produit.</h2>

<h3><span class="n">1</span>Développer</h3>
<p><span class="kw">Développer</span>, c'est transformer un <b>produit</b> en <b>somme</b> grâce à la distributivité. On multiplie le facteur placé devant la parenthèse par <b>chaque terme</b> qu'elle contient.</p>
<div class="box def"><span class="lab">Définition</span><p>Pour tout nombre, la <span class="kw">distributivité</span> donne : k(a + b) = ka + kb. Le facteur k est distribué à chacun des termes de la parenthèse.</p></div>
<div class="figbox"><svg viewBox="0 0 440 110">
  <rect x="40" y="25" width="160" height="60" fill="#F0EAFB" stroke="#7C3AED" stroke-width="2"/>
  <rect x="200" y="25" width="100" height="60" fill="#EDE3FA" stroke="#7C3AED" stroke-width="2"/>
  <text x="120" y="60" class="pt-label" text-anchor="middle" fill="#5B21B6">3 × x</text><text x="250" y="60" class="pt-label" text-anchor="middle" fill="#5B21B6">3 × 4</text>
  <text x="170" y="103" class="pt-label" text-anchor="middle">3(x + 4) = 3x + 12</text>
</svg><figcaption>Développer 3(x + 4)</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Développer <b>3(x + 4)</b> :</p>
<ol class="demo-steps">
<li>Je multiplie <span class="num">3</span> par le premier terme : <span class="num">3</span> × x = 3x.</li>
<li>Je multiplie <span class="num">3</span> par le second terme : <span class="num">3</span> × <span class="num">4</span> = 12.</li>
<li>Donc <mark>3(x + 4) = 3x + 12</mark>.</li>
</ol>
<p>Et avec un signe : <mark>5(2x − 3) = 10x − 15</mark>.</p></div>

<h3><span class="n">2</span>Factoriser</h3>
<p><span class="kw">Factoriser</span>, c'est l'opération <b>inverse</b> : on transforme une <b>somme</b> en <b>produit</b> en repérant un <span class="kw">facteur commun</span>, c'est-à-dire un nombre (ou une lettre) présent dans chaque terme.</p>
<div class="box prop"><span class="lab">Propriété</span><p>En mettant le facteur commun k en évidence : ka + kb = k(a + b). Par exemple <mark>7x + 7×3 = 7(x + 3)</mark>, car 7 est présent dans les deux termes.</p></div>

<h3><span class="n">3</span>Développer puis réduire</h3>
<p>Après avoir développé, on <span class="kw">réduit</span> l'expression en regroupant les <b>termes semblables</b> (ceux qui ont la même partie littérale entre eux, les nombres seuls entre eux).</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Réduire <b>2(x + 3) + 4x</b> :</p>
<ol class="demo-steps">
<li>Je développe : 2(x + 3) = <span class="num">2</span>x + <span class="num">6</span>.</li>
<li>Je regroupe les termes en x : 2x + 4x = 6x.</li>
<li>Donc <mark>2(x + 3) + 4x = 6x + 6</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Un signe « moins » devant la parenthèse change le signe de <b>chaque</b> terme. Développer <b>−2(x − 5)</b> donne <mark>−2x + 10</mark> : les deux termes sont concernés.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p><b>Développer</b>, c'est passer d'un produit à une somme : k(a + b) = ka + kb, en distribuant le facteur à chaque terme. <b>Factoriser</b> est l'opération inverse : on repère un <b>facteur commun</b> pour ramener une somme à un produit, ka + kb = k(a + b). Après un développement, on <b>réduit</b> en regroupant les termes semblables, et on fait toujours <b>attention aux signes</b> : un « moins » devant une parenthèse change le signe de tous ses termes.</p></div>
`,fiche:[["→","<b>Développer</b> : produit → somme. k(a+b) = ka + kb."],["←","<b>Factoriser</b> : somme → produit. ka + kb = k(a+b)."],["∩","<b>Facteur commun</b> : le nombre (ou la lettre) présent partout."],["+","<b>Réduire</b> après développement."],["−","Attention aux signes : −2(x−5) = −2x + 10."],["²","x × x = x² (apparaît en développant)."]],qcm:[{t:"num",q:"Développe 3(x + 4). Quel est le terme constant ?",a:12,tol:.01,unit:"",ex:"3(x+4) = 3x + 12."},{t:"num",q:"Développe 5(2x − 3). Quel est le coefficient de x ?",a:10,tol:.01,unit:"",ex:"5 × 2x = 10x."},{t:"num",q:"Factorise 7x + 21 = 7(x + …). Complète le nombre.",a:3,tol:.01,unit:"",ex:"21 = 7 × 3, donc 7(x + 3)."},{t:"vf",q:"Factoriser, c'est transformer une somme en produit.",a:!0,ex:"Vrai : c'est l'opération inverse du développement."},{t:"num",q:"Réduis 2(x + 3) + 4x. Quel est le coefficient de x ?",a:6,tol:.01,unit:"",ex:"2x + 6 + 4x = 6x + 6, coefficient 6."}],exos:[{titre:"Développer",niv:"Application",n:8,desc:"Développer des produits, gérer les signes."},{titre:"Factoriser",niv:"Application",n:8,desc:"Repérer un facteur commun."},{titre:"Développer puis réduire",niv:"Réflexion",n:6,desc:"Simplifier des expressions."}]},p={id:"equations-4e",titre:"Équations du premier degré",sous:"Résoudre ax + b = c.",dom:"Calcul littéral",noTrace:!0,cours:`
<h2 class="chap-intro">Deviner un nombre caché derrière la lettre x, retrouver un prix à partir d'un total : on traduit la situation par une <b>équation</b>, une égalité qu'on rééquilibre comme une balance jusqu'à isoler l'inconnue.</h2>

<h3><span class="n">1</span>Qu'est-ce qu'une équation ?</h3>
<p>Une <span class="kw">équation</span> est une égalité contenant une <span class="kw">inconnue</span> (souvent notée x). La <b>résoudre</b>, c'est trouver la (ou les) valeur(s) de x qui rendent l'égalité vraie.</p>
<div class="figbox"><svg viewBox="0 0 440 120">
  <line x1="60" y1="40" x2="380" y2="40" stroke="#7C3AED" stroke-width="3"/><polygon points="220,40 205,70 235,70" fill="#7C3AED"/>
  <rect x="90" y="14" width="70" height="24" fill="#EDE3FA" stroke="#7C3AED"/><text x="125" y="31" class="pt-label" text-anchor="middle">x + 3</text>
  <rect x="290" y="14" width="60" height="24" fill="#EDE3FA" stroke="#7C3AED"/><text x="320" y="31" class="pt-label" text-anchor="middle">8</text>
  <text x="220" y="108" class="pt-label" text-anchor="middle">Une équation, c'est une balance en équilibre</text>
</svg><figcaption>x + 3 = 8 : que vaut x ?</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Une <span class="kw">équation</span> est une égalité dans laquelle figure une <span class="kw">inconnue</span>. Une valeur de x qui rend l'égalité vraie est une <b>solution</b> ; résoudre l'équation, c'est trouver toutes ses solutions.</p></div>

<h3><span class="n">2</span>Les règles</h3>
<p>On imagine les deux membres de l'équation posés sur les deux plateaux d'une balance : pour ne pas rompre l'<span class="kw">équilibre</span>, tout ce qu'on fait d'un côté doit être fait <b>de l'autre côté aussi</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>On peut <b>ajouter</b> ou <b>soustraire</b> le même nombre des deux côtés, et <b>multiplier</b> ou <b>diviser</b> les deux côtés par un même nombre non nul, sans changer les solutions.</p></div>

<h3><span class="n">3</span>Méthode</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour résoudre une équation du type ax + b = c :</p>
<ol class="demo-steps">
<li>J'<b>isole le terme en x</b> en soustrayant (ou ajoutant) b des deux côtés.</li>
<li>Je <b>divise</b> les deux côtés par a pour obtenir x seul.</li>
<li>Je <b>vérifie</b> en remplaçant x par la valeur trouvée dans l'équation de départ.</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Résoudre <b>3x + 5 = 20</b> :</p>
<ol class="demo-steps">
<li>On soustrait <span class="num">5</span> des deux côtés : 3x = <span class="num">15</span>.</li>
<li>On divise par <span class="num">3</span> les deux côtés : <mark>x = 5</mark>.</li>
<li>Vérification : 3 × <span class="num">5</span> + 5 = 20 ✓.</li>
</ol></div>

<h3><span class="n">4</span>Mettre en équation</h3>
<p>Beaucoup de problèmes se résolvent en <b>choisissant une inconnue</b>, en écrivant une équation qui traduit l'énoncé, puis en la résolvant.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour <span class="kw">mettre en équation</span> un problème : on nomme x la quantité cherchée, on traduit chaque information de l'énoncé par une opération, on résout, puis on <b>revient à la question</b> pour donner la réponse.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>équation</b> est une égalité avec une inconnue ; la <b>résoudre</b>, c'est trouver les valeurs de x qui la rendent vraie. On garde l'<b>équilibre</b> en effectuant la même opération des deux côtés : pour ax + b = c, on soustrait b puis on divise par a, et on <b>vérifie</b> en remplaçant x. Un problème se traite en <b>choisissant une inconnue</b> et en traduisant l'énoncé par une équation.</p></div>
`,fiche:[["=","<b>Équation</b> : égalité avec une inconnue x."],["✓","<b>Résoudre</b> : trouver x qui rend l'égalité vraie."],["±","On ajoute/soustrait le même nombre des deux côtés."],["×÷","On multiplie/divise les deux côtés par un même nombre ≠ 0."],["x=","ax + b = c ⟹ x = (c − b) ÷ a."],["🔎","<b>Vérifier</b> en remplaçant x dans l'équation."]],qcm:[{t:"num",q:"Résous x + 3 = 8. Que vaut x ?",a:5,tol:.01,unit:"",ex:"x = 8 − 3 = 5."},{t:"num",q:"Résous 3x = 15. Que vaut x ?",a:5,tol:.01,unit:"",ex:"x = 15 ÷ 3 = 5."},{t:"num",q:"Résous 3x + 5 = 20. Que vaut x ?",a:5,tol:.01,unit:"",ex:"3x = 15, puis x = 5."},{t:"num",q:"Résous 2x − 7 = 9. Que vaut x ?",a:8,tol:.01,unit:"",ex:"2x = 16, puis x = 8."},{t:"vf",q:"Pour résoudre une équation, on peut ajouter le même nombre des deux côtés.",a:!0,ex:"Vrai : on garde l'équilibre de l'égalité."}],exos:[{titre:"Équations simples",niv:"Application",n:8,desc:"Résoudre x + a = b et ax = b."},{titre:"Équations ax + b = c",niv:"Application",n:8,desc:"Résoudre en deux étapes."},{titre:"Mise en équation",niv:"Réflexion",n:6,desc:"Traduire un problème par une équation."}]},c={id:"racines-4e",titre:"Les racines carrées",sous:"Définition et calculs.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Quel nombre, multiplié par lui-même, donne 9 ? Retrouver le côté d'un carré à partir de son aire, c'est exactement le rôle de la <b>racine carrée</b> : l'opération qui « défait » le carré d'un nombre.</h2>

<h3><span class="n">1</span>Définition</h3>
<p>La <span class="kw">racine carrée</span> d'un nombre positif a, notée √a, est le nombre positif dont le <b>carré</b> vaut a. Géométriquement, √a est la longueur du côté d'un carré dont l'<b>aire</b> vaut a.</p>
<div class="figbox"><svg viewBox="0 0 440 130">
  <rect x="150" y="20" width="90" height="90" fill="#EAF0FB" stroke="#2F6BED" stroke-width="2"/>
  <text x="195" y="72" class="pt-label" text-anchor="middle" fill="#1B4FCB">aire = a</text>
  <text x="195" y="126" class="pt-label" text-anchor="middle">côté = √a</text>
  <text x="120" y="72" class="pt-label" text-anchor="end">√a</text>
</svg><figcaption>√a est le côté d'un carré d'aire a</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Pour a positif, √a est l'unique nombre positif dont le carré vaut a. Exemple : <mark>√9 = 3</mark> car 3² = 9.</p></div>

<h3><span class="n">2</span>Carrés parfaits</h3>
<p>Certains nombres ont une racine carrée <b>entière</b> : on les appelle des <span class="kw">carrés parfaits</span>. Il faut savoir les reconnaître par cœur.</p>
<div class="box prop"><span class="lab">À connaître</span><p>√0=0, √1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10, √121=11, √144=12.</p></div>

<h3><span class="n">3</span>Propriétés</h3>
<p>Comme la racine carrée « défait » le carré, elle vérifie deux égalités importantes pour a positif : <b>(√a)² = a</b> et <b>√(a²) = a</b>. De plus, on peut séparer la racine d'un <b>produit</b> : √(a × b) = √a × √b.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Pour a positif : <mark>(√a)² = a</mark> et <mark>√(a²) = a</mark>. Pour a et b positifs : <mark>√(a × b) = √a × √b</mark>.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>En général √(a + b) ≠ √a + √b : on ne peut <b>pas</b> séparer la racine d'une somme. Vérifions avec a = <span class="num">9</span> et b = <span class="num">16</span> :</p>
<ol class="demo-steps">
<li>D'un côté : √(9 + 16) = √25 = <mark>5</mark>.</li>
<li>De l'autre : √9 + √16 = 3 + 4 = <mark>7</mark>.</li>
<li>Or 5 ≠ 7 : les deux écritures ne donnent pas le même résultat.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>racine carrée</b> √a d'un nombre positif a est le nombre positif dont le carré vaut a, c'est-à-dire le côté d'un carré d'aire a. On retient : <b>(√a)² = a</b> et <b>√(a²) = a</b>. Les <b>carrés parfaits</b> (√9 = 3, √16 = 4, …, √144 = 12) se connaissent par cœur. On peut séparer la racine d'un <b>produit</b> (√(a × b) = √a × √b), mais <b>jamais</b> celle d'une somme : √(a + b) ≠ √a + √b.</p></div>
`,fiche:[["√","√a : le nombre positif dont le carré vaut a."],["²","√9 = 3 car 3² = 9."],["=","(√a)² = a et √(a²) = a."],["×","√(a×b) = √a × √b."],["≠","√(a+b) ≠ √a + √b en général."],["■","√a = côté d'un carré d'aire a."]],qcm:[{t:"num",q:"Combien vaut √144 ?",a:12,tol:.01,unit:"",ex:"12² = 144, donc √144 = 12."},{t:"num",q:"Combien vaut √49 ?",a:7,tol:.01,unit:"",ex:"7² = 49, donc √49 = 7."},{t:"num",q:"Combien vaut (√5)² ?",a:5,tol:.01,unit:"",ex:"(√a)² = a, donc (√5)² = 5."},{t:"vf",q:"√(9 + 16) est égal à √9 + √16.",a:!1,ex:"Faux : √25 = 5 ≠ 3 + 4 = 7."},{t:"num",q:"Combien vaut √81 ?",a:9,tol:.01,unit:"",ex:"9² = 81, donc √81 = 9."}],exos:[{titre:"Carrés parfaits",niv:"Application",n:8,desc:"Calculer des racines carrées exactes."},{titre:"Propriétés",niv:"Application",n:6,desc:"Utiliser (√a)² = a et √(a²) = a."},{titre:"Racines et Pythagore",niv:"Réflexion",n:6,desc:"Longueurs et racines carrées."}]},d={id:"vitesse-4e",titre:"Grandeurs composées : la vitesse",sous:"Vitesse, distance, durée et débit.",dom:"Grandeurs et mesures",noTrace:!0,cours:`
<h2 class="chap-intro">Combien de kilomètres à l'heure roule un train, combien de litres par minute coule un robinet : dès qu'on <b>divise une grandeur par une autre</b>, on obtient une <b>grandeur composée</b>, et la plus connue est la <b>vitesse</b>.</h2>

<h3><span class="n">1</span>Grandeurs composées</h3>
<p>Une <span class="kw">grandeur composée</span> combine deux grandeurs. La plus connue est la <span class="kw">vitesse</span>, qui relie une <b>distance</b> parcourue et la <b>durée</b> mise pour la parcourir.</p>
<div class="formula">\\(\\text{vitesse} = \\dfrac{\\text{distance}}{\\text{durée}}\\)</div>
<div class="figbox"><svg viewBox="0 0 440 90">
  <line x1="30" y1="60" x2="410" y2="60" stroke="#A16207" stroke-width="3"/>
  <circle cx="80" cy="60" r="8" fill="#A16207"/><text x="80" y="44" class="pt-label" text-anchor="middle">départ</text>
  <circle cx="360" cy="60" r="8" fill="#A16207"/><text x="360" y="44" class="pt-label" text-anchor="middle">arrivée</text>
  <text x="220" y="82" class="pt-label" text-anchor="middle">120 km en 2 h → 60 km/h</text>
</svg><figcaption>La vitesse relie distance et durée</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">vitesse</span> est le quotient de la <b>distance</b> par la <b>durée</b>. Elle indique la distance parcourue pendant une unité de temps (par exemple le nombre de kilomètres parcourus en une heure).</p></div>

<h3><span class="n">2</span>Les trois formules</h3>
<p>Les trois grandeurs — vitesse, distance, durée — sont liées par une même relation, que l'on peut écrire de trois façons selon ce que l'on cherche.</p>
<div class="box cle"><span class="lab">À retenir</span><p>Vitesse : <mark>v = d ÷ t</mark>. Distance : <mark>d = v × t</mark>. Durée : <mark>t = d ÷ v</mark>. La vitesse s'exprime en <span class="kw">km/h</span> ou en <span class="kw">m/s</span>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Une voiture parcourt <span class="num">120</span> km en <span class="num">2</span> h. Quelle est sa vitesse ?</p>
<ol class="demo-steps">
<li>On applique la formule de la vitesse : v = d ÷ t.</li>
<li>On remplace : <span class="num">120</span> ÷ <span class="num">2</span> = <span class="num">60</span>.</li>
<li>Donc <mark>v = 60 km/h</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Autres grandeurs composées</h3>
<p>La vitesse n'est pas la seule grandeur composée : à chaque fois qu'on <b>divise</b> une grandeur par une autre, on en obtient une nouvelle.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Le <span class="kw">débit</span> (litres par minute), le <span class="kw">prix au kilo</span> (€/kg) et la <span class="kw">masse volumique</span> (g/cm³) sont aussi des grandeurs composées : elles proviennent toutes de la division d'une grandeur par une autre.</p></div>

<h3><span class="n">4</span>Attention aux unités</h3>
<div class="box attention"><span class="lab">Attention</span><p>Les unités doivent être cohérentes : pour obtenir une vitesse en <b>km/h</b>, la durée doit être exprimée en <b>heures</b>. Ainsi <mark>30 min = 0,5 h</mark>, et non 30.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>grandeur composée</b> naît de la division d'une grandeur par une autre. Pour la vitesse : <b>v = d ÷ t</b>, <b>d = v × t</b>, <b>t = d ÷ v</b>. La vitesse s'exprime en <b>km/h</b> ou en <b>m/s</b>. Débit, prix au kilo et masse volumique fonctionnent de la même façon. Enfin, on veille toujours aux <b>unités</b> : pour des km/h, la durée doit être en heures (30 min = 0,5 h).</p></div>
`,fiche:[["v","<b>vitesse</b> = distance ÷ durée."],["d","distance = vitesse × durée."],["t","durée = distance ÷ vitesse."],["km/h","La vitesse en km/h : durée en heures."],["÷","Débit, prix au kilo… : on divise deux grandeurs."],["⚠","Convertir les durées (30 min = 0,5 h)."]],qcm:[{t:"num",q:"Une voiture parcourt 120 km en 2 h. Quelle est sa vitesse (km/h) ?",a:60,tol:.01,unit:"km/h",ex:"v = 120 ÷ 2 = 60 km/h."},{t:"num",q:"À 50 km/h pendant 3 h, quelle distance parcourt-on (km) ?",a:150,tol:.01,unit:"km",ex:"d = v × t = 50 × 3 = 150 km."},{t:"num",q:"Pour parcourir 200 km à 100 km/h, combien de temps faut-il (h) ?",a:2,tol:.01,unit:"h",ex:"t = d ÷ v = 200 ÷ 100 = 2 h."},{t:"vf",q:"Pour calculer une vitesse en km/h, la durée doit être en heures.",a:!0,ex:"Vrai : sinon l'unité de vitesse est fausse."},{t:"num",q:"90 km en 1,5 h : quelle vitesse (km/h) ?",a:60,tol:.01,unit:"km/h",ex:"v = 90 ÷ 1,5 = 60 km/h."}],exos:[{titre:"Calculer une vitesse",niv:"Application",n:8,desc:"Utiliser v = d ÷ t."},{titre:"Distance et durée",niv:"Application",n:8,desc:"Retrouver d ou t."},{titre:"Grandeurs composées",niv:"Réflexion",n:6,desc:"Débit, prix au kilo, masse volumique."}]},m={id:"algo-4e",titre:"Algorithmique et programmation",sous:"Instructions, variables, boucles, tests.",dom:"Algorithmique",noTrace:!0,cours:`
<h2 class="chap-intro">Faire tracer un carré à un robot, déplacer un personnage de jeu, calculer automatiquement : derrière chaque action d'un ordinateur se cache un <b>algorithme</b>, une suite d'instructions exécutées dans l'ordre.</h2>

<h3><span class="n">1</span>Qu'est-ce qu'un algorithme ?</h3>
<p>Un <span class="kw">algorithme</span> est une suite d'<b>instructions</b> exécutées dans l'ordre pour accomplir une tâche. En <span class="kw">programmation par blocs</span> (type Scratch), on assemble ces instructions comme des briques : le programme s'exécute <b>de haut en bas</b>.</p>
<div class="figbox"><svg viewBox="0 0 440 150">
  <rect x="120" y="10" width="200" height="26" rx="6" fill="#0E7490"/><text x="220" y="28" class="pt-label" text-anchor="middle" fill="#fff">quand ⚑ cliqué</text>
  <rect x="120" y="40" width="200" height="26" rx="6" fill="#F2A100"/><text x="220" y="58" class="pt-label" text-anchor="middle" fill="#fff">répéter 4 fois</text>
  <rect x="140" y="70" width="180" height="24" rx="6" fill="#2F6BED"/><text x="230" y="87" class="pt-label" text-anchor="middle" fill="#fff">avancer de 100</text>
  <rect x="140" y="96" width="180" height="24" rx="6" fill="#2F6BED"/><text x="230" y="113" class="pt-label" text-anchor="middle" fill="#fff">tourner de 90°</text>
  <text x="220" y="140" class="pt-label" text-anchor="middle">Ce programme trace un carré</text>
</svg><figcaption>Un programme par blocs (type Scratch)</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Un <span class="kw">algorithme</span> est une suite finie d'<b>instructions</b> exécutées dans l'ordre pour accomplir une tâche donnée.</p></div>

<h3><span class="n">2</span>Variables et instructions</h3>
<p>Une <span class="kw">instruction</span> est une action que l'ordinateur exécute (« avancer », « afficher », « mettre 5 dans x »). Pour mémoriser des informations, on utilise des <b>variables</b>.</p>
<div class="box def"><span class="lab">Définition</span><p>Une <span class="kw">variable</span> est une « boîte » qui garde une valeur, qu'on peut <b>lire</b> et <b>modifier</b>. On peut lui <b>affecter</b> une valeur (« mettre 5 dans x »), la lire, puis l'afficher.</p></div>

<h3><span class="n">3</span>Boucles et tests</h3>
<p>Pour éviter de recopier plusieurs fois les mêmes instructions, on utilise une <span class="kw">boucle</span>. Pour choisir entre plusieurs actions selon une situation, on utilise un <span class="kw">test</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>La <span class="kw">boucle</span> (« répéter … fois ») exécute <b>plusieurs fois</b> les mêmes instructions. Le <span class="kw">test</span> (« si … alors … sinon … ») choisit l'action à faire selon une <b>condition</b>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour tracer un carré avec une boucle :</p>
<ol class="demo-steps">
<li>Un carré a <span class="num">4</span> côtés égaux et 4 angles droits.</li>
<li>On répète donc <span class="num">4</span> fois le même motif : « avancer ; tourner de 90° ».</li>
<li>Le programme « <b>répéter 4 fois [avancer ; tourner de 90°]</b> » trace bien <mark>un carré</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>algorithme</b> est une suite d'<b>instructions</b> exécutées dans l'ordre, de haut en bas. Une <b>variable</b> est une boîte qui garde une valeur qu'on peut lire et modifier. La <b>boucle</b> (« répéter … fois ») répète des instructions, tandis que le <b>test</b> (« si … alors … sinon … ») choisit selon une condition. Répéter 4 fois « avancer ; tourner de 90° » trace un carré.</p></div>
`,fiche:[["→","<b>Algorithme</b> : suite d'instructions ordonnées."],["📦","<b>Variable</b> : une boîte qui garde une valeur."],["🔁","<b>Boucle</b> : « répéter … fois »."],["❓","<b>Test</b> : « si … alors … sinon … »."],["⚑","Un programme s'exécute dans l'ordre, de haut en bas."],["◻","Répéter 4 fois (avancer, tourner 90°) → un carré."]],qcm:[{t:"num",q:"« Répéter … fois (avancer, tourner de 90°) » pour tracer un carré : combien de répétitions ?",a:4,tol:.01,unit:"",ex:"Un carré a 4 côtés : on répète 4 fois."},{t:"qcm",q:"Une variable sert à :",choices:["dessiner un cercle","garder une valeur","tourner à droite","effacer l'écran"],a:1,ex:"Une variable garde (mémorise) une valeur."},{t:"vf",q:"Une boucle permet de répéter des instructions.",a:!0,ex:"Vrai : c'est le rôle de la boucle « répéter »."},{t:"qcm",q:"« Si … alors … sinon … » est :",choices:["une boucle","un test (condition)","une variable","un déplacement"],a:1,ex:"C'est une instruction conditionnelle (un test)."},{t:"num",q:"Pour tracer un triangle équilatéral, on répète (avancer, tourner de 120°) combien de fois ?",a:3,tol:.01,unit:"",ex:"Un triangle a 3 côtés : 3 répétitions."}],exos:[{titre:"Lire un programme",niv:"Application",n:8,desc:"Prévoir ce que fait un script."},{titre:"Boucles et figures",niv:"Application",n:6,desc:"Tracer des polygones avec des boucles."},{titre:"Variables et tests",niv:"Réflexion",n:6,desc:"Utiliser variables et conditions."}]},b={id:"rationnels-4e",titre:"Calcul avec les nombres rationnels",sous:"Multiplier et diviser relatifs et fractions.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Multiplier deux nombres négatifs, prendre le tiers des trois quarts d'un gâteau : dès qu'on quitte les entiers positifs, deux règles suffisent pour calculer sans se tromper — la <b>règle des signes</b> et l'<b>inverse</b> d'une fraction.</h2>

<h3><span class="n">1</span>La règle des signes</h3>
<p>Pour <b>multiplier</b> ou <b>diviser</b> deux nombres relatifs, on calcule d'abord avec les nombres <b>sans leur signe</b>, puis on détermine le signe du résultat. Deux nombres de <span class="kw">même signe</span> donnent un résultat <b>positif</b> ; deux nombres de <span class="kw">signes différents</span> donnent un résultat <b>négatif</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Pour la multiplication comme pour la division : deux nombres de <b>même signe</b> donnent un résultat <b>positif</b> ; deux nombres de <b>signes différents</b> donnent un résultat <b>négatif</b>.</p></div>
<div class="figbox"><svg viewBox="0 0 260 130">
  <g font-family="Space Mono" font-size="16" text-anchor="middle">
  <rect x="20" y="20" width="220" height="90" fill="none" stroke="#3457B2"/>
  <line x1="130" y1="20" x2="130" y2="110" stroke="#3457B2"/><line x1="20" y1="65" x2="240" y2="65" stroke="#3457B2"/>
  <text x="75" y="48">+ × + = +</text><text x="185" y="48">+ × − = −</text>
  <text x="75" y="93">− × + = −</text><text x="185" y="93" fill="#0FA36B">− × − = +</text></g>
</svg><figcaption>La règle des signes pour × et ÷</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span>
<ol class="demo-steps">
<li>(−4) × (−3) : les deux facteurs ont le <b>même signe</b>, le résultat est positif ; <span class="num">4</span> × <span class="num">3</span> = 12, donc <mark>(−4) × (−3) = 12</mark>.</li>
<li>(−20) ÷ 5 : les deux nombres ont des <b>signes différents</b>, le résultat est négatif ; <span class="num">20</span> ÷ <span class="num">5</span> = 4, donc <mark>(−20) ÷ 5 = −4</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Produit de fractions</h3>
<div class="box prop"><span class="lab">Propriété</span><p>Pour multiplier deux fractions, on multiplie les <span class="kw">numérateurs</span> entre eux et les <span class="kw">dénominateurs</span> entre eux.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer 2/3 × 3/4 :</p>
<ol class="demo-steps">
<li>Numérateurs entre eux : <span class="num">2</span> × <span class="num">3</span> = 6.</li>
<li>Dénominateurs entre eux : <span class="num">3</span> × <span class="num">4</span> = 12.</li>
<li>On simplifie la fraction obtenue : <mark>2/3 × 3/4 = 6/12 = 1/2</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Quotient de fractions</h3>
<p>Pour diviser par une fraction, on n'a pas de nouvelle opération à apprendre : on se ramène à un <b>produit</b> grâce à l'<span class="kw">inverse</span>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Diviser par une fraction, c'est <b>multiplier par son inverse</b>. On obtient l'<span class="kw">inverse</span> d'une fraction en échangeant son numérateur et son dénominateur : l'inverse de 3/4 est 4/3. Ainsi, diviser par 3/4 revient à multiplier par 4/3.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Pour <b>multiplier</b> ou <b>diviser</b> des relatifs, on applique la <b>règle des signes</b> : même signe → résultat <b>positif</b>, signes différents → résultat <b>négatif</b>. Pour <b>multiplier</b> deux fractions, on multiplie les <b>numérateurs</b> entre eux et les <b>dénominateurs</b> entre eux. Pour <b>diviser</b> par une fraction, on <b>multiplie par son inverse</b> (on échange numérateur et dénominateur).</p></div>
`,fiche:[["+×+","Même signe → résultat <b>positif</b>."],["+×−","Signes différents → résultat <b>négatif</b>."],["−×−","« moins par moins » = plus."],["a/b","Produit : numérateurs entre eux, dénominateurs entre eux."],["÷","Diviser par une fraction = multiplier par son inverse."],["1/2","2/3 × 3/4 = 6/12 = 1/2."]],qcm:[{t:"num",q:"Calcule (−4) × (−3).",a:12,tol:.01,unit:"",ex:"Même signe → positif : 4 × 3 = 12."},{t:"num",q:"Calcule (−20) ÷ 5.",a:-4,tol:.01,unit:"",ex:"Signes différents → négatif : 20 ÷ 5 = 4, donc −4."},{t:"num",q:"2/3 × 3/4 = 6/12 = 1/2. Quelle est sa valeur décimale ?",a:.5,tol:.01,unit:"",ex:"1/2 = 0,5."},{t:"qcm",q:"« moins multiplié par moins » donne :",choices:["moins","plus","zéro","un"],a:1,ex:"− × − = + (résultat positif)."},{t:"num",q:"Calcule (−6) × 2.",a:-12,tol:.01,unit:"",ex:"Signes différents → négatif : 6 × 2 = 12, donc −12."}],exos:[{titre:"Règle des signes",niv:"Application",n:8,desc:"Produits et quotients de relatifs."},{titre:"Produit de fractions",niv:"Application",n:8,desc:"Multiplier des fractions."},{titre:"Quotient de fractions",niv:"Réflexion",n:6,desc:"Diviser par une fraction (inverse)."}]},x={id:"notation-sci-3e",titre:"Puissances de 10 et notation scientifique",sous:"Grands et petits nombres.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">La distance Terre–Soleil vaut environ 150 000 000 km et un virus mesure 0,000 000 02 m : pour écrire sans se perdre dans les zéros ces nombres très <b>grands</b> ou très <b>petits</b>, on utilise les <b>puissances de 10</b>.</h2>

<h3><span class="n">1</span>Les puissances de 10</h3>
<p>Une <span class="kw">puissance de 10</span> est le résultat de 10 multiplié par lui-même plusieurs fois. L'<span class="kw">exposant</span> compte les zéros pour les grands nombres, et les rangs après la virgule pour les petits.</p>
<div class="box def"><span class="lab">Définition</span><p>Pour un exposant positif, <b>10ⁿ = 1 suivi de n zéros</b> : ainsi 10³ = 1000. Pour un exposant négatif, <b>10⁻ⁿ = 1 divisé par 10ⁿ</b> : ainsi 10⁻² = 0,01.</p></div>
<table>
<tr><th>Puissance</th><th>Valeur</th></tr>
<tr><td>10³</td><td>1000</td></tr>
<tr><td>10⁻²</td><td>0,01</td></tr>
</table>
<p>Les puissances de 10 servent à écrire de très grands ou de très petits nombres sans aligner de longues suites de zéros.</p>

<h3><span class="n">2</span>La notation scientifique</h3>
<div class="figbox"><svg viewBox="0 0 440 80">
  <text x="30" y="40" font-family="Space Mono" font-size="18" fill="#15233F">4500 = 4,5 × 10³</text>
  <text x="30" y="66" font-family="Space Mono" font-size="12" fill="#D97706">a compris entre 1 et 10 · exposant = 3</text>
</svg><figcaption>La notation scientifique : a × 10ⁿ, avec 1 ≤ a &lt; 10</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Un nombre en <span class="kw">notation scientifique</span> s'écrit <b>a × 10ⁿ</b>, où a est compris entre <b>1 et 10</b> (10 exclu) et n est un <b>entier relatif</b> (positif ou négatif).</p></div>
<div class="box methode"><span class="lab">Méthode</span><p>Pour écrire un nombre en notation scientifique, on place la virgule après le <b>premier chiffre non nul</b> pour obtenir a, puis on compte de combien de rangs on a déplacé la virgule pour trouver l'<b>exposant</b> n.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Écrire <span class="num">4500</span> en notation scientifique :</p>
<ol class="demo-steps">
<li>Je place la virgule après le premier chiffre : a = <span class="num">4,5</span>.</li>
<li>Pour revenir à 4500, je décale la virgule de <span class="num">3</span> rangs vers la droite : n = 3.</li>
<li>Donc <mark>4500 = 4,5 × 10³</mark>.</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour un petit nombre, l'exposant est négatif : <mark>0,007 = 7 × 10⁻³</mark>.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>puissance de 10</b> vaut 1 suivi de n zéros (10ⁿ) ou 1 divisé par 10ⁿ (10⁻ⁿ). En <b>notation scientifique</b>, un nombre s'écrit <b>a × 10ⁿ</b> avec a compris entre 1 et 10 (10 exclu) et n entier relatif : l'exposant est <b>positif</b> pour les grands nombres, <b>négatif</b> pour les petits.</p></div>
`,fiche:[["10ⁿ","10ⁿ = 1 suivi de n zéros."],["10⁻ⁿ","10⁻ⁿ = 1 ÷ 10ⁿ (petits nombres)."],["a×10ⁿ","<b>Notation scientifique</b> : 1 ≤ a &lt; 10."],["n∈ℤ","L'exposant peut être négatif."],["×","Pratique pour les très grands nombres."],["÷","…et les très petits."]],qcm:[{t:"num",q:"Calcule 10³.",a:1e3,tol:.01,unit:"",ex:"1 suivi de 3 zéros : 1000."},{t:"num",q:"Calcule 3 × 10⁴.",a:3e4,tol:.01,unit:"",ex:"3 × 10 000 = 30 000."},{t:"qcm",q:"En notation scientifique a × 10ⁿ, le nombre a est compris entre :",choices:["0 et 1","1 et 10","1 et 100","10 et 100"],a:1,ex:"a est compris entre 1 et 10 (10 exclu)."},{t:"num",q:"4500 = 4,5 × 10^? Quel est l'exposant ?",a:3,tol:.01,unit:"",ex:"4500 = 4,5 × 1000 = 4,5 × 10³."},{t:"num",q:"Calcule 2 × 10³.",a:2e3,tol:.01,unit:"",ex:"2 × 1000 = 2000."}],exos:[{titre:"Puissances de 10",niv:"Application",n:8,desc:"Calculer avec 10ⁿ et 10⁻ⁿ."},{titre:"Notation scientifique",niv:"Application",n:8,desc:"Écrire des nombres en notation scientifique."},{titre:"Ordres de grandeur",niv:"Réflexion",n:6,desc:"Comparer de très grands/petits nombres."}]};export{n as a,l as b,s as c,o as d,t as e,u as f,p as g,m as h,b as i,i as m,x as n,e as p,c as r,r as s,a as t,d as v};
