# Fonctions de Plusieurs Variables - Fiche de Synthèse

## 1. Définitions Fondamentales

### 1.1 Fonction de plusieurs variables
- Notation : f(x,y), f(x,y,z)
- Domaine de définition : D ⊂ ℝ² ou D ⊂ ℝ³
- Représentation graphique : surface dans ℝ³ pour f(x,y)

### 1.2 Continuité
- Une fonction est continue si elle est continue par rapport à chacune de ses variables
- Théorème : Si f est continue sur un compact, elle y est bornée et atteint ses bornes

## 2. Dérivées Partielles

### 2.1 Définition
- ∂f/∂x = lim[h→0] (f(x+h,y) - f(x,y))/h
- ∂f/∂y = lim[h→0] (f(x,y+h) - f(x,y))/h

### 2.2 Règles de calcul
- (u+v)' = u' + v'
- (uv)' = u'v + uv'
- Composition : ∂f/∂x = (∂f/∂u)(∂u/∂x) + (∂f/∂v)(∂v/∂x)

## 3. Développements Limités

### 3.1 Formule de Taylor à l'ordre 1
f(x+h,y+k) ≈ f(x,y) + h(∂f/∂x) + k(∂f/∂y)

### 3.2 Formule de Taylor à l'ordre 2
f(x+h,y+k) ≈ f(x,y) + h(∂f/∂x) + k(∂f/∂y) + (h²/2)(∂²f/∂x²) + hk(∂²f/∂x∂y) + (k²/2)(∂²f/∂y²)

## 4. Applications Pratiques

### 4.1 Extremums locaux
- Points critiques : ∂f/∂x = 0 et ∂f/∂y = 0
- Test de la matrice hessienne :
  * Si det(H) > 0 et ∂²f/∂x² > 0 : minimum local
  * Si det(H) > 0 et ∂²f/∂x² < 0 : maximum local
  * Si det(H) < 0 : point selle

### 4.2 Exemple type : Fonction de Cobb-Douglas
f(K,L) = AK^α L^β
- Dérivées partielles :
  * ∂f/∂K = αAK^(α-1)L^β
  * ∂f/∂L = βAK^αL^(β-1)

## 5. Méthode de Résolution

1. Identifier le type de problème
2. Calculer les dérivées partielles
3. Résoudre le système d'équations
4. Vérifier la nature des points critiques
5. Conclure en fonction du contexte

## Formules à Retenir
- Gradient : ∇f = (∂f/∂x, ∂f/∂y)
- Matrice hessienne : H = [∂²f/∂x² ∂²f/∂x∂y; ∂²f/∂x∂y ∂²f/∂y²]
- Déterminant hessien : det(H) = (∂²f/∂x²)(∂²f/∂y²) - (∂²f/∂x∂y)² 