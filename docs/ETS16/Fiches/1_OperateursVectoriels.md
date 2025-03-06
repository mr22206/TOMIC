# Opérateurs Vectoriels - Fiche de Synthèse

## 1. Champs Vectoriels et Scalaires

### 1.1 Définitions
- Champ scalaire : \\(f(x,y,z) \\to \\mathbb{R}\\)
- Champ vectoriel : \\(\\vec{F}(x,y,z) \\to \\mathbb{R}^3\\)
- Notation : \\(\\vec{F} = (P,Q,R)\\) ou \\(\\vec{F} = P\\vec{i} + Q\\vec{j} + R\\vec{k}\\)

### 1.2 Exemples physiques
- Scalaires : température, pression, potentiel
- Vectoriels : vitesse, force, champ électrique

## 2. Opérateurs Différentiels

### 2.1 Gradient (\\(\\nabla f\\) ou \\(\\text{grad}\\ f\\))
- Pour un champ scalaire \\(f\\)
- \\[ \\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z}\\right) \\]
- Direction de plus forte variation
- Perpendiculaire aux surfaces de niveau

### 2.2 Divergence (\\(\\nabla \\cdot \\vec{F}\\) ou \\(\\text{div}\\ \\vec{F}\\))
- Pour un champ vectoriel \\(\\vec{F}\\)
- En coordonnées cartésiennes : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z} \\]
- En coordonnées cylindriques : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{1}{r}\\frac{\\partial}{\\partial r}(rF_r) + \\frac{1}{r}\\frac{\\partial F_\\theta}{\\partial \\theta} + \\frac{\\partial F_z}{\\partial z} \\]
- En coordonnées sphériques : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2F_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial \\theta}(\\sin\\theta F_\\theta) + \\frac{1}{r\\sin\\theta}\\frac{\\partial F_\\phi}{\\partial \\phi} \\]
- Mesure du flux sortant par unité de volume
- \\(\\text{div}\\ \\vec{F} > 0\\) : source, \\(\\text{div}\\ \\vec{F} < 0\\) : puits

### 2.3 Rotationnel (\\(\\nabla \\times \\vec{F}\\) ou \\(\\text{rot}\\ \\vec{F}\\))
- Pour un champ vectoriel \\(\\vec{F}\\)
- En coordonnées cartésiennes : \\[ \\vec{\\nabla}\\times\\vec{F} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix} \\]
- En coordonnées cylindriques : \\[ \\vec{\\nabla}\\times\\vec{F} = \\left(\\frac{1}{r}\\frac{\\partial F_z}{\\partial \\theta} - \\frac{\\partial F_\\theta}{\\partial z}\\right)\\vec{e_r} + \\left(\\frac{\\partial F_r}{\\partial z} - \\frac{\\partial F_z}{\\partial r}\\right)\\vec{e_\\theta} + \\frac{1}{r}\\left(\\frac{\\partial(rF_\\theta)}{\\partial r} - \\frac{\\partial F_r}{\\partial \\theta}\\right)\\vec{k} \\]
- Mesure la rotation locale du champ
- \\(\\text{rot}\\ \\vec{F} = \\vec{0}\\) : champ irrotationnel

## 3. Propriétés Importantes

### 3.1 Relations fondamentales
- \\(\\text{rot}(\\text{grad}\\ f) = \\vec{0}\\)
- \\(\\text{div}(\\text{rot}\\ \\vec{F}) = 0\\)
- \\[ \\text{rot}(\\text{rot}\\ \\vec{F}) = \\text{grad}(\\text{div}\\ \\vec{F}) - \\Delta\\vec{F} \\]

### 3.2 Règles de calcul
- \\[ \\text{grad}(fg) = f\\text{grad}(g) + g\\text{grad}(f) \\]
- \\[ \\text{div}(f\\vec{F}) = f\\text{div}(\\vec{F}) + \\vec{F}\\cdot\\text{grad}(f) \\]
- \\[ \\text{rot}(f\\vec{F}) = f\\text{rot}(\\vec{F}) + \\text{grad}(f)\\times\\vec{F} \\]

## 4. Applications en Physique

### 4.1 Électromagnétisme
- \\(\\vec{E} = -\\text{grad}\\ V\\) (champ électrique)
- \\[ \\text{div}\\ \\vec{E} = \\frac{\\rho}{\\varepsilon_0} \\] (équation de Maxwell-Gauss)
- \\[ \\text{rot}\\ \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} \\] (équation de Maxwell-Faraday)
- \\(\\text{div}\\ \\vec{B} = 0\\) (absence de monopôles magnétiques)

### 4.2 Mécanique des fluides
- \\(\\text{div}\\ \\vec{v} = 0\\) (incompressibilité)
- \\(\\text{rot}\\ \\vec{v} = 2\\vec{\\omega}\\) (vorticité)
- Équation de continuité : \\[ \\frac{\\partial \\rho}{\\partial t} + \\text{div}(\\rho\\vec{v}) = 0 \\]

## 5. Théorèmes Intégraux

### 5.1 Théorème de Green
- \\[ \\iint_D \\text{rot}\\ \\vec{F}\\cdot\\vec{n}\\ dS = \\oint_{\\partial D} \\vec{F}\\cdot d\\vec{r} \\]
- Version 2D du théorème de Stokes

### 5.2 Théorème de Stokes
- \\[ \\iint_S \\text{rot}\\ \\vec{F}\\cdot\\vec{n}\\ dS = \\oint_{\\partial S} \\vec{F}\\cdot d\\vec{r} \\]
- Relie intégrale de surface et circulation

### 5.3 Théorème de Gauss
- \\[ \\iint_{\\partial V} \\vec{F}\\cdot\\vec{n}\\ dS = \\iiint_V \\text{div}\\ \\vec{F}\\ dV \\]
- Relie flux sortant et divergence

## 6. Méthodes de Calcul

### 6.1 Coordonnées cylindriques (\\(r,\\theta,z\\))
- \\[ \\text{grad}\\ f = \\frac{\\partial f}{\\partial r}\\vec{e_r} + \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta}\\vec{e_\\theta} + \\frac{\\partial f}{\\partial z}\\vec{e_z} \\]
- \\[ \\text{div}\\ \\vec{F} = \\frac{1}{r}\\frac{\\partial(rF_r)}{\\partial r} + \\frac{1}{r}\\frac{\\partial F_\\theta}{\\partial \\theta} + \\frac{\\partial F_z}{\\partial z} \\]

### 6.2 Coordonnées sphériques (\\(r,\\theta,\\phi\\))
- \\[ \\text{grad}\\ f = \\frac{\\partial f}{\\partial r}\\vec{e_r} + \\frac{1}{r}\\frac{\\partial f}{\\partial \\theta}\\vec{e_\\theta} + \\frac{1}{r\\sin \\theta}\\frac{\\partial f}{\\partial \\phi}\\vec{e_\\phi} \\]
- \\[ \\text{div}\\ \\vec{F} = \\frac{1}{r^2}\\frac{\\partial(r^2F_r)}{\\partial r} + \\frac{1}{r\\sin \\theta}\\frac{\\partial(\\sin \\theta F_\\theta)}{\\partial \\theta} + \\frac{1}{r\\sin \\theta}\\frac{\\partial F_\\phi}{\\partial \\phi} \\]

## Formules à Retenir
1. Laplacien : \\(\\Delta f = \\text{div}(\\text{grad}\\ f)\\)
2. Identité vectorielle : \\(\\vec{a}\\times(\\vec{b}\\times\\vec{c}) = (\\vec{a}\\cdot\\vec{c})\\vec{b} - (\\vec{a}\\cdot\\vec{b})\\vec{c}\\)
3. Produit mixte : \\(\\vec{a}\\cdot(\\vec{b}\\times\\vec{c}) = \\vec{b}\\cdot(\\vec{c}\\times\\vec{a}) = \\vec{c}\\cdot(\\vec{a}\\times\\vec{b})\\)
4. Gradient de \\(r\\) : \\(\\text{grad}(r) = \\vec{e_r}\\)

# Opérateurs Vectoriels

## 1. Gradient

### 1.1 Définition
- En coordonnées cartésiennes : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z} \\]
- En coordonnées cylindriques : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{1}{r}\\frac{\\partial}{\\partial r}(rF_r) + \\frac{1}{r}\\frac{\\partial F_\\theta}{\\partial \\theta} + \\frac{\\partial F_z}{\\partial z} \\]
- En coordonnées sphériques : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2F_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial \\theta}(\\sin\\theta F_\\theta) + \\frac{1}{r\\sin\\theta}\\frac{\\partial F_\\phi}{\\partial \\phi} \\]

### 1.2 Propriétés
- Linéarité : $\vec{\nabla}(af + bg) = a\vec{\nabla}f + b\vec{\nabla}g$
- Produit : $\vec{\nabla}(fg) = f\vec{\nabla}g + g\vec{\nabla}f$
- Direction : parallèle aux lignes de niveau
- Norme : taux de variation maximale

## 2. Divergence

### 2.1 Définition
- En coordonnées cartésiennes : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z} \\]
- En coordonnées cylindriques : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{1}{r}\\frac{\\partial}{\\partial r}(rF_r) + \\frac{1}{r}\\frac{\\partial F_\\theta}{\\partial \\theta} + \\frac{\\partial F_z}{\\partial z} \\]
- En coordonnées sphériques : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2F_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial \\theta}(\\sin\\theta F_\\theta) + \\frac{1}{r\\sin\\theta}\\frac{\\partial F_\\phi}{\\partial \\phi} \\]

### 2.2 Propriétés
- Linéarité : \\(\\vec{\\nabla}\\cdot(a\\vec{F} + b\\vec{G}) = a\\vec{\\nabla}\\cdot\\vec{F} + b\\vec{\\nabla}\\cdot\\vec{G}\\)
- Produit : \\(\\vec{\\nabla}\\cdot(f\\vec{F}) = f\\vec{\\nabla}\\cdot\\vec{F} + \\vec{F}\\cdot\\vec{\\nabla}f\\)
- Théorème de Gauss : \\[ \\iint_{\\partial V} \\vec{\\nabla}\\cdot\\vec{F}\\,dV = \\iint_{S} \\vec{F}\\cdot\\vec{n}\\,dS \\]

## 3. Rotationnel

### 3.1 Définition
- En coordonnées cartésiennes : \\[ \\vec{\\nabla}\\times\\vec{F} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix} \\]
- En coordonnées cylindriques : \\[ \\vec{\\nabla}\\times\\vec{F} = \\left(\\frac{1}{r}\\frac{\\partial F_z}{\\partial \\theta} - \\frac{\\partial F_\\theta}{\\partial z}\\right)\\vec{e_r} + \\left(\\frac{\\partial F_r}{\\partial z} - \\frac{\\partial F_z}{\\partial r}\\right)\\vec{e_\\theta} + \\frac{1}{r}\\left(\\frac{\\partial(rF_\\theta)}{\\partial r} - \\frac{\\partial F_r}{\\partial \\theta}\\right)\\vec{k} \\]

### 3.2 Propriétés
- Linéarité : \\(\\vec{\\nabla}\\times(a\\vec{F} + b\\vec{G}) = a\\vec{\\nabla}\\times\\vec{F} + b\\vec{\\nabla}\\times\\vec{G}\\)
- Produit : \\(\\vec{\\nabla}\\times(f\\vec{F}) = f\\vec{\\nabla}\\times\\vec{F} + \\vec{\\nabla}f\\times\\vec{F}\\)
- Théorème de Stokes : \\[ \\iint_S \\vec{\\nabla}\\times\\vec{F}\\cdot\\vec{n}\\,dS = \\oint_C \\vec{F}\\cdot d\\vec{r} \\]

## 4. Laplacien

### 4.1 Définition
- Scalaire : \\[ \\nabla^2f = \\vec{\\nabla}\\cdot(\\vec{\\nabla}f) = \\frac{\\partial^2f}{\\partial x^2} + \\frac{\\partial^2f}{\\partial y^2} + \\frac{\\partial^2f}{\\partial z^2} \\]
- Vectoriel : \\[ \\nabla^2\\vec{F} = \\vec{\\nabla}(\\vec{\\nabla}\\cdot\\vec{F}) - \\vec{\\nabla}\\times(\\vec{\\nabla}\\times\\vec{F}) \\]

### 4.2 Propriétés
- Linéarité : \\(\\nabla^2(af + bg) = a\\nabla^2f + b\\nabla^2g\\)
- Équation de Poisson : \\(\\nabla^2f = -\\rho\\)
- Équation de Laplace : \\(\\nabla^2f = 0\\)

## 5. Identités Vectorielles

### 5.1 Formules
- \\(\\vec{\\nabla}\\times(\\vec{\\nabla}f) = \\vec{0}\\)
- \\(\\vec{\\nabla}\\cdot(\\vec{\\nabla}\\times\\vec{F}) = 0\\)
- \\(\\vec{\\nabla}\\times(\\vec{\\nabla}\\times\\vec{F}) = \\vec{\\nabla}(\\vec{\\nabla}\\cdot\\vec{F}) - \\nabla^2\\vec{F}\\)
- \\(\\vec{\\nabla}\\cdot(f\\vec{G}\\times\\vec{H}) = \\vec{H}\\cdot(\\vec{\\nabla}f\\times\\vec{G}) + f\\vec{H}\\cdot(\\vec{\\nabla}\\times\\vec{G}) - \\vec{G}\\cdot(\\vec{\\nabla}f\\times\\vec{H}) - f\\vec{G}\\cdot(\\vec{\\nabla}\\times\\vec{H})\\)

### 5.2 Applications
- Champs conservatifs : \\(\\vec{F} = -\\vec{\\nabla}V\\)
- Potentiel vecteur : \\(\\vec{B} = \\vec{\\nabla}\\times\\vec{A}\\)
- Équations de Maxwell

- Équation de Laplace : \\(\\nabla^2f = 0\\)
- Divergence nulle : \\(\\vec{\\nabla}\\cdot(\\vec{\\nabla}\\times\\vec{F}) = 0\\)
- Gradient : \\(\\nabla f = \\left(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z}\\right)\\)
- Laplacien : \\[ \\nabla^2f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2} \\] 