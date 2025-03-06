# Guide d'Utilisation des Calculatrices

## 1. Fonctions de Base

### 1.1 Calcul Numérique
- Évaluation de fonctions : \\(f(x,y) = x^2 + y^2\\)
- Dérivées numériques : \\[ f'(x) \\approx \\frac{f(x+h) - f(x)}{h} \\]
- Intégration numérique : \\[ \\int_a^b f(x)dx \\approx \\sum_{i=1}^n f(x_i)\\Delta x \\]

### 1.2 Graphiques
- Tracé de fonctions : \\(y = f(x)\\)
- Courbes paramétrées : \\[ \\begin{cases} x = r\\cos(t) \\\\ y = r\\sin(t) \\end{cases} \\]
- Surfaces 3D : \\(z = f(x,y)\\)

## 2. Programmation

### 2.1 Structures de Base
```python
def f(x, y):
    return x**2 + y**2

def derive(f, x, h=1e-6):
    return (f(x+h) - f(x))/h
```

### 2.2 Algorithmes Utiles
- Méthode de Newton : \\[ x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\]
- Intégration de Riemann : \\[ \\sum_{i=1}^n f(x_i)\\Delta x \\]
- Résolution d'équations : \\(f(x) = 0\\)

## 3. Applications Spécifiques

### 3.1 Calcul Vectoriel
- Produit scalaire : \\(\\vec{a}\\cdot\\vec{b} = \\sum a_ib_i\\)
- Produit vectoriel : \\[ \\vec{a}\\times\\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ a_x & a_y & a_z \\\\ b_x & b_y & b_z \\end{vmatrix} \\]
- Gradient : \\[ \\vec{\\nabla}f = \\frac{\\partial f}{\\partial x}\\vec{i} + \\frac{\\partial f}{\\partial y}\\vec{j} + \\frac{\\partial f}{\\partial z}\\vec{k} \\]

### 3.2 Matrices
- Déterminant : \\[ \\det(A) = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} \\]
- Systèmes linéaires : \\(AX = B\\)
- Valeurs propres : \\(\\det(A-\\lambda I) = 0\\)

## 4. Conseils Pratiques

### 4.1 Organisation
1. Créer des dossiers thématiques
2. Nommer clairement les programmes
3. Commenter le code
4. Sauvegarder régulièrement

### 4.2 Optimisation
1. Simplifier les expressions
2. Utiliser des variables intermédiaires
3. Éviter les calculs redondants
4. Vérifier la précision numérique

## Casio Collège
### Fonctions essentielles
- Mode TABLE pour visualiser les variations
- Touches CALC pour résoudre les équations simples
- Stockage dans les variables A-Z
- Utilisation de ANS pour les calculs en chaîne

### Astuces pour les examens
- Stocker les formules fréquentes dans les variables
- Utiliser le mode statistique pour les systèmes d'équations
- Programme simple pour les DL : \\(Y1 = 1 + X + X^2/2\\)

## TI-83
### Fonctions utiles
- Y= pour les graphiques de fonctions
- TRACE pour analyser les points critiques
- CALC > minimum/maximum pour les extremums
- WINDOW pour ajuster la fenêtre de visualisation

### Programmes courts utiles
```basic
:Input "X=",X
:Input "Y=",Y
:X²+Y²→Z
:Disp "NORME=",√(Z)
```

## Numworks
### Fonctions avancées
- Python pour les calculs complexes
- Calcul formel pour vérifier les dérivées
- Graphiques paramétriques pour les courbes
- Mode Probabilités pour les statistiques

### Programme Python type
```python
def derive_partielle(x, y, h=0.001):
    return (f(x+h,y) - f(x,y))/h
```

## Conseils généraux
1. Vérifier les batteries avant l'examen
2. Connaître les raccourcis par cœur
3. Effacer la mémoire non nécessaire
4. Avoir des programmes courts et efficaces 