# Exercices Types

## 1. Fonctions de Plusieurs Variables

### Exercice 1.1 : Domaine de Définition
Déterminer le domaine de définition des fonctions suivantes :

1. \\(f(x,y) = \\sqrt{1-x^2-y^2}\\)
2. \\(g(x,y) = \\ln(x^2+y^2)\\)
3. \\(h(x,y) = \\frac{1}{x-y}\\)

### Exercice 1.2 : Limites et Continuité
Étudier les limites et la continuité en (0,0) :

1. \\(f(x,y) = \\frac{xy}{x^2+y^2}\\)
2. \\(g(x,y) = \\frac{x^2y}{x^2+y^2}\\)
3. \\(h(x,y) = \\frac{x^2-y^2}{x^2+y^2}\\)

## 2. Dérivées Partielles

### Exercice 2.1 : Calcul Direct
Calculer les dérivées partielles :

1. \\(f(x,y) = x^2y + \\sin(xy)\\)
   \\[\\frac{\\partial f}{\\partial x} = 2xy + y\\cos(xy)\\]
   \\[\\frac{\\partial f}{\\partial y} = x^2 + x\\cos(xy)\\]

2. \\(g(x,y,z) = xe^{yz} + \\ln(x^2+y^2)\\)
   \\[\\frac{\\partial g}{\\partial x} = e^{yz} + \\frac{2x}{x^2+y^2}\\]
   \\[\\frac{\\partial g}{\\partial y} = xze^{yz} + \\frac{2y}{x^2+y^2}\\]
   \\[\\frac{\\partial g}{\\partial z} = xye^{yz}\\]

### Exercice 2.2 : Dérivées d'Ordre Supérieur
Calculer les dérivées secondes :
\\[\\frac{\\partial^2 f}{\\partial x^2}, \\frac{\\partial^2 f}{\\partial y^2}, \\frac{\\partial^2 f}{\\partial x\\partial y}\\]

## 3. Différentiabilité

### Exercice 3.1 : Matrice Jacobienne
Calculer la matrice jacobienne :
\\[J = \\begin{pmatrix}
\\frac{\\partial f_1}{\\partial x} & \\frac{\\partial f_1}{\\partial y} \\\\
\\frac{\\partial f_2}{\\partial x} & \\frac{\\partial f_2}{\\partial y}
\\end{pmatrix}\\]

### Exercice 3.2 : Approximation Linéaire
Utiliser la différentielle :
\\[df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy\\]

## 4. Extremums

### Exercice 4.1 : Points Critiques
1. Trouver les points critiques : 
   \\[\\frac{\\partial f}{\\partial x} = 0, \\frac{\\partial f}{\\partial y} = 0\\]
2. Calculer la matrice hessienne :
   \\[H = \\begin{pmatrix}
   \\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x\\partial y} \\\\
   \\frac{\\partial^2 f}{\\partial y\\partial x} & \\frac{\\partial^2 f}{\\partial y^2}
   \\end{pmatrix}\\]
3. Déterminer la nature des points critiques

### Exercice 4.2 : Extremums Sous Contraintes
Utiliser la méthode des multiplicateurs de Lagrange :
\\[\\mathcal{L}(x,y,\\lambda) = f(x,y) - \\lambda g(x,y)\\]

## 5. Applications

### Exercice 5.1 : Optimisation
Résoudre des problèmes d'optimisation :
1. Distance minimale
2. Volume maximal
3. Coût minimal

### Exercice 5.2 : Physique
Applications en physique :
1. Champs scalaires : \\(\\phi(x,y,z)\\)
2. Champs vectoriels : \\(\\vec{F}(x,y,z)\\)
3. Potentiel gravitationnel : 
   \\[V(x,y,z) = -\\frac{GM}{\\sqrt{x^2+y^2+z^2}}\\]

## Méthodes de Résolution

### 1. Étapes Générales
1. Identifier le type de problème
2. Écrire les équations
3. Résoudre méthodiquement
4. Vérifier la cohérence

### 2. Outils Mathématiques
1. Dérivées partielles
2. Matrices jacobiennes
3. Multiplicateurs de Lagrange
4. Développements limités

## Exercices de calcul
- Intégrale double : 
  \\[\\iint_{D} xy \\,dx\\,dy = \\int_{0}^{2} \\int_{x^{2}}^{2x} xy \\,dy\\,dx\\]
- Volume : 
  \\[V = \\int_{0}^{2\\pi} \\int_{0}^{1} r^{2}\\sin(\\phi) \\,dr\\,d\\phi\\]