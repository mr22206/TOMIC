# Exercices d'Intégration Multiple

## 1. Intégrales Doubles

### Exercice 1.1 : Calcul Direct
Calculer :
\\[\\iint_D (x^2 + y^2)\\,dx\\,dy\\]
où \\(D = \\{(x,y) : x^2 + y^2 \\leq 1\\}\\)

### Exercice 1.2 : Changement d'Ordre
Calculer en changeant l'ordre d'intégration :
\\[\\int_0^1\\int_y^1 f(x,y)\\,dx\\,dy = \\int_0^1\\int_0^x f(x,y)\\,dy\\,dx\\]

## 2. Coordonnées Polaires

### Exercice 2.1 : Transformation
Utiliser la transformation :
\\[\\begin{cases}
x = r\\cos(\\theta) \\\\
y = r\\sin(\\theta)
\\end{cases}\\]
avec jacobien : \\[J = r\\]

### Exercice 2.2 : Applications
Calculer :
1. Aire du disque : 
   \\[A = \\int_0^{2\\pi}\\int_0^R r\\,dr\\,d\\theta\\]
2. Moment d'inertie : 
   \\[I = \\iint_D (x^2 + y^2)\\rho\\,dx\\,dy\\]

## 3. Intégrales Triples

### Exercice 3.1 : Volume
Calculer le volume :
\\[V = \\iiint_E\\,dx\\,dy\\,dz\\]
où \\(E\\) est une sphère de rayon \\(R\\)

### Exercice 3.2 : Coordonnées Sphériques
Utiliser la transformation :
\\[\\begin{cases}
x = r\\sin(\\phi)\\cos(\\theta) \\\\
y = r\\sin(\\phi)\\sin(\\theta) \\\\
z = r\\cos(\\phi)
\\end{cases}\\]
avec jacobien : \\[J = r^2\\sin(\\phi)\\]

## 4. Applications Physiques

### Exercice 4.1 : Centre de Masse
Calculer :
\\[\\vec{G} = \\frac{1}{M}\\iiint_E \\rho(x,y,z)\\vec{r}\\,dx\\,dy\\,dz\\]
où \\[M = \\iiint_E \\rho(x,y,z)\\,dx\\,dy\\,dz\\]

### Exercice 4.2 : Moments d'Inertie
Calculer la matrice d'inertie :
\\[I = \\begin{pmatrix}
\\iiint_E \\rho(y^2+z^2)\\,dx\\,dy\\,dz & -\\iiint_E \\rho xy\\,dx\\,dy\\,dz & -\\iiint_E \\rho xz\\,dx\\,dy\\,dz \\\\
-\\iiint_E \\rho xy\\,dx\\,dy\\,dz & \\iiint_E \\rho(x^2+z^2)\\,dx\\,dy\\,dz & -\\iiint_E \\rho yz\\,dx\\,dy\\,dz \\\\
-\\iiint_E \\rho xz\\,dx\\,dy\\,dz & -\\iiint_E \\rho yz\\,dx\\,dy\\,dz & \\iiint_E \\rho(x^2+y^2)\\,dx\\,dy\\,dz
\\end{pmatrix}\\]

## 5. Méthodes Numériques

### Exercice 5.1 : Méthode des Rectangles
Approximer :
\\[\\iint_D f(x,y)\\,dx\\,dy \\approx \\sum_{i,j} f(x_i,y_j)\\Delta x\\Delta y\\]

### Exercice 5.2 : Monte Carlo
Estimer l'intégrale par :
\\[I \\approx V\\frac{N_{in}}{N_{total}}\\]
où \\(V\\) est le volume englobant

## Méthodes de Résolution

### 1. Étapes Générales
1. Identifier le domaine
2. Choisir les coordonnées adaptées
3. Poser les bornes d'intégration
4. Calculer l'intégrale

### 2. Points Clés
1. Ordre d'intégration
2. Changements de variables
3. Symétries du problème
4. Méthodes numériques 