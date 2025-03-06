# Test Blanc n°1 - Durée : 2h
## Calculatrice autorisée

### Exercice 1 : Fonctions de Plusieurs Variables (6 points)
Soit f(x,y) = x³ + xy² - 3x²y

1. (2pts) Calculer les dérivées partielles premières et secondes.
2. (2pts) Déterminer les points critiques.
3. (2pts) Étudier la nature de ces points (minimum, maximum, point selle).

### Exercice 2 : Intégrations Multiples (4 points)
Calculer l'intégrale double :
I = ∫∫D xy dxdy où D est le domaine limité par y = x² et y = 2x

1. (1pt) Représenter le domaine D
2. (1pt) Déterminer les bornes d'intégration
3. (2pts) Calculer l'intégrale

### Exercice 3 : Oscillateurs (5 points)
Un oscillateur harmonique amorti est décrit par l'équation :
mẍ + hẋ + kx = 0 avec m = 1kg, h = 2N.s/m, k = 10N/m

1. (2pts) Déterminer le régime d'oscillation
2. (2pts) Donner la solution générale
3. (1pt) Calculer la pseudo-période si elle existe

### Exercice 4 : Opérateurs Vectoriels (5 points)
Soit le champ vectoriel F = (y²)i + (2xy)j + (xz)k

1. (2pts) Calculer div F et rot F
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
1. ∂f/∂x = 3x² + y² - 6xy
   ∂f/∂y = 2xy - 3x²
   ∂²f/∂x² = 6x - 6y
   ∂²f/∂y² = 2x
   ∂²f/∂x∂y = 2y - 6x

2. Points critiques : résoudre
   3x² + y² - 6xy = 0
   2xy - 3x² = 0
   → (0,0) et (2,3)

3. En (0,0) : H = [0 0; 0 0] → point dégénéré
   En (2,3) : utiliser critère du hessien

### Exercice 2
1. Domaine : intersection de deux paraboles

2. Bornes : 0 ≤ x ≤ 2
           x² ≤ y ≤ 2x

3. I = ∫0^2 (∫x²^2x xy dy) dx
     = ∫0^2 [xy²/2]x²^2x dx
     = ∫0^2 (2x³ - x⁴/2) dx = 4

### Exercice 3
1. λ = h/(2m) = 1
   ω₀ = √(k/m) = √10
   λ < ω₀ → régime pseudo-périodique

2. x(t) = Ae^(-t)cos(√9 t + φ)

3. T' = 2π/√9 ≈ 2.09s

### Exercice 4
1. div F = 2y + 2x + z
   rot F = (0)i + (-x)j + (2y)k

2. Non car rot F ≠ 0

3. Non applicable car non conservatif 