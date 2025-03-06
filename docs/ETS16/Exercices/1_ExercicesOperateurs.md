# Exercices - Opérateurs Vectoriels

## 1. Calculs de Base

### Exercice 1.1 : Gradient
Soit f(x,y,z) = x²y + yz² + xz
1. Calculer grad f
2. Évaluer grad f au point (1,1,1)
3. Déterminer la direction de plus forte variation en ce point

**Solution** :
1. grad f = (2xy + z)i + (x² + z²)j + (2yz + x)k
2. En (1,1,1) : grad f = 3i + 2j + 3k
3. Direction : vecteur unitaire = (3,2,3)/√22

**Programme calculatrice** :
```python
def gradient(x, y, z):
    return [2*x*y + z, x**2 + z**2, 2*y*z + x]
```

## 2. Divergence et Rotationnel

### Exercice 2.1 : Champ de vitesse
Soit v = (xy²)i + (x²y)j + (z²)k
1. Calculer div v
2. Calculer rot v
3. Interpréter les résultats

**Solution** :
1. div v = y² + x² + 2z
2. rot v = (-z²)i + 0j + (x²-y²)k
3. Non conservatif car rot v ≠ 0

**Programme TI-83** :
```basic
:Input "X=",X
:Input "Y=",Y
:Input "Z=",Z
:Y²+X²+2Z→D
:Disp "DIV=",D
```

## 3. Applications Physiques

### Exercice 3.1 : Électrostatique
Un champ électrique E = (x/r³)i + (y/r³)j + (z/r³)k avec r = √(x²+y²+z²)
1. Vérifier que div E = 0 pour r ≠ 0
2. Calculer le flux à travers une sphère
3. Interpréter physiquement

**Solution** :
1. div E = (1/r³)(3 - 3) = 0
2. Flux = 4πq/ε₀ (loi de Gauss)
3. Présence d'une charge ponctuelle

## 4. Théorèmes Intégraux

### Exercice 4.1 : Circulation
Calculer ∮C F·dr pour F = (-y)i + (x)j sur le cercle x² + y² = 1
1. Paramétrer la courbe
2. Calculer directement
3. Utiliser le théorème de Green

**Solution** :
1. x = cos(t), y = sin(t), t ∈ [0,2π]
2. ∮C F·dr = ∫0^2π 2 dt = 4π
3. ∫∫D rot F·k dxdy = ∫∫D 2 dxdy = 4π

## 5. Coordonnées Curvilignes

### Exercice 5.1 : Coordonnées Cylindriques
Soit f(r,θ,z) = r²cos(θ) + z²
1. Calculer grad f
2. Exprimer en coordonnées cartésiennes
3. Vérifier la cohérence

**Solution** :
1. grad f = (2r cos(θ))er + (-r²sin(θ))eθ + (2z)ez
2. grad f = (2x)i + (2y)j + (2z)k
3. Cohérent car f(x,y,z) = x² - y² + z²

**Programme Numworks** :
```python
from math import cos, sin

def grad_cylindrique(r, theta, z):
    er = 2*r*cos(theta)
    etheta = -r**2*sin(theta)
    ez = 2*z
    return [er, etheta, ez]
```

## 6. Exercices de Synthèse

### Exercice 6.1
Pour F = (x²-y²)i + (2xy)j + (yz)k
1. Est-il conservatif ?
2. Si oui, trouver le potentiel
3. Calculer la circulation sur un contour fermé

**Méthode** :
1. Calculer rot F
2. Vérifier si rot F = 0
3. Si oui, intégrer pour trouver f tel que F = grad f

## Conseils pour l'Examen
1. Vérifier la cohérence dimensionnelle
2. Utiliser les symétries du problème
3. Choisir le système de coordonnées adapté
4. Penser aux théorèmes pour simplifier les calculs 