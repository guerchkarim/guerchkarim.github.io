const e={id:"symetrie-centrale",titre:"La symétrie centrale",sous:"Le demi-tour : symétrie par rapport à un point.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Faire pivoter une figure d'un <b>demi-tour</b> autour d'un point, c'est ce qui se passe quand on retourne une carte à jouer ou quand les pales d'une éolienne passent de haut en bas : chaque point vient se placer « de l'autre côté » du <b>centre</b>. C'est la <b>symétrie centrale</b>.</h2>

<h3><span class="n">1</span>Idée générale</h3>
<p>La <span class="kw">symétrie centrale</span> transforme une figure par un <b>demi-tour</b> (une rotation d'un demi-tour, soit <span class="num">180°</span>) autour d'un point appelé <span class="kw">centre de symétrie</span>. C'est comme retourner la figure « tête en bas » autour de ce point.</p>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">symétrie centrale</span> de centre O associe à chaque point de la figure son image après un <b>demi-tour</b> autour de O. La figure obtenue est le <b>symétrique</b> de la figure de départ par rapport à O.</p></div>

<h3><span class="n">2</span>Symétrique d'un point</h3>
<p>Le point A' est le <span class="kw">symétrique</span> de A par rapport au centre O lorsque <b>O est le milieu du segment [AA']</b>.</p>
<div class="box def"><span class="lab">Définition</span><p>A' est le symétrique de A par rapport à O lorsque <mark>O est le milieu de [AA']</mark>. Les points A, O et A' sont alors <b>alignés</b>, avec <b>OA = OA'</b>.</p></div>
<div class="figbox"><svg viewBox="0 0 460 170">
  <line x1="90" y1="120" x2="370" y2="50" class="seg"/>
  <circle cx="90" cy="120" r="5" class="pt-dot"/><text x="76" y="138" class="pt-label">A</text>
  <circle cx="230" cy="85" r="5" class="pt-dot-a"/><text x="228" y="72" class="pt-label" fill="#7A4FD0">O</text>
  <circle cx="370" cy="50" r="5" class="pt-dot"/><text x="378" y="46" class="pt-label">A'</text>
  <path d="M150 100 l6 -1.5 M156 102 l6 -1.5" stroke="#F2A100" stroke-width="2"/>
  <path d="M295 66 l6 -1.5 M301 68 l6 -1.5" stroke="#F2A100" stroke-width="2"/>
</svg><figcaption>O milieu de [AA'] : A' est le symétrique de A par rapport à O</figcaption></div>
<div class="box methode"><span class="lab">Méthode</span><p>Pour construire le symétrique A' d'un point A par rapport à O :</p>
<ol class="demo-steps">
<li>Je trace la <b>demi-droite</b> partant de A et passant par O.</li>
<li>Je reporte la longueur <span class="num">OA</span> de l'autre côté de O, sur cette droite.</li>
<li>Le point obtenu est A', avec <mark>O milieu de [AA']</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Propriétés</h3>
<div class="box prop"><span class="lab">Conservation</span><p>Comme la symétrie axiale, la symétrie centrale conserve les <b>longueurs</b>, les <b>angles</b>, les <b>aires</b>, l'<b>alignement</b> et les <b>milieux</b>. La figure symétrique a donc exactement la même forme et les mêmes dimensions.</p></div>
<div class="box prop"><span class="lab">Propriété</span><p>La symétrie centrale transforme une droite en une droite <b>qui lui est parallèle</b>.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>Cette conservation du <b>parallélisme</b> est propre à la symétrie centrale : la symétrie <span class="kw">axiale</span>, elle, ne transforme pas toujours une droite en une droite parallèle.</p></div>

<h3><span class="n">4</span>Centre de symétrie d'une figure</h3>
<p>Une figure possède un <span class="kw">centre de symétrie</span> si elle reste <b>identique à elle-même</b> après un demi-tour autour de ce point.</p>
<table>
<tr><th>Figure</th><th>Centre de symétrie</th></tr>
<tr><td>Parallélogramme (rectangle, losange, carré)</td><td>intersection des diagonales</td></tr>
<tr><td>Cercle</td><td>son centre</td></tr>
</table>

<h3><span class="n">5</span>Axiale ou centrale ?</h3>
<div class="box attention"><span class="lab">Ne pas confondre</span><p>La symétrie <span class="kw">axiale</span> se fait par rapport à une <b>droite</b> (l'axe) : c'est un effet <b>miroir</b>. La symétrie <span class="kw">centrale</span> se fait par rapport à un <b>point</b> (le centre) : c'est un <b>demi-tour</b>.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>symétrie centrale</b> de centre O est un <b>demi-tour</b> (<span class="num">180°</span>) autour de O. Le symétrique A' d'un point A vérifie : <b>O est le milieu de [AA']</b>, donc A, O, A' alignés et OA = OA'. Elle conserve longueurs, angles, aires, alignement et milieux, et transforme une droite en une droite <b>parallèle</b>. Le parallélogramme et le cercle ont un centre de symétrie. À ne pas confondre avec la symétrie <b>axiale</b>, qui se fait par rapport à une droite.</p></div>
`,fiche:[["↻","<b>Symétrie centrale</b> = demi-tour (180°) autour d'un centre O."],["O","A' symétrique de A ⟺ O est le <b>milieu</b> de [AA']."],["=","A, O, A' alignés et OA = OA'."],["✓","Conserve longueurs, angles, aires, alignement, milieux."],["∥","Transforme une droite en une droite <b>parallèle</b>."],["▱","Le parallélogramme a un centre de symétrie (croisement des diagonales)."]],qcm:[{t:"qcm",q:"A' est le symétrique de A par rapport à O quand O est :",choices:["la médiatrice de [AA']","le milieu de [AA']","perpendiculaire à [AA']","à l'extérieur de [AA']"],a:1,ex:"En symétrie centrale, le centre O est le milieu du segment [AA']."},{t:"vf",q:"La symétrie centrale transforme une droite en une droite parallèle.",a:!0,ex:"Vrai : c'est une propriété caractéristique de la symétrie centrale (pas de l'axiale)."},{t:"qcm",q:"Le centre de symétrie d'un parallélogramme est :",choices:["un sommet","le milieu d'un côté","l'intersection des diagonales","il n'en a pas"],a:2,ex:"Le parallélogramme a pour centre de symétrie le point d'intersection de ses diagonales."},{t:"vf",q:"Un triangle équilatéral possède un centre de symétrie.",a:!1,ex:"Faux : le triangle équilatéral a 3 axes de symétrie mais aucun centre de symétrie."},{t:"qcm",q:"La symétrie centrale correspond à une rotation de :",choices:["90°","180°","270°","360°"],a:1,ex:"C'est un demi-tour, soit une rotation de 180°."}],exos:[{titre:"Construire un symétrique",niv:"Construction",n:6,desc:"Symétrique de points et figures par rapport à un centre."},{titre:"Centre de symétrie",niv:"Application",n:6,desc:"Repérer si une figure possède un centre de symétrie."},{titre:"Axiale ou centrale ?",niv:"Réflexion",n:6,desc:"Distinguer les deux symétries et leurs propriétés."}]},s={id:"triangles-5e",titre:"Triangles : construction et angles",sous:"Inégalité triangulaire et somme des angles.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Trois baguettes de bois posées bout à bout ne forment pas toujours un triangle : si l'une est trop longue, les deux autres n'arrivent pas à se rejoindre. Un triangle obéit à deux règles fortes — une sur ses <b>côtés</b>, une sur ses <b>angles</b> — qui permettent de savoir s'il existe et de calculer ce qui manque.</h2>

<h3><span class="n">1</span>L'inégalité triangulaire</h3>
<p>On ne peut pas construire un triangle avec n'importe quelles longueurs : il faut respecter une règle sur les <span class="kw">côtés</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans un triangle, la longueur d'un côté est <b>toujours inférieure à la somme</b> des deux autres. Pour qu'un triangle soit constructible, le <b>plus grand côté</b> doit être <b>plus petit que la somme</b> des deux autres.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Peut-on construire un triangle de côtés <span class="num">3</span>, <span class="num">4</span> et <span class="num">9</span> cm ?</p>
<ol class="demo-steps">
<li>On compare le plus grand côté à la somme des deux autres : <span class="num">3</span> + <span class="num">4</span> = <span class="num">7</span>.</li>
<li>Or <span class="num">9</span> &gt; <span class="num">7</span> : le plus grand côté dépasse la somme des deux autres.</li>
<li>Donc <mark>ce triangle est impossible</mark> : les côtés de 3 et 4 sont trop courts pour se rejoindre.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Si le plus grand côté est <b>exactement égal</b> à la somme des deux autres (par exemple 3 + 4 = 7), alors les trois points sont <b>alignés</b> : le « triangle » est <b>aplati</b>, il n'a pas de surface.</p></div>

<h3><span class="n">2</span>La somme des angles d'un triangle</h3>
<p>La deuxième grande règle concerne les <span class="kw">angles</span>. Elle est <b>toujours vraie</b>, quel que soit le triangle, et permet de calculer un angle manquant quand on connaît les deux autres.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans tout triangle, la somme des trois angles vaut <mark>\\(\\widehat{A}+\\widehat{B}+\\widehat{C}=180^\\circ\\)</mark>.</p></div>
<div class="figbox"><svg viewBox="0 0 460 190">
  <path d="M60 150 L400 150 L250 40 Z" fill="rgba(122,79,208,.06)" stroke="#7A4FD0" stroke-width="2.4"/>
  <path d="M90 150 A30 30 0 0 0 84 130" class="arc"/>
  <path d="M370 150 A30 30 0 0 1 379 132" class="arc"/>
  <path d="M232 62 A26 26 0 0 0 270 66" class="arc"/>
  <text x="52" y="168" class="pt-label">A</text><text x="400" y="168" class="pt-label">B</text><text x="245" y="32" class="pt-label">C</text>
  <text x="200" y="110" class="pt-label" fill="#B77800">Â + B̂ + Ĉ = 180°</text>
</svg><figcaption>La somme des trois angles vaut toujours 180°</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Dans un triangle, \\(\\widehat{A} = 55^\\circ\\) et \\(\\widehat{B} = 80^\\circ\\). Combien mesure \\(\\widehat{C}\\) ?</p>
<ol class="demo-steps">
<li>On additionne les deux angles connus : <span class="num">55</span> + <span class="num">80</span> = <span class="num">135</span>.</li>
<li>On retire cette somme de <span class="num">180</span> : 180 − 135 = <span class="num">45</span>.</li>
<li>Donc <mark>\\(\\widehat{C} = 45^\\circ\\)</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Des triangles particuliers</h3>
<p>La somme des angles éclaire les <span class="kw">triangles particuliers</span> : chacun a une propriété d'angles bien précise.</p>
<div class="box prop"><span class="lab">Propriété</span>
<ol class="demo-steps">
<li><b>Triangle équilatéral</b> : ses trois angles sont égaux, donc chacun vaut 180 ÷ 3 = <mark>60°</mark>.</li>
<li><b>Triangle rectangle</b> : ses deux angles aigus sont <span class="kw">complémentaires</span> (leur somme vaut 90°).</li>
<li><b>Triangle isocèle</b> : ses deux angles à la base sont <b>égaux</b>.</li>
</ol></div>

<h3><span class="n">4</span>Construire un triangle (règle + compas)</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Pour construire un triangle dont on connaît les <b>3 côtés</b> :</p>
<ol class="demo-steps">
<li>On trace un premier côté à la règle.</li>
<li>On ouvre le compas à la longueur d'un 2ᵉ côté, pique à une extrémité et trace un arc.</li>
<li>On ouvre le compas à la longueur du 3ᵉ côté, pique à l'autre extrémité et trace un second arc.</li>
<li>L'<b>intersection des deux arcs</b> donne le 3ᵉ sommet ; on relie.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un triangle existe seulement si son <b>plus grand côté</b> est plus petit que la somme des deux autres (<b>inégalité triangulaire</b>) ; s'il y a égalité, les points sont alignés. Dans tout triangle, \\(\\widehat{A}+\\widehat{B}+\\widehat{C}=180^\\circ\\), ce qui permet de trouver un angle manquant. Cas particuliers : <b>équilatéral</b> = trois angles de 60°, <b>rectangle</b> = deux aigus complémentaires (90°), <b>isocèle</b> = deux angles à la base égaux. Pour construire avec les 3 côtés : règle puis deux arcs de compas qui se croisent.</p></div>
`,fiche:[["Δ","<b>Inégalité triangulaire</b> : chaque côté &lt; somme des deux autres."],["≥","Si un côté = somme des autres ⟹ points alignés (triangle aplati)."],["180","<b>Somme des angles</b> = 180° dans tout triangle."],["60","<b>Équilatéral</b> : trois angles de 60°."],["90","<b>Rectangle</b> : les deux angles aigus sont complémentaires (= 90°)."],["=","<b>Isocèle</b> : les deux angles à la base sont égaux."]],qcm:[{t:"vf",q:"On peut construire un triangle avec des côtés de 3 cm, 4 cm et 9 cm.",a:!1,ex:"Faux : 9 > 3 + 4. L'inégalité triangulaire n'est pas respectée, le triangle est impossible."},{t:"num",q:"Dans un triangle, Â = 55° et B̂ = 80°. Combien mesure Ĉ ?",a:45,tol:.01,unit:"°",ex:"Ĉ = 180 − (55 + 80) = 180 − 135 = 45°."},{t:"num",q:"Chaque angle d'un triangle équilatéral mesure … degrés.",a:60,tol:.01,unit:"°",ex:"Les trois angles sont égaux : 180 ÷ 3 = 60°."},{t:"num",q:"Triangle rectangle : un angle aigu vaut 35°. Combien vaut l'autre angle aigu ?",a:55,tol:.01,unit:"°",ex:"Les deux aigus sont complémentaires : 90 − 35 = 55°."},{t:"vf",q:"Un triangle peut avoir deux angles droits.",a:!1,ex:"Faux : deux angles droits feraient déjà 180°, il ne resterait rien pour le troisième."}],exos:[{titre:"Inégalité triangulaire",niv:"Application",n:8,desc:"Déterminer si un triangle est constructible."},{titre:"Somme des angles",niv:"Calcul",n:8,desc:"Calculer un angle manquant dans divers triangles."},{titre:"Constructions",niv:"Construction",n:6,desc:"Construire des triangles (côtés donnés, angles donnés)."}]},a={id:"parallelogramme",titre:"Le parallélogramme et ses cas particuliers",sous:"Définition, propriétés et reconnaissance.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Les carreaux d'un carrelage, les faces penchées d'une boîte, un panneau qui glisse en biais : dès qu'une figure a ses <b>côtés opposés parallèles</b>, c'est un <b>parallélogramme</b>. Le rectangle, le losange et le carré n'en sont que des cas particuliers.</h2>

<h3><span class="n">1</span>Définition</h3>
<p>Un <span class="kw">parallélogramme</span> est un quadrilatère dont les <b>côtés opposés sont parallèles</b> deux à deux.</p>
<div class="box def"><span class="lab">Définition</span><p>Un <span class="kw">parallélogramme</span> est un quadrilatère qui a ses <b>côtés opposés parallèles</b> deux à deux.</p></div>
<div class="figbox"><svg viewBox="0 0 460 180">
  <polygon points="70,140 250,140 340,50 160,50" fill="rgba(122,79,208,.06)" stroke="#7A4FD0" stroke-width="2.4"/>
  <path d="M150 143 l6 0 M156 141 l0 4" stroke="#F2A100" stroke-width="2"/>
  <path d="M240 53 l6 0 M246 51 l0 4" stroke="#F2A100" stroke-width="2"/>
  <text x="58" y="158" class="pt-label">A</text><text x="252" y="158" class="pt-label">B</text>
  <text x="344" y="46" class="pt-label">C</text><text x="140" y="46" class="pt-label">D</text>
  <line x1="70" y1="140" x2="340" y2="50" class="dash" stroke="#2F6BED" stroke-width="1.4"/>
  <line x1="250" y1="140" x2="160" y2="50" class="dash" stroke="#2F6BED" stroke-width="1.4"/>
  <circle cx="205" cy="95" r="4" class="pt-dot-a"/>
</svg><figcaption>Parallélogramme ABCD : les diagonales se coupent en leur milieu</figcaption></div>

<h3><span class="n">2</span>Propriétés</h3>
<p>La définition entraîne plusieurs propriétés que l'on peut utiliser dès qu'on sait qu'une figure est un parallélogramme.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans un parallélogramme :</p>
<ol class="demo-steps">
<li>les <span class="kw">côtés opposés</span> sont parallèles ET de même longueur ;</li>
<li>les <span class="kw">angles opposés</span> sont égaux ;</li>
<li>les <span class="kw">diagonales</span> se coupent en leur milieu ;</li>
<li>il possède un <span class="kw">centre de symétrie</span> : le point de croisement des diagonales.</li>
</ol></div>

<h3><span class="n">3</span>Prouver qu'un quadrilatère est un parallélogramme</h3>
<p>Pour démontrer qu'un quadrilatère est un parallélogramme, il suffit de vérifier <b>l'une</b> de ces conditions.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Une seule de ces conditions suffit :</p>
<ol class="demo-steps">
<li>les côtés opposés sont parallèles ;</li>
<li>les côtés opposés ont la même longueur ;</li>
<li>les diagonales se coupent en leur milieu ;</li>
<li>deux côtés opposés sont à la fois parallèles et de même longueur.</li>
</ol></div>

<h3><span class="n">4</span>Les cas particuliers</h3>
<p>Certains parallélogrammes ont des propriétés supplémentaires : ce sont le <span class="kw">rectangle</span>, le <span class="kw">losange</span> et le <span class="kw">carré</span>.</p>
<div class="box prop"><span class="lab">Familles</span>
<ol class="demo-steps">
<li>Le <b>rectangle</b> est un parallélogramme qui a un angle droit — il en a alors quatre.</li>
<li>Le <b>losange</b> est un parallélogramme qui a deux côtés consécutifs égaux — ses quatre côtés sont alors égaux.</li>
<li>Le <b>carré</b> est à la fois un rectangle et un losange.</li>
</ol></div>

<h3><span class="n">5</span>Reconnaître avec les diagonales</h3>
<p>Les diagonales offrent un critère rapide. Dans un parallélogramme, elles se coupent déjà en leur milieu ; il suffit alors de regarder si elles sont <b>égales</b> ou <b>perpendiculaires</b>.</p>
<table>
<tr><th>Diagonales</th><th>Figure</th></tr>
<tr><td>se coupent en leur milieu</td><td>parallélogramme</td></tr>
<tr><td>+ égales</td><td>rectangle</td></tr>
<tr><td>+ perpendiculaires</td><td>losange</td></tr>
<tr><td>égales ET perpendiculaires</td><td>carré</td></tr>
</table>
<div class="box attention"><span class="lab">Attention</span><p>Des diagonales perpendiculaires seules donnent un <b>losange</b> : pour obtenir un <b>carré</b>, il faut qu'elles soient <b>en plus</b> de même longueur.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>parallélogramme</b> a ses côtés opposés parallèles deux à deux : ses côtés opposés sont donc de même longueur, ses angles opposés égaux, et ses diagonales se coupent en leur milieu. Pour le prouver, une seule de ces conditions suffit. Ses cas particuliers : le <b>rectangle</b> (un angle droit, diagonales égales), le <b>losange</b> (côtés égaux, diagonales perpendiculaires) et le <b>carré</b> (les deux à la fois, diagonales égales ET perpendiculaires).</p></div>
`,fiche:[["▱","<b>Parallélogramme</b> : côtés opposés parallèles deux à deux."],["=","Côtés opposés de même longueur ; angles opposés égaux."],["✕","Diagonales se coupent en leur milieu (+ centre de symétrie)."],["▭","<b>Rectangle</b> = parallélogramme à angle droit ⟹ diagonales égales."],["◇","<b>Losange</b> = parallélogramme à côtés égaux ⟹ diagonales ⊥."],["◻","<b>Carré</b> = rectangle + losange ⟹ diagonales égales ET ⊥."]],qcm:[{t:"qcm",q:"Dans un parallélogramme, les diagonales :",choices:["sont perpendiculaires","sont égales","se coupent en leur milieu","sont parallèles"],a:2,ex:"La propriété générale : les diagonales d'un parallélogramme se coupent en leur milieu."},{t:"qcm",q:"Un parallélogramme dont les diagonales sont perpendiculaires est un :",choices:["rectangle","losange","trapèze","carré forcément"],a:1,ex:"Diagonales perpendiculaires ⟹ losange. (Il faut qu'elles soient aussi égales pour un carré.)"},{t:"vf",q:"Dans un parallélogramme, les angles opposés sont égaux.",a:!0,ex:"Vrai : les angles opposés d'un parallélogramme sont égaux deux à deux."},{t:"qcm",q:"Un parallélogramme ayant un angle droit est un :",choices:["losange","carré","rectangle","cerf-volant"],a:2,ex:"Un angle droit dans un parallélogramme entraîne 4 angles droits : c'est un rectangle."},{t:"vf",q:"Si les diagonales d'un quadrilatère se coupent en leur milieu, c'est un parallélogramme.",a:!0,ex:"Vrai : c'est l'un des critères pour prouver qu'un quadrilatère est un parallélogramme."}],exos:[{titre:"Propriétés",niv:"Application",n:8,desc:"Utiliser les propriétés (côtés, angles, diagonales)."},{titre:"Démontrer un parallélogramme",niv:"Réflexion",n:6,desc:"Prouver qu'un quadrilatère est un parallélogramme."},{titre:"Reconnaître le cas particulier",niv:"Réflexion",n:6,desc:"Rectangle, losange ou carré à partir des diagonales."}]},n={id:"angles-5e",titre:"Angles : complémentaires, supplémentaires, opposés",sous:"Les relations entre angles, et les angles avec des parallèles.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Quand deux routes se croisent, quand un rayon de lumière rebondit ou qu'une échelle s'appuie contre un mur, des <b>angles</b> apparaissent et se répondent. Savoir qu'ils sont <b>complémentaires</b>, <b>supplémentaires</b>, <b>opposés</b> ou <b>égaux</b> permet de retrouver une mesure sans la mesurer.</h2>

<h3><span class="n">1</span>Angles complémentaires et supplémentaires</h3>
<p>Deux angles peuvent se « compléter » pour former un angle remarquable : un <span class="kw">angle droit</span> (90°) ou un <span class="kw">angle plat</span> (180°). On parle alors d'angles complémentaires ou supplémentaires.</p>
<div class="box def"><span class="lab">Définitions</span><p>Deux angles sont <span class="kw">complémentaires</span> si leur somme fait <b>90°</b>. Deux angles sont <span class="kw">supplémentaires</span> si leur somme fait <b>180°</b>.</p></div>
<div class="box def"><span class="lab">Astuce mémoire</span><p><b>C</b>omplémentaire → angle droit (90°, comme un <b>C</b>oin). <b>S</b>upplémentaire → angle plat (180°).</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Un angle mesure <span class="num">37°</span>. Quel est son complémentaire, puis son supplémentaire ?</p>
<ol class="demo-steps">
<li>Complémentaire : je retire la mesure de <span class="num">90°</span> : <span class="num">90</span> − <span class="num">37</span> = <mark>53°</mark>.</li>
<li>Supplémentaire : je retire la mesure de <span class="num">180°</span> : <span class="num">180</span> − <span class="num">37</span> = <mark>143°</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Angles opposés par le sommet</h3>
<p>Quand deux droites se croisent, elles forment 4 angles. Ceux qui sont « face à face » sont dits <span class="kw">opposés par le sommet</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Deux angles opposés par le sommet sont <b>égaux</b>.</p></div>
<div class="figbox"><svg viewBox="0 0 460 180">
  <line x1="70" y1="140" x2="390" y2="40" class="seg"/>
  <line x1="90" y1="40" x2="370" y2="150" class="seg"/>
  <circle cx="230" cy="90" r="4" class="pt-dot"/>
  <path d="M200 82 A32 32 0 0 1 210 65" class="arc"/>
  <path d="M260 98 A32 32 0 0 1 250 115" class="arc"/>
  <text x="165" y="70" class="pt-label" fill="#B77800">égaux</text>
</svg><figcaption>Les angles opposés par le sommet sont égaux</figcaption></div>

<h3><span class="n">3</span>Angles et droites parallèles</h3>
<p>Quand une droite (la <span class="kw">sécante</span>) coupe deux droites <b>parallèles</b>, elle crée des angles remarquables : les <span class="kw">angles alternes-internes</span> et les <span class="kw">angles correspondants</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Avec deux parallèles coupées par une sécante : les <b>angles alternes-internes</b> sont <b>égaux</b> et les <b>angles correspondants</b> sont <b>égaux</b>.</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <line x1="40" y1="70" x2="420" y2="70" class="seg-a"/>
  <line x1="40" y1="140" x2="420" y2="140" class="seg-a"/>
  <line x1="120" y1="20" x2="330" y2="190" class="seg"/>
  <path d="M195 68 A24 24 0 0 1 215 82" class="arc"/>
  <path d="M245 138 A24 24 0 0 1 225 124" class="arc"/>
  <text x="230" y="55" class="pt-label" fill="#B77800">alternes-</text>
  <text x="240" y="175" class="pt-label" fill="#B77800">internes</text>
</svg><figcaption>Angles alternes-internes égaux (droites parallèles + sécante)</figcaption></div>
<div class="box methode"><span class="lab">Réciproque très utile</span><p>Si deux angles alternes-internes (ou correspondants) sont égaux, alors les deux droites sont <b>parallèles</b>. C'est une méthode pour <b>prouver un parallélisme</b> !</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Deux angles sont <b>complémentaires</b> si leur somme fait <b>90°</b>, <b>supplémentaires</b> si elle fait <b>180°</b>. Quand deux droites se croisent, les angles <b>opposés par le sommet</b> sont <b>égaux</b>. Et lorsqu'une sécante coupe deux droites <b>parallèles</b>, les angles <b>alternes-internes</b> comme les angles <b>correspondants</b> sont <b>égaux</b> : l'égalité de ces angles sert aussi à démontrer un parallélisme.</p></div>
`,fiche:[["90","<b>Complémentaires</b> : leur somme = 90°."],["180","<b>Supplémentaires</b> : leur somme = 180°."],["✕","<b>Opposés par le sommet</b> : égaux."],["∥","2 parallèles + sécante : <b>alternes-internes égaux</b>."],["=","2 parallèles + sécante : <b>correspondants égaux</b>."],["⟲","Réciproque : angles égaux ⟹ droites parallèles (pour prouver ∥)."]],qcm:[{t:"num",q:"Deux angles sont complémentaires. L'un mesure 37°. Combien mesure l'autre ?",a:53,tol:.01,unit:"°",ex:"Complémentaires : somme = 90°. Donc 90 − 37 = 53°."},{t:"num",q:"Deux angles sont supplémentaires. L'un mesure 110°. Combien mesure l'autre ?",a:70,tol:.01,unit:"°",ex:"Supplémentaires : somme = 180°. Donc 180 − 110 = 70°."},{t:"vf",q:"Deux angles opposés par le sommet sont supplémentaires.",a:!1,ex:"Faux : ils sont ÉGAUX. Ce sont les angles adjacents (côte à côte) qui sont supplémentaires."},{t:"qcm",q:"Deux droites parallèles coupées par une sécante forment des angles alternes-internes qui sont :",choices:["complémentaires","supplémentaires","égaux","opposés"],a:2,ex:"Avec deux parallèles, les angles alternes-internes sont égaux."},{t:"vf",q:"Si deux angles correspondants sont égaux, alors les deux droites coupées sont parallèles.",a:!0,ex:"Vrai : c'est la réciproque, utilisée pour démontrer que deux droites sont parallèles."}],exos:[{titre:"Complémentaires / supplémentaires",niv:"Calcul",n:8,desc:"Calculer l'angle manquant."},{titre:"Opposés par le sommet",niv:"Application",n:6,desc:"Utiliser l'égalité des angles opposés."},{titre:"Angles et parallèles",niv:"Réflexion",n:8,desc:"Alternes-internes, correspondants, et démonstration du parallélisme."}]},t={id:"aires-volumes-5e",titre:"Aires et volumes (prisme, cylindre)",sous:"Passer de la surface à l'espace.",dom:"",cours:`
<h2 class="chap-intro">Combien de litres d'eau peut contenir un aquarium, quelle quantité de béton faut-il pour couler un poteau : dès qu'on quitte le plan pour l'espace, on ne mesure plus une aire mais un <b>volume</b>, la place occupée par un solide.</h2>

<h3><span class="n">1</span>Rappels d'aires</h3>
<p>Avant de passer à l'espace, on révise les <span class="kw">aires</span> des figures planes usuelles : ce sont elles qui serviront de <b>base</b> aux solides. Une aire se mesure toujours en unités <b>carrées</b> (cm², m²…).</p>
<div class="box def"><span class="lab">Formules d'aires</span><p>Avec \\(b\\) = base, \\(h\\) = hauteur, \\(B\\) = grande base, \\(r\\) = rayon :</p>
<ol class="demo-steps">
<li><b>Parallélogramme</b> : \\(A = b\\times h\\).</li>
<li><b>Triangle</b> : \\(A = \\dfrac{b\\times h}{2}\\).</li>
<li><b>Trapèze</b> : \\(A = \\dfrac{(B + b)\\times h}{2}\\).</li>
<li><b>Disque</b> : <mark>\\(A = \\pi\\times r^2\\)</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Du plan à l'espace : le volume</h3>
<p>Le <span class="kw">volume</span> mesure la place occupée par un solide dans l'espace. Il se mesure en unités <b>cubiques</b> (cm³, m³…) ou en <span class="kw">litres</span> pour les contenances : <mark>1 L = 1 dm³</mark>.</p>
<div class="box def"><span class="lab">Définition</span><p>Le <span class="kw">volume</span> d'un solide est la quantité d'espace qu'il occupe. On le compte en petits cubes d'un côté : un cube de <span class="num">1</span> cm d'arête a un volume de <span class="num">1</span> cm³.</p></div>

<h3><span class="n">3</span>Prismes droits et cylindres</h3>
<p>Un <span class="kw">prisme droit</span> a deux faces identiques et parallèles, les <b>bases</b>, reliées par des rectangles. Un <span class="kw">cylindre</span> est un « prisme » dont la base est un <b>disque</b>. Pour ces deux solides, le volume se calcule de la même façon.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Pour un prisme droit ou un cylindre : <mark>\\(V = \\text{aire de la base}\\times\\text{hauteur}\\)</mark>.</p></div>
<div class="box def"><span class="lab">En détail</span><p>En appliquant cette règle aux solides usuels :</p>
<ol class="demo-steps">
<li><b>Pavé droit</b> : \\(V = L\\times l\\times h\\) (longueur × largeur × hauteur).</li>
<li><b>Cube</b> : \\(V = c^3\\) (arête au cube).</li>
<li><b>Cylindre</b> : \\(V = \\pi\\times r^2\\times h\\) (aire du disque × hauteur).</li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 460 190">
  <g transform="translate(40,20)">
    <path d="M20 40 L110 40 L110 130 L20 130 Z" fill="rgba(122,79,208,.06)" stroke="#7A4FD0" stroke-width="2"/>
    <path d="M20 40 L50 15 L140 15 L110 40" fill="rgba(122,79,208,.03)" stroke="#7A4FD0" stroke-width="2"/>
    <path d="M110 40 L140 15 L140 105 L110 130" fill="rgba(122,79,208,.03)" stroke="#7A4FD0" stroke-width="2"/>
    <text x="35" y="160" class="pt-label">pavé droit</text>
  </g>
  <g transform="translate(270,20)">
    <ellipse cx="70" cy="30" rx="45" ry="15" fill="rgba(47,107,237,.05)" stroke="#2F6BED" stroke-width="2"/>
    <path d="M25 30 L25 120 M115 30 L115 120" stroke="#2F6BED" stroke-width="2"/>
    <path d="M25 120 A45 15 0 0 0 115 120" fill="none" stroke="#2F6BED" stroke-width="2"/>
    <path d="M25 120 A45 15 0 0 1 115 120" fill="none" stroke="#2F6BED" stroke-width="1" stroke-dasharray="4 4"/>
    <text x="45" y="160" class="pt-label" fill="#1B4FCB">cylindre</text>
  </g>
</svg><figcaption>V = aire de la base × hauteur</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Volume d'un pavé droit de <span class="num">5</span> cm sur <span class="num">3</span> cm sur <span class="num">4</span> cm :</p>
<ol class="demo-steps">
<li>On multiplie les trois dimensions : \\(5\\times 3\\times 4\\).</li>
<li>Donc <mark>\\(V = 60\\text{ cm}^3\\)</mark>.</li>
</ol>
<p>Pour un cube d'arête <span class="num">4</span> cm : \\(V = c^3 = 4\\times 4\\times 4\\), soit <mark>\\(64\\text{ cm}^3\\)</mark>.</p></div>

<h3><span class="n">4</span>Attention aux unités</h3>
<div class="box attention"><span class="lab">Attention</span><p>Toutes les longueurs doivent être dans la <b>même unité</b> avant de calculer. Un volume s'exprime en unités <b>cubes</b> (cm³). Pour les contenances : <mark>1 L = 1 dm³ = 1 000 cm³</mark>.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Le <b>volume</b> mesure la place occupée dans l'espace (en cm³, m³ ou litres). Pour un <b>prisme droit</b> comme pour un <b>cylindre</b> : \\(V = \\text{aire de la base}\\times\\text{hauteur}\\). En particulier, pavé droit : \\(V = L\\times l\\times h\\), cube : \\(V = c^3\\), cylindre : \\(V = \\pi\\times r^2\\times h\\). On garde une <b>même unité</b> avant de calculer, et \\(1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3\\).</p></div>
`,fiche:[["▱","Parallélogramme : A = base × hauteur."],["⏢","Trapèze : A = (B + b) × h ÷ 2."],["V","<b>Volume</b> prisme/cylindre = aire de la base × hauteur."],["▨","Pavé droit : V = L × l × h · Cube : V = c³."],["⬤","Cylindre : V = π × r² × h."],["L","1 L = 1 dm³ = 1000 cm³. Volume en cm³."]],qcm:[{t:"num",q:"Un pavé droit mesure 5 cm × 3 cm × 4 cm. Quel est son volume ?",a:60,tol:.01,unit:"cm³",ex:"V = L × l × h = 5 × 3 × 4 = 60 cm³."},{t:"num",q:"Un cube a une arête de 4 cm. Quel est son volume ?",a:64,tol:.01,unit:"cm³",ex:"V = c³ = 4 × 4 × 4 = 64 cm³."},{t:"num",q:"Un prisme a une base d'aire 12 cm² et une hauteur de 7 cm. Son volume ?",a:84,tol:.01,unit:"cm³",ex:"V = aire de base × hauteur = 12 × 7 = 84 cm³."},{t:"num",q:"Un parallélogramme a une base de 9 cm et une hauteur de 4 cm. Son aire ?",a:36,tol:.01,unit:"cm²",ex:"A = base × hauteur = 9 × 4 = 36 cm²."},{t:"vf",q:"1 litre est égal à 1 000 cm³.",a:!0,ex:"Vrai : 1 L = 1 dm³ = 1 000 cm³."}],exos:[{titre:"Aires (rappels)",niv:"Calcul",n:6,desc:"Parallélogramme, triangle, trapèze, disque."},{titre:"Volumes de prismes",niv:"Calcul",n:8,desc:"Pavés, cubes et prismes droits."},{titre:"Volumes de cylindres",niv:"Réflexion",n:6,desc:"Avec π et conversions en litres."}]},l={id:"reperage",titre:"Repérage dans le plan",sous:"Se repérer avec des coordonnées (abscisse ; ordonnée).",dom:"",cours:`
<h2 class="chap-intro">Trouver son siège au cinéma avec « rangée F, place 12 », ou repérer une ville sur une carte : pour situer un point dans le plan, il suffit de deux nombres et d'un <b>repère</b>.</h2>

<h3><span class="n">1</span>Le repère</h3>
<p>Pour situer un point dans le plan, on utilise un <span class="kw">repère</span> : deux axes gradués perpendiculaires qui se croisent en un point appelé l'<b>origine</b> (noté O).</p>
<div class="box def"><span class="lab">Définition</span><p>L'axe <b>horizontal</b> est l'axe des <span class="kw">abscisses</span>. L'axe <b>vertical</b> est l'axe des <span class="kw">ordonnées</span>. Ils se coupent à l'origine O de coordonnées (0 ; 0).</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <line x1="60" y1="160" x2="430" y2="160" class="seg-a"/><line x1="60" y1="160" x2="60" y2="25" class="seg-a"/>
  <text x="425" y="178" class="pt-label" fill="#1B4FCB">x</text><text x="44" y="34" class="pt-label" fill="#1B4FCB">y</text>
  <text x="46" y="178" class="pt-label">O</text>
  <line x1="150" y1="160" x2="150" y2="100" class="dash" stroke="#F2A100" stroke-width="1.4"/>
  <line x1="60" y1="100" x2="150" y2="100" class="dash" stroke="#F2A100" stroke-width="1.4"/>
  <circle cx="150" cy="100" r="5" class="pt-dot-a"/><text x="158" y="96" class="pt-label" fill="#B77800">M(3 ; 2)</text>
  <text x="146" y="178" class="pt-label">3</text><text x="42" y="104" class="pt-label">2</text>
</svg><figcaption>Le point M a pour abscisse 3 et pour ordonnée 2 : M(3 ; 2)</figcaption></div>

<h3><span class="n">2</span>Les coordonnées d'un point</h3>
<p>Chaque point du repère est repéré par un <span class="kw">couple</span> de deux nombres, écrits dans un ordre bien précis.</p>
<div class="box def"><span class="lab">Couple (x ; y)</span><p>Chaque point est repéré par un <b>couple de nombres</b> (x ; y) : d'abord l'<b>abscisse</b> x (position horizontale), puis l'<b>ordonnée</b> y (position verticale). L'ordre compte !</p></div>

<h3><span class="n">3</span>Lire et placer un point</h3>
<p>Pour <b>lire</b> les coordonnées d'un point, on le projette sur chaque axe : on lit d'abord l'abscisse sur l'axe horizontal, puis l'ordonnée sur l'axe vertical.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour <b>placer</b> un point de coordonnées (x ; y) :</p>
<ol class="demo-steps">
<li>Je pars de l'origine O.</li>
<li>J'avance de l'abscisse x le long de l'axe des abscisses (horizontal).</li>
<li>Je monte (ou je descends) de l'ordonnée y parallèlement à l'axe des ordonnées (vertical).</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Placer <b>M(3 ; 2)</b> :</p>
<ol class="demo-steps">
<li>À partir de O, j'avance de <span class="num">3</span> vers la droite sur l'axe des abscisses.</li>
<li>Puis je monte de <span class="num">2</span> vers le haut.</li>
<li>J'obtiens le point <mark>M(3 ; 2)</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Coordonnées négatives</h3>
<p>À gauche de l'origine, les abscisses sont <b>négatives</b> ; en dessous, les ordonnées sont négatives. Exemple : B(−3 ; 4) est à gauche et en haut.</p>
<div class="box attention"><span class="lab">Ne pas confondre</span><p>Toujours l'<b>abscisse d'abord</b>, l'<b>ordonnée ensuite</b> : (x ; y). (3 ; 2) et (2 ; 3) ne sont pas le même point.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>repère</b> est formé de deux axes gradués perpendiculaires qui se coupent à l'<b>origine</b> O(0 ; 0). L'axe horizontal est celui des <b>abscisses</b>, l'axe vertical celui des <b>ordonnées</b>. Chaque point est un <b>couple</b> (x ; y) : abscisse d'abord, ordonnée ensuite. À gauche et en bas, les coordonnées sont <b>négatives</b>. L'ordre compte : (3 ; 2) ≠ (2 ; 3).</p></div>
`,fiche:[["◧","<b>Repère</b> : deux axes gradués perpendiculaires, origine O(0 ; 0)."],["→","Axe <b>horizontal</b> = axe des <b>abscisses</b> (x)."],["↑","Axe <b>vertical</b> = axe des <b>ordonnées</b> (y)."],["( )","Un point = couple <b>(x ; y)</b> : abscisse puis ordonnée."],["±","À gauche/en bas : coordonnées <b>négatives</b>."],["≠","(3 ; 2) ≠ (2 ; 3) : l'ordre compte."]],qcm:[{t:"num",q:"Le point A a pour coordonnées (5 ; 2). Quelle est son <b>abscisse</b> ?",a:5,tol:.01,unit:"",ex:"L'abscisse est le premier nombre du couple : 5."},{t:"qcm",q:"Dans un couple (x ; y), le premier nombre est :",choices:["l'ordonnée","l'abscisse","le rayon","l'origine"],a:1,ex:"Le premier nombre est l'abscisse (position horizontale)."},{t:"vf",q:"L'origine du repère a pour coordonnées (0 ; 0).",a:!0,ex:"Vrai : l'origine O est le point de croisement des deux axes, en (0 ; 0)."},{t:"num",q:"Le point B(−3 ; 4) : quelle est son <b>ordonnée</b> ?",a:4,tol:.01,unit:"",ex:"L'ordonnée est le second nombre : 4."},{t:"qcm",q:"L'axe horizontal s'appelle l'axe des :",choices:["ordonnées","abscisses","origines","angles"],a:1,ex:"L'axe horizontal est l'axe des abscisses."}],exos:[{titre:"Lire des coordonnées",niv:"Application",n:8,desc:"Donner les coordonnées de points placés dans un repère."},{titre:"Placer des points",niv:"Construction",n:8,desc:"Placer des points à partir de leurs coordonnées."},{titre:"Repère et figures",niv:"Réflexion",n:6,desc:"Coordonnées de sommets, symétriques dans le repère."}]},i={id:"droites-triangle",titre:"Droites remarquables du triangle",sous:"Médianes, médiatrices, hauteurs et bissectrices.",dom:"",cours:`
<h2 class="chap-intro">Dans un triangle, on peut tracer quatre familles de <b>droites remarquables</b>. À chaque fois, les trois droites d'une même famille se rejoignent en un <b>unique point</b> : ce n'est pas un hasard, et chacun de ces points a un rôle bien précis.</h2>

<h3><span class="n">1</span>Les médianes</h3>
<p>Une <span class="kw">médiane</span> relie un sommet au <b>milieu</b> du côté opposé. Un triangle a donc trois médianes, une par sommet.</p>
<div class="box def"><span class="lab">Définition</span><p>Les trois médianes d'un triangle se coupent en un même point : le <span class="kw">centre de gravité</span>, noté G. C'est le point d'équilibre du triangle.</p></div>
<div class="figbox"><svg viewBox="0 0 460 230">
  <polygon points="70,190 320,190 200,40 " fill="#F3EFFB" stroke="#7A4FD0" stroke-width="2.4"/>
  <line x1="70" y1="190" x2="260" y2="115" stroke="#7A4FD0" stroke-width="1.6"/>
  <line x1="320" y1="190" x2="135" y2="115" stroke="#7A4FD0" stroke-width="1.6"/>
  <line x1="200" y1="40" x2="195" y2="190" stroke="#7A4FD0" stroke-width="1.6"/>
  <circle cx="197" cy="140" r="5" fill="#F2A100"/><text x="205" y="138" class="pt-label" fill="#B77800">G</text>
  <circle cx="70" cy="190" r="4" class="pt-dot"/><circle cx="320" cy="190" r="4" class="pt-dot"/><circle cx="200" cy="40" r="4" class="pt-dot"/>
</svg><figcaption>Les trois médianes se coupent au centre de gravité G</figcaption></div>

<h3><span class="n">2</span>Les médiatrices</h3>
<p>Une <span class="kw">médiatrice</span> d'un côté est la droite <b>perpendiculaire</b> à ce côté passant par son <b>milieu</b> : tous ses points sont à égale distance des deux extrémités du côté.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Les trois médiatrices des côtés se coupent en un point <b>équidistant des trois sommets</b> : c'est le centre du <span class="kw">cercle circonscrit</span>, le cercle qui passe par les trois sommets.</p></div>

<h3><span class="n">3</span>Les hauteurs</h3>
<p>Une <span class="kw">hauteur</span> part d'un sommet et est <b>perpendiculaire</b> au côté opposé. Un triangle possède trois hauteurs.</p>
<div class="box def"><span class="lab">Définition</span><p>Les trois hauteurs d'un triangle se coupent en un même point : l'<span class="kw">orthocentre</span>.</p></div>

<h3><span class="n">4</span>Les bissectrices</h3>
<p>Une <span class="kw">bissectrice</span> d'un angle est la droite qui <b>partage cet angle en deux angles égaux</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Les trois bissectrices des angles se coupent au centre du <span class="kw">cercle inscrit</span>, le cercle tangent aux trois côtés du triangle.</p></div>

<h3><span class="n">5</span>Récapitulatif</h3>
<table>
<tr><th>Droite</th><th>Point de concours</th><th>Cercle associé</th></tr>
<tr><td>Médianes</td><td>centre de gravité G</td><td>—</td></tr>
<tr><td>Médiatrices</td><td>centre équidistant des sommets</td><td>cercle circonscrit</td></tr>
<tr><td>Hauteurs</td><td>orthocentre</td><td>—</td></tr>
<tr><td>Bissectrices</td><td>centre du cercle inscrit</td><td>cercle inscrit</td></tr>
</table>

<div class="box cle recap"><span class="lab">À retenir</span><p>Dans un triangle, les trois droites d'une même famille sont toujours <b>concourantes</b>. <b>Médianes</b> → centre de gravité. <b>Médiatrices</b> → centre du cercle circonscrit (équidistant des trois sommets). <b>Hauteurs</b> → orthocentre. <b>Bissectrices</b> → centre du cercle inscrit (tangent aux trois côtés).</p></div>
`,fiche:[["△","<b>Médiane</b> : sommet → milieu du côté opposé. Concours : centre de gravité G."],["○","<b>Médiatrices</b> : concourent au centre du cercle <b>circonscrit</b>."],["⊥","<b>Hauteur</b> : sommet ⟂ côté opposé. Concours : orthocentre."],["∡","<b>Bissectrices</b> : concourent au centre du cercle <b>inscrit</b>."],["=","Le centre du cercle circonscrit est équidistant des 3 sommets."],["⅔","G est situé aux ⅔ de chaque médiane depuis le sommet."]],qcm:[{t:"qcm",q:"Les <b>médiatrices</b> d'un triangle se coupent au centre du :",choices:["cercle inscrit","cercle circonscrit","carré","triangle équilatéral"],a:1,ex:"Les médiatrices concourent au centre du cercle circonscrit."},{t:"qcm",q:"Les trois <b>hauteurs</b> se coupent en un point appelé :",choices:["centre de gravité","orthocentre","milieu","sommet"],a:1,ex:"C'est l'orthocentre."},{t:"vf",q:"Les trois médianes se coupent au centre de gravité.",a:!0,ex:"Vrai : les médianes concourent au centre de gravité G."},{t:"qcm",q:"Le centre du cercle <b>inscrit</b> est l'intersection des :",choices:["médianes","hauteurs","bissectrices","médiatrices"],a:2,ex:"Les bissectrices concourent au centre du cercle inscrit."},{t:"vf",q:"Le centre du cercle circonscrit est équidistant des trois sommets.",a:!0,ex:"Vrai : c'est pourquoi le cercle passe par les trois sommets."}],exos:[{titre:"Construire le cercle circonscrit",niv:"Construction",n:6,desc:"Tracer deux médiatrices puis le cercle circonscrit."},{titre:"Tracer les hauteurs",niv:"Construction",n:6,desc:"Construire les hauteurs et placer l'orthocentre."},{titre:"Reconnaître les droites",niv:"Application",n:8,desc:"Associer chaque droite à son point de concours."}]},r={id:"relatifs-5e",titre:"Les nombres relatifs",sous:"Additionner et soustraire des relatifs.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Une température de −4 °C, un solde bancaire de −20 €, un sous-sol à l'étage −2 : dès qu'une grandeur peut passer au-dessous de zéro, on l'écrit avec un <b>nombre relatif</b>, muni d'un signe + ou −.</h2>

<h3><span class="n">1</span>Nombres positifs et négatifs</h3>
<p>Un <span class="kw">nombre relatif</span> possède un <b>signe</b> : positif (+) ou négatif (−). On les place sur une <span class="kw">droite graduée</span>, de part et d'autre de zéro. La <span class="kw">distance à zéro</span> mesure l'éloignement du nombre par rapport à l'origine, sans tenir compte de son signe.</p>
<div class="figbox"><svg viewBox="0 0 440 70">
  <line x1="20" y1="40" x2="420" y2="40" class="seg-a"/>
  <g font-family="Space Mono" font-size="12" fill="#15233F" text-anchor="middle">
  <line x1="220" y1="30" x2="220" y2="50" stroke="#15233F"/><text x="220" y="64">0</text>
  <line x1="120" y1="33" x2="120" y2="47" stroke="#15233F"/><text x="120" y="64">−2</text>
  <line x1="60" y1="33" x2="60" y2="47" stroke="#15233F"/><text x="60" y="64">−4</text>
  <line x1="320" y1="33" x2="320" y2="47" stroke="#15233F"/><text x="320" y="64">+2</text>
  <line x1="380" y1="33" x2="380" y2="47" stroke="#15233F"/><text x="380" y="64">+4</text></g>
</svg><figcaption>Les relatifs sur une droite graduée, autour de 0</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Un <span class="kw">nombre relatif</span> est formé d'un <b>signe</b> (+ ou −) et d'une <span class="kw">distance à zéro</span>. Les nombres <b>positifs</b> sont à droite de 0, les nombres <b>négatifs</b> à sa gauche.</p></div>

<h3><span class="n">2</span>Additionner deux relatifs</h3>
<div class="box prop"><span class="lab">Propriété</span><p>Si les deux nombres ont le <b>même signe</b>, on <b>additionne</b> leurs distances à zéro et on garde le signe commun. S'ils ont des <b>signes différents</b>, on <b>soustrait</b> les distances à zéro et on garde le signe de celui qui a la plus grande distance.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer <b>(−5) + (+3)</b> (signes différents) :</p>
<ol class="demo-steps">
<li>On soustrait les distances à zéro : <span class="num">5</span> − <span class="num">3</span> = <span class="num">2</span>.</li>
<li>La plus grande distance est celle de −5 : on garde le signe <b>−</b>.</li>
<li>Donc <mark>(−5) + (+3) = −2</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Soustraire un relatif</h3>
<p>Soustraire un nombre, c'est <b>ajouter son opposé</b>. L'<span class="kw">opposé</span> d'un nombre se lit en changeant simplement son signe.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour soustraire un relatif, on remplace la soustraction par une addition et on prend l'<b>opposé</b> du nombre soustrait :</p>
<ol class="demo-steps">
<li><b>(+4) − (+7)</b> devient (+4) + (−7), d'où <mark>(+4) − (+7) = −3</mark>.</li>
<li><b>(−3) − (−8)</b> devient (−3) + (+8), d'où <mark>(−3) − (−8) = +5</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>L'opposé de −7 est +7 : deux <b>opposés</b> sont à la même distance de zéro, mais de signes contraires. On ne change le signe que du nombre <b>soustrait</b>, pas du premier.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>nombre relatif</b> a un signe (+ ou −) et une distance à zéro. Pour <b>additionner</b> : mêmes signes ⟹ on additionne et on garde le signe ; signes différents ⟹ on soustrait et on garde le signe de la plus grande distance. Pour <b>soustraire</b>, on ajoute l'<b>opposé</b> du nombre soustrait.</p></div>
`,fiche:[["±","<b>Relatif</b> : un signe (+ ou −) et une distance à zéro."],["＋","Mêmes signes : on additionne, on garde le signe."],["∓","Signes différents : on soustrait, signe du plus grand."],["−","Soustraire = ajouter l'<b>opposé</b>."],["↔","Opposé de −7 : +7."],["0","Zéro sépare positifs et négatifs."]],qcm:[{t:"num",q:"Calcule (−5) + (+3).",a:-2,tol:.01,unit:"",ex:"Signes différents : 5 − 3 = 2, signe −. Donc −2."},{t:"num",q:"Calcule (+4) − (+7).",a:-3,tol:.01,unit:"",ex:"(+4) + (−7) = −3."},{t:"num",q:"Calcule (−6) + (−2).",a:-8,tol:.01,unit:"",ex:"Mêmes signes : 6 + 2 = 8, signe −. Donc −8."},{t:"vf",q:"L'opposé de −7 est +7.",a:!0,ex:"Vrai : ils sont à la même distance de zéro."},{t:"num",q:"Calcule (−3) − (−8).",a:5,tol:.01,unit:"",ex:"(−3) + (+8) = +5."}],exos:[{titre:"Additions de relatifs",niv:"Application",n:8,desc:"Additionner des nombres relatifs."},{titre:"Soustractions de relatifs",niv:"Application",n:8,desc:"Soustraire en ajoutant l'opposé."},{titre:"Enchaînements",niv:"Réflexion",n:6,desc:"Calculer des sommes de plusieurs relatifs."}]},o={id:"fractions-5e",titre:"Calculer avec les fractions",sous:"Additionner, soustraire, multiplier.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Partager une pizza puis en ajouter une part, prendre plusieurs fois le même morceau de tablette : dès qu'on <b>additionne</b> ou qu'on <b>multiplie</b> des parts, on calcule avec des <b>fractions</b>.</h2>

<h3><span class="n">1</span>Additionner et soustraire à même dénominateur</h3>
<p>Pour <b>additionner</b> ou <b>soustraire</b> deux fractions de <span class="kw">même dénominateur</span>, on additionne (ou on soustrait) les <span class="kw">numérateurs</span> et on <b>garde le dénominateur</b>. Le dénominateur indique la taille des parts : elle ne change pas quand on réunit des parts identiques.</p>
<div class="figbox"><svg viewBox="0 0 440 90">
  <rect x="20" y="25" width="60" height="45" fill="#7A4FD0" stroke="#15233F"/><rect x="80" y="25" width="120" height="45" fill="#7A4FD0" stroke="#15233F"/><rect x="200" y="25" width="180" height="45" fill="#EFEAF9" stroke="#15233F"/>
  <text x="200" y="88" class="pt-label" text-anchor="middle">1/5 + 2/5 = 3/5</text>
</svg><figcaption>Additionner des fractions de même dénominateur</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour <b>1/5 + 2/5</b> :</p>
<ol class="demo-steps">
<li>Les dénominateurs sont identiques : on garde <span class="num">5</span>.</li>
<li>On additionne les numérateurs : <span class="num">1</span> + <span class="num">2</span> = <span class="num">3</span>.</li>
<li>Donc <mark>1/5 + 2/5 = 3/5</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Multiplier une fraction par un nombre</h3>
<div class="box prop"><span class="lab">Règle</span><p>Pour multiplier une fraction par un entier, on multiplie le <b>numérateur</b> par cet entier et on garde le <b>dénominateur</b>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour <b>3 × 2/5</b> : on multiplie le numérateur par <span class="num">3</span>, soit <span class="num">3</span> × <span class="num">2</span> = <span class="num">6</span>, et on garde le dénominateur <span class="num">5</span>. Donc <mark>3 × 2/5 = 6/5</mark>.</p></div>

<h3><span class="n">3</span>Mettre au même dénominateur</h3>
<p>Avant d'additionner des fractions de <b>dénominateurs différents</b>, on les met d'abord au <span class="kw">même dénominateur</span> grâce aux <span class="kw">fractions égales</span> : on multiplie le numérateur <b>et</b> le dénominateur par un même nombre sans changer la valeur de la fraction (en 5ᵉ, on se limite à des cas simples).</p>
<div class="box attention"><span class="lab">Attention</span><p>On n'additionne <b>jamais</b> les dénominateurs entre eux : 1/5 + 2/5 fait 3/5, et non 3/10. On ajoute seulement les numérateurs une fois le dénominateur commun obtenu.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Pour <b>additionner</b> ou <b>soustraire</b> des fractions de même dénominateur, on calcule sur les <b>numérateurs</b> et on garde le dénominateur (1/5 + 2/5 = 3/5). Pour <b>multiplier</b> une fraction par un entier, on multiplie le numérateur (3 × 2/5 = 6/5). Et si les dénominateurs diffèrent, on met d'abord les fractions au <b>même dénominateur</b> à l'aide des fractions égales.</p></div>
`,fiche:[["＋","Même dénominateur : on additionne les numérateurs."],["−","Même dénominateur : on soustrait les numérateurs."],["×n","n × a/b = (n×a)/b."],["=","Mettre au même dénominateur avec les fractions égales."],["b","Le dénominateur ne change pas dans une somme à même dénominateur."],["÷","Une fraction est un quotient a ÷ b."]],qcm:[{t:"num",q:"1/5 + 2/5 = …/5. Quel est le numérateur du résultat ?",a:3,tol:.01,unit:"",ex:"1 + 2 = 3, donc 3/5."},{t:"num",q:"2/7 + 3/7 = …/7. Numérateur du résultat ?",a:5,tol:.01,unit:"",ex:"2 + 3 = 5, donc 5/7."},{t:"num",q:"5/6 − 1/6 = …/6. Numérateur du résultat ?",a:4,tol:.01,unit:"",ex:"5 − 1 = 4, donc 4/6."},{t:"vf",q:"Pour additionner deux fractions de même dénominateur, on additionne les numérateurs.",a:!0,ex:"Vrai, et on garde le dénominateur."},{t:"num",q:"3 × 2/5 = …/5. Numérateur du résultat ?",a:6,tol:.01,unit:"",ex:"3 × 2 = 6, donc 6/5."}],exos:[{titre:"Sommes et différences",niv:"Application",n:8,desc:"Calculer avec un même dénominateur."},{titre:"Multiplier une fraction",niv:"Application",n:6,desc:"Multiplier une fraction par un entier."},{titre:"Même dénominateur",niv:"Réflexion",n:6,desc:"Mettre au même dénominateur (cas simples)."}]},p={id:"stats-5e",titre:"Statistiques : effectifs et moyenne",sous:"Effectifs, fréquences et moyenne.",dom:"Statistiques",noTrace:!0,cours:`
<h2 class="chap-intro">Combien d'élèves ont eu chaque note au dernier contrôle ? Quelle est la note moyenne de la classe ? Dès qu'on rassemble beaucoup de données, on les résume avec des <b>effectifs</b>, des <b>fréquences</b> et une <b>moyenne</b>.</h2>

<h3><span class="n">1</span>Effectifs et fréquences</h3>
<p>L'<span class="kw">effectif</span> d'une valeur est son <b>nombre d'apparitions</b> dans la série. La <span class="kw">fréquence</span> est la <b>proportion</b> que cette valeur représente : on divise son effectif par l'<span class="kw">effectif total</span> (souvent exprimé en %).</p>
<div class="figbox"><svg viewBox="0 0 440 150">
  <line x1="40" y1="120" x2="420" y2="120" class="seg-a"/><line x1="40" y1="120" x2="40" y2="20" class="seg-a"/>
  <rect x="70" y="70" width="60" height="50" fill="#0FA36B"/><rect x="170" y="40" width="60" height="80" fill="#0FA36B"/><rect x="270" y="90" width="60" height="30" fill="#0FA36B"/><rect x="370" y="0" width="0" height="0"/>
  <g font-family="Space Mono" font-size="12" fill="#15233F" text-anchor="middle"><text x="100" y="138">A</text><text x="200" y="138">B</text><text x="300" y="138">C</text></g>
</svg><figcaption>Effectifs de trois catégories</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>L'<span class="kw">effectif</span> d'une valeur est son nombre d'apparitions. La <span class="kw">fréquence</span> d'une valeur est le quotient : <b>effectif ÷ effectif total</b>. On la donne souvent en pourcentage.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Une valeur apparaît <span class="num">5</span> fois dans une série de <span class="num">25</span> données. Sa fréquence :</p>
<ol class="demo-steps">
<li>On divise l'effectif par l'effectif total : <span class="num">5</span> ÷ <span class="num">25</span> = <span class="num">0,2</span>.</li>
<li>On convertit en pourcentage : 0,2 = <span class="num">20</span> %.</li>
<li>Donc <mark>la fréquence est de 20 %</mark>.</li>
</ol></div>

<h3><span class="n">2</span>La moyenne</h3>
<p>La <span class="kw">moyenne</span> résume une série en une seule valeur. On additionne toutes les valeurs, puis on <b>divise</b> par leur nombre.</p>
<div class="box def"><span class="lab">Définition</span><p>La <b>moyenne</b> d'une série est égale à la <span class="kw">somme des valeurs</span> divisée par le <span class="kw">nombre de valeurs</span> : moyenne = (somme des valeurs) ÷ (nombre de valeurs).</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer la moyenne de <span class="num">10</span>, <span class="num">12</span>, <span class="num">14</span>, <span class="num">16</span> :</p>
<ol class="demo-steps">
<li>On additionne les valeurs : 10 + 12 + 14 + 16 = <span class="num">52</span>.</li>
<li>On compte le nombre de valeurs : <span class="num">4</span>.</li>
<li>On divise : <span class="num">52</span> ÷ <span class="num">4</span> = <span class="num">13</span>. Donc <mark>la moyenne est 13</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Interpréter</h3>
<p>La moyenne donne une valeur <b>« typique »</b> de la série : c'est ce qu'on obtiendrait si toutes les valeurs étaient égales. Une <span class="kw">fréquence</span> de 20 % signifie qu'<b>un cinquième</b> des données prend cette valeur.</p>
<div class="box attention"><span class="lab">Attention</span><p>La moyenne n'est pas forcément une valeur de la série : la moyenne de 10, 12, 14, 16 vaut 13, qui ne figure pas dans la liste. Elle situe le « centre » de la série sans en être un élément.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>L'<b>effectif</b> d'une valeur est son nombre d'apparitions ; sa <b>fréquence</b> est le quotient effectif ÷ effectif total, souvent en %. La <b>moyenne</b> d'une série se calcule en additionnant toutes les valeurs puis en divisant par leur nombre : c'est une valeur « typique » qui résume la série.</p></div>
`,fiche:[["#","<b>Effectif</b> : nombre d'apparitions."],["%","<b>Fréquence</b> = effectif ÷ effectif total."],["x̄","<b>Moyenne</b> = somme ÷ nombre de valeurs."],["Σ","On additionne toutes les valeurs."],["÷n","Puis on divise par leur nombre."],["≈","La moyenne : une valeur typique de la série."]],qcm:[{t:"num",q:"Quatre notes : 10, 12, 14, 16. Quelle est la moyenne ?",a:13,tol:.01,unit:"",ex:"(10+12+14+16) ÷ 4 = 52 ÷ 4 = 13."},{t:"num",q:"Effectif total 25, une valeur a un effectif de 5. Fréquence en % ?",a:20,tol:.01,unit:"%",ex:"5 ÷ 25 = 0,2 = 20 %."},{t:"num",q:"Moyenne de 8, 8, 8, 8 ?",a:8,tol:.01,unit:"",ex:"Toutes égales : la moyenne est 8."},{t:"vf",q:"La fréquence est l'effectif divisé par l'effectif total.",a:!0,ex:"Vrai : c'est la définition de la fréquence."},{t:"num",q:"Moyenne de 6, 10, 14 ?",a:10,tol:.01,unit:"",ex:"(6+10+14) ÷ 3 = 30 ÷ 3 = 10."}],exos:[{titre:"Effectifs et fréquences",niv:"Application",n:8,desc:"Calculer effectifs et fréquences."},{titre:"Calculer une moyenne",niv:"Application",n:8,desc:"Moyenne d'une série de valeurs."},{titre:"Interpréter",niv:"Réflexion",n:6,desc:"Lire et commenter une série."}]},c={id:"proba-5e",titre:"Premières probabilités",sous:"Expérience aléatoire, issues, probabilité.",dom:"Probabilités",noTrace:!0,cours:`
<h2 class="chap-intro">Lancer un dé, tirer une carte, jouer à pile ou face : on ne sait pas à l'avance ce qui va sortir. Les <b>probabilités</b> mesurent la <b>chance</b> qu'un résultat se produise, sur une échelle qui va de 0 à 1.</h2>

<h3><span class="n">1</span>Expérience aléatoire</h3>
<p>Une <span class="kw">expérience aléatoire</span> a plusieurs résultats possibles (les <span class="kw">issues</span>) et on ne peut <b>pas prévoir</b> lequel se produira : lancer un dé, tirer une carte, tirer une boule dans un sac…</p>
<div class="box def"><span class="lab">Définition</span><p>Une <span class="kw">expérience aléatoire</span> est une expérience dont on connaît tous les résultats possibles, mais dont on ne peut pas prédire le résultat. Chaque résultat possible est une <span class="kw">issue</span>.</p></div>
<div class="figbox"><svg viewBox="0 0 440 90">
  <rect x="170" y="15" width="60" height="60" rx="10" fill="#fff" stroke="#15233F" stroke-width="2"/>
  <circle cx="185" cy="30" r="4" fill="#D97706"/><circle cx="215" cy="30" r="4" fill="#D97706"/><circle cx="200" cy="45" r="4" fill="#D97706"/><circle cx="185" cy="60" r="4" fill="#D97706"/><circle cx="215" cy="60" r="4" fill="#D97706"/>
  <text x="200" y="88" class="pt-label" text-anchor="middle">Un dé : 6 issues équiprobables</text>
</svg><figcaption>Lancer un dé : chaque face a la même chance</figcaption></div>

<h3><span class="n">2</span>Probabilité d'un événement</h3>
<p>La <span class="kw">probabilité</span> d'un événement mesure sa <b>chance</b> de se réaliser. Quand toutes les issues ont la <b>même chance</b>, on dit qu'elles sont <span class="kw">équiprobables</span> : le calcul devient alors très simple.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans un cas d'<span class="kw">équiprobabilité</span>, la probabilité d'un événement se calcule ainsi : <mark>P = (nombre de cas favorables) ÷ (nombre de cas possibles)</mark>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un <b>nombre pair</b> ?</p>
<ol class="demo-steps">
<li>Je compte les cas possibles : les faces <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>, soit <span class="num">6</span> issues.</li>
<li>Je compte les cas favorables (« nombre pair ») : <span class="num">2</span>, <span class="num">4</span> et <span class="num">6</span>, soit <span class="num">3</span> cas.</li>
<li>Je forme le quotient : P(nombre pair) = <span class="num">3</span> ÷ <span class="num">6</span> = <mark>1/2</mark>. De même, P(obtenir 4) = 1/6.</li>
</ol></div>

<h3><span class="n">3</span>Échelle des probabilités</h3>
<p>Une probabilité est toujours un nombre compris entre <b>0</b> et <b>1</b>. Plus elle est proche de 1, plus l'événement est <b>probable</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Un événement <span class="kw">impossible</span> a une probabilité de <b>0</b> ; un événement <span class="kw">certain</span> a une probabilité de <b>1</b>. Toute probabilité vérifie donc : <mark>0 ≤ P ≤ 1</mark>.</p></div>
<table>
<tr><th>Probabilité</th><th>Signification</th></tr>
<tr><td>0</td><td>événement impossible</td></tr>
<tr><td>1/2</td><td>autant de chances que le contraire</td></tr>
<tr><td>1</td><td>événement certain</td></tr>
</table>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>expérience aléatoire</b> a des <b>issues</b> qu'on ne peut pas prévoir. En cas d'<b>équiprobabilité</b>, la probabilité d'un événement vaut <b>cas favorables ÷ cas possibles</b>. Toute probabilité est un nombre <b>entre 0</b> (impossible) <b>et 1</b> (certain) : plus elle est proche de 1, plus l'événement est probable.</p></div>
`,fiche:[["🎲","<b>Expérience aléatoire</b> : résultat imprévisible."],["→","<b>Issues</b> : les résultats possibles."],["P","P = cas favorables ÷ cas possibles (équiprobabilité)."],["0–1","Une probabilité est entre 0 et 1."],["0","Événement impossible : probabilité 0."],["1","Événement certain : probabilité 1."]],qcm:[{t:"qcm",q:"Avec un dé à 6 faces, la probabilité d'obtenir 4 est :",choices:["1/2","1/6","1/4","6"],a:1,ex:"Un cas favorable sur 6 : 1/6."},{t:"num",q:"Une urne contient 3 boules rouges et 2 bleues. Probabilité de tirer une rouge (en décimal) ?",a:.6,tol:.01,unit:"",ex:"3 ÷ 5 = 0,6."},{t:"vf",q:"Une probabilité est toujours comprise entre 0 et 1.",a:!0,ex:"Vrai : de 0 (impossible) à 1 (certain)."},{t:"num",q:"Une pièce équilibrée : probabilité d'obtenir « pile » (en décimal) ?",a:.5,tol:.01,unit:"",ex:"1 chance sur 2 : 0,5."},{t:"qcm",q:"Un événement certain a une probabilité de :",choices:["0","0,5","1","2"],a:2,ex:"Un événement certain a une probabilité de 1."}],exos:[{titre:"Issues et événements",niv:"Application",n:8,desc:"Décrire des expériences aléatoires."},{titre:"Calculer une probabilité",niv:"Application",n:8,desc:"Cas d'équiprobabilité (dés, urnes)."},{titre:"Échelle des probabilités",niv:"Réflexion",n:6,desc:"Situer des événements de 0 à 1."}]},u={id:"litteral-5e",titre:"Calcul littéral (initiation)",sous:"Utiliser des lettres : substituer et réduire.",dom:"Calcul littéral",noTrace:!0,cours:`
<h2 class="chap-intro">Pour dire « l'âge de Léa dans quelques années » ou « le prix de plusieurs cahiers identiques » sans connaître encore les nombres, on utilise une <b>lettre</b> à la place. Le calcul littéral, c'est calculer avec ces lettres.</h2>

<h3><span class="n">1</span>Une lettre pour un nombre</h3>
<p>En mathématiques, une <span class="kw">lettre</span> (souvent x) représente un nombre dont on ne connaît pas encore la valeur. Une <span class="kw">expression littérale</span> mélange des nombres et des lettres, par exemple 3x + 2.</p>
<div class="box def"><span class="lab">Définition</span><p>Une <span class="kw">expression littérale</span> est un calcul contenant au moins une lettre. On n'écrit pas le signe × devant une lettre : 3 × x s'écrit <b>3x</b>, et x × x s'écrit <b>x²</b>.</p></div>

<h3><span class="n">2</span>Substituer une valeur</h3>
<p><span class="kw">Substituer</span>, c'est <b>remplacer</b> la lettre par un nombre pour calculer la valeur de l'expression.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour calculer la valeur d'une expression, on remplace chaque lettre par le nombre donné, puis on effectue le calcul en respectant les priorités.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer 3x + 2 pour x = <span class="num">4</span> :</p>
<ol class="demo-steps">
<li>Je remplace x par <span class="num">4</span> : 3 × <span class="num">4</span> + 2.</li>
<li>Je multiplie d'abord : 3 × <span class="num">4</span> = <span class="num">12</span>.</li>
<li>Puis j'ajoute : 12 + 2 = <mark>14</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Réduire une expression</h3>
<p><span class="kw">Réduire</span>, c'est écrire une expression avec le moins de termes possible en regroupant les <span class="kw">termes semblables</span> (ceux qui ont la même lettre).</p>
<div class="box prop"><span class="lab">Propriété</span><p>On additionne entre eux les termes en x, et à part les nombres seuls : <mark>2x + 5x = 7x</mark>, et <mark>3x + 4 + x = 4x + 4</mark>.</p></div>

<h3><span class="n">4</span>La distributivité</h3>
<p>La <span class="kw">distributivité</span> permet de <b>développer</b> un produit où une multiplication porte sur une somme entre parenthèses. On peut la comprendre avec une aire découpée en deux morceaux.</p>
<div class="figbox"><svg viewBox="0 0 440 110">
  <rect x="30" y="30" width="150" height="60" fill="#F0EAFB" stroke="#7C3AED" stroke-width="2"/>
  <rect x="180" y="30" width="90" height="60" fill="#EDE3FA" stroke="#7C3AED" stroke-width="2"/>
  <text x="105" y="66" class="pt-label" text-anchor="middle" fill="#5B21B6">k × a</text><text x="225" y="66" class="pt-label" text-anchor="middle" fill="#5B21B6">k × b</text>
  <text x="150" y="22" class="pt-label" text-anchor="middle">largeur k</text>
  <text x="150" y="105" class="pt-label" text-anchor="middle">k(a + b) = ka + kb</text>
</svg><figcaption>La distributivité illustrée par une aire</figcaption></div>
<div class="box prop"><span class="lab">Propriété</span><p>Pour développer, on multiplie le facteur par chaque terme de la parenthèse : <mark>k(a + b) = k×a + k×b</mark>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Développer 3(x + 5) :</p>
<ol class="demo-steps">
<li>Je multiplie 3 par x : 3 × x = 3x.</li>
<li>Je multiplie 3 par 5 : 3 × 5 = <span class="num">15</span>.</li>
<li>J'obtiens <mark>3(x + 5) = 3x + 15</mark>.</li>
</ol></div>

<h3><span class="n">5</span>Tester une égalité</h3>
<p>Une <span class="kw">égalité</span> contenant une lettre est vraie pour certaines valeurs seulement. Pour savoir si une valeur convient, on la <b>substitue</b> et on vérifie que les deux membres sont égaux.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>L'égalité 2x + 1 = 9 est-elle vraie pour x = <span class="num">4</span> ?</p>
<ol class="demo-steps">
<li>Je remplace x par <span class="num">4</span> dans le membre de gauche : 2 × <span class="num">4</span> + 1.</li>
<li>Je calcule : 8 + 1 = <span class="num">9</span>.</li>
<li>On obtient bien 9, donc l'égalité est <mark>vraie pour x = 4</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>lettre</b> représente un nombre inconnu ; devant une lettre on n'écrit pas le signe × (3x, x²). <b>Substituer</b>, c'est remplacer la lettre par un nombre pour calculer. <b>Réduire</b>, c'est regrouper les termes semblables (2x + 5x = 7x). La <b>distributivité</b> développe un produit : k(a + b) = ka + kb. Enfin, on <b>teste une égalité</b> en remplaçant la lettre et en vérifiant que les deux membres sont égaux.</p></div>
`,fiche:[["x","Une <b>lettre</b> représente un nombre."],["3x","3 × x = 3x ; x × x = x²."],["→","<b>Substituer</b> : remplacer la lettre par un nombre."],["+","<b>Réduire</b> : regrouper les termes semblables (2x + 5x = 7x)."],["( )","<b>Distributivité</b> : k(a + b) = ka + kb."],["=","<b>Tester</b> une égalité en remplaçant la lettre."]],qcm:[{t:"num",q:"Pour x = 4, calcule 3x + 2.",a:14,tol:.01,unit:"",ex:"3 × 4 + 2 = 12 + 2 = 14."},{t:"num",q:"Réduis 2x + 5x : le coefficient du résultat est …",a:7,tol:.01,unit:"",ex:"2x + 5x = 7x, coefficient 7."},{t:"num",q:"Développe 3(x + 5). Quel est le terme constant (sans x) ?",a:15,tol:.01,unit:"",ex:"3(x+5) = 3x + 15 : le terme constant est 15."},{t:"vf",q:"L'égalité 2x + 1 = 9 est vraie pour x = 4.",a:!0,ex:"2×4 + 1 = 9 : vrai."},{t:"num",q:"Pour x = 3, calcule 5x − 4.",a:11,tol:.01,unit:"",ex:"5 × 3 − 4 = 15 − 4 = 11."}],exos:[{titre:"Substituer",niv:"Application",n:8,desc:"Calculer la valeur d'expressions littérales."},{titre:"Réduire",niv:"Application",n:8,desc:"Regrouper les termes semblables."},{titre:"Distributivité",niv:"Réflexion",n:6,desc:"Développer k(a + b) et tester des égalités."}]},d={id:"priorites-5e",titre:"Priorités et enchaînement d'opérations",sous:"Parenthèses, multiplication avant addition.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Quand un calcul mêle plusieurs opérations, comme 3 + 4 × 2, faut-il additionner ou multiplier en premier ? Pour que chacun trouve le <b>même résultat</b>, on suit des <b>règles de priorité</b> précises.</h2>

<h3><span class="n">1</span>Les règles de priorité</h3>
<p>Dans un <span class="kw">enchaînement d'opérations</span>, on ne calcule pas simplement de gauche à droite : certaines opérations sont <b>prioritaires</b> et se font avant les autres.</p>
<div class="box prop"><span class="lab">Propriété</span><p>On effectue les calculs dans cet ordre :</p>
<ol class="demo-steps">
<li>Les <span class="kw">parenthèses</span> d'abord.</li>
<li>Puis les <b>multiplications</b> et <b>divisions</b>.</li>
<li>Enfin les <b>additions</b> et <b>soustractions</b>.</li>
</ol>
<p>À <b>priorité égale</b>, on calcule de <b>gauche à droite</b>.</p></div>
<div class="figbox"><svg viewBox="0 0 380 90">
  <g font-family="Space Mono" font-size="20" fill="#15233F">
  <text x="20" y="40">3 + <tspan fill="#EA8C00">4 × 2</tspan> = 3 + 8 = <tspan fill="#3457B2">11</tspan></text>
  <text x="20" y="75" font-size="14" fill="#15233F">On fait 4 × 2 avant l'addition.</text></g>
</svg><figcaption>La multiplication se calcule avant l'addition</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer <b>3 + 4 × 2</b> :</p>
<ol class="demo-steps">
<li>La multiplication est prioritaire : <span class="num">4</span> × <span class="num">2</span> = <span class="num">8</span>.</li>
<li>Il reste l'addition : <span class="num">3</span> + <span class="num">8</span> = <span class="num">11</span>.</li>
<li>Donc <mark>3 + 4 × 2 = 11</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Le rôle des parenthèses</h3>
<p>Les <span class="kw">parenthèses</span> permettent de <b>forcer</b> un calcul à passer en premier, même s'il s'agit d'une addition. Elles changent donc le résultat.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer <b>(3 + 4) × 2</b> :</p>
<ol class="demo-steps">
<li>On calcule d'abord la parenthèse : <span class="num">3</span> + <span class="num">4</span> = <span class="num">7</span>.</li>
<li>Puis la multiplication : <span class="num">7</span> × <span class="num">2</span> = <span class="num">14</span>.</li>
<li>Donc <mark>(3 + 4) × 2 = 14</mark>.</li>
</ol>
<p>Sans parenthèses, <b>3 + 4 × 2 = 11</b> : les parenthèses font bien la différence.</p></div>

<h3><span class="n">3</span>À priorité égale, de gauche à droite</h3>
<p>Une multiplication et une division ont la <b>même priorité</b> ; il en va de même pour une addition et une soustraction. Dans ce cas, on lit et on calcule de <b>gauche à droite</b>. Mais × et ÷ restent prioritaires sur + et −.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer <b>20 − 6 ÷ 2</b> :</p>
<ol class="demo-steps">
<li>La division est prioritaire : <span class="num">6</span> ÷ <span class="num">2</span> = <span class="num">3</span>.</li>
<li>Il reste la soustraction : <span class="num">20</span> − <span class="num">3</span> = <span class="num">17</span>.</li>
<li>Donc <mark>20 − 6 ÷ 2 = 17</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Attention aux pièges</h3>
<div class="box attention"><span class="lab">Attention</span><p>3 + 4 × 2 ne fait <b>pas</b> 14 : on n'a pas le droit de calculer de gauche à droite quand une multiplication est en jeu. La multiplication est prioritaire, donc le résultat est bien <mark>11</mark>.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>On calcule dans l'ordre : <b>parenthèses</b>, puis <b>× et ÷</b>, enfin <b>+ et −</b>. À priorité égale, on va de <b>gauche à droite</b>. Ainsi 3 + 4 × 2 = <b>11</b> (× d'abord), tandis que (3 + 4) × 2 = <b>14</b> (parenthèse d'abord) : les parenthèses changent le résultat.</p></div>
`,fiche:[["( )","<b>Parenthèses</b> en premier."],["×÷","Puis <b>× et ÷</b>."],["+−","Enfin <b>+ et −</b>."],["→","À priorité égale : de gauche à droite."],["≠","3 + 4 × 2 = 11 (pas 14)."],["=","(3 + 4) × 2 = 14."]],qcm:[{t:"num",q:"Calcule 3 + 4 × 2.",a:11,tol:.01,unit:"",ex:"4 × 2 = 8 d'abord, puis 3 + 8 = 11."},{t:"num",q:"Calcule (3 + 4) × 2.",a:14,tol:.01,unit:"",ex:"Parenthèse d'abord : 7 × 2 = 14."},{t:"num",q:"Calcule 20 − 6 ÷ 2.",a:17,tol:.01,unit:"",ex:"6 ÷ 2 = 3 d'abord, puis 20 − 3 = 17."},{t:"num",q:"Calcule 2 × (5 + 3).",a:16,tol:.01,unit:"",ex:"Parenthèse : 8, puis 2 × 8 = 16."},{t:"vf",q:"On effectue la multiplication avant l'addition.",a:!0,ex:"Vrai : × est prioritaire sur +."}],exos:[{titre:"Calculer avec priorités",niv:"Application",n:8,desc:"Respecter l'ordre des opérations."},{titre:"Parenthèses",niv:"Application",n:8,desc:"Effet des parenthèses sur le résultat."},{titre:"Enchaînements",niv:"Réflexion",n:6,desc:"Expressions à plusieurs opérations."}]},m={id:"premiers-4e",titre:"Nombres premiers",sous:"Reconnaître et décomposer.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Certains nombres se cassent en morceaux plus petits, d'autres résistent à tout partage : ces « briques » indivisibles sont les <b>nombres premiers</b>, et tout entier se construit à partir d'elles.</h2>

<h3><span class="n">1</span>Qu'est-ce qu'un nombre premier ?</h3>
<p>Un <span class="kw">nombre premier</span> est un entier qui a <b>exactement deux diviseurs</b> : <span class="num">1</span> et lui-même. Les premiers d'entre eux sont <span class="num">2</span>, <span class="num">3</span>, <span class="num">5</span>, <span class="num">7</span>, <span class="num">11</span>, <span class="num">13</span>…</p>
<div class="box def"><span class="lab">Définition</span><p>Un nombre entier est <span class="kw">premier</span> lorsqu'il possède <b>exactement deux diviseurs</b> distincts : 1 et lui-même.</p></div>
<div class="box attention"><span class="lab">Attention</span><p><b>1 n'est pas premier</b> : il n'a qu'un seul diviseur (lui-même). Et 2 est le <b>seul nombre pair</b> qui soit premier.</p></div>
<div class="figbox"><svg viewBox="0 0 440 130">
  <text x="220" y="25" font-family="Space Mono" font-size="16" fill="#15233F" text-anchor="middle">12</text>
  <line x1="220" y1="32" x2="150" y2="65" stroke="#15233F"/><line x1="220" y1="32" x2="290" y2="65" stroke="#15233F"/>
  <text x="150" y="80" font-family="Space Mono" font-size="15" fill="#D97706" text-anchor="middle">2</text>
  <text x="290" y="80" font-family="Space Mono" font-size="16" fill="#15233F" text-anchor="middle">6</text>
  <line x1="290" y1="88" x2="250" y2="115" stroke="#15233F"/><line x1="290" y1="88" x2="330" y2="115" stroke="#15233F"/>
  <text x="250" y="128" font-family="Space Mono" font-size="15" fill="#D97706" text-anchor="middle">2</text>
  <text x="330" y="128" font-family="Space Mono" font-size="15" fill="#D97706" text-anchor="middle">3</text>
</svg><figcaption>Décomposition : 12 = 2 × 2 × 3 = 2² × 3</figcaption></div>

<h3><span class="n">2</span>Décomposer en facteurs premiers</h3>
<p>Tout entier peut s'écrire comme un <b>produit de nombres premiers</b> : c'est sa <span class="kw">décomposition en facteurs premiers</span>. Par exemple 12 = 2 × 2 × 3 = <b>2² × 3</b>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour décomposer un nombre, on le <b>divise successivement</b> par les nombres premiers (2, 3, 5, 7…) jusqu'à obtenir 1.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Décomposer <span class="num">60</span> par divisions successives :</p>
<ol class="demo-steps">
<li><span class="num">60</span> ÷ <span class="num">2</span> = <span class="num">30</span>.</li>
<li><span class="num">30</span> ÷ <span class="num">2</span> = <span class="num">15</span>.</li>
<li><span class="num">15</span> ÷ <span class="num">3</span> = <span class="num">5</span>.</li>
<li><span class="num">5</span> ÷ <span class="num">5</span> = <span class="num">1</span>.</li>
<li>Donc <mark>60 = 2 × 2 × 3 × 5 = 2² × 3 × 5</mark>.</li>
</ol></div>

<h3><span class="n">3</span>À quoi ça sert ?</h3>
<p>La décomposition en facteurs premiers sert à <b>simplifier des fractions</b> et à trouver le <span class="kw">PGCD</span> (le plus grand commun diviseur, vu en 3ᵉ).</p>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>nombre premier</b> a exactement <b>deux diviseurs</b> : 1 et lui-même (2, 3, 5, 7, 11, 13…) ; 1 n'est pas premier et 2 est le seul pair premier. Pour <b>décomposer</b> un entier, on le divise successivement par 2, 3, 5, 7… jusqu'à 1 : ainsi 60 = 2² × 3 × 5. Cette décomposition permet de <b>simplifier des fractions</b> et de trouver le <b>PGCD</b>.</p></div>
`,fiche:[["P","<b>Premier</b> : exactement 2 diviseurs (1 et lui-même)."],["2","2, 3, 5, 7, 11, 13… (2 est le seul pair premier)."],["≠1","1 n'est <b>pas</b> premier."],["×","Décomposition : produit de facteurs premiers."],["÷","On divise par 2, 3, 5, 7… jusqu'à 1."],["a/b","Sert à simplifier des fractions."]],qcm:[{t:"vf",q:"7 est un nombre premier.",a:!0,ex:"Vrai : ses seuls diviseurs sont 1 et 7."},{t:"qcm",q:"Le plus petit nombre premier est :",choices:["0","1","2","3"],a:2,ex:"2 est le plus petit nombre premier."},{t:"vf",q:"1 est un nombre premier.",a:!1,ex:"Faux : 1 n'a qu'un seul diviseur, il n'est pas premier."},{t:"num",q:"Dans 12 = 2² × 3, combien de fois apparaît le facteur 2 ?",a:2,tol:.01,unit:"",ex:"2² signifie 2 × 2 : deux fois."},{t:"num",q:"Combien y a-t-il de nombres premiers entre 1 et 10 ? (2, 3, 5, 7)",a:4,tol:.01,unit:"",ex:"2, 3, 5, 7 : il y en a 4."}],exos:[{titre:"Reconnaître les premiers",niv:"Application",n:8,desc:"Dire si un nombre est premier."},{titre:"Décomposer",niv:"Application",n:8,desc:"Décomposer en facteurs premiers."},{titre:"Simplifier des fractions",niv:"Réflexion",n:6,desc:"Utiliser la décomposition."}]};export{n as a,t as b,r as c,i as d,p as e,o as f,c as g,d as h,m as i,u as l,a as p,l as r,e as s,s as t};
