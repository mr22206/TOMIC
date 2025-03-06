# Intégrations Multiples - Fiche de Synthèse

## 1. Intégrales Doubles

### 1.1 Définition
- Notation : ∫∫D f(x,y) dxdy
- Domaine D ⊂ ℝ²
- Interprétation : volume sous la surface z = f(x,y)

### 1.2 Calcul sur un rectangle [a,b]×[c,d]
- ∫∫[a,b]×[c,d] f(x,y) dxdy = ∫a^b (∫c^d f(x,y) dy) dx
- Ordre possible : dx dy ou dy dx
- Choisir l'ordre le plus simple

## 2. Changement de Variables

### 2.1 Formule générale
- u = u(x,y) et v = v(x,y)
- |J| = |∂(u,v)/∂(x,y)| = |∂u/∂x ∂u/∂y; ∂v/∂x ∂v/∂y|
- ∫∫D f(x,y) dxdy = ∫∫D' f(u,v) |J| dudv

### 2.2 Coordonnées polaires
- x = r cos(θ), y = r sin(θ)
- |J| = r
- ∫∫D f(x,y) dxdy = ∫∫D f(r cos(θ), r sin(θ)) r drdθ

## 3. Applications Géométriques

### 3.1 Calcul de volumes
- Volume = ∫∫D f(x,y) dxdy
- Exemple : sphère de rayon R
  * V = ∫∫D √(R² - x² - y²) dxdy
  * En polaire : V = ∫0^2π ∫0^R r√(R² - r²) drdθ

### 3.2 Calcul d'aires
- Aire = ∫∫D 1 dxdy
- En polaire : A = ∫∫D r drdθ

## 4. Méthodes de Résolution

### 4.1 Étapes clés
1. Identifier le domaine D
2. Choisir le système de coordonnées adapté
3. Déterminer les bornes d'intégration
4. Calculer l'intégrale itérée

### 4.2 Astuces calculatrice
- Utiliser la symétrie si possible
- Décomposer en sous-domaines simples
- Vérifier l'homogénéité des unités

## 5. Cas Particuliers

### 5.1 Domaines symétriques
- Si D symétrique / Ox : ∫∫D f(x,-y) = ∫∫D f(x,y)
- Si D symétrique / Oy : ∫∫D f(-x,y) = ∫∫D f(x,y)
- Si f paire en x : diviser par 2 et intégrer sur x>0

### 5.2 Intégrales triples
- Extension naturelle : ∫∫∫E f(x,y,z) dxdydz
- Coordonnées sphériques : |J| = r² sin(φ)
- x = r sin(φ) cos(θ)
- y = r sin(φ) sin(θ)
- z = r cos(φ)

## Formules Importantes
1. Aire du cercle : πR²
2. Volume de la sphère : 4πR³/3
3. Moment d'inertie : ∫∫D r² dm
4. Centre de masse : (∫∫D xdm)/M, (∫∫D ydm)/M 