# Intégrations Multiples - Fiche de Synthèse

## 1. Intégrales Doubles

### 1.1 Définition
- Notation : 
  \\[\\iint_{D} f(x,y) \\,dx\\,dy\\]
- Domaine \\(D \\subset \\mathbb{R}^{2}\\)
- Interprétation : volume sous la surface \\(z = f(x,y)\\)

### 1.2 Calcul sur un rectangle \\([a,b]\\times[c,d]\\)

\\[\\iint_{[a,b]\\times[c,d]} f(x,y) \\,dx\\,dy = \\int_{a}^{b} \\left(\\int_{c}^{d} f(x,y) \\,dy\\right) \\,dx\\]

- Ordre possible : \\(dx\\,dy\\) ou \\(dy\\,dx\\)
- Choisir l'ordre le plus simple

## 2. Changement de Variables

### 2.1 Formule générale
- \\(u = u(x,y)\\) et \\(v = v(x,y)\\)

- Jacobien : 
  \\[|J| = \\left|\\frac{\\partial(u,v)}{\\partial(x,y)}\\right| = \\begin{vmatrix} 
  \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\ 
  \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y} 
  \\end{vmatrix}\\]
- \\[\\iint_D f(x,y) \\,dx\\,dy = \\iint_{D'} f(u,v) |J| \\,du\\,dv\\]

### 2.2 Coordonnées polaires
- \\(x = r\\cos(\\theta)\\), \\(y = r\\sin(\\theta)\\)
- \\(|J| = r\\)
- \\[\\iint_D f(x,y) \\,dx\\,dy = \\iint_D f(r\\cos(\\theta), r\\sin(\\theta)) \\,r\\,dr\\,d\\theta\\]

## 3. Applications Géométriques

### 3.1 Calcul de volumes
- Volume : 
  \\[\\iint_D f(x,y) \\,dx\\,dy\\]
- Exemple : sphère de rayon R
  * \\[V = \\iint_D \\sqrt{R^2 - x^2 - y^2} \\,dx\\,dy\\]
  * En polaire : 
    \\[V = \\int_{0}^{2\\pi} \\int_{0}^{R} r\\sqrt{R^{2} - r^{2}} \\,dr\\,d\\theta\\]

### 3.2 Calcul d'aires
- Aire : 
  \\[\\iint_D 1 \\,dx\\,dy\\]
- En polaire : 
  \\[\\iint_D r \\,dr\\,d\\theta\\]

## 4. Méthodes de Résolution

### 4.1 Étapes clés
1. Identifier le domaine \\(D\\)
2. Choisir le système de coordonnées adapté
3. Déterminer les bornes d'intégration
4. Calculer l'intégrale itérée

### 4.2 Astuces calculatrice
- Utiliser la symétrie si possible
- Décomposer en sous-domaines simples
- Vérifier l'homogénéité des unités

## 5. Cas Particuliers

### 5.1 Domaines symétriques
- Si D symétrique / Ox : 
  \\[\\iint_D f(x,-y) = \\iint_D f(x,y)\\]
- Si D symétrique / Oy : 
  \\[\\iint_D f(-x,y) = \\iint_D f(x,y)\\]
- Si f paire en x : diviser par 2 et intégrer sur \\(x>0\\)

### 5.2 Intégrales triples
- Extension naturelle : 
  \\[\\iiint_E f(x,y,z) \\,dx\\,dy\\,dz\\]
- Coordonnées sphériques : \\(|J| = r^2\\sin(\\phi)\\)
- \\[x = r\\sin(\\phi)\\cos(\\theta)\\]
- \\[y = r\\sin(\\phi)\\sin(\\theta)\\]
- \\[z = r\\cos(\\phi)\\]

## Formules Importantes
1. Aire du cercle : \\[\\pi R^2\\]
2. Volume de la sphère : \\[\\frac{4}{3}\\pi R^3\\]
3. Moment d'inertie : \\[\\iint_D r^2 \\,dm\\]
4. Centre de masse : \\[\\left(\\frac{\\iint_D x\\,dm}{M}, \\frac{\\iint_D y\\,dm}{M}\\right)\\] 