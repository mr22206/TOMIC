# Exercices Types - Fonctions de Plusieurs Variables

## Exercice 1 : Dérivées Partielles
Soit f(x,y) = x²y + xy² + sin(xy)

1. Calculer ∂f/∂x et ∂f/∂y
2. Calculer ∂²f/∂x² et ∂²f/∂y²
3. Calculer ∂²f/∂x∂y

Solution :
1. ∂f/∂x = 2xy + y² + y·cos(xy)
   ∂f/∂y = x² + 2xy + x·cos(xy)
2. ∂²f/∂x² = 2y - y²·sin(xy)
   ∂²f/∂y² = 2x - x²·sin(xy)
3. ∂²f/∂x∂y = 2 + cos(xy) - xy·sin(xy)

## Exercice 2 : Extremums Locaux
Soit f(x,y) = x² + y² - 2xy + 2x - 4y

1. Trouver les points critiques
2. Déterminer la nature de ces points
3. En déduire les extremums locaux

Solution :
1. ∂f/∂x = 2x - 2y + 2 = 0
   ∂f/∂y = 2y - 2x - 4 = 0
   → Point critique : (3,1)

2. Matrice hessienne :
   H = [2 -2; -2 2]
   det(H) = 4 - 4 = 0
   ∂²f/∂x² = 2 > 0

3. C'est un minimum local en (3,1)
   f(3,1) = 9 + 1 - 6 + 6 - 4 = 6

## Exercice 3 : Développement Limité
Calculer le DL à l'ordre 2 de f(x,y) = exp(x+y) au point (0,0)

Solution :
1. f(0,0) = 1
2. ∂f/∂x(0,0) = 1
   ∂f/∂y(0,0) = 1
3. ∂²f/∂x²(0,0) = 1
   ∂²f/∂y²(0,0) = 1
   ∂²f/∂x∂y(0,0) = 1

DL₂(x,y) = 1 + x + y + (x²/2) + xy + (y²/2)

## Exercice 4 : Application Économique
Une fonction de production est donnée par :
f(K,L) = 50K^(0.5)L^(0.3)

1. Calculer les productivités marginales
2. Déterminer les rendements d'échelle
3. Trouver le point optimal pour un budget B = 1000

Solution :
1. PMK = 25K^(-0.5)L^(0.3)
   PML = 15K^(0.5)L^(-0.7)

2. 0.5 + 0.3 < 1 : rendements décroissants

3. Conditions optimales :
   PMK/r = PML/w
   rK + wL = 1000
   (résolution numérique nécessaire)

## Méthodes à Retenir

1. Pour les dérivées partielles :
   - Traiter les autres variables comme des constantes
   - Appliquer les règles usuelles de dérivation

2. Pour les extremums :
   - Système d'équations avec dérivées partielles = 0
   - Étude de la matrice hessienne
   - Conclusion selon le signe du déterminant

3. Pour les DL :
   - Calculer f et toutes les dérivées au point
   - Appliquer la formule de Taylor
   - Vérifier la cohérence des termes 