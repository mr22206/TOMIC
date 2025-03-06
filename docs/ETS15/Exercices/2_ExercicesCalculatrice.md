# Exercices avec Calculatrice - ETS15

## 1. Dérivées Partielles avec Approximation Numérique

### Exercice 1.1
Soit f(x,y) = x³ + 2xy + y²
1. Programmer la fonction dans la calculatrice
2. Calculer ∂f/∂x(1,2) par approximation avec h=0.001
3. Comparer avec le résultat théorique

**Solution Casio Collège** :
```
Y1 = X^3 + 2XY + Y^2
(Y1(1.001,2) - Y1(1,2))/0.001
```

**Solution TI-83** :
```
Y1 = X^3 + 2XY + Y^2
(Y1(1.001,2) - Y1(1,2))/0.001
```

**Solution Numworks (Python)** :
```python
def f(x,y):
    return x**3 + 2*x*y + y**2

def dx(x,y,h=0.001):
    return (f(x+h,y) - f(x,y))/h
```

## 2. Recherche d'Extremums

### Exercice 2.1
Pour f(x,y) = x² + y² - 2xy
1. Tracer la surface pour -2 ≤ x,y ≤ 2
2. Identifier visuellement les extremums
3. Vérifier par calcul

**Méthode Casio** :
- Mode 3D
- Régler WINDOW: -2,2,-2,2
- Observer les points remarquables

**Méthode TI-83** :
- Utiliser les courbes de niveau
- TRACE pour les points suspects
- CALC pour confirmer

## 3. Développements Limités

### Exercice 3.1
Vérifier numériquement le DL de exp(x+y) en (0,0)
1. Programmer le DL à l'ordre 2
2. Comparer avec la valeur exacte
3. Étudier l'erreur pour différentes valeurs

**Programme type** :
```basic
:Input "X=",X
:Input "Y=",Y
:1+X+Y+(X²+2XY+Y²)/2→Z
:Disp "DL=",Z
:Disp "EXACT=",e^(X+Y)
:Disp "ERREUR=",(Z-e^(X+Y))/e^(X+Y)
```

## 4. Intégration Numérique

### Exercice 4.1
Calculer ∫∫[0,1]×[0,1] (x²+y²) dxdy
1. Par découpage en rectangles
2. Par la méthode des trapèzes
3. Comparer avec la valeur exacte

**Programme Numworks** :
```python
def f(x,y):
    return x**2 + y**2

def integrale_double(n=10):
    dx = 1/n
    dy = 1/n
    s = 0
    for i in range(n):
        for j in range(n):
            x = i*dx
            y = j*dy
            s += f(x,y)*dx*dy
    return s
```

## Conseils d'Utilisation
1. Toujours vérifier l'ordre de grandeur
2. Garder les programmes simples
3. Tester sur des cas connus
4. Noter les limitations de chaque calculatrice 