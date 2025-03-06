# Exercices sur les Opérateurs Vectoriels

## 1. Gradient

### Exercice 1.1 : Calcul Direct
Calculer le gradient des fonctions suivantes :

1. \\(f(x,y,z) = x^{2} + y^{2} + z^{2}\\)
   \\[ \\vec{\\nabla}f = 2x\\vec{i} + 2y\\vec{j} + 2z\\vec{k} \\]

2. \\(g(x,y,z) = \\ln(x^2 + y^2 + z^2)\\)
   \\[ \\vec{\\nabla}g = \\frac{2x}{x^2 + y^2 + z^2}\\vec{i} + \\frac{2y}{x^2 + y^2 + z^2}\\vec{j} + \\frac{2z}{x^2 + y^2 + z^2}\\vec{k} \\]

### Exercice 1.2 : Coordonnées Cylindriques
Calculer le gradient en coordonnées cylindriques :
\\[ \\vec{\\nabla}f = \\frac{\\partial f}{\\partial r}\\vec{e_r} + \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta}\\vec{e_{\\theta}} + \\frac{\\partial f}{\\partial z}\\vec{k} \\]

## 2. Divergence

### Exercice 2.1 : Champs Vectoriels
Calculer la divergence :
1. \\(\\vec{F} = x\\vec{i} + y\\vec{j} + z\\vec{k}\\)
   \\[ \\vec{\\nabla} \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z} = 3 \\]

2. \\(\\vec{G} = \\frac{\\vec{r}}{r^3}\\)
   \\[ \\vec{\\nabla} \\cdot \\vec{G} = 4\\pi\\delta(\\vec{r}) \\]

### Exercice 2.2 : Applications
1. Équation de continuité : 
   \\[ \\frac{\\partial \\rho}{\\partial t} + \\vec{\\nabla} \\cdot (\\rho\\vec{v}) = 0 \\]
2. Théorème de Gauss : 
   \\[ \\iiint_V \\vec{\\nabla} \\cdot \\vec{F}\\,dV = \\iint_S \\vec{F} \\cdot \\vec{n}\\,dS \\]

## 3. Rotationnel

### Exercice 3.1 : Calcul Direct
Calculer le rotationnel :
\\[ \\vec{\\nabla} \\times \\vec{F} = \\begin{vmatrix} 
\\vec{i} & \\vec{j} & \\vec{k} \\\\
\\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\
F_x & F_y & F_z
\\end{vmatrix} \\]

### Exercice 3.2 : Champs Irrotationnels
Vérifier si le champ est irrotationnel :

1. \\(\\vec{F} = -y\\vec{i} + x\\vec{j}\\)
2. \\(\\vec{G} = \\frac{-y}{x^2 + y^2}\\vec{i} + \\frac{x}{x^2 + y^2}\\vec{j}\\)

## 4. Laplacien

### Exercice 4.1 : Scalaire
Calculer le laplacien :
\\[ \\nabla^2 f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2} \\]

### Exercice 4.2 : Vectoriel
Calculer le laplacien vectoriel :
\\[ \\nabla^2 \\vec{F} = \\vec{\\nabla}(\\vec{\\nabla} \\cdot \\vec{F}) - \\vec{\\nabla} \\times (\\vec{\\nabla} \\times \\vec{F}) \\]

## 5. Applications Physiques

### Exercice 5.1 : Électromagnétisme
1. Équations de Maxwell :
   \\[ \\vec{\\nabla} \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0} \\]
   \\[ \\vec{\\nabla} \\cdot \\vec{B} = 0 \\]
   \\[ \\vec{\\nabla} \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} \\]
   \\[ \\vec{\\nabla} \\times \\vec{B} = \\mu_0\\vec{j} + \\mu_0\\epsilon_0\\frac{\\partial \\vec{E}}{\\partial t} \\]

2. Potentiels :
   \\[ \\vec{E} = -\\vec{\\nabla}V - \\frac{\\partial \\vec{A}}{\\partial t} \\]
   \\[ \\vec{B} = \\vec{\\nabla} \\times \\vec{A} \\]

### Exercice 5.2 : Mécanique des Fluides
1. Équation de continuité :
   \\[ \\frac{\\partial \\rho}{\\partial t} + \\vec{\\nabla} \\cdot (\\rho\\vec{v}) = 0 \\]

2. Équation de Navier-Stokes :
   \\[ \\rho\\frac{D\\vec{v}}{Dt} = -\\vec{\\nabla}p + \\mu\\nabla^2 \\vec{v} + \\rho\\vec{g} \\]

## Méthodes de Résolution

### 1. Étapes Générales
1. Identifier l'opérateur
2. Choisir le système de coordonnées
3. Appliquer les formules
4. Vérifier les unités

### 2. Points Clés
1. Propriétés des opérateurs
2. Changements de coordonnées
3. Théorèmes intégraux
4. Applications physiques 