const e={id:"thales-3e",titre:"Thalès : réciproque et agrandissement-réduction",sous:"Prouver un parallélisme et changer d'échelle.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Prouver que deux droites sont <b>parallèles</b> à partir de simples rapports de longueurs, puis fabriquer la <b>maquette</b> d'un objet en changeant d'échelle : c'est tout le pouvoir de Thalès pris « à l'envers ».</h2>

<h3><span class="n">1</span>Rappel du théorème direct</h3>
<p>Dans la configuration de Thalès, si les droites sont déjà <span class="kw">parallèles</span>, on obtient une <b>égalité de rapports</b>. En 3ᵉ, on apprend à s'en servir « à l'envers » pour <b>démontrer</b> un parallélisme.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Si (MN) ∥ (BC) dans la configuration de Thalès, alors <mark>AM/AB = AN/AC = MN/BC</mark>.</p></div>

<h3><span class="n">2</span>La réciproque de Thalès</h3>
<p>La <span class="kw">réciproque</span> part des <b>rapports</b> pour conclure au <b>parallélisme</b> : c'est l'outil pour <b>démontrer</b> que deux droites sont parallèles.</p>
<div class="box prop"><span class="lab">Réciproque</span><p>Si les points sont <b>alignés dans le même ordre</b> sur les deux droites, et si <b>AM/AB = AN/AC</b>, alors les droites <b>(MN) et (BC) sont parallèles</b>.</p></div>
<div class="box methode"><span class="lab">Méthode</span><p>On calcule séparément les deux rapports AM/AB et AN/AC. S'ils sont <b>égaux</b> (et l'ordre respecté) ⟹ parallèles. S'ils sont différents ⟹ non parallèles.</p></div>

<h3><span class="n">3</span>Prouver que deux droites NE sont PAS parallèles</h3>
<p>Il suffit de montrer que les deux rapports sont <b>différents</b> : c'est la <span class="kw">contraposée</span> de Thalès.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>On compare les deux rapports :</p>
<ol class="demo-steps">
<li>Premier rapport : AM/AB = <span class="num">3</span>/<span class="num">5</span> = 0,6.</li>
<li>Second rapport : AN/AC = <span class="num">4</span>/<span class="num">7</span> ≈ 0,57.</li>
<li>Comme 0,6 ≠ 0,57, les droites ne sont <mark>pas parallèles</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Agrandissement et réduction</h3>
<p>Multiplier toutes les longueurs d'une figure par un même nombre k (le <span class="kw">coefficient</span>) donne un <span class="kw">agrandissement</span> (si k &gt; 1) ou une <span class="kw">réduction</span> (si k &lt; 1).</p>
<div class="box prop"><span class="lab">Effet sur les mesures</span><p>Selon la dimension considérée :</p>
<ol class="demo-steps">
<li>Les <b>longueurs</b> sont multipliées par <b>k</b>.</li>
<li>Les <b>aires</b> sont multipliées par <b>k²</b>.</li>
<li>Les <b>volumes</b> sont multipliés par <b>k³</b>.</li>
<li>Les <b>angles</b> sont <b>inchangés</b>.</li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 460 170">
  <path d="M40 140 L110 140 L75 85 Z" fill="rgba(224,114,58,.08)" stroke="#E0723A" stroke-width="2"/>
  <path d="M230 140 L370 140 L300 30 Z" fill="rgba(224,114,58,.05)" stroke="#E0723A" stroke-width="2"/>
  <text x="55" y="160" class="pt-label">figure</text>
  <text x="270" y="160" class="pt-label" fill="#B77800">×2 (aire ×4)</text>
</svg><figcaption>Agrandissement k=2 : longueurs ×2, aire ×4, volume ×8</figcaption></div>
<div class="box attention"><span class="lab">Attention</span><p>Si les longueurs sont multipliées par 3, l'aire est multipliée par 3² = 9 (pas par 3 !) et le volume par 3³ = 27.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>réciproque</b> de Thalès démontre un parallélisme : si les points sont alignés dans le même ordre et si AM/AB = AN/AC, alors (MN) ∥ (BC). Des rapports <b>différents</b> prouvent au contraire que les droites <b>ne sont pas parallèles</b> (contraposée). Dans un agrandissement-réduction de coefficient k, les <b>longueurs</b> sont ×k, les <b>aires</b> ×k², les <b>volumes</b> ×k³, et les <b>angles</b> ne changent pas.</p></div>
`,fiche:[["⟲","<b>Réciproque</b> : AM/AB = AN/AC (+ même ordre) ⟹ (MN)∥(BC)."],["≠","Rapports différents ⟹ droites NON parallèles (contraposée)."],["k","<b>Agrandissement</b> k>1, <b>réduction</b> k<1 : longueurs ×k."],["k²","Les <b>aires</b> sont multipliées par k²."],["k³","Les <b>volumes</b> sont multipliés par k³."],["∠","Les <b>angles</b> ne changent pas."]],qcm:[{t:"vf",q:"Si AM/AB = AN/AC et que l'ordre des points est respecté, alors (MN)∥(BC).",a:!0,ex:"Vrai : c'est exactement la réciproque du théorème de Thalès."},{t:"num",q:"Un agrandissement de coefficient 3 multiplie les aires par combien ?",a:9,tol:.01,unit:"",ex:"Les aires sont multipliées par k² = 3² = 9."},{t:"num",q:"Un agrandissement de coefficient 2 multiplie les volumes par combien ?",a:8,tol:.01,unit:"",ex:"Les volumes sont multipliés par k³ = 2³ = 8."},{t:"vf",q:"Un agrandissement modifie les angles de la figure.",a:!1,ex:"Faux : agrandissement et réduction conservent les angles (la forme reste la même)."},{t:"qcm",q:"On trouve AM/AB = 0,6 et AN/AC = 0,5. Que conclure ?",choices:["(MN)∥(BC)","(MN) et (BC) non parallèles","triangle rectangle","rien"],a:1,ex:"Les rapports sont différents : par la contraposée, les droites ne sont pas parallèles."}],exos:[{titre:"Réciproque de Thalès",niv:"Réflexion",n:8,desc:"Prouver (ou réfuter) un parallélisme."},{titre:"Agrandissement-réduction",niv:"Calcul",n:8,desc:"Effet du coefficient sur longueurs, aires, volumes."},{titre:"Échelles et plans",niv:"Réflexion",n:6,desc:"Problèmes concrets d'échelle."}]},s={id:"trigonometrie",titre:"Trigonométrie : sinus, cosinus, tangente",sous:"Les trois rapports du triangle rectangle.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Mesurer la hauteur d'un arbre sans y grimper, retrouver un angle d'élévation à partir de deux longueurs : dans un triangle rectangle, la <b>trigonométrie</b> relie un <b>angle aigu</b> aux <b>côtés</b> grâce à trois rapports — le <b>sinus</b>, le <b>cosinus</b> et la <b>tangente</b>.</h2>

<h3><span class="n">1</span>Les trois rapports</h3>
<p>Dans un triangle rectangle, on repère un <span class="kw">angle aigu</span> puis on nomme ses côtés : le côté <b>opposé</b> (face à l'angle), le côté <b>adjacent</b> (contre l'angle) et l'<span class="kw">hypoténuse</span> (le plus grand côté, face à l'angle droit). À partir de ces côtés, on définit trois rapports.</p>
<div class="box def"><span class="lab">Définition</span><p>Pour un angle aigu d'un triangle rectangle :</p>
<ol class="demo-steps">
<li><b>sin(angle) = opposé ÷ hypoténuse</b></li>
<li><b>cos(angle) = adjacent ÷ hypoténuse</b></li>
<li><b>tan(angle) = opposé ÷ adjacent</b></li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 460 210">
  <path d="M80 170 L340 170 L340 50 Z" fill="rgba(224,114,58,.06)" stroke="#E0723A" stroke-width="2.4"/>
  <path d="M318 170 L318 152 L340 152" fill="none" stroke="#15233F" stroke-width="1.5"/>
  <path d="M110 170 A30 30 0 0 0 118 148" class="arc"/>
  <text x="90" y="188" class="pt-label" fill="#B77800">angle</text>
  <text x="185" y="188" class="pt-label" fill="#1B4FCB">adjacent</text>
  <text x="345" y="115" class="pt-label" fill="#0FA36B">opposé</text>
  <text x="175" y="100" class="pt-label">hypoténuse</text>
</svg><figcaption>Les trois côtés selon l'angle aigu marqué</figcaption></div>
<div class="box attention"><span class="lab">Attention</span><p>Les mots <b>opposé</b> et <b>adjacent</b> dépendent de l'angle choisi : si l'on change d'angle aigu, ces deux côtés échangent leur rôle. Seule l'<span class="kw">hypoténuse</span>, face à l'angle droit, ne change jamais.</p></div>

<h3><span class="n">2</span>Le moyen mnémotechnique : SOH-CAH-TOA</h3>
<p>Pour retenir les trois rapports, on lit les initiales des mots dans l'ordre : chaque groupe de trois lettres donne un rapport complet.</p>
<div class="box cle"><span class="lab">À mémoriser</span><p><b>S</b>in = <b>O</b>pposé / <b>H</b>ypoténuse &nbsp;·&nbsp; <b>C</b>os = <b>A</b>djacent / <b>H</b>ypoténuse &nbsp;·&nbsp; <b>T</b>an = <b>O</b>pposé / <b>A</b>djacent<br>⟹ <mark><b>SOH · CAH · TOA</b></mark></p></div>

<h3><span class="n">3</span>Calculer une longueur</h3>
<p>Quand on connaît un angle et un côté, on choisit le rapport qui relie ce côté au côté cherché, puis on isole la longueur inconnue.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Angle = <span class="num">35°</span>, hypoténuse = <span class="num">12 cm</span> ; on cherche le côté <b>opposé</b>.</p>
<ol class="demo-steps">
<li>Le côté cherché est l'opposé et le côté connu l'hypoténuse : on utilise le <b>sinus</b>.</li>
<li>opposé = 12 × sin(35°) ≈ 12 × <span class="num">0,574</span>.</li>
<li>Donc <mark>opposé ≈ 6,9 cm</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Calculer un angle</h3>
<p>On identifie deux côtés connus, on choisit le bon rapport, puis on utilise <span class="kw">sin⁻¹</span>, <span class="kw">cos⁻¹</span> ou <span class="kw">tan⁻¹</span> (les touches inverses de la calculatrice) pour remonter à l'angle.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Opposé = <span class="num">5</span>, adjacent = <span class="num">8</span> ; on cherche l'angle.</p>
<ol class="demo-steps">
<li>On connaît l'opposé et l'adjacent : on utilise la <b>tangente</b>.</li>
<li>tan(angle) = 5/8 = <span class="num">0,625</span>.</li>
<li>Donc angle = tan⁻¹(0,625) ≈ <mark>32°</mark>.</li>
</ol></div>
<div class="box methode"><span class="lab">Méthode</span><p>Pour <b>choisir le bon rapport</b>, repère les deux côtés dont tu disposes (ou que tu cherches) par rapport à l'angle, puis choisis : opposé + hypoténuse → <b>sinus</b> ; adjacent + hypoténuse → <b>cosinus</b> ; opposé + adjacent → <b>tangente</b>.</p></div>
<div class="box attention"><span class="lab">Calculatrice</span><p>Vérifie toujours que la calculatrice est en mode <b>DEGRÉ</b>. Une relation utile pour tout angle : <mark>(sin x)² + (cos x)² = 1</mark>.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Dans un triangle rectangle, trois rapports relient un <b>angle aigu</b> à ses côtés : <b>SOH</b> (sin = opposé ÷ hypoténuse), <b>CAH</b> (cos = adjacent ÷ hypoténuse), <b>TOA</b> (tan = opposé ÷ adjacent). Pour une <b>longueur</b>, on multiplie par le sinus, le cosinus ou la tangente de l'angle ; pour un <b>angle</b>, on utilise sin⁻¹, cos⁻¹ ou tan⁻¹ du rapport. Toujours la calculatrice en mode <b>DEGRÉ</b>, et (sin x)² + (cos x)² = 1.</p></div>
`,fiche:[["S","<b>sin = opposé ÷ hypoténuse</b> (SOH)."],["C","<b>cos = adjacent ÷ hypoténuse</b> (CAH)."],["T","<b>tan = opposé ÷ adjacent</b> (TOA)."],["→L","Longueur : côté = hyp × sin/cos, ou opposé = adj × tan."],["→∠","Angle : sin⁻¹, cos⁻¹ ou tan⁻¹ du rapport."],["DEG","Mode DEGRÉ · sin²+cos² = 1."]],qcm:[{t:"qcm",q:"Dans SOH-CAH-TOA, la tangente est égale à :",choices:["opposé ÷ hypoténuse","adjacent ÷ hypoténuse","opposé ÷ adjacent","hypoténuse ÷ opposé"],a:2,ex:"TOA : Tangente = Opposé / Adjacent."},{t:"num",q:"Angle = 30°, hypoténuse = 10 cm. Côté opposé ? (sin 30° = 0,5)",a:5,tol:.05,unit:"cm",ex:"opposé = hyp × sin(30°) = 10 × 0,5 = 5 cm."},{t:"qcm",q:"On connaît l'opposé et l'adjacent d'un angle. Quel rapport utiliser ?",choices:["sinus","cosinus","tangente","Pythagore"],a:2,ex:"Opposé et adjacent ⟹ tangente (TOA)."},{t:"vf",q:"Pour tous les angles aigus, (sin)² + (cos)² = 1.",a:!0,ex:"Vrai : c'est la relation trigonométrique fondamentale."},{t:"num",q:"tan(angle) = 1. Combien vaut l'angle ?",a:45,tol:.5,unit:"°",ex:"tan⁻¹(1) = 45°. (Opposé = adjacent : le triangle est isocèle rectangle.)"}],exos:[{titre:"Longueurs (sin, cos, tan)",niv:"Calcul",n:8,desc:"Choisir le bon rapport et calculer un côté."},{titre:"Angles",niv:"Calcul",n:8,desc:"Retrouver un angle avec sin⁻¹/cos⁻¹/tan⁻¹."},{titre:"Problèmes de repérage",niv:"Réflexion",n:6,desc:"Hauteurs, distances, angles d'élévation."}]},a={id:"rotation-homothetie",titre:"Rotations et homothéties",sous:"Tourner et agrandir depuis un centre.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Faire pivoter une aiguille de montre autour de son axe, ou agrandir une photo depuis un point : ce sont deux transformations qui déplacent une figure sans la déformer, la <b>rotation</b> et l'<b>homothétie</b>.</h2>

<h3><span class="n">1</span>La rotation</h3>
<p>Une <span class="kw">rotation</span> fait <b>tourner</b> une figure autour d'un point fixe (le <span class="kw">centre</span>), d'un certain <b>angle</b> et dans un <b>sens</b> (horaire ou anti-horaire).</p>
<div class="box def"><span class="lab">Définition</span><p>Le point M' est l'image de M par la rotation de centre O et d'angle a lorsque <b>OM' = OM</b> (même distance au centre) et l'angle <b>MO&#770;M' = a</b> (dans le bon sens).</p></div>
<div class="box prop"><span class="lab">Propriété</span><p>La rotation conserve les <b>longueurs</b>, les <b>angles</b>, les <b>aires</b> et l'<b>orientation</b>. La <span class="kw">symétrie centrale</span> est un cas particulier : c'est une rotation de <mark>180°</mark>.</p></div>
<div class="figbox"><svg viewBox="0 0 460 200">
  <circle cx="230" cy="120" r="4.5" class="pt-dot"/><text x="236" y="135" class="pt-label">O</text>
  <line x1="230" y1="120" x2="330" y2="90" stroke="#E0723A" stroke-width="2"/>
  <line x1="230" y1="120" x2="290" y2="35" stroke="#E0723A" stroke-width="2"/>
  <circle cx="330" cy="90" r="4.5" class="pt-dot"/><text x="336" y="90" class="pt-label">M</text>
  <circle cx="290" cy="35" r="4.5" class="pt-dot"/><text x="296" y="32" class="pt-label">M'</text>
  <path d="M295 105 A75 75 0 0 0 275 62" class="arc"/>
  <text x="300" y="70" class="pt-label" fill="#B77800">angle</text>
</svg><figcaption>Rotation de centre O : OM' = OM, angle imposé</figcaption></div>

<h3><span class="n">2</span>L'homothétie</h3>
<p>Une <span class="kw">homothétie</span> agrandit ou réduit une figure depuis un point fixe (le <span class="kw">centre</span>), selon un <span class="kw">rapport</span> k.</p>
<div class="box def"><span class="lab">Définition</span><p>L'image M' de M par l'homothétie de centre O et de rapport k vérifie : O, M, M' <b>alignés</b>, et <b>OM' = k × OM</b>.</p></div>
<div class="box prop"><span class="lab">Effet du rapport</span><p>Selon la valeur du rapport k :</p>
<ol class="demo-steps">
<li>Si <b>k &gt; 1</b> : agrandissement.</li>
<li>Si <b>0 &lt; k &lt; 1</b> : réduction.</li>
<li>Si <b>k &lt; 0</b> : la figure est aussi retournée (de l'autre côté du centre).</li>
</ol>
<p>Les <b>longueurs</b> sont multipliées par |k|, les <b>aires</b> par k², les <b>angles</b> sont conservés.</p></div>
<div class="figbox"><svg viewBox="0 0 460 190">
  <circle cx="60" cy="100" r="4.5" class="pt-dot"/><text x="46" y="100" class="pt-label">O</text>
  <path d="M120 110 L170 110 L145 75 Z" fill="rgba(224,114,58,.1)" stroke="#E0723A" stroke-width="1.8"/>
  <path d="M240 130 L340 130 L290 60 Z" fill="rgba(224,114,58,.05)" stroke="#E0723A" stroke-width="1.8"/>
  <line x1="60" y1="100" x2="340" y2="130" stroke="#2F6BED" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="60" y1="100" x2="290" y2="60" stroke="#2F6BED" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="255" y="155" class="pt-label" fill="#B77800">k = 2</text>
</svg><figcaption>Homothétie de centre O, rapport 2 : la figure double</figcaption></div>

<div class="box attention"><span class="lab">Rotation ou homothétie ?</span><p>La <b>rotation</b> garde la taille (elle tourne). L'<b>homothétie</b> garde la direction (elle agrandit ou réduit depuis un centre).</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>rotation</b> de centre O et d'angle a fait tourner la figure sans la déformer : <b>OM' = OM</b> et l'angle <b>MO&#770;M' = a</b> ; elle conserve longueurs, angles, aires et orientation, et la symétrie centrale en est le cas à 180°. L'<b>homothétie</b> de centre O et de rapport k agrandit ou réduit depuis O : O, M, M' alignés et <b>OM' = k × OM</b>. Les longueurs sont alors multipliées par |k| et les aires par k², tandis que les angles restent inchangés.</p></div>
`,fiche:[["↻","<b>Rotation</b> : tourne autour d'un centre O, d'un angle donné, dans un sens."],["=","Rotation : OM' = OM ; conserve longueurs, angles, aires."],["180","Symétrie centrale = rotation de 180°."],["k×","<b>Homothétie</b> : centre O, OM' = k × OM (O, M, M' alignés)."],["k²","Homothétie : longueurs ×|k|, aires ×k², angles conservés."],["±","k>1 agrandit, 0<k<1 réduit, k<0 retourne aussi."]],qcm:[{t:"qcm",q:"Une rotation est définie par :",choices:["un centre et un rapport","un centre, un angle et un sens","une droite","deux points"],a:1,ex:"Il faut un centre, un angle et un sens de rotation."},{t:"qcm",q:"La symétrie centrale est une rotation d'angle :",choices:["90°","120°","180°","360°"],a:2,ex:"La symétrie centrale correspond à un demi-tour, soit 180°."},{t:"num",q:"Homothétie de rapport 3 : une longueur de 4 cm devient … cm.",a:12,tol:.01,unit:"cm",ex:"Les longueurs sont multipliées par le rapport : 4 × 3 = 12 cm."},{t:"num",q:"Homothétie de rapport 2 : une aire de 5 cm² devient … cm².",a:20,tol:.01,unit:"cm²",ex:"Les aires sont multipliées par k² = 2² = 4 : 5 × 4 = 20 cm²."},{t:"vf",q:"Une homothétie conserve les angles de la figure.",a:!0,ex:"Vrai : l'homothétie change la taille mais garde la forme, donc les angles."}],exos:[{titre:"Construire par rotation",niv:"Construction",n:6,desc:"Image d'un point/figure par rotation."},{titre:"Construire par homothétie",niv:"Construction",n:6,desc:"Agrandir/réduire depuis un centre."},{titre:"Effets sur les mesures",niv:"Calcul",n:6,desc:"Longueurs, aires et angles selon le rapport."}]},n={id:"espace-3e",titre:"Géométrie dans l'espace : sphère et sections",sous:"Boule, sphère, et sections de solides.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Un ballon de baudruche et une bille pleine ont la même forme ronde, mais l'un est creux et l'autre plein : c'est toute la différence entre la <b>sphère</b> (la surface) et la <b>boule</b> (le solide). Trancher ces solides fait apparaître des figures planes surprenantes.</h2>

<h3><span class="n">1</span>Sphère et boule</h3>
<p>La <span class="kw">sphère</span> de centre O et de rayon \\(r\\) est l'ensemble des points de l'espace situés à la distance \\(r\\) de O : c'est la « surface », comme la peau d'un ballon. La <span class="kw">boule</span>, elle, est la sphère <b>et son intérieur</b> : le solide plein.</p>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">sphère</span> est la surface formée des points à distance \\(r\\) du centre O. La <span class="kw">boule</span> est cette sphère complétée par tout son intérieur.</p></div>
<div class="figbox"><svg viewBox="0 0 460 180">
  <circle cx="230" cy="90" r="70" fill="rgba(224,114,58,.06)" stroke="#E0723A" stroke-width="2.2"/>
  <ellipse cx="230" cy="90" rx="70" ry="22" fill="none" stroke="#E0723A" stroke-width="1.3" stroke-dasharray="5 4"/>
  <circle cx="230" cy="90" r="4" class="pt-dot"/><text x="236" y="103" class="pt-label">O</text>
  <line x1="230" y1="90" x2="300" y2="90" class="seg-a"/><text x="252" y="82" class="pt-label" fill="#1B4FCB">r</text>
</svg><figcaption>Sphère de centre O et de rayon r</figcaption></div>
<div class="box prop"><span class="lab">Propriété</span><p>L'aire de la sphère et le volume de la boule de rayon \\(r\\) sont : <mark>\\(\\text{Sphère : } A = 4\\pi r^2 \\qquad \\text{Boule : } V = \\dfrac{4}{3}\\pi r^3\\)</mark>.</p></div>

<h3><span class="n">2</span>Sections planes de solides</h3>
<p>Couper un solide par un plan produit une <span class="kw">section</span> : une figure plane. Selon le solide et l'orientation du plan, on obtient différentes formes.</p>
<div class="box prop"><span class="lab">Sections usuelles</span>
<ol class="demo-steps">
<li><b>Pavé / cube</b> coupé parallèlement à une face ⟹ <b>rectangle</b> (ou carré).</li>
<li><b>Cylindre</b> coupé parallèlement à la base ⟹ <b>disque</b> ; perpendiculairement à la base ⟹ <b>rectangle</b>.</li>
<li><b>Sphère</b> coupée par un plan ⟹ toujours un <b>cercle</b> (le plus grand cercle passe par le centre).</li>
</ol></div>

<h3><span class="n">3</span>Un exemple de calcul</h3>
<div class="box exemple"><span class="lab">Exemple</span><p>Volume d'une boule de rayon <span class="num">3</span> cm :</p>
<ol class="demo-steps">
<li>On applique la formule : \\(V = \\dfrac{4}{3}\\times\\pi\\times 3^3\\).</li>
<li>On calcule le cube : \\(3^3 = 27\\), d'où \\(V = \\dfrac{4}{3}\\times\\pi\\times 27\\).</li>
<li>On simplifie : <mark>\\(V = 36\\pi \\approx 113\\text{ cm}^3\\)</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Agrandissement dans l'espace</h3>
<p>C'est le lien avec le chapitre des <span class="kw">échelles</span> : si on multiplie le rayon d'une boule par un nombre \\(k\\), son aire est multipliée par \\(k^2\\) et son volume par <b>\\(k^3\\)</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Multiplier le rayon par \\(k\\) multiplie l'aire par \\(k^2\\) et le volume par \\(k^3\\). Ainsi, <b>doubler</b> le rayon multiplie le volume par <mark>\\(2^3 = 8\\)</mark>.</p></div>

<div class="box attention"><span class="lab">Attention</span><p><b>Sphère</b> = la surface (comme un ballon vide). <b>Boule</b> = le solide plein (comme une bille). L'aire concerne la sphère, le volume concerne la boule : ne pas les confondre.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>sphère</b> est la surface (points à distance \\(r\\) de O), la <b>boule</b> est le solide plein. Aire de la sphère : \\(A = 4\\pi r^2\\) ; volume de la boule : \\(V = \\tfrac{4}{3}\\pi r^3\\). Une section de sphère est toujours un <b>cercle</b> ; un cylindre donne un disque (∥ base) ou un rectangle (⊥ base). Enfin, multiplier le rayon par \\(k\\) multiplie l'aire par \\(k^2\\) et le volume par \\(k^3\\).</p></div>
`,fiche:[["○","<b>Sphère</b> = surface (points à distance r de O)."],["●","<b>Boule</b> = sphère + intérieur (solide plein)."],["A","Aire de la sphère : A = 4πr²."],["V","Volume de la boule : V = (4/3)πr³."],["✂","<b>Sections</b> : sphère ⟹ cercle ; cylindre ∥ base ⟹ disque, ⊥ ⟹ rectangle."],["k³","Rayon ×k ⟹ aire ×k², volume ×k³."]],qcm:[{t:"qcm",q:"La section d'une sphère par un plan est toujours :",choices:["un carré","un cercle","un triangle","une ellipse"],a:1,ex:"Couper une sphère par un plan donne toujours un cercle."},{t:"num",q:"Aire d'une sphère de rayon 2 cm ? (donne le coefficient de π, ex: 16 pour 16π)",a:16,tol:.01,unit:"π cm²",ex:"A = 4πr² = 4 × π × 2² = 4 × π × 4 = 16π cm²."},{t:"qcm",q:"Un cylindre coupé perpendiculairement à sa base donne une section :",choices:["disque","rectangle","triangle","cercle"],a:1,ex:"Perpendiculairement à la base, la section d'un cylindre est un rectangle."},{t:"vf",q:"La boule est la surface, et la sphère est le solide plein.",a:!1,ex:"Faux : c'est l'inverse. La SPHÈRE est la surface, la BOULE est le solide plein."},{t:"num",q:"On double le rayon d'une boule. Son volume est multiplié par :",a:8,tol:.01,unit:"",ex:"Volume ×k³ = 2³ = 8. Doubler le rayon multiplie le volume par 8."}],exos:[{titre:"Sphère et boule",niv:"Calcul",n:8,desc:"Aires et volumes avec π."},{titre:"Sections planes",niv:"Réflexion",n:6,desc:"Identifier la forme des sections."},{titre:"Échelles dans l'espace",niv:"Réflexion",n:6,desc:"Effet de k sur aires et volumes."}]},t={id:"vecteurs",titre:"Vecteurs et translations",sous:"Un vecteur : direction, sens et longueur d'un déplacement.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Faire glisser une figure d'un point à un autre sans la tourner ni la déformer, c'est appliquer une <b>translation</b> : le déplacement lui-même se décrit par un <b>vecteur</b>, muni d'une direction, d'un sens et d'une longueur.</h2>

<h3><span class="n">1</span>Qu'est-ce qu'un vecteur ?</h3>
<p>Un <span class="kw">vecteur</span> décrit un <b>déplacement</b> (une translation). Il possède trois caractéristiques : une <span class="kw">direction</span>, un <span class="kw">sens</span> et une <span class="kw">longueur</span> (aussi appelée norme).</p>
<div class="box def"><span class="lab">Définition</span><p>Le vecteur qui va de A vers B se note <b>AB→</b>. La <b>translation</b> qui transforme A en B est la translation de vecteur AB→.</p></div>
<div class="figbox"><svg viewBox="0 0 460 190">
  <line x1="70" y1="150" x2="330" y2="60" stroke="#E0723A" stroke-width="2.6"/>
  <polygon points="330,60 314,60 322,74" fill="#E0723A"/>
  <circle cx="70" cy="150" r="5" class="pt-dot"/><text x="56" y="168" class="pt-label">A</text>
  <circle cx="330" cy="60" r="5" class="pt-dot"/><text x="338" y="58" class="pt-label">B</text>
  <text x="180" y="95" class="pt-label" fill="#B77800">AB→</text>
</svg><figcaption>Le vecteur AB→ : de A vers B (direction, sens, longueur)</figcaption></div>

<h3><span class="n">2</span>Coordonnées d'un vecteur</h3>
<p>Dans un repère, si A(xₐ ; yₐ) et B(x_B ; y_B), on obtient les coordonnées du vecteur AB→ en <b>soustrayant</b> les coordonnées du point de départ à celles du point d'arrivée :</p>
<div class="box prop"><span class="lab">Propriété</span><p>Les coordonnées du vecteur AB→ sont : <mark>\\(\\vec{AB}~(x_B - x_A~;~y_B - y_A)\\)</mark>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Coordonnées de AB→ pour A(<span class="num">1</span> ; <span class="num">2</span>) et B(<span class="num">5</span> ; <span class="num">5</span>) :</p>
<ol class="demo-steps">
<li>Abscisse : x_B − xₐ = <span class="num">5</span> − <span class="num">1</span> = <span class="num">4</span>.</li>
<li>Ordonnée : y_B − yₐ = <span class="num">5</span> − <span class="num">2</span> = <span class="num">3</span>.</li>
<li>Donc <mark>AB→ (4 ; 3)</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Vecteurs égaux</h3>
<div class="box prop"><span class="lab">Propriété</span><p>Deux vecteurs sont <b>égaux</b> s'ils ont la même <span class="kw">direction</span>, le même <span class="kw">sens</span> et la même <span class="kw">longueur</span> (mêmes coordonnées). Si AB→ = CD→, alors ABDC est un <b>parallélogramme</b>.</p></div>

<h3><span class="n">4</span>Norme (longueur)</h3>
<p>La <span class="kw">norme</span> d'un vecteur de coordonnées (x ; y) est sa <b>longueur</b> ; on la calcule avec le théorème de Pythagore : longueur = √(x² + y²).</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Norme du vecteur u→(<span class="num">3</span> ; <span class="num">4</span>) :</p>
<ol class="demo-steps">
<li>On applique la formule : √(<span class="num">3</span>² + <span class="num">4</span>²) = √(9 + 16).</li>
<li>On termine : √25 = <mark>5</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>AB→ et BA→ ont la même direction et la même longueur mais des <b>sens opposés</b> : ce ne sont pas les mêmes vecteurs.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>vecteur</b> décrit un déplacement par sa <b>direction</b>, son <b>sens</b> et sa <b>longueur</b> ; il se note AB→ et porte la translation de A vers B. Ses coordonnées s'obtiennent par <b>AB→ (x_B − xₐ ; y_B − yₐ)</b>. Deux vecteurs sont <b>égaux</b> quand ils ont les mêmes coordonnées (⟹ parallélogramme), et la <b>norme</b> se calcule avec Pythagore : √(x² + y²). Enfin, AB→ et BA→ ont des sens opposés : ils ne sont pas égaux.</p></div>
`,fiche:[["→","<b>Vecteur</b> = déplacement : direction, sens, longueur. Noté AB→."],["( )","Coordonnées : AB→ (x_B − xₐ ; y_B − yₐ)."],["=","<b>Vecteurs égaux</b> = mêmes coordonnées ⟹ ABDC parallélogramme."],["‖‖","<b>Norme</b> = √(x² + y²) (Pythagore)."],["⇄","AB→ et BA→ : sens opposés (pas égaux)."],["▱","Translation de vecteur AB→ : glissement de tous les points."]],qcm:[{t:"num",q:"A(1 ; 2) et B(5 ; 5). L'<b>abscisse</b> du vecteur AB→ (x_B − xₐ) vaut :",a:4,tol:.01,unit:"",ex:"x_B − xₐ = 5 − 1 = 4."},{t:"num",q:"Mêmes points A(1 ; 2), B(5 ; 5) : l'<b>ordonnée</b> du vecteur AB→ (y_B − yₐ) vaut :",a:3,tol:.01,unit:"",ex:"y_B − yₐ = 5 − 2 = 3."},{t:"vf",q:"Deux vecteurs égaux ont la même direction, le même sens et la même longueur.",a:!0,ex:"Vrai : c'est la définition de l'égalité de deux vecteurs."},{t:"qcm",q:"La translation qui transforme A en B est associée au vecteur :",choices:["BA→","AB→","AA→","BB→"],a:1,ex:"C'est la translation de vecteur AB→ (de A vers B)."},{t:"num",q:"Le vecteur u→(3 ; 4) a pour <b>norme</b> √(3² + 4²) = ",a:5,tol:.01,unit:"",ex:"√(9 + 16) = √25 = 5."}],exos:[{titre:"Coordonnées d'un vecteur",niv:"Calcul",n:8,desc:"Calculer les coordonnées de AB→ à partir de A et B."},{titre:"Vecteurs égaux",niv:"Réflexion",n:6,desc:"Reconnaître des vecteurs égaux, parallélogrammes."},{titre:"Images par translation",niv:"Construction",n:6,desc:"Construire l'image d'un point/figure par un vecteur."}]},l={id:"distance-repere",titre:"Géométrie repérée : distances et milieux",sous:"Coordonnées du milieu et longueur d'un segment.",dom:"",noTrace:!1,cours:`
<h2 class="chap-intro">Placés dans un repère, deux points suffisent pour tout calculer : le <b>milieu</b> du segment qui les relie et la <b>distance</b> qui les sépare se lisent directement sur leurs coordonnées.</h2>

<h3><span class="n">1</span>Coordonnées du milieu</h3>
<p>Dans un repère, le <span class="kw">milieu</span> M de [AB] a pour coordonnées la <b>moyenne</b> des coordonnées de A et B.</p>
<div class="formula">\\(M\\left(\\dfrac{x_A+x_B}{2}~;~\\dfrac{y_A+y_B}{2}\\right)\\)</div>
<div class="figbox"><svg viewBox="0 0 460 210">
  <line x1="50" y1="180" x2="430" y2="180" class="seg-a"/><line x1="50" y1="180" x2="50" y2="20" class="seg-a"/>
  <text x="425" y="198" class="pt-label" fill="#1B4FCB">x</text><text x="34" y="30" class="pt-label" fill="#1B4FCB">y</text>
  <line x1="120" y1="150" x2="360" y2="150" class="dash" stroke="#F2A100"/><line x1="360" y1="150" x2="360" y2="40" class="dash" stroke="#F2A100"/>
  <line x1="120" y1="150" x2="360" y2="40" stroke="#E0723A" stroke-width="2.6"/>
  <circle cx="120" cy="150" r="5" class="pt-dot"/><text x="100" y="168" class="pt-label">A</text>
  <circle cx="360" cy="40" r="5" class="pt-dot"/><text x="368" y="40" class="pt-label">B</text>
  <circle cx="240" cy="95" r="5" fill="#F2A100"/><text x="248" y="92" class="pt-label" fill="#B77800">M</text>
</svg><figcaption>M milieu de [AB] ; la distance AB se lit sur le triangle rectangle</figcaption></div>
<div class="box def"><span class="lab">Définition</span><p>Le <span class="kw">milieu</span> d'un segment [AB] est le point M situé à égale distance de A et de B. Ses coordonnées sont la <b>moyenne</b> des coordonnées de A et de B.</p></div>

<h3><span class="n">2</span>Distance entre deux points</h3>
<p>La longueur du segment [AB] se calcule avec le théorème de <span class="kw">Pythagore</span> appliqué au triangle rectangle formé par les <b>écarts d'abscisses</b> et d'<b>ordonnées</b>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Dans un repère, la distance entre A et B est donnée par la formule de Pythagore appliquée aux écarts de coordonnées :</p></div>
<div class="formula">\\(AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}\\)</div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer la distance AB pour A(<span class="num">0</span> ; <span class="num">0</span>) et B(<span class="num">3</span> ; <span class="num">4</span>) :</p>
<ol class="demo-steps">
<li>Écarts de coordonnées : \\(x_B-x_A = 3\\) et \\(y_B-y_A = 4\\).</li>
<li>On applique la formule : AB = √(3² + 4²) = √(9 + 16) = √25.</li>
<li>Donc <mark>AB = 5</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Utilité</h3>
<p>Ces formules permettent de calculer des longueurs, de vérifier qu'un point est un <span class="kw">milieu</span>, ou de reconnaître la <b>nature d'un quadrilatère</b> (côtés égaux, diagonales…) uniquement à partir des coordonnées.</p>
<div class="box attention"><span class="lab">Attention</span><p>Dans la distance, on met les écarts <b>au carré</b> : le signe disparaît, la longueur est toujours positive.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Le <b>milieu</b> M de [AB] a pour coordonnées la <b>moyenne</b> de celles de A et B. La <b>distance</b> AB se calcule avec Pythagore : AB = √((x_B−x_A)² + (y_B−y_A)²). Les écarts sont mis <b>au carré</b>, donc la longueur est toujours positive. Ces deux outils servent à calculer des longueurs et à reconnaître la nature d'un quadrilatère à partir des seules coordonnées.</p></div>
`,fiche:[["M","Milieu : M((xₐ+x_B)÷2 ; (yₐ+y_B)÷2)."],["√","Distance : AB = √((x_B−xₐ)² + (y_B−yₐ)²)."],["△","La distance utilise <b>Pythagore</b> dans le repère."],["±","Les écarts sont au carré : la longueur est positive."],["▱","Sert à reconnaître la nature d'un quadrilatère."],["≡","Vérifier un milieu = comparer des coordonnées."]],qcm:[{t:"num",q:"A(2 ; 1) et B(6 ; 1). L'<b>abscisse du milieu</b> (2+6)÷2 vaut :",a:4,tol:.01,unit:"",ex:"(2 + 6) ÷ 2 = 8 ÷ 2 = 4."},{t:"num",q:"A(0 ; 0) et B(3 ; 4). La <b>distance</b> AB = √(3² + 4²) vaut :",a:5,tol:.01,unit:"",ex:"√(9 + 16) = √25 = 5."},{t:"num",q:"A(1 ; 2) et B(5 ; 2). La <b>distance</b> AB vaut :",a:4,tol:.01,unit:"",ex:"√((5−1)² + 0²) = √16 = 4."},{t:"vf",q:"Le milieu de [AB] a pour coordonnées la moyenne des coordonnées de A et B.",a:!0,ex:"Vrai : c'est la définition des coordonnées du milieu."},{t:"num",q:"A(−2 ; 0) et B(4 ; 0). L'<b>abscisse du milieu</b> vaut :",a:1,tol:.01,unit:"",ex:"(−2 + 4) ÷ 2 = 2 ÷ 2 = 1."}],exos:[{titre:"Coordonnées d'un milieu",niv:"Application",n:8,desc:"Calculer les coordonnées de milieux."},{titre:"Longueur d'un segment",niv:"Calcul",n:8,desc:"Calculer des distances avec la formule."},{titre:"Nature d'un quadrilatère",niv:"Réflexion",n:6,desc:"Reconnaître un quadrilatère par le calcul."}]},i={id:"pgcd-3e",titre:"PGCD et fractions irréductibles",sous:"Diviseurs communs et simplification.",dom:"Nombres et calculs",noTrace:!0,cours:`
<h2 class="chap-intro">Réduire une recette pour moins de convives, ranger des objets en paquets identiques les plus gros possibles, ou écrire une fraction sous sa forme la plus simple : tout cela revient à chercher le <b>plus grand diviseur commun</b> de deux nombres.</h2>

<h3><span class="n">1</span>Le PGCD</h3>
<p>Le <span class="kw">PGCD</span> de deux entiers est leur <b>Plus Grand Diviseur Commun</b> : le plus grand nombre qui les divise tous les deux. Pour le trouver, on peut lister les <span class="kw">diviseurs</span> de chacun, repérer ceux qui sont <b>communs</b>, puis garder le plus grand.</p>
<div class="box def"><span class="lab">Définition</span><p>Le <span class="kw">PGCD</span> de deux entiers est le plus grand entier qui divise à la fois l'un et l'autre.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Cherchons le PGCD de <span class="num">12</span> et <span class="num">18</span> :</p>
<ol class="demo-steps">
<li>Diviseurs de <span class="num">12</span> : 1, 2, 3, 4, 6, 12.</li>
<li>Diviseurs de <span class="num">18</span> : 1, 2, 3, 6, 9, 18.</li>
<li>Diviseurs <b>communs</b> : 1, 2, 3, 6 ; le plus grand est <span class="num">6</span>. Donc <mark>PGCD(12 ; 18) = 6</mark>.</li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 440 90">
  <text x="30" y="40" font-family="Space Mono" font-size="14" fill="#15233F">12 : 1, 2, 3, 4, 6, 12</text>
  <text x="30" y="65" font-family="Space Mono" font-size="14" fill="#15233F">18 : 1, 2, 3, 6, 9, 18</text>
  <text x="300" y="52" font-family="Space Mono" font-size="15" fill="#3457B2">PGCD = 6</text>
</svg><figcaption>Le plus grand diviseur commun de 12 et 18 est 6</figcaption></div>

<h3><span class="n">2</span>Fraction irréductible</h3>
<p>Une fraction est <span class="kw">irréductible</span> quand on ne peut <b>plus la simplifier</b>. Pour rendre une fraction irréductible en une seule étape, on divise le <b>numérateur</b> et le <b>dénominateur</b> par leur <span class="kw">PGCD</span>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Pour simplifier une fraction jusqu'à la rendre irréductible :</p>
<ol class="demo-steps">
<li>Je calcule le <span class="kw">PGCD</span> du numérateur et du dénominateur.</li>
<li>Je <b>divise</b> le haut et le bas par ce PGCD.</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Simplifions 12/18. Le PGCD de 12 et 18 est <span class="num">6</span> : on obtient 12/18 = (12 ÷ 6)/(18 ÷ 6) = <mark>2/3</mark>, qui est irréductible.</p></div>

<h3><span class="n">3</span>Premiers entre eux</h3>
<p>Deux nombres sont <span class="kw">premiers entre eux</span> lorsque leur PGCD vaut <b>1</b> : ils n'ont aucun diviseur commun autre que 1.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Une fraction est <b>irréductible</b> exactement quand son numérateur et son dénominateur sont <span class="kw">premiers entre eux</span>. Par exemple 2/3 est irréductible car PGCD(2 ; 3) = 1.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Le <b>PGCD</b> de deux entiers est leur plus grand diviseur commun : on le trouve en listant les diviseurs et en gardant le plus grand qui est commun. Pour rendre une fraction <b>irréductible</b>, on divise le numérateur et le dénominateur par leur PGCD. Une fraction est irréductible quand son numérateur et son dénominateur sont <b>premiers entre eux</b>, c'est-à-dire quand leur PGCD vaut 1.</p></div>
`,fiche:[["PGCD","Plus Grand Diviseur Commun de deux entiers."],["∩","On cherche les diviseurs communs."],["a/b","<b>Irréductible</b> : on ne peut plus simplifier."],["÷PGCD","On divise haut et bas par le PGCD."],["1","Premiers entre eux : PGCD = 1."],["Euclide","Algorithme des divisions successives."]],qcm:[{t:"num",q:"Quel est le PGCD de 12 et 18 ?",a:6,tol:.01,unit:"",ex:"Diviseurs communs : 1, 2, 3, 6 → PGCD = 6."},{t:"num",q:"Quel est le PGCD de 15 et 25 ?",a:5,tol:.01,unit:"",ex:"Diviseurs communs : 1, 5 → PGCD = 5."},{t:"num",q:"On simplifie 12/18 par 6 : on obtient 2/… ? (dénominateur)",a:3,tol:.01,unit:"",ex:"18 ÷ 6 = 3, donc 2/3."},{t:"vf",q:"Deux nombres premiers entre eux ont un PGCD égal à 1.",a:!0,ex:"Vrai : c'est la définition."},{t:"num",q:"Quel est le PGCD de 7 et 13 ?",a:1,tol:.01,unit:"",ex:"7 et 13 sont premiers : PGCD = 1."}],exos:[{titre:"Calculer un PGCD",niv:"Application",n:8,desc:"Par les diviseurs ou l'algorithme d'Euclide."},{titre:"Rendre irréductible",niv:"Application",n:8,desc:"Simplifier des fractions avec le PGCD."},{titre:"Problèmes de partage",niv:"Réflexion",n:6,desc:"Utiliser le PGCD dans des situations."}]},r={id:"stats-3e",titre:"Médiane, quartiles et étendue",sous:"Résumer et comparer des séries.",dom:"Statistiques",noTrace:!0,cours:`
<h2 class="chap-intro">Une note « moyenne » ne dit pas tout d'une classe : la <b>médiane</b> montre où se situe l'élève du milieu, et l'<b>étendue</b> mesure l'écart entre le plus faible et le plus fort. Ces indicateurs résument une série de valeurs en quelques nombres.</h2>

<h3><span class="n">1</span>La médiane</h3>
<p>Après avoir <b>ordonné</b> les valeurs de la plus petite à la plus grande, la <span class="kw">médiane</span> est la valeur du <b>milieu</b> : il y a <b>autant de valeurs en dessous qu'au-dessus</b>.</p>
<div class="box def"><span class="lab">Définition</span><p>La <span class="kw">médiane</span> d'une série ordonnée est une valeur qui la <b>partage en deux moitiés</b> : au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales.</p></div>
<div class="figbox"><svg viewBox="0 0 440 70">
  <g font-family="Space Mono" font-size="15" fill="#15233F" text-anchor="middle">
  <text x="60" y="45">3</text><text x="140" y="45">5</text><text x="220" y="45" fill="#D97706" font-size="18">9</text><text x="300" y="45">12</text><text x="380" y="45">15</text></g>
  <text x="220" y="66" font-family="Space Mono" font-size="11" fill="#D97706" text-anchor="middle">médiane = 9</text>
</svg><figcaption>La médiane est la valeur centrale de la série ordonnée</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Série ordonnée <span class="num">3</span> ; <span class="num">5</span> ; <span class="num">9</span> ; <span class="num">12</span> ; <span class="num">15</span> :</p>
<ol class="demo-steps">
<li>Il y a <span class="num">5</span> valeurs : la valeur centrale est la <b>troisième</b>.</li>
<li>De part et d'autre, il reste deux valeurs (3 et 5 en dessous, 12 et 15 au-dessus).</li>
<li>Donc <mark>médiane = 9</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Cas d'un nombre pair de valeurs</h3>
<p>Quand le nombre de valeurs est <b>pair</b>, il n'y a pas une seule valeur au milieu mais deux valeurs centrales : on prend alors leur <b>moyenne</b>.</p>
<div class="box methode"><span class="lab">Méthode</span><p>Si la série contient un nombre pair de valeurs, la médiane est la <b>moyenne des deux valeurs centrales</b>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Série ordonnée <span class="num">2</span> ; <span class="num">4</span> ; <span class="num">6</span> ; <span class="num">8</span> :</p>
<ol class="demo-steps">
<li>Il y a <span class="num">4</span> valeurs : les deux valeurs centrales sont <span class="num">4</span> et <span class="num">6</span>.</li>
<li>On prend leur moyenne : (<span class="num">4</span> + <span class="num">6</span>) ÷ <span class="num">2</span> = <span class="num">5</span>.</li>
<li>Donc <mark>médiane = 5</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Moyenne, médiane, étendue</h3>
<p>Pour résumer une série, on dispose de trois <span class="kw">indicateurs</span> complémentaires : deux mesurent une valeur « centrale », le troisième mesure la <span class="kw">dispersion</span>.</p>
<div class="box prop"><span class="lab">Trois indicateurs</span>
<ol class="demo-steps">
<li>La <b>moyenne</b> = somme des valeurs ÷ nombre de valeurs.</li>
<li>La <b>médiane</b> partage la série ordonnée en deux moitiés.</li>
<li>L'<b>étendue</b> = plus grande valeur − plus petite valeur (max − min).</li>
</ol></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Pour la série <span class="num">4</span> ; <span class="num">9</span> ; <span class="num">15</span> :</p>
<ol class="demo-steps">
<li>Moyenne : (<span class="num">4</span> + <span class="num">9</span> + <span class="num">15</span>) ÷ <span class="num">3</span> = 28 ÷ 3 ≈ 9,33.</li>
<li>Médiane : la valeur centrale est <mark>9</mark>.</li>
<li>Étendue : <span class="num">15</span> − <span class="num">4</span> = <mark>11</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Interpréter une série</h3>
<p>Deux séries peuvent avoir la <b>même moyenne</b> mais des <b>étendues très différentes</b> : la médiane et l'étendue <b>complètent</b> la moyenne pour décrire une série et comparer deux séries entre elles.</p>
<div class="box attention"><span class="lab">Attention</span><p>Une moyenne peut cacher de fortes disparités. Une <b>petite étendue</b> signale une série <b>régulière</b> (valeurs resserrées) ; une <b>grande étendue</b> signale une série <b>dispersée</b>. Toujours regarder plusieurs indicateurs avant de conclure.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>On <b>ordonne</b> toujours la série avant de chercher la <b>médiane</b>, la valeur du milieu qui partage en deux moitiés (moyenne des deux valeurs centrales si le nombre de valeurs est pair). La <b>moyenne</b> = somme ÷ nombre, l'<b>étendue</b> = max − min mesure la dispersion. Ces trois indicateurs se complètent : deux séries de même moyenne peuvent avoir des étendues très différentes.</p></div>
`,fiche:[["Med","<b>Médiane</b> : valeur centrale de la série ordonnée."],["↕","Autant de valeurs au-dessus qu'en dessous."],["pair","Nombre pair : moyenne des deux centrales."],["x̄","<b>Moyenne</b> = somme ÷ nombre."],["max−min","<b>Étendue</b> = plus grande − plus petite."],["≈","Ces indicateurs résument la série."]],qcm:[{t:"num",q:"Médiane de la série 3, 5, 9 ?",a:5,tol:.01,unit:"",ex:"La valeur centrale est 5."},{t:"num",q:"Médiane de 2, 4, 6, 8 (moyenne des deux centrales) ?",a:5,tol:.01,unit:"",ex:"(4 + 6) ÷ 2 = 5."},{t:"num",q:"Étendue de 4, 9, 15 ?",a:11,tol:.01,unit:"",ex:"15 − 4 = 11."},{t:"vf",q:"La médiane partage la série ordonnée en deux moitiés.",a:!0,ex:"Vrai : autant de valeurs de chaque côté."},{t:"num",q:"Moyenne de 4, 6, 8, 10 ?",a:7,tol:.01,unit:"",ex:"(4+6+8+10) ÷ 4 = 28 ÷ 4 = 7."}],exos:[{titre:"Calculer une médiane",niv:"Application",n:8,desc:"Ordonner et trouver la médiane."},{titre:"Moyenne, médiane, étendue",niv:"Application",n:8,desc:"Calculer les trois indicateurs."},{titre:"Comparer deux séries",niv:"Réflexion",n:6,desc:"Interpréter moyenne et dispersion."}]},o={id:"proba-3e",titre:"Probabilités : calculs et arbres",sous:"Deux épreuves, arbres, fréquences.",dom:"Probabilités",noTrace:!0,cours:`
<h2 class="chap-intro">Tirer une carte, lancer un dé, jouer à pile ou face deux fois de suite : mesurer la <b>chance</b> qu'un événement se produise, c'est calculer une <b>probabilité</b>.</h2>

<h3><span class="n">1</span>Rappels</h3>
<p>Quand toutes les issues ont la même chance de se produire (situation d'<span class="kw">équiprobabilité</span>), la <span class="kw">probabilité</span> d'un événement se calcule en comptant les cas qui nous intéressent parmi tous les cas possibles.</p>
<div class="box prop"><span class="lab">Propriété</span><p>En situation d'équiprobabilité : <mark>P(événement) = cas favorables ÷ cas possibles</mark>. De plus, un événement et son <span class="kw">contraire</span> vérifient <mark>P(A) + P(contraire) = 1</mark>, et une probabilité est toujours comprise <b>entre 0 et 1</b>.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Un sac contient <span class="num">2</span> boules vertes, <span class="num">3</span> rouges et <span class="num">5</span> bleues, soit <span class="num">10</span> boules :</p>
<ol class="demo-steps">
<li>Cas favorables « boule bleue » : <span class="num">5</span> ; cas possibles : <span class="num">10</span>.</li>
<li>Donc <mark>P(bleu) = 5 ÷ 10 = 0,5</mark>.</li>
</ol></div>

<h3><span class="n">2</span>Expériences à deux épreuves</h3>
<p>Lorsqu'une expérience enchaîne <b>deux épreuves</b> (deux lancers, deux tirages…), on représente toutes les issues à l'aide d'un <span class="kw">arbre de probabilité</span>.</p>
<div class="box def"><span class="lab">Définition</span><p>On représente les issues par un <b>arbre</b>. La probabilité d'un <span class="kw">chemin</span> s'obtient en <b>multipliant</b> les probabilités le long des branches.</p></div>
<div class="figbox"><svg viewBox="0 0 440 150">
  <circle cx="60" cy="75" r="5" fill="#15233F"/>
  <line x1="65" y1="72" x2="200" y2="40" stroke="#15233F"/><line x1="65" y1="78" x2="200" y2="110" stroke="#15233F"/>
  <text x="130" y="45" font-family="Space Mono" font-size="12" fill="#D97706">P</text><text x="130" y="105" font-family="Space Mono" font-size="12" fill="#D97706">F</text>
  <circle cx="200" cy="40" r="5" fill="#15233F"/><circle cx="200" cy="110" r="5" fill="#15233F"/>
  <line x1="205" y1="37" x2="330" y2="20" stroke="#15233F"/><line x1="205" y1="43" x2="330" y2="60" stroke="#15233F"/>
  <line x1="205" y1="107" x2="330" y2="90" stroke="#15233F"/><line x1="205" y1="113" x2="330" y2="130" stroke="#15233F"/>
  <g font-family="Space Mono" font-size="12" fill="#15233F"><text x="345" y="24">PP</text><text x="345" y="64">PF</text><text x="345" y="94">FP</text><text x="345" y="134">FF</text></g>
</svg><figcaption>Arbre de deux lancers d'une pièce : 4 issues</figcaption></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Deux lancers d'une pièce équilibrée : la probabilité du chemin « pile-pile » se lit sur l'arbre en multipliant les branches.</p>
<ol class="demo-steps">
<li>Premier lancer, obtenir P : probabilité <span class="num">1/2</span>.</li>
<li>Second lancer, obtenir P : probabilité <span class="num">1/2</span>.</li>
<li>On multiplie le long du chemin : <mark>P(PP) = 1/2 × 1/2 = 1/4 = 0,25</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>Le long d'un même <b>chemin</b>, on <b>multiplie</b> les probabilités des branches successives ; on n'additionne pas.</p></div>

<h3><span class="n">3</span>Fréquences et probabilité</h3>
<p>Quand on répète beaucoup une expérience, la <span class="kw">fréquence</span> observée d'un événement se rapproche de sa <span class="kw">probabilité</span> : c'est la <b>loi des grands nombres</b>.</p>

<div class="box cle recap"><span class="lab">À retenir</span><p>En équiprobabilité, une <b>probabilité</b> se calcule par <b>cas favorables ÷ cas possibles</b> et reste comprise entre 0 et 1, avec <b>P(A) + P(contraire) = 1</b>. Pour une expérience à <b>deux épreuves</b>, on construit un <b>arbre</b> et on <b>multiplie</b> les probabilités le long de chaque chemin. Enfin, en répétant beaucoup l'expérience, la <b>fréquence</b> observée se rapproche de la <b>probabilité</b> (loi des grands nombres).</p></div>
`,fiche:[["P","P = cas favorables ÷ cas possibles."],["Ā","P(A) + P(Ā) = 1."],["🌳","<b>Arbre</b> : on multiplie le long des branches."],["×","P(chemin) = produit des probabilités."],["≈","Fréquence ≈ probabilité (grands nombres)."],["0–1","Une probabilité reste entre 0 et 1."]],qcm:[{t:"num",q:"Deux pièces équilibrées : probabilité de « pile-pile » (en décimal) ?",a:.25,tol:.01,unit:"",ex:"1/2 × 1/2 = 1/4 = 0,25."},{t:"num",q:"Dé : P(obtenir au moins 2) = 5/6, en décimal (centième) ?",a:.83,tol:.02,unit:"",ex:"5 ÷ 6 ≈ 0,83."},{t:"vf",q:"Sur un arbre, on multiplie les probabilités le long des branches.",a:!0,ex:"Vrai : la probabilité d'un chemin est le produit."},{t:"num",q:"Si P(A) = 0,4, alors P(contraire de A) = ?",a:.6,tol:.01,unit:"",ex:"1 − 0,4 = 0,6."},{t:"num",q:"Sac : 2 verts, 3 rouges, 5 bleus (10 boules). P(bleu) en décimal ?",a:.5,tol:.01,unit:"",ex:"5 ÷ 10 = 0,5."}],exos:[{titre:"Calculs de probabilités",niv:"Application",n:8,desc:"Une épreuve : dés, urnes, cartes."},{titre:"Arbres de probabilité",niv:"Application",n:8,desc:"Deux épreuves : construire et lire l'arbre."},{titre:"Fréquences",niv:"Réflexion",n:6,desc:"Relier fréquence et probabilité."}]},p={id:"identites-3e",titre:"Identités remarquables",sous:"Développer et factoriser plus vite.",dom:"Calcul littéral",noTrace:!0,cours:`
<h2 class="chap-intro">Trois égalités toujours vraies, apprises par cœur, permettent de <b>développer</b> et de <b>factoriser</b> beaucoup plus vite qu'en distribuant terme à terme.</h2>

<h3><span class="n">1</span>Les trois identités</h3>
<p>Une <span class="kw">identité remarquable</span> est une égalité vraie quelles que soient les valeurs de <b>a</b> et <b>b</b>. Il y en a trois à connaître, qui se lisent dans les <b>deux sens</b>.</p>
<div class="box prop"><span class="lab">À connaître par cœur</span><p>(a + b)² = a² + 2ab + b² &nbsp;·&nbsp; (a − b)² = a² − 2ab + b² &nbsp;·&nbsp; (a + b)(a − b) = a² − b².</p></div>
<div class="figbox"><svg viewBox="0 0 300 160">
  <rect x="30" y="20" width="90" height="90" fill="#F0EAFB" stroke="#7C3AED"/><rect x="120" y="20" width="50" height="90" fill="#EDE3FA" stroke="#7C3AED"/>
  <rect x="30" y="110" width="90" height="40" fill="#EDE3FA" stroke="#7C3AED"/><rect x="120" y="110" width="50" height="40" fill="#E3D5F5" stroke="#7C3AED"/>
  <text x="75" y="70" class="pt-label" text-anchor="middle" fill="#5B21B6">a²</text><text x="145" y="70" class="pt-label" text-anchor="middle" fill="#5B21B6">ab</text>
  <text x="75" y="134" class="pt-label" text-anchor="middle" fill="#5B21B6">ab</text><text x="145" y="134" class="pt-label" text-anchor="middle" fill="#5B21B6">b²</text>
</svg><figcaption>(a + b)² = a² + 2ab + b²</figcaption></div>
<p>L'aire du grand carré de côté (a + b) se découpe en quatre morceaux : le carré <b>a²</b>, le carré <b>b²</b> et <b>deux</b> rectangles <b>ab</b> ; d'où le double produit <b>2ab</b>.</p>

<h3><span class="n">2</span>Développer</h3>
<p>Lues de <b>gauche à droite</b>, les identités servent à <span class="kw">développer</span> : on transforme un produit en somme sans avoir à tout redistribuer.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Développer (x + 3)² :</p>
<ol class="demo-steps">
<li>On repère la forme (a + b)² avec a = <span class="num">x</span> et b = <span class="num">3</span>.</li>
<li>On applique l'identité : x² + 2×x×3 + 3².</li>
<li>On calcule le double produit et le carré : <mark>(x + 3)² = x² + 6x + 9</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Factoriser</h3>
<p>Lues de <b>droite à gauche</b>, les mêmes identités servent à <span class="kw">factoriser</span> : on transforme une somme en produit.</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Factoriser x² − 9 :</p>
<ol class="demo-steps">
<li>On reconnaît une différence de deux carrés : <span class="num">9</span> = 3².</li>
<li>On écrit x² − 9 = x² − 3².</li>
<li>On applique a² − b² = (a + b)(a − b) : <mark>x² − 9 = (x + 3)(x − 3)</mark>.</li>
</ol></div>
<div class="box attention"><span class="lab">Attention</span><p>(a + b)² n'est <b>pas</b> égal à a² + b² : il ne faut pas oublier le <b>double produit</b> 2ab.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Trois identités à savoir par cœur : (a + b)² = a² + <b>2ab</b> + b², (a − b)² = a² − <b>2ab</b> + b² et (a + b)(a − b) = a² − b². Lues de gauche à droite, elles <b>développent</b> ; lues de droite à gauche, elles <b>factorisent</b>. Ne jamais oublier le double produit <b>2ab</b>.</p></div>
`,fiche:[["+²","(a + b)² = a² + 2ab + b²."],["−²","(a − b)² = a² − 2ab + b²."],["± ","(a + b)(a − b) = a² − b²."],["→","Développer avec les identités."],["←","Factoriser : a² − b² = (a+b)(a−b)."],["⚠","(a+b)² ≠ a² + b² (double produit !)."]],qcm:[{t:"num",q:"Développe (x + 3)² = x² + …x + 9. Quel est le coefficient de x ?",a:6,tol:.01,unit:"",ex:"2 × 3 = 6, donc x² + 6x + 9."},{t:"num",q:"Développe (x + 3)². Quel est le terme constant ?",a:9,tol:.01,unit:"",ex:"3² = 9."},{t:"num",q:"Factorise x² − 25 = (x + 5)(x − …). Complète.",a:5,tol:.01,unit:"",ex:"25 = 5², donc (x+5)(x−5)."},{t:"vf",q:"(a + b)² est égal à a² + b².",a:!1,ex:"Faux : il manque le double produit 2ab."},{t:"num",q:"Développe (x − 4)². Quel est le terme constant ?",a:16,tol:.01,unit:"",ex:"(−4)² = 16."}],exos:[{titre:"Développer",niv:"Application",n:8,desc:"Appliquer les trois identités."},{titre:"Factoriser",niv:"Application",n:8,desc:"Reconnaître a² − b² et les carrés."},{titre:"Calcul mental malin",niv:"Réflexion",n:6,desc:"101² , 99×101 avec les identités."}]},u={id:"equations-3e",titre:"Équations et inéquations",sous:"Équation-produit, inéquations.",dom:"Calcul littéral",noTrace:!0,cours:`
<h2 class="chap-intro">Certaines équations semblent difficiles… jusqu'à ce qu'on les transforme en un <b>produit de facteurs égal à zéro</b>. Une règle très simple donne alors toutes les solutions ; et pour comparer deux expressions, on passe aux <b>inéquations</b>.</h2>

<h3><span class="n">1</span>L'équation-produit nul</h3>
<p>Une <span class="kw">équation-produit</span> est une équation dont un membre est un <b>produit de facteurs</b> et l'autre est <b>zéro</b>. Elle se résout grâce à une règle fondamentale sur les produits.</p>
<div class="box prop"><span class="lab">Règle du produit nul</span><p>Un produit de facteurs est nul <b>si et seulement si l'un au moins des facteurs est nul</b>. Ainsi <mark>(x − 2)(x + 5) = 0</mark> donne x = 2 ou x = −5.</p></div>

<h3><span class="n">2</span>Résoudre une équation-produit</h3>
<div class="box methode"><span class="lab">Méthode</span><p>Face à un produit de facteurs égal à zéro, on <b>annule chaque facteur séparément</b>, puis on résout chaque petite équation.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Résoudre <b>(x − 2)(x + 5) = 0</b> :</p>
<ol class="demo-steps">
<li>Le produit est nul, donc un facteur au moins est nul : <span class="num">x − 2 = 0</span> ou <span class="num">x + 5 = 0</span>.</li>
<li>On résout chaque équation : x = <span class="num">2</span> ou x = <span class="num">−5</span>.</li>
<li>Donc <mark>les solutions sont x = 2 et x = −5</mark>.</li>
</ol></div>

<h3><span class="n">3</span>Factoriser pour résoudre</h3>
<p>Beaucoup d'équations ne sont pas données sous forme de produit : il faut d'abord les <span class="kw">factoriser</span>, souvent grâce à l'identité a² − b² = (a − b)(a + b).</p>
<div class="box exemple"><span class="lab">Exemple</span><p>Résoudre <b>x² − 9 = 0</b> :</p>
<ol class="demo-steps">
<li>On factorise avec a² − b² : <span class="num">x² − 9</span> = (x − 3)(x + 3).</li>
<li>L'équation devient (x − 3)(x + 3) = <span class="num">0</span> : un produit nul.</li>
<li>Donc x = <span class="num">3</span> ou x = <span class="num">−3</span> : <mark>les solutions sont x = 3 et x = −3</mark>.</li>
</ol></div>

<h3><span class="n">4</span>Les inéquations</h3>
<p>Une <span class="kw">inéquation</span> compare deux expressions avec un symbole d'inégalité (&lt;, ≤, &gt;, ≥). On la résout <b>comme une équation</b>, avec une règle spéciale à connaître. Les solutions ne sont pas une ou deux valeurs, mais tout un <b>intervalle</b> que l'on représente sur une droite graduée.</p>
<div class="figbox"><svg viewBox="0 0 440 70">
  <line x1="20" y1="40" x2="420" y2="40" class="seg-a"/>
  <line x1="200" y1="30" x2="200" y2="50" stroke="#15233F"/><text x="200" y="64" class="pt-label" text-anchor="middle">3</text>
  <line x1="200" y1="40" x2="420" y2="40" stroke="#D97706" stroke-width="5"/>
  <circle cx="200" cy="40" r="6" fill="#fff" stroke="#D97706" stroke-width="3"/>
  <text x="320" y="28" class="pt-label" text-anchor="middle" fill="#B45309">x &gt; 3</text>
</svg><figcaption>Solutions de x &gt; 3 sur la droite graduée</figcaption></div>

<h3><span class="n">5</span>La règle du signe</h3>
<div class="box attention"><span class="lab">Attention</span><p>Quand on multiplie ou divise une inéquation par un nombre <b>négatif</b>, on <b>change le sens</b> de l'inégalité. C'est la seule différence avec la résolution d'une équation, et l'oubli le plus fréquent.</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Un <b>produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul</b> : on annule chaque facteur séparément. Pour une équation comme x² − 9 = 0, on <b>factorise</b> d'abord (a² − b²) avant d'appliquer cette règle. Une <b>inéquation</b> se résout comme une équation, mais on <b>change le sens</b> de l'inégalité dès qu'on multiplie ou divise par un nombre <b>négatif</b> ; ses solutions se représentent sur une droite graduée.</p></div>
`,fiche:[["×0","<b>Produit nul</b> : un facteur au moins est nul."],["ou","(x−a)(x−b) = 0 ⟹ x = a ou x = b."],["a²−b²","Factoriser puis résoudre."],["< >","<b>Inéquation</b> : on résout comme une équation."],["−","× ou ÷ par un négatif ⟹ on change le sens."],["│","On représente les solutions sur une droite graduée."]],qcm:[{t:"num",q:"(x − 2)(x + 5) = 0. Une solution positive est x = …",a:2,tol:.01,unit:"",ex:"x − 2 = 0 donne x = 2."},{t:"num",q:"x² − 9 = 0 se factorise (x − 3)(x + 3). Une solution positive est …",a:3,tol:.01,unit:"",ex:"x − 3 = 0 donne x = 3."},{t:"vf",q:"Un produit de deux facteurs est nul si l'un au moins des facteurs est nul.",a:!0,ex:"Vrai : c'est la règle du produit nul."},{t:"vf",q:"Quand on divise une inéquation par un nombre négatif, on change le sens de l'inégalité.",a:!0,ex:"Vrai : c'est la règle du signe."},{t:"num",q:"Résous 2x + 1 > 7 : les solutions sont x > … . Quelle est cette valeur limite ?",a:3,tol:.01,unit:"",ex:"2x > 6, donc x > 3."}],exos:[{titre:"Équations-produits",niv:"Application",n:8,desc:"Résoudre des équations factorisées."},{titre:"Factoriser puis résoudre",niv:"Application",n:6,desc:"Utiliser a² − b² = 0."},{titre:"Inéquations",niv:"Réflexion",n:6,desc:"Résoudre et représenter les solutions."}]},c={id:"fonctions-3e",titre:"Fonctions linéaires et affines",sous:"Image, antécédent, représentation graphique.",dom:"Fonctions",noTrace:!0,cours:`
<h2 class="chap-intro">À chaque durée de trajet correspond une distance, à chaque nombre d'articles un prix à payer : une <b>fonction</b> est une machine qui, à un nombre, associe un seul autre nombre. Selon sa forme, on parle de fonction <b>linéaire</b> ou <b>affine</b>.</h2>

<h3><span class="n">1</span>Notion de fonction</h3>
<p>Une <span class="kw">fonction</span> f associe à chaque nombre x un seul nombre noté f(x). Ce nombre f(x) est appelé l'<span class="kw">image</span> de x. Réciproquement, si f(x) = y, alors x est un <span class="kw">antécédent</span> de y.</p>
<div class="box def"><span class="lab">Définition</span><p>À un nombre x, la fonction f fait correspondre son <b>image</b> f(x) : un seul résultat. Un <b>antécédent</b> de y est un nombre x dont l'image vaut y, c'est-à-dire tel que f(x) = y.</p></div>

<h3><span class="n">2</span>Fonction linéaire</h3>
<p>Une <span class="kw">fonction linéaire</span> s'écrit f(x) = a×x. Elle traduit une situation de <b>proportionnalité</b> : a est le coefficient de proportionnalité.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Une <b>fonction linéaire</b> s'écrit f(x) = a×x, où a est le <span class="kw">coefficient</span>. Elle traduit une situation de proportionnalité ; sa représentation graphique est une <b>droite passant par l'origine</b>.</p></div>

<h3><span class="n">3</span>Fonction affine</h3>
<p>Une <span class="kw">fonction affine</span> s'écrit f(x) = a×x + b : elle ajoute un nombre b à une fonction linéaire. Sa représentation graphique est aussi une <b>droite</b>, mais qui ne passe plus forcément par l'origine.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Une <b>fonction affine</b> s'écrit f(x) = a×x + b. a est le <span class="kw">coefficient directeur</span> (la pente de la droite), b l'<span class="kw">ordonnée à l'origine</span> (là où la droite coupe l'axe des ordonnées).</p></div>
<div class="figbox"><svg viewBox="0 0 300 170">
  <line x1="30" y1="150" x2="290" y2="150" class="seg-a"/><line x1="40" y1="20" x2="40" y2="160" class="seg-a"/>
  <line x1="40" y1="130" x2="270" y2="40" stroke="#C2410C" stroke-width="2.6"/>
  <circle cx="40" cy="130" r="4" fill="#C2410C"/><text x="20" y="128" class="pt-label">b</text>
  <text x="280" y="168" class="pt-label" fill="#1B4FCB">x</text><text x="24" y="30" class="pt-label" fill="#1B4FCB">y</text>
  <text x="180" y="70" class="pt-label" fill="#C2410C">f(x) = ax + b</text>
</svg><figcaption>Une fonction affine se représente par une droite</figcaption></div>
<div class="box attention"><span class="lab">Attention</span><p>Une fonction linéaire est un cas particulier de fonction affine, celui où b = 0. C'est la seule dont la droite passe par l'<b>origine</b> : dès que b n'est pas nul, la droite est décalée.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Soit f(x) = 2x + 3. Calculons l'image de <span class="num">5</span> :</p>
<ol class="demo-steps">
<li>On remplace x par <span class="num">5</span> dans l'expression : f(<span class="num">5</span>) = 2×<span class="num">5</span> + 3.</li>
<li>On calcule : 2×<span class="num">5</span> + 3 = 10 + 3.</li>
<li>Donc <mark>f(5) = 13</mark> : l'image de 5 par f est 13.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>Une <b>fonction</b> associe à chaque x un seul nombre f(x), son <b>image</b> ; un <b>antécédent</b> de y est un x tel que f(x) = y. Une <b>fonction linéaire</b> s'écrit f(x) = a×x : c'est une proportionnalité, représentée par une droite passant par l'<b>origine</b>. Une <b>fonction affine</b> s'écrit f(x) = a×x + b : a est le <b>coefficient directeur</b>, b l'<b>ordonnée à l'origine</b>, et sa représentation est une <b>droite</b>.</p></div>
`,fiche:[["f(x)","<b>Image</b> de x par f. Antécédent : x tel que f(x) = y."],["ax","<b>Linéaire</b> : f(x) = ax (proportionnalité)."],["ax+b","<b>Affine</b> : f(x) = ax + b."],["a","a = coefficient directeur (pente)."],["b","b = ordonnée à l'origine."],["／","Représentation = une droite (par l'origine si linéaire)."]],qcm:[{t:"num",q:"f(x) = 2x + 3. Calcule l'image de 5, c'est-à-dire f(5).",a:13,tol:.01,unit:"",ex:"f(5) = 2×5 + 3 = 13."},{t:"num",q:"g(x) = 4x (fonction linéaire). Combien vaut g(3) ?",a:12,tol:.01,unit:"",ex:"g(3) = 4 × 3 = 12."},{t:"vf",q:"La représentation d'une fonction linéaire est une droite passant par l'origine.",a:!0,ex:"Vrai : f(x) = ax passe par (0 ; 0)."},{t:"num",q:"f(x) = 3x − 1. Quel est le coefficient directeur ?",a:3,tol:.01,unit:"",ex:"Le coefficient directeur est a = 3."},{t:"num",q:"f(x) = 2x + 3. Quel est l'antécédent de 3 ? (résous 2x + 3 = 3)",a:0,tol:.01,unit:"",ex:"2x + 3 = 3 donne 2x = 0, donc x = 0."}],exos:[{titre:"Images et antécédents",niv:"Application",n:8,desc:"Calculer f(x) et retrouver un antécédent."},{titre:"Linéaire ou affine",niv:"Application",n:6,desc:"Reconnaître et déterminer a et b."},{titre:"Représentation graphique",niv:"Réflexion",n:6,desc:"Tracer et lire des droites."}]},d={id:"boite-3e",titre:"Quartiles et boîte à moustaches",sous:"Résumer une série par cinq nombres.",dom:"Statistiques",noTrace:!0,cours:`
<h2 class="chap-intro">Comparer les températures de deux villes, résumer les notes d'une classe : plutôt qu'un long tableau de valeurs, on décrit une série par <b>cinq nombres repères</b> que l'on peut dessiner d'un coup d'œil.</h2>

<h3><span class="n">1</span>Les quartiles</h3>
<p>On commence toujours par <b>ordonner</b> la série du plus petit au plus grand. La <span class="kw">médiane</span> la partage en deux moitiés. Les <span class="kw">quartiles</span> découpent ensuite la série en quatre.</p>
<div class="box def"><span class="lab">Définition</span><p>Le <span class="kw">premier quartile</span> Q1 est une valeur telle qu'<b>au moins un quart</b> des données lui sont inférieures ou égales. Le <span class="kw">troisième quartile</span> Q3 est une valeur telle qu'<b>au moins trois quarts</b> des données lui sont inférieures ou égales.</p></div>

<h3><span class="n">2</span>Le diagramme en boîte</h3>
<div class="box prop"><span class="lab">Propriété</span><p>La <b>boîte à moustaches</b> résume la série avec cinq valeurs : le <b>minimum</b>, <b>Q1</b>, la <b>médiane</b>, <b>Q3</b> et le <b>maximum</b>. La boîte s'étend de Q1 à Q3 ; les moustaches rejoignent le minimum et le maximum.</p></div>
<div class="figbox"><svg viewBox="0 0 440 100">
  <line x1="30" y1="70" x2="410" y2="70" class="seg-a"/>
  <line x1="105" y1="70" x2="155" y2="70" stroke="#0E8C8C" stroke-width="2"/><line x1="305" y1="70" x2="380" y2="70" stroke="#0E8C8C" stroke-width="2"/>
  <line x1="105" y1="58" x2="105" y2="82" stroke="#0E8C8C" stroke-width="2"/><line x1="380" y1="58" x2="380" y2="82" stroke="#0E8C8C" stroke-width="2"/>
  <rect x="155" y="50" width="150" height="40" fill="#E1F5F7" stroke="#0E8C8C" stroke-width="2"/>
  <line x1="230" y1="50" x2="230" y2="90" stroke="#0E8C8C" stroke-width="3"/>
  <g font-family="Space Mono" font-size="11" fill="#15233F" text-anchor="middle"><text x="105" y="44">min</text><text x="155" y="44">Q1</text><text x="230" y="44">méd.</text><text x="305" y="44">Q3</text><text x="380" y="44">max</text></g>
</svg><figcaption>La boîte à moustaches : min · Q1 · médiane · Q3 · max</figcaption></div>

<h3><span class="n">3</span>L'écart interquartile</h3>
<p>Deux séries peuvent avoir la même médiane mais des données plus ou moins <b>regroupées</b>. Pour mesurer cet étalement, on regarde la largeur de la boîte.</p>
<div class="box def"><span class="lab">Définition</span><p>L'<span class="kw">écart interquartile</span> = Q3 − Q1. Il mesure la dispersion de la <b>moitié centrale</b> des données (celle contenue dans la boîte), en ignorant les valeurs extrêmes.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>On considère la série ordonnée <span class="num">3</span>, <span class="num">5</span>, <span class="num">6</span>, <span class="num">8</span>, <span class="num">9</span>, <span class="num">11</span>, <span class="num">14</span> :</p>
<ol class="demo-steps">
<li>La valeur centrale (4ᵉ sur 7) donne la <b>médiane</b> = <span class="num">8</span>.</li>
<li>On lit les quartiles : Q1 = <span class="num">5</span> et Q3 = <span class="num">11</span>.</li>
<li>L'<b>étendue</b> = max − min = 14 − 3 = <mark>11</mark>.</li>
<li>L'<b>écart interquartile</b> = Q3 − Q1 = 11 − 5 = <mark>6</mark>.</li>
</ol></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>On <b>ordonne</b> d'abord la série. La <b>médiane</b> la coupe en deux, les <b>quartiles</b> Q1 et Q3 en quatre. La <b>boîte à moustaches</b> résume tout par cinq nombres : min · Q1 · médiane · Q3 · max. L'<b>écart interquartile</b> = Q3 − Q1 mesure la dispersion de la moitié centrale, tandis que l'<b>étendue</b> = max − min couvre toute la série.</p></div>
`,fiche:[["Med","<b>Médiane</b> : partage la série ordonnée en deux."],["Q1","<b>Q1</b> : au moins un quart des valeurs ≤ Q1."],["Q3","<b>Q3</b> : au moins trois quarts des valeurs ≤ Q3."],["▭","<b>Boîte</b> : min · Q1 · médiane · Q3 · max."],["Q3−Q1","<b>Écart interquartile</b> = Q3 − Q1."],["↔","Étendue = max − min."]],qcm:[{t:"num",q:"Série ordonnée 3, 5, 6, 8, 9, 11, 14. Quelle est la médiane ?",a:8,tol:.01,unit:"",ex:"La valeur centrale (4ᵉ sur 7) est 8."},{t:"num",q:"Même série 3, 5, 6, 8, 9, 11, 14. Quelle est l'étendue ?",a:11,tol:.01,unit:"",ex:"14 − 3 = 11."},{t:"num",q:"Pour Q1 = 5 et Q3 = 11, l'écart interquartile Q3 − Q1 vaut :",a:6,tol:.01,unit:"",ex:"11 − 5 = 6."},{t:"vf",q:"Une boîte à moustaches montre le minimum, Q1, la médiane, Q3 et le maximum.",a:!0,ex:"Vrai : ce sont les cinq valeurs du diagramme en boîte."},{t:"qcm",q:"L'écart interquartile se calcule par :",choices:["Q3 − Q1","max − min","médiane ÷ 2","Q1 + Q3"],a:0,ex:"C'est Q3 − Q1."}],exos:[{titre:"Déterminer les quartiles",niv:"Application",n:8,desc:"Trouver médiane, Q1 et Q3."},{titre:"Construire une boîte",niv:"Construction",n:6,desc:"Tracer un diagramme en boîte."},{titre:"Comparer deux séries",niv:"Réflexion",n:6,desc:"Comparer par les boîtes à moustaches."}]},b={id:"carre-3e",titre:"La fonction carré",sous:"f(x) = x² et sa parabole.",dom:"Fonctions",noTrace:!0,cours:`
<h2 class="chap-intro">Élever un nombre au carré, c'est le multiplier par lui-même : cette opération définit la <b>fonction carré</b>, dont la courbe est une belle <b>parabole</b> symétrique.</h2>

<h3><span class="n">1</span>La fonction carré</h3>
<p>La <span class="kw">fonction carré</span> est définie par f(x) = x². À chaque nombre, elle associe son <b>carré</b>, c'est-à-dire le produit de ce nombre par lui-même.</p>
<div class="box def"><span class="lab">Définition</span><p>La fonction carré associe à tout nombre x son carré <mark>f(x) = x²</mark>. On dit que x² est l'<span class="kw">image</span> de x par cette fonction.</p></div>
<div class="box exemple"><span class="lab">Exemple</span><p>Calculer l'image de <span class="num">3</span> puis de <span class="num">−3</span> :</p>
<ol class="demo-steps">
<li>Image de <span class="num">3</span> : f(3) = 3² = <mark>9</mark>.</li>
<li>Image de <span class="num">−3</span> : f(−3) = (−3)² = <mark>9</mark>.</li>
</ol></div>
<div class="figbox"><svg viewBox="0 0 300 175">
  <line x1="40" y1="150" x2="270" y2="150" class="seg-a"/><line x1="150" y1="20" x2="150" y2="160" class="seg-a"/>
  <polyline points="75,42 100,102 125,138 150,150 175,138 200,102 225,42" fill="none" stroke="#C2410C" stroke-width="2.6"/>
  <circle cx="150" cy="150" r="4" fill="#C2410C"/>
  <text x="262" y="168" class="pt-label" fill="#1B4FCB">x</text><text x="134" y="30" class="pt-label" fill="#1B4FCB">y</text>
  <text x="205" y="55" class="pt-label" fill="#C2410C">y = x²</text>
</svg><figcaption>La courbe de la fonction carré est une parabole</figcaption></div>

<h3><span class="n">2</span>Sa courbe : la parabole</h3>
<p>Lorsqu'on place tous les points de coordonnées (x ; x²) dans un repère, on obtient une courbe caractéristique en forme de U : la <span class="kw">parabole</span>.</p>
<div class="box prop"><span class="lab">Propriété</span><p>La représentation graphique de f(x) = x² est une <b>parabole</b>, <span class="kw">symétrique</span> par rapport à l'axe des ordonnées, avec son <b>sommet à l'origine</b>.</p></div>

<h3><span class="n">3</span>Propriétés du carré</h3>
<p>Un carré est toujours <b>positif ou nul</b> : x² ≥ 0. Et deux nombres <span class="kw">opposés</span> ont le <b>même carré</b>, ce qui explique la symétrie de la parabole.</p>
<div class="box prop"><span class="lab">Propriété</span><p>Pour tout nombre x : <mark>x² ≥ 0</mark>. Deux nombres opposés ont le même carré : <mark>(−4)² = 4² = 16</mark>.</p></div>
<div class="box attention"><span class="lab">Attention</span><p>L'équation x² = 16 a <b>deux solutions</b> : <mark>x = 4 ou x = −4</mark>. Ne pas oublier la solution négative !</p></div>

<div class="box cle recap"><span class="lab">À retenir</span><p>La <b>fonction carré</b> associe à x son carré f(x) = x². Sa courbe est une <b>parabole</b> symétrique par rapport à l'axe des ordonnées, de sommet l'origine. Un carré est toujours <b>positif ou nul</b> (x² ≥ 0) et deux nombres <b>opposés</b> ont le même carré. Enfin, une équation du type x² = k (avec k &gt; 0) possède <b>deux solutions</b> opposées.</p></div>
`,fiche:[["x²","<b>Fonction carré</b> : f(x) = x²."],["∪","Sa courbe est une <b>parabole</b>."],["↕","Symétrique par rapport à l'axe des ordonnées."],["≥0","x² ≥ 0 : toujours positif ou nul."],["±","(−4)² = 4² = 16 (opposés → même carré)."],["=","x² = 16 ⟹ x = 4 ou x = −4."]],qcm:[{t:"num",q:"f(x) = x². Combien vaut f(5) ?",a:25,tol:.01,unit:"",ex:"f(5) = 5² = 25."},{t:"num",q:"Combien vaut (−4)² ?",a:16,tol:.01,unit:"",ex:"(−4)² = 16."},{t:"num",q:"f(x) = x². Quelle est l'image de 7 ?",a:49,tol:.01,unit:"",ex:"f(7) = 7² = 49."},{t:"vf",q:"Deux nombres opposés ont le même carré.",a:!0,ex:"Vrai : (−3)² = 3² = 9."},{t:"vf",q:"Le carré d'un nombre peut être négatif.",a:!1,ex:"Faux : x² ≥ 0 toujours."}],exos:[{titre:"Calculer des images",niv:"Application",n:8,desc:"Calculer f(x) = x² pour diverses valeurs."},{titre:"Lire la parabole",niv:"Application",n:6,desc:"Lire images et antécédents sur la courbe."},{titre:"x² = k",niv:"Réflexion",n:6,desc:"Résoudre et comprendre les deux solutions."}]};export{s as a,o as b,u as c,l as d,n as e,c as f,d as g,b as h,p as i,i as p,a as r,r as s,e as t,t as v};
