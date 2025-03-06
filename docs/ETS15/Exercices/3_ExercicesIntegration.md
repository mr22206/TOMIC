# Exercices - Intégrations Multiples

## 1. Intégrales Doubles sur Rectangle

### Exercice 1.1
Calculer I = ∫∫[0,1]×[0,2] (x + y²) dxdy

**Méthode** :
1. Choisir l'ordre : commencer par dy
2. I = ∫0^1 (∫0^2 (x + y²) dy) dx
3. I = ∫0^1 (2x + 8/3) dx = 2 + 8/3

**Avec calculatrice** :
```python
def f(x,y):
    return x + y**2

def integrale_rectangle(n=100):
    dx = 1/n
    dy = 2/n
    s = 0
    for i in range(n):
        for j in range(n):
            x = i*dx
            y = j*dy
            s += f(x,y)*dx*dy
    return s
```

## 2. Changement en Coordonnées Polaires

### Exercice 2.1
Calculer l'aire du disque D : x² + y² ≤ 4

**Solution** :
1. En cartésien : A = ∫∫D 1 dxdy
2. En polaire : A = ∫0^2π ∫0^2 r drdθ
3. A = 2π × 2²/2 = 4π

**Programme calculatrice** :
```basic
:Input "R=",R
:2*π*R²/2→A
:Disp "AIRE=",A
```

### Exercice 2.2
Calculer I = ∫∫D exp(-x²-y²) dxdy sur D : x² + y² ≤ 1

**Méthode** :
1. Passage en polaire : x = r cos(θ), y = r sin(θ)
2. I = ∫0^2π ∫0^1 exp(-r²) r drdθ
3. I = 2π × [-exp(-r²)/2]0^1 = π(1-1/e)

## 3. Applications Pratiques

### Exercice 3.1
Une plaque métallique D est délimitée par y = x² et y = 2-x² pour x ∈ [0,1].
Calculer sa masse si la densité est ρ(x,y) = x + y.

**Étapes** :
1. Dessiner le domaine
2. M = ∫∫D ρ(x,y) dxdy
3. Bornes : ∫0^1 ∫x² ^(2-x²) (x+y) dy dx

**Vérification calculatrice** :
```python
def rho(x,y):
    return x + y

def masse(n=50):
    dx = 1/n
    s = 0
    for i in range(n):
        x = i*dx
        y1 = x**2
        y2 = 2-x**2
        dy = (y2-y1)/n
        for j in range(n):
            y = y1 + j*dy
            s += rho(x,y)*dx*dy
    return s
```

## 4. Intégrales Triples

### Exercice 4.1
Calculer le volume de la boule unité : x² + y² + z² ≤ 1

**Méthode 1 (cartésienne)** :
1. V = ∫∫∫E 1 dxdydz
2. V = ∫-1^1 ∫-√(1-x²)^√(1-x²) ∫-√(1-x²-y²)^√(1-x²-y²) dz dy dx

**Méthode 2 (sphérique)** :
1. V = ∫0^2π ∫0^π ∫0^1 r² sin(φ) dr dφ dθ
2. V = 4π/3

## Conseils pour l'Examen
1. Toujours dessiner le domaine
2. Choisir les coordonnées adaptées
3. Vérifier l'homogénéité
4. Utiliser les symétries 