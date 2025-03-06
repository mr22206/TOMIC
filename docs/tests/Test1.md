# Test Blanc n°1 - Durée : 2h
## Calculatrice autorisée

### Exercice 1 : Fonctions de Plusieurs Variables (6 points)

### Question 1.1 (2 points)
Soit \\(f(x,y) = x^{3} + xy^{2} - 3x^{2}y\\)

1. (2pts) Calculer les dérivées partielles :
   \\[ \\frac{\\partial f}{\\partial x} = 3x^{2} + y^{2} - 6xy \\]
   \\[ \\frac{\\partial f}{\\partial y} = 2xy - 3x^{2} \\]

2. Points critiques : \\[ \\begin{cases}
\\frac{\\partial f}{\\partial x} = 0 \\\\
\\frac{\\partial f}{\\partial y} = 0
\\end{cases} \\]

### Question 1.2 (2 points)
Étudier la nature des points critiques avec la matrice hessienne :
\\[ H = \\begin{pmatrix}
\\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x\\partial y} \\\\
\\frac{\\partial^2 f}{\\partial y\\partial x} & \\frac{\\partial^2 f}{\\partial y^2}
\\end{pmatrix} \\]

### Question 1.3 (2 points)
Calculer le développement limité à l'ordre 2 en \\((0,0)\\) :
\\[ f(x,y) = f(0,0) + \\frac{\\partial f}{\\partial x}(0,0)x + \\frac{\\partial f}{\\partial y}(0,0)y + \\frac{1}{2}\\left(\\frac{\\partial^2 f}{\\partial x^2}(0,0)x^2 + 2\\frac{\\partial^2 f}{\\partial x\\partial y}(0,0)xy + \\frac{\\partial^2 f}{\\partial y^2}(0,0)y^2\\right) + o(x^2+y^2) \\]

### Exercice 2 : Intégrations Multiples (4 points)
Calculer l'intégrale double :
\\[ I = \\iint_D xy\\,dxdy \\] où D est le domaine limité par \\(y = x^2\\) et \\(y = 2x\\)

1. (1pt) Représenter le domaine D
2. (1pt) Déterminer les bornes d'intégration
3. (2pts) Calculer l'intégrale

### Exercice 3 : Oscillateurs (5 points)
Un oscillateur harmonique amorti est décrit par l'équation :
\\[ m\\ddot{x} + h\\dot{x} + kx = 0 \\] avec \\(m = 1\\text{ kg}\\), \\(h = 2\\text{ N.s/m}\\), \\(k = 10\\text{ N/m}\\)

1. (2pts) Déterminer le régime d'oscillation
2. (2pts) Donner la solution générale
3. (1pt) Calculer la pseudo-période si elle existe

### Exercice 4 : Opérateurs Vectoriels (5 points)
Soit le champ vectoriel \\(\\vec{F} = (y^2)\\vec{i} + (2xy)\\vec{j} + (xz)\\vec{k}\\)

1. (2pts) Calculer \\(\\text{div}\\,\\vec{F}\\) et \\(\\text{rot}\\,\\vec{F}\\)
2. (1pt) Le champ est-il conservatif ?
3. (2pts) Si oui, déterminer son potentiel

## Barème et Conseils
- Présentation, clarté : 1 point supplémentaire
- La justification des calculs est importante
- Vérifier les unités physiques
- Faire des schémas clairs

## Formulaire Autorisé
- Formules de Taylor
- Coordonnées cylindriques/sphériques
- Théorèmes intégraux

## Correction Détaillée

### Exercice 1
1. \\[ \\frac{\\partial f}{\\partial x} = 3x^2 + y^2 - 6xy \\]
   \\[ \\frac{\\partial f}{\\partial y} = 2xy - 3x^2 \\]
   \\[ \\frac{\\partial^2 f}{\\partial x^2} = 6x - 6y \\]
   \\[ \\frac{\\partial^2 f}{\\partial y^2} = 2x \\]
   \\[ \\frac{\\partial^2 f}{\\partial x\\partial y} = 2y - 6x \\]

2. Points critiques : résoudre
   \\[ 3x^2 + y^2 - 6xy = 0 \\]
   \\[ 2xy - 3x^2 = 0 \\]
   → \\((0,0)\\) et \\((2,3)\\)

3. En \\((0,0)\\) : \\[ H = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} \\] → point dégénéré
   En \\((2,3)\\) : utiliser critère du hessien

### Exercice 2
1. Domaine : intersection de deux paraboles

2. Bornes : \\[ 0 \\leq x \\leq 2 \\]
           \\[ x^2 \\leq y \\leq 2x \\]

3. \\[ I = \\int_0^2 \\left(\\int_{x^2}^{2x} xy\\,dy\\right)\\,dx \\]
     \\[ = \\int_0^2 \\left[\\frac{xy^2}{2}\\right]_{x^2}^{2x}\\,dx \\]
     \\[ = \\int_0^2 (2x^3 - \\frac{x^4}{2})\\,dx = 4 \\]

### Exercice 3
1. \\[ \\lambda = \\frac{h}{2m} = 1 \\]
   \\[ \\omega_0 = \\sqrt{\\frac{k}{m}} = \\sqrt{10} \\]
   \\(\\lambda < \\omega_0\\) → régime pseudo-périodique

2. \\[ x(t) = Ae^{-t}\\cos(\\sqrt{9}\\,t + \\phi) \\]

3. \\[ T' = \\frac{2\\pi}{\\sqrt{9}} \\approx 2.09\\text{ s} \\]

### Exercice 4
1. \\[ \\text{div}\\,\\vec{F} = 2y + 2x + z \\]
   \\[ \\text{rot}\\,\\vec{F} = (0)\\vec{i} + (-x)\\vec{j} + (2y)\\vec{k} \\]

2. Non car \\(\\text{rot}\\,\\vec{F} \\neq \\vec{0}\\)

3. Non applicable car non conservatif 