# Exercices Calculatrice

## 1. Fonctions de Base

### Exercice 1.1 : Définition de Fonctions
Programmer les fonctions suivantes :

1. \\(f(x,y) = \\sqrt{x^2 + y^2}\\)
2. \\(g(x,y) = \\sin(x)\\cos(y)\\)
3. \\(h(x,y,z) = xe^{yz}\\)

```python
def f(x, y):
    return (x**2 + y**2)**0.5

def g(x, y):
    return sin(x)*cos(y)

def h(x, y, z):
    return x*exp(y*z)
```

### Exercice 1.2 : Calculs Numériques
Évaluer :

1. \\(f(3,4) = 5\\)
2. \\(g(\\pi/2,\\pi/3) = 0.5\\)
3. \\(h(2,0,1) = 2\\)

## 2. Dérivées Partielles

### Exercice 2.1 : Calcul Symbolique
Programmer le calcul des dérivées partielles :
\\[\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\]

```python
def df_dx(x, y):
    return x/sqrt(x**2 + y**2)

def df_dy(x, y):
    return y/sqrt(x**2 + y**2)
```

### Exercice 2.2 : Approximation Numérique
Utiliser la formule :
\\[\\frac{\\partial f}{\\partial x} \\approx \\frac{f(x+h,y) - f(x,y)}{h}\\]

```python
def deriv_num(f, x, y, h=1e-6):
    return (f(x+h,y) - f(x,y))/h
```

## 3. Graphiques 3D

### Exercice 3.1 : Surface
Tracer la surface :
\\[z = x^2 + y^2\\]

```python
def plot_surface():
    x = np.linspace(-2, 2, 100)
    y = np.linspace(-2, 2, 100)
    X, Y = np.meshgrid(x, y)
    Z = X**2 + Y**2
    plt.surface(X, Y, Z)
```

### Exercice 3.2 : Courbes de Niveau
Tracer les courbes :
\\[x^2 + y^2 = k, k \\in \\{1,2,3,4\\}\\]

```python
def plot_contours():
    x = np.linspace(-3, 3, 100)
    y = np.linspace(-3, 3, 100)
    X, Y = np.meshgrid(x, y)
    Z = X**2 + Y**2
    plt.contour(X, Y, Z, levels=[1,2,3,4])
```

## 4. Optimisation

### Exercice 4.1 : Recherche de Minimum
Programmer la descente de gradient :
\\[x_{n+1} = x_n - \\alpha\\nabla f(x_n)\\]

```python
def gradient_descent(f, grad_f, x0, alpha=0.1, eps=1e-6):
    x = x0
    while norm(grad_f(x)) > eps:
        x = x - alpha*grad_f(x)
    return x
```

### Exercice 4.2 : Contraintes
Implémenter la méthode des multiplicateurs :
\\[\\mathcal{L}(x,y,\\lambda) = f(x,y) - \\lambda g(x,y)\\]

## 5. Applications

### Exercice 5.1 : Physique
Calculer le champ gravitationnel :
\\[\\vec{g}(x,y,z) = -\\frac{GM}{r^3}\\vec{r}\\]

```python
def champ_grav(x, y, z, M=1, G=1):
    r = sqrt(x**2 + y**2 + z**2)
    return -G*M/r**3 * array([x,y,z])
```

### Exercice 5.2 : Économie
Optimiser une fonction de production :
\\[f(K,L) = K^\\alpha L^\\beta\\]

## Méthodes Importantes

### 1. Programmation
1. Définir clairement les entrées/sorties
2. Gérer les cas particuliers
3. Optimiser le code
4. Documenter les fonctions

### 2. Visualisation
1. Choisir la bonne représentation
2. Ajuster les paramètres
3. Ajouter légendes et titres
4. Sauvegarder les graphiques 