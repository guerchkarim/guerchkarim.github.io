const e={id:"vecteurs-2de",titre:"Les vecteurs",sous:"Somme, coordonnées, colinéarité (Seconde).",dom:"",cours:`
<h2 class="chap-intro">Pousser un objet en ligne droite d'un point à un autre, c'est décrire une translation : voilà précisément ce que capture un <b>vecteur</b>, avec sa direction, son sens et sa longueur. Dans un repère, additionner des vecteurs ou vérifier que des points sont <b>alignés</b> devient un simple calcul sur les coordonnées.</h2>

<h3><span class="n">1</span>Vecteur et égalité</h3>
<p>Un <span class="kw">vecteur</span> traduit une translation : il a une <b>direction</b>, un <b>sens</b> et une <b>longueur</b>. On le note AB→.</p>
<div class="box def"><span class="lab">Définition</span><p>Deux vecteurs sont <span class="kw">égaux</span> s'ils ont mêmes direction, sens et longueur. <b>AB→ = DC→</b> équivaut à « ABCD est un parallélogramme ».</p></div>

<h3><span class="n">2</span>Somme et relation de Chasles</h3>
<p>Pour enchaîner deux déplacements, on met les vecteurs <b>bout à bout</b> : l'arrivée du premier sert de départ au second.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Pour trois points A, B, C : <b>AB→ + BC→ = AC→</b>. On enchaîne les déplacements : c'est la <span class="kw">relation de Chasles</span>.</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <line x1="60" y1="160" x2="230" y2="90" stroke="#EA8C00" stroke-width="2.6"/><polygon points="230,90 214,90 222,104" fill="#EA8C00"/>
  <line x1="230" y1="90" x2="400" y2="60" stroke="#2F6BED" stroke-width="2.6"/><polygon points="400,60 385,63 391,76" fill="#2F6BED"/>
  <line x1="60" y1="160" x2="400" y2="60" stroke="#0FA36B" stroke-width="2.6" stroke-dasharray="2 0"/><polygon points="400,60 386,58 389,72" fill="#0FA36B"/>
  <circle cx="60" cy="160" r="5" class="pt-dot"/><text x="46" y="178" class="pt-label">A</text>
  <circle cx="230" cy="90" r="5" class="pt-dot"/><text x="228" y="82" class="pt-label">B</text>
  <circle cx="400" cy="60" r="5" class="pt-dot"/><text x="406" y="58" class="pt-label">C</text>
  <text x="130" y="112" class="pt-label" fill="#B77800">AB→</text><text x="305" y="60" class="pt-label" fill="#1B4FCB">BC→</text><text x="200" y="150" class="pt-label" fill="#0C7F53">AC→</text>
</svg><figcaption>Relation de Chasles : AB→ + BC→ = AC→</figcaption></div>

<h3><span class="n">3</span>Coordonnées dans un repère</h3>
<p>Si A(xₐ ; yₐ) et B(x_B ; y_B), alors <b>AB→ (x_B − xₐ ; y_B − yₐ)</b>. On additionne deux vecteurs <span class="kw">coordonnée par coordonnée</span>, et on multiplie par un réel k en multipliant chaque coordonnée.</p>
<div class="formula">\\(\\vec{u}+\\vec{v}~(x+x'~;~y+y')\\qquad k\\vec{u}~(kx~;~ky)\\)</div>
<div class="box exemple"><span class="lab">Exemple</span><p>Additionner u(<span class="num">3</span> ; <span class="num">−1</span>) et v(<span class="num">2</span> ; <span class="num">4</span>) :</p>
<ol class="demo-steps">
<li>On additionne les abscisses : <span class="num">3</span> + <span class="num">2</span> = <span class="num">5</span>.</li>
<li>On additionne les ordonnées : <span class="num">−1</span> + <span class="num">4</span> = <span class="num">3</span>.</li>
<li>Donc <mark>u + v (5 ; 3)</mark>.</li>
</ol></div>
<div class="box def"><span class="lab">Définition</span><p>Le <span class="kw">milieu</span> M de [AB] a pour coordonnées ( (xₐ+x_B)÷2 ; (yₐ+y_B)÷2 ).</p></div>

<h3><span class="n">4</span>Colinéarité</h3>
<div class="box prop"><span class="lab">Propriété</span><p>u et v sont <span class="kw">colinéaires</span> s'il existe un réel k tel que v = k·u (ils ont la même direction). Critère par les coordonnées : <b>x·y′ − x′·y = 0</b> (le déterminant est nul).</p></div>
<div class="box methode"><span class="lab">Méthode</span><p>AB→ et AC→ colinéaires ⟹ A, B, C <b>alignés</b>. AB→ et CD→ colinéaires ⟹ (AB) <b>parallèle</b> à (CD).</p></div>
<div class="box attention"><span class="lab">Attention</span><p>AB→ et BA→ ont la même direction mais des sens opposés : BA→ = −AB→.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>vecteur</b> possède une direction, un sens et une longueur. La <b>relation de Chasles</b> AB→ + BC→ = AC→ enchaîne les déplacements. Dans un repère, AB→ (x_B − xₐ ; y_B − yₐ) : on additionne coordonnée par coordonnée et k·u multiplie chaque coordonnée. Enfin, deux vecteurs sont <b>colinéaires</b> lorsque x·y′ − x′·y = 0, ce qui prouve que des points sont alignés ou que des droites sont parallèles.</p></div>
`,fiche:[["→","<b>Vecteur</b> AB→ : direction, sens, longueur."],["＋","<b>Chasles</b> : AB→ + BC→ = AC→."],["( )","AB→ (x_B − xₐ ; y_B − yₐ) ; somme et k·u coordonnée par coordonnée."],["M","Milieu : ( (xₐ+x_B)÷2 ; (yₐ+y_B)÷2 )."],["∥","<b>Colinéaires</b> ⟺ v = k·u ⟺ x·y′ − x′·y = 0."],["A·B·C","Colinéarité ⟹ points alignés ou droites parallèles."]],qcm:[{t:"num",q:"u(3 ; −1) et v(2 ; 4). <b>Abscisse</b> de u + v ?",a:5,tol:.01,unit:"",ex:"On additionne les abscisses : 3 + 2 = 5."},{t:"num",q:"u(3 ; −1) et v(2 ; 4). <b>Ordonnée</b> de u + v ?",a:3,tol:.01,unit:"",ex:"On additionne les ordonnées : −1 + 4 = 3."},{t:"num",q:"u(2 ; 5). <b>Abscisse</b> du vecteur 3·u ?",a:6,tol:.01,unit:"",ex:"3 × 2 = 6."},{t:"vf",q:"Pour trois points A, B, C : AB→ + BC→ = AC→.",a:!0,ex:"Vrai : c'est la relation de Chasles."},{t:"num",q:"Déterminant de u(2 ; 3) et v(4 ; 6) : 2×6 − 3×4 = ?",a:0,tol:.01,unit:"",ex:"12 − 12 = 0 : les vecteurs sont colinéaires."}],exos:[{titre:"Coordonnées et somme",niv:"Calcul",n:8,desc:"Calculer coordonnées, sommes et produits k·u."},{titre:"Relation de Chasles",niv:"Raisonnement",n:6,desc:"Simplifier des sommes de vecteurs."},{titre:"Colinéarité et alignement",niv:"Réflexion",n:6,desc:"Prouver que des points sont alignés ou des droites parallèles."}]},s={id:"espace-2de",titre:"Géométrie dans l'espace",sous:"Droites et plans : positions relatives, sections.",dom:"",cours:`
<h2 class="chap-intro">Un cube dessiné sur une feuille reste plat, pourtant on « voit » un volume : c'est la <b>perspective cavalière</b> qui crée l'illusion. Dans l'espace, droites et plans ne se rencontrent plus comme dans le plan, et couper un solide révèle une <b>section</b>.</h2>

<h3><span class="n">1</span>Représenter l'espace</h3>
<p>On représente les solides en <span class="kw">perspective cavalière</span> : les arêtes fuyantes sont <b>parallèles</b> entre elles, celles qui sont <b>cachées</b> se tracent en <b>pointillés</b>. C'est un dessin à plat qui suggère le volume.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour lire ou tracer une perspective cavalière :</p>
<ol class="demo-steps">
<li>La face de devant est dessinée en <b>vraie grandeur</b>.</li>
<li>Les arêtes fuyantes partent toutes dans la <b>même direction</b> et restent parallèles entre elles.</li>
<li>Les arêtes que l'on ne verrait pas (à l'arrière) se tracent en <b>pointillés</b>.</li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 460 240">
  <polygon points="70,200 250,200 250,60 70,60" fill="#F7EBF1" stroke="#B23A6E" stroke-width="2.4"/>
  <line x1="250" y1="200" x2="320" y2="155" class="seg-a"/><line x1="250" y1="60" x2="320" y2="15" class="seg-a"/><line x1="70" y1="60" x2="140" y2="15" class="seg-a"/>
  <line x1="140" y1="15" x2="320" y2="15" class="seg-a"/><line x1="320" y1="15" x2="320" y2="155" class="seg-a"/>
  <line x1="70" y1="200" x2="140" y2="155" class="seg-a dash"/><line x1="140" y1="15" x2="140" y2="155" class="seg-a dash"/><line x1="140" y1="155" x2="320" y2="155" class="seg-a dash"/>
  <polygon points="70,130 250,130 320,85 140,85" fill="#F2A100" fill-opacity="0.35" stroke="#B77800" stroke-width="1.8"/>
</svg><figcaption>Un cube et une section plane (un quadrilatère, en orange)</figcaption></div>

<h3><span class="n">2</span>Deux droites de l'espace</h3>
<p>Dans le plan, deux droites sont sécantes ou parallèles. Dans l'espace, un troisième cas apparaît : deux droites peuvent ne <b>jamais</b> se rencontrer sans pour autant être parallèles.</p>
<div class="box def"><span class="lab">Positions relatives</span><p>Deux droites sont soit <span class="kw">coplanaires</span> (dans un même plan : alors <b>sécantes</b> ou <b>parallèles</b>), soit <span class="kw">non coplanaires</span> (elles ne se coupent pas et ne sont pas parallèles).</p></div>
<div class="box attention"><span class="lab">Attention</span><p>Deux droites non coplanaires n'ont aucun point commun, mais elles ne sont pas parallèles : sur un cube, deux arêtes qui ne se touchent pas et ne « pointent » pas dans la même direction en sont un exemple.</p></div>

<h3><span class="n">3</span>Une droite et un plan</h3>
<p>Une droite et un plan présentent trois cas de figure.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Une droite et un plan sont : soit la droite est <b>incluse</b> dans le plan (tous ses points y sont), soit ils sont <b>sécants</b> (ils se coupent en un <b>seul point</b>), soit ils sont <b>parallèles</b> (aucun point commun).</p></div>

<h3><span class="n">4</span>Deux plans</h3>
<div class="box def"><span class="lab">Positions</span><p>Deux plans sont soit <span class="kw">parallèles</span> (aucun point commun, ou confondus), soit <span class="kw">sécants</span> : leur intersection est alors une <b>droite</b>.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>L'intersection de deux plans sécants n'est jamais un point isolé : c'est toujours une <b>droite</b> entière.</p></div>

<h3><span class="n">5</span>Sections planes</h3>
<p>Couper un solide par un plan donne une <span class="kw">section</span> : c'est un <b>polygone</b>. La section d'un cube par un plan parallèle à une face est un <b>rectangle</b>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour construire une section, on cherche l'<b>intersection du plan avec chaque face</b> du solide : chaque face traversée fournit un côté du polygone de section.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>On représente les solides en <b>perspective cavalière</b> (fuyantes parallèles, arêtes cachées en pointillés). Dans l'espace, deux droites sont <b>coplanaires</b> (sécantes ou parallèles) ou <b>non coplanaires</b>. Une droite et un plan sont incluse, sécants (1 point) ou parallèles. Deux plans sont parallèles ou sécants, et leur intersection est alors une <b>droite</b>. Enfin, la <b>section</b> d'un solide par un plan est un <b>polygone</b>, obtenu en coupant chaque face traversée.</p></div>
`,fiche:[["┈","<b>Perspective cavalière</b> : fuyantes parallèles, arêtes cachées en pointillés."],["∥⤫","<b>2 droites</b> : coplanaires (sécantes / parallèles) ou non coplanaires."],["／","<b>Droite &amp; plan</b> : incluse, sécante (1 point) ou parallèle."],["▤","<b>2 plans</b> : parallèles, ou sécants ⟹ intersection = une droite."],["⬟","<b>Section</b> d'un solide par un plan = un polygone."],["▭","Section d'un cube ∥ à une face = un rectangle."]],qcm:[{t:"qcm",q:"Dans l'espace, deux plans peuvent être :",choices:["toujours parallèles","parallèles ou sécants","toujours sécants","toujours perpendiculaires"],a:1,ex:"Deux plans sont soit parallèles, soit sécants."},{t:"qcm",q:"L'intersection de deux plans sécants est :",choices:["un point","une droite","un plan","vide"],a:1,ex:"Deux plans sécants se coupent selon une droite."},{t:"vf",q:"Deux droites de l'espace sont soit coplanaires, soit non coplanaires.",a:!0,ex:"Vrai : c'est la classification des positions de deux droites."},{t:"qcm",q:"Une droite et un plan sans point commun (droite non incluse) sont :",choices:["sécants","parallèles","confondus","perpendiculaires"],a:1,ex:"Sans point commun, la droite et le plan sont parallèles."},{t:"vf",q:"La section d'un cube par un plan est un polygone.",a:!0,ex:"Vrai : une section plane d'un solide est un polygone."}],exos:[{titre:"Positions relatives",niv:"Application",n:8,desc:"Classer droites et plans (parallèles, sécants, coplanaires)."},{titre:"Construire une section",niv:"Construction",n:6,desc:"Tracer la section d'un cube par un plan."},{titre:"Raisonner dans l'espace",niv:"Réflexion",n:6,desc:"Justifier parallélisme et intersections."}]},n={id:"python-2de",titre:"Programmer en Python",sous:"Variables, conditions, boucles, fonctions.",dom:"Algorithmique",noTrace:!0,cours:`
<h2 class="chap-intro">Un ordinateur ne devine rien : il exécute, dans l'ordre, les instructions qu'on lui donne. En <b>Python</b>, on écrit ces instructions avec des <b>variables</b>, des <b>conditions</b>, des <b>boucles</b> et des <b>fonctions</b>.</h2>

<h3><span class="n">1</span>Variables et affectation</h3>
<p>Une <span class="kw">variable</span> est une étiquette qui <b>range une valeur</b> pour la réutiliser. On l'affecte avec le signe = : à gauche le nom, à droite la valeur. Chaque valeur a un <span class="kw">type</span> : entier (int), décimal (float) ou texte (str).</p>
<div class="figbox"><svg viewBox="0 0 440 130">
  <rect x="20" y="12" width="400" height="106" rx="8" fill="#15233F"/>
  <g font-family="Space Mono" font-size="14" fill="#EAF0FB"><text x="38" y="38">x = 5</text><text x="38" y="60"><tspan fill="#F2A100">if</tspan> x &gt; 0 :</text><text x="66" y="82"><tspan fill="#7ED0A0">print</tspan>("positif")</text><text x="38" y="104"><tspan fill="#F2A100">else</tspan> :</text></g>
</svg><figcaption>Un court programme Python</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>L'<span class="kw">affectation</span> <code>x = 5</code> <b>range</b> la valeur 5 dans la variable x. Le signe = n'est pas une égalité : c'est une action qui donne une valeur à la variable.</p></div>
<table>
<tr><th>Type</th><th>Contenu</th><th>Exemple</th></tr>
<tr><td>int</td><td>entier</td><td>5</td></tr>
<tr><td>float</td><td>décimal</td><td>3.14</td></tr>
<tr><td>str</td><td>texte</td><td>"positif"</td></tr>
</table>

<h3><span class="n">2</span>Afficher et saisir</h3>
<p>Un programme <b>dialogue</b> avec l'utilisateur : il <span class="kw">affiche</span> des résultats et peut <span class="kw">demander</span> des informations.</p>
<div class="box def"><span class="lab">Définition</span><p><code>print(...)</code> <b>affiche</b> un résultat à l'écran. <code>input(...)</code> <b>demande</b> une saisie à l'utilisateur.</p></div>

<h3><span class="n">3</span>Conditions</h3>
<p>Une <span class="kw">condition</span> permet au programme de <b>choisir</b> ce qu'il fait selon qu'un test est vrai ou faux. On l'écrit avec <code>if ... : ... else : ...</code>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Après <code>if</code>, on écrit un test (par exemple <code>x &gt; 0</code>) suivi de deux points. Le bloc <b>indenté</b> juste en dessous s'exécute seulement si le test est vrai ; sinon c'est le bloc après <code>else :</code> qui s'exécute.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Dans le programme de la figure, si <span class="num">x</span> vaut <span class="num">5</span>, le test <code>x &gt; 0</code> est vrai : le programme affiche <mark>"positif"</mark>.</p></div>

<h3><span class="n">4</span>Boucles</h3>
<p>Une <span class="kw">boucle</span> <b>répète</b> un bloc d'instructions. La boucle <code>for i in range(n) :</code> répète n fois ; la boucle <code>while condition :</code> répète <b>tant que</b> la condition est vraie.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Que fait <code>for i in range(4) :</code> ?</p>
<ol class="demo-steps">
<li>La boucle parcourt les valeurs <span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>.</li>
<li>Le bloc indenté est donc exécuté à chaque valeur.</li>
<li>Au total, le bloc s'exécute <mark>4 fois</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p><code>range(4)</code> commence à <b>0</b> et s'arrête <b>avant</b> 4 : les valeurs sont 0, 1, 2, 3, et non 1, 2, 3, 4.</p></div>

<h3><span class="n">5</span>Fonctions</h3>
<p>Une <span class="kw">fonction</span> est un bloc de code que l'on <b>nomme</b> pour le réutiliser. On la définit avec <code>def</code>, puis on l'<b>appelle</b> par son nom.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>On définit une fonction qui calcule un carré :</p>
<ol class="demo-steps">
<li>Définition : <code>def carre(x) : return x*x</code>.</li>
<li>Appel : <code>carre(5)</code> renvoie <span class="num">5</span> × <span class="num">5</span>.</li>
<li>Le résultat vaut donc <mark>25</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>variable</b> range une valeur avec le signe = (<code>x = 5</code>). <code>print</code> affiche, <code>input</code> demande une saisie. Une <b>condition</b> <code>if ... : ... else : ...</code> choisit selon un test. Une <b>boucle</b> répète un bloc : <code>for i in range(n) :</code> le fait n fois, <code>while</code> tant que la condition reste vraie. Enfin, une <b>fonction</b> <code>def f(x) : return …</code> nomme un calcul que l'on réutilise par un appel.</p></div>
`,fiche:[["=","<b>Affectation</b> : x = 5 (range 5 dans x)."],["print","<b>print(...)</b> affiche ; <b>input(...)</b> saisit."],["if","<b>if / elif / else</b> : test selon une condition."],["for","<b>for i in range(n)</b> : répète n fois."],["while","<b>while</b> : répète tant que la condition est vraie."],["def","<b>def f(x) : return …</b> définit une fonction."]],qcm:[{t:"qcm",q:"En Python, x = 5 signifie :",choices:["comparer x et 5","affecter 5 à x","afficher 5","x est faux"],a:1,ex:"Le signe = affecte la valeur 5 à la variable x."},{t:"num",q:"for i in range(4) : le bloc est répété combien de fois ?",a:4,tol:.01,unit:"",ex:"range(4) parcourt 0, 1, 2, 3 : 4 répétitions."},{t:"qcm",q:"Pour afficher un résultat en Python, on utilise :",choices:["input()","print()","range()","def"],a:1,ex:"print() affiche à l'écran."},{t:"qcm",q:"Une condition en Python commence par le mot-clé :",choices:["for","if","def","while"],a:1,ex:"Le test commence par if."},{t:"vf",q:"La boucle « while » répète tant qu'une condition est vraie.",a:!0,ex:"Vrai : while boucle tant que la condition reste vraie."}],exos:[{titre:"Lire un script Python",niv:"Application",n:8,desc:"Prévoir le résultat d'un programme."},{titre:"Conditions et boucles",niv:"Application",n:6,desc:"Écrire des tests et des boucles simples."},{titre:"Fonctions",niv:"Réflexion",n:6,desc:"Définir et utiliser des fonctions."}]};export{s as e,n as p,e as v};
