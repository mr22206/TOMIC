# Ondes Mécaniques

## 1. Définitions Fondamentales

### 1.1 Onde Progressive
- Équation générale : \\[ y(x,t) = A\\cos(\\omega t - kx + \\phi) \\]
- Nombre d'onde : \\( k = \\frac{2\\pi}{\\lambda} \\)
- Pulsation : \\( \\omega = 2\\pi f \\)
- Vitesse de phase : \\( v = \\frac{\\omega}{k} = \\lambda f \\)

### 1.2 Types d'Ondes
- Longitudinales : vibration // propagation
- Transversales : vibration ⊥ propagation
- Polarisation : \\[ \\vec{E} = E_0\\cos(\\omega t - kz)\\vec{x} \\]

## 2. Équation de Propagation

### 2.1 Forme Générale
- \\[ \\frac{\\partial^2y}{\\partial t^2} = c^2\\frac{\\partial^2y}{\\partial x^2} \\]
- Solutions : \\[ y(x,t) = f(x - ct) + g(x + ct) \\]
- Vitesse de propagation : \\( c = \\sqrt{\\frac{\\text{force de rappel}}{\\text{inertie}}} \\)

### 2.2 Cas Particuliers
- Corde vibrante : \\( c = \\sqrt{\\frac{T}{\\mu}} \\)
- Onde sonore : \\( c = \\sqrt{\\frac{\\gamma P}{\\rho}} \\)
- Onde dans un solide : \\( c = \\sqrt{\\frac{E}{\\rho}} \\)

## 3. Énergie et Intensité

### 3.1 Énergie Mécanique
- Densité d'énergie : \\[ \\mathcal{E} = \\frac{1}{2}\\rho\\omega^{2}A^{2} \\]
- Flux d'énergie : \\[ \\vec{P} = \\mathcal{E}c\\vec{n} \\]
- Intensité : \\[ I = \\frac{P}{S} = \\frac{1}{2}\\rho c\\omega^{2}A^{2} \\]

### 3.2 Atténuation
- Décroissance exponentielle : \\[ A(x) = A_0e^{-\\alpha x} \\]
- Coefficient d'absorption : \\( \\alpha = \\frac{1}{x}\\ln\\left(\\frac{A_0}{A}\\right) \\)
- Intensité : \\[ I(x) = I_0e^{-2\\alpha x} \\]

## 4. Ondes Stationnaires

### 4.1 Formation
- Superposition : \\[ y(x,t) = 2A\\cos(kx)\\cos(\\omega t) \\]
- Nœuds : \\( x_n = n\\frac{\\lambda}{2} \\)
- Ventres : \\( x_v = (2n+1)\\frac{\\lambda}{4} \\)

### 4.2 Modes Propres
- Fréquences propres : \\[ f_n = n\\frac{c}{2L} \\]
- Longueurs d'onde : \\[ \\lambda_n = \\frac{2L}{n} \\]
- Harmoniques : \\( f_n = nf_1 \\)

## 5. Réflexion et Transmission

### 5.1 Coefficients
- Réflexion : \\[ r = \\frac{Z_2 - Z_1}{Z_2 + Z_1} \\]
- Transmission : \\[ t = \\frac{2Z_2}{Z_2 + Z_1} \\]
- Impédance : \\( Z = \\rho c \\)

### 5.2 Cas Limites
- Extrémité fixe : \\( r = -1 \\)
- Extrémité libre : \\( r = 1 \\)
- Adaptation d'impédance : \\( Z_1 = Z_2 \\)

## 6. Interférences

### 6.1 Superposition
- Amplitude résultante : \\[ A_R^2 = A_1^2 + A_2^2 + 2A_1A_2\\cos(\\Delta\\phi) \\]
- Déphasage : \\[ \\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta r \\]
- Conditions :
  * Constructive : \\( \\Delta r = n\\lambda \\)
  * Destructive : \\( \\Delta r = (2n+1)\\frac{\\lambda}{2} \\)

### 6.2 Applications
- Interféromètres
- Ondes stationnaires
- Battements : \\[ y(t) = 2A\\cos(\\Delta\\omega t/2)\\cos(\\bar{\\omega}t) \\]

## 7. Diffraction

### 7.1 Principe de Huygens
- Amplitude : \\[ A(\\theta) = A_0\\frac{\\sin(\\alpha)}{\\alpha} \\]
- \\( \\alpha = \\frac{\\pi a}{\\lambda}\\sin(\\theta) \\)
- Critère de Rayleigh : \\( \\sin(\\theta) = 1.22\\frac{\\lambda}{D} \\)

### 7.2 Applications
- Résolution optique
- Acoustique architecturale
- Antennes

## 8. Effet Doppler

### 8.1 Formules
- Source en mouvement : \\[ f' = f\\frac{c}{c - v_s} \\]
- Observateur en mouvement : \\[ f' = f\\frac{c + v_o}{c} \\]
- Cas général : \\[ f' = f\\frac{c + v_o}{c - v_s} \\]

### 8.2 Applications
- Radar
- Échographie
- Astrophysique

## 9. Ondes de Choc

### 9.1 Conditions
- Nombre de Mach : \\( M = \\frac{v}{c} \\)
- Angle de Mach : \\[ \\sin(\\alpha) = \\frac{1}{M} \\]
- Cône de Mach

### 9.2 Applications
- Aérodynamique supersonique
- Bang sonique
- Ondes de blast

## Méthodes Expérimentales

### 1. Mesures
- Stroboscopie
- Capteurs piézoélectriques
- Analyse spectrale : \\[ F(\\omega) = \\int_{-\\infty}^{\\infty} f(t)e^{-i\\omega t}dt \\]

### 2. Visualisation
- Figures de Chladni
- Interférométrie
- Schlieren

### 3. Précautions
- Conditions aux limites
- Non-linéarités
- Couplages parasites 