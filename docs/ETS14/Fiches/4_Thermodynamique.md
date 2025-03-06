# Thermodynamique

## 1. Concepts Fondamentaux

### 1.1 Variables d'État
- Pression : \\( P \\) en Pascal (Pa)
- Volume : \\( V \\) en m³
- Température : \\( T \\) en Kelvin (K)
- Nombre de moles : \\( n \\)
- Équation d'état : \\[ PV = nRT \\]

### 1.2 Systèmes et États
- État d'équilibre : \\( \\sum F_i = 0 \\)
- Variables extensives : \\( V \\), \\( U \\), \\( H \\), \\( S \\)
- Variables intensives : \\( P \\), \\( T \\), \\( \\mu \\)
- Fonction d'état : \\( \\oint dF = 0 \\)

## 2. Premier Principe

### 2.1 Énoncé
- Conservation de l'énergie : \\[ \\Delta U = W + Q \\]
- Travail des forces de pression : \\[ W = -\\int P dV \\]
- Capacité calorifique : \\[ C = \\frac{dQ}{dT} \\]

### 2.2 Applications
- Transformation isochore : \\( W = 0 \\)
- Transformation isobare : \\[ W = -P\\Delta V \\]
- Transformation isotherme : \\[ W = -nRT\\ln\\left(\\frac{V_2}{V_1}\\right) \\]
- Transformation adiabatique : \\( Q = 0 \\)

## 3. Deuxième Principe

### 3.1 Énoncé
- Entropie : \\[ dS = \\frac{dQ_{rev}}{T} \\]
- Processus irréversible : \\[ dS > \\frac{dQ}{T} \\]
- Cycle de Carnot : \\[ \\eta = 1 - \\frac{T_f}{T_c} \\]

### 3.2 Applications
- Machine thermique : \\[ \\eta = \\frac{|W|}{Q_c} \\]
- Réfrigérateur : \\[ \\epsilon = \\frac{|Q_f|}{|W|} \\]
- Pompe à chaleur : \\[ \\epsilon = \\frac{|Q_c|}{|W|} \\]

## 4. Potentiels Thermodynamiques

### 4.1 Énergie Interne
- Différentielle : \\[ dU = TdS - PdV + \\mu dN \\]
- Gaz parfait : \\[ U = \\frac{f}{2}nRT \\]
- Capacité calorifique : \\[ C_v = \\left(\\frac{\\partial U}{\\partial T}\\right)_V \\]

### 4.2 Enthalpie
- Définition : \\[ H = U + PV \\]
- Différentielle : \\[ dH = TdS + VdP + \\mu dN \\]
- Capacité calorifique : \\[ C_p = \\left(\\frac{\\partial H}{\\partial T}\\right)_P \\]

### 4.3 Énergie Libre
- Helmholtz : \\[ F = U - TS \\]
- Gibbs : \\[ G = H - TS \\]
- Relations de Maxwell : \\[ \\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V \\]

## 5. Gaz Parfaits

### 5.1 Propriétés
- Équation d'état : \\[ PV = nRT \\]
- Énergie interne : \\[ U = \\frac{f}{2}nRT \\]
- Enthalpie : \\[ H = \\frac{f+2}{2}nRT \\]

### 5.2 Transformations
- Isotherme : \\[ PV = \\text{cste} \\]
- Adiabatique : \\[ PV^\\gamma = \\text{cste} \\]
- Isobare : \\[ V = \\frac{nRT}{P} \\]
- Isochore : \\[ P = \\frac{nRT}{V} \\]

## 6. Changements de Phase

### 6.1 Diagrammes
- Clapeyron : \\[ \\frac{dP}{dT} = \\frac{L}{T\\Delta V} \\]
- Point triple : \\( P_{tr}, T_{tr} \\)
- Point critique : \\( P_c, V_c, T_c \\)

### 6.2 Chaleurs Latentes
- Fusion : \\[ L_f = T(s_l - s_s) \\]
- Vaporisation : \\[ L_v = T(s_g - s_l) \\]
- Sublimation : \\[ L_s = T(s_g - s_s) \\]

## 7. Machines Thermiques

### 7.1 Cycles
- Carnot : \\[ \\eta = 1 - \\frac{T_f}{T_c} \\]
- Otto : \\[ \\eta = 1 - \\frac{1}{r^{\\gamma-1}} \\]
- Diesel : \\[ \\eta = 1 - \\frac{1}{r^{\\gamma-1}}\\left(\\frac{\\alpha^\\gamma-1}{\\gamma(\\alpha-1)}\\right) \\]

### 7.2 Applications
- Moteur à combustion
- Turbine à vapeur
- Pompe à chaleur

## 8. Théorie Cinétique

### 8.1 Équations
- Vitesse quadratique moyenne : \\[ \\bar{v^2} = \\frac{3RT}{M} \\]
- Pression cinétique : \\[ P = \\frac{1}{3}\\rho\\bar{v^2} \\]
- Distribution de Maxwell : \\[ f(v) = 4\\pi\\left(\\frac{m}{2\\pi kT}\\right)^{3/2}v^2e^{-\\frac{mv^2}{2kT}} \\]

### 8.2 Applications
- Libre parcours moyen
- Diffusion
- Viscosité

## Méthodes Expérimentales

### 1. Mesures
- Calorimétrie : \\[ Q = mc\\Delta T \\]
- Dilatation : \\[ \\Delta l = \\alpha l_0\\Delta T \\]
- Compressibilité : \\[ \\kappa = -\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_T \\]

### 2. Instruments
- Thermomètres
- Manomètres
- Calorimètres

### 3. Précautions
- Isolation thermique
- Équilibre thermique
- Étalonnage 