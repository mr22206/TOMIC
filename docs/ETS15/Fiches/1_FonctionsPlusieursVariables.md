# Fonctions de Plusieurs Variables - Fiche de Synthèse

## 1. Définitions Fondamentales

### 1.1 Fonction de plusieurs variables
- Notation :
  \\[f(x,y), f(x,y,z)\\]
- Domaine de définition :
  \\[D \\subset \\mathbb{R}^{2} \\text{ ou } D \\subset \\mathbb{R}^{3}\\]
- Représentation graphique : surface dans
  \\[\\mathbb{R}^{3} \\text{ pour } f(x,y)\\]

### 1.2 Continuité
- Une fonction est continue si elle est continue par rapport à chacune de ses variables
- Théorème : Si \\(f\\) est continue sur un compact, elle y est bornée et atteint ses bornes

## 2. Dérivées Partielles

### 2.1 Définition
\\[\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h,y) - f(x,y)}{h}\\]
\\[\\frac{\\partial f}{\\partial y} = \\lim_{h \\to 0} \\frac{f(x,y+h) - f(x,y)}{h}\\]

### 2.2 Règles de calcul
- \\(\\frac{\\partial}{\\partial x}(u+v) = \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial x}\\)
- \\(\\frac{\\partial}{\\partial x}(uv) = u\\frac{\\partial v}{\\partial x} + v\\frac{\\partial u}{\\partial x}\\)
- Composition :
  \\[\\frac{\\partial f}{\\partial x} = \\frac{\\partial f}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{\\partial f}{\\partial v}\\frac{\\partial v}{\\partial x}\\]

## 3. Développements Limités

### 3.1 Formule de Taylor à l'ordre 1
\\[f(x+h,y+k) \\approx f(x,y) + h\\frac{\\partial f}{\\partial x} + k\\frac{\\partial f}{\\partial y}\\]

### 3.2 Formule de Taylor à l'ordre 2
\\[f(x+h,y+k) \\approx f(x,y) + h\\frac{\\partial f}{\\partial x} + k\\frac{\\partial f}{\\partial y} + \\frac{h^2}{2}\\frac{\\partial^2 f}{\\partial x^2} + hk\\frac{\\partial^2 f}{\\partial x\\partial y} + \\frac{k^2}{2}\\frac{\\partial^2 f}{\\partial y^2}\\]

## 4. Applications Pratiques

### 4.1 Extremums locaux

- Points critiques :
  \\[\\frac{\\partial f}{\\partial x} = 0 \\text{ et } \\frac{\\partial f}{\\partial y} = 0\\]

- Test de la matrice hessienne :
  \\[\\text{Si } \\det(H) > 0 \\text{ et } \\frac{\\partial^2 f}{\\partial x^2} > 0 : \\text{ minimum local}\\]
  \\[\\text{Si } \\det(H) > 0 \\text{ et } \\frac{\\partial^2 f}{\\partial x^2} < 0 : \\text{ maximum local}\\]
  \\[\\text{Si } \\det(H) < 0 : \\text{ point selle}\\]

### 4.2 Exemple type : Fonction de Cobb-Douglas

La fonction de production de Cobb-Douglas est donnée par :
\\[f(K,L) = AK^{\\alpha}L^{\\beta}\\]

Dérivées partielles :
\\[\\frac{\\partial f}{\\partial K} = \\alpha AK^{\\alpha-1}L^{\\beta}\\]
\\[\\frac{\\partial f}{\\partial L} = \\beta AK^{\\alpha}L^{\\beta-1}\\]

avec :
- \\(K\\) : capital
- \\(L\\) : travail
- \\(A\\), \\(\\alpha\\), \\(\\beta\\) : constantes positives

## 5. Méthode de Résolution

1. Identifier le type de problème
2. Calculer les dérivées partielles
3. Résoudre le système d'équations
4. Vérifier la nature des points critiques
5. Conclure en fonction du contexte

## Formules à Retenir

- Gradient :
  \\[\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right)\\]

- Matrice hessienne :
  \\[\\begin{pmatrix}
  \\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x\\partial y} \\\\
  \\frac{\\partial^2 f}{\\partial x\\partial y} & \\frac{\\partial^2 f}{\\partial y^2}
  \\end{pmatrix}\\]

- Déterminant hessien :
  \\[\\det(H) = \\frac{\\partial^2 f}{\\partial x^2}\\frac{\\partial^2 f}{\\partial y^2} - \\left(\\frac{\\partial^2 f}{\\partial x\\partial y}\\right)^2\\]

# Test Formules Mathématiques

## Exemples de formules

### Formule en ligne
La dérivée partielle est notée \\(\\frac{\\partial f}{\\partial x}\\) et représente le taux de variation par rapport à x.

### Formule en bloc
La formule de Taylor à l'ordre 2 est :

\\[
f(x+h,y+k) \\approx f(x,y) + h\\frac{\\partial f}{\\partial x} + k\\frac{\\partial f}{\\partial y} + \\frac{h^2}{2}\\frac{\\partial^2 f}{\\partial x^2} + hk\\frac{\\partial^2 f}{\\partial x\\partial y} + \\frac{k^2}{2}\\frac{\\partial^2 f}{\\partial y^2}
\\]

### Matrice
La matrice hessienne est :

\\[
\\begin{pmatrix}
\\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x\\partial y} \\\\
\\frac{\\partial^2 f}{\\partial x\\partial y} & \\frac{\\partial^2 f}{\\partial y^2}
\\end{pmatrix}
\\]

### Intégrale double
\\[
\\iint_D f(x,y) \,dx\,dy = \\int_a^b \\left(\\int_c^d f(x,y) \,dy\\right) \,dx
\\] 
