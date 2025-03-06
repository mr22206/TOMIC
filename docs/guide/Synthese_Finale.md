# Synthèse Finale

## 1. Mathématiques

### 1.1 Fonctions de Plusieurs Variables
- Domaine de définition : \\(D \\subset \\mathbb{R}^n\\)
- Limites et continuité : \\(\\lim_{(x,y)\\to(0,0)} f(x,y)\\)
- Dérivées partielles : \\[ \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\]
- Gradient : \\[ \\vec{\\nabla}f = \\frac{\\partial f}{\\partial x}\\vec{i} + \\frac{\\partial f}{\\partial y}\\vec{j} \\]

### 1.2 Intégration Multiple
- Double intégrale : \\[ \\iint_D f(x,y)\\,dx\\,dy \\]
- Triple intégrale : \\[ \\iiint_E f(x,y,z)\\,dx\\,dy\\,dz \\]
- Changements de variables : \\(J = \\det\\left(\\frac{\\partial(x,y)}{\\partial(u,v)}\\right)\\)

## 2. Physique

### 2.1 Oscillateurs
- Équation différentielle : \\[ m\\ddot{x} + h\\dot{x} + kx = F(t) \\]
- Pulsation propre : \\(\\omega_0 = \\sqrt{\\frac{k}{m}}\\)
- Facteur d'amortissement : \\(\\lambda = \\frac{h}{2m}\\)
- Résonance : \\[ A(\\omega) = \\frac{F_0}{\\sqrt{(k-m\\omega^2)^2 + h^2\\omega^2}} \\]

### 2.2 Ondes
- Équation de propagation : \\[ \\frac{\\partial^2y}{\\partial t^2} = c^2\\frac{\\partial^2y}{\\partial x^2} \\]
- Onde progressive : \\[ y(x,t) = A\\cos(\\omega t - kx + \\phi) \\]
- Vitesse de phase : \\(v = \\frac{\\omega}{k}\\)
- Énergie : \\[ E = \\frac{1}{2}\\rho\\omega^{2}A^{2} \\]

### 2.3 Thermodynamique
- Premier principe : \\[ \\Delta U = W + Q \\]
- Deuxième principe : \\[ dS \\geq \\frac{dQ}{T} \\]
- Gaz parfait : \\[ PV = nRT \\]
- Cycle de Carnot : \\[ \\eta = 1 - \\frac{T_f}{T_c} \\]

## 3. Opérateurs Vectoriels

### 3.1 Définitions
- Gradient : \\[ \\vec{\\nabla}f = \\frac{\\partial f}{\\partial x}\\vec{i} + \\frac{\\partial f}{\\partial y}\\vec{j} + \\frac{\\partial f}{\\partial z}\\vec{k} \\]
- Divergence : \\[ \\vec{\\nabla}\\cdot\\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z} \\]
- Rotationnel : \\[ \\vec{\\nabla}\\times\\vec{F} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ F_x & F_y & F_z \\end{vmatrix} \\]
- Laplacien : \\[ \\nabla^2f = \\frac{\\partial^2f}{\\partial x^2} + \\frac{\\partial^2f}{\\partial y^2} + \\frac{\\partial^2f}{\\partial z^2} \\]

### 3.2 Théorèmes
- Gauss : \\[ \\iiint_V \\vec{\\nabla}\\cdot\\vec{F}\\,dV = \\iint_S \\vec{F}\\cdot\\vec{n}\\,dS \\]
- Stokes : \\[ \\iint_S \\vec{\\nabla}\\times\\vec{F}\\cdot\\vec{n}\\,dS = \\oint_C \\vec{F}\\cdot d\\vec{r} \\]
- Green : \\[ \\oint_C \\vec{F}\\cdot d\\vec{r} = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)\\,dx\\,dy \\]

## 4. Applications

### 4.1 Mécanique
- Centre de masse : \\[ \\vec{G} = \\frac{1}{M}\\iiint_E \\rho\\vec{r}\\,dV \\]
- Moment d'inertie : \\[ I = \\iiint_E \\rho r^2\\,dV \\]
- Énergie cinétique : \\[ E_{c} = \\frac{1}{2}mv^{2} \\]

### 4.2 Électromagnétisme
- Équations de Maxwell :
  \\[ \\vec{\\nabla}\\cdot\\vec{E} = \\frac{\\rho}{\\epsilon_0} \\]
  \\[ \\vec{\\nabla}\\cdot\\vec{B} = 0 \\]
  \\[ \\vec{\\nabla}\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t} \\]
  \\[ \\vec{\\nabla}\\times\\vec{B} = \\mu_0\\vec{j} + \\mu_0\\epsilon_0\\frac{\\partial\\vec{E}}{\\partial t} \\]

### 4.3 Fluides
- Équation de continuité : \\[ \\frac{\\partial \\rho}{\\partial t} + \\vec{\\nabla}\\cdot(\\rho\\vec{v}) = 0 \\]
- Navier-Stokes : \\[ \\rho\\frac{D\\vec{v}}{Dt} = -\\vec{\\nabla}p + \\mu\\nabla^2\\vec{v} + \\rho\\vec{g} \\]

## Stratégie d'Examen

### Gestion du Temps
- 5min : lecture complète
- 10min : stratégie globale
- 1h30 : résolution
- 15min : vérification

### Points d'Attention
1. Unités physiques
2. Schémas clairs
3. Justifications
4. Vérifications numériques

### Calculatrice
- Stocker formules fréquentes
- Programmes courts prêts
- Vérifier batteries

## Erreurs à Éviter
1. Oublier conditions initiales
2. Confondre régimes oscillateurs
3. Mal poser bornes intégration
4. Négliger signes dérivées

## Dernière Révision
1. Relire formules importantes
2. Revoir exercices types
3. Vérifier formulaire
4. Préparer calculatrice 