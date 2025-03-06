# Applications Physiques des Oscillateurs

## 1. Circuit RLC

### 1.1 Équation
- \\[ L\\frac{d^2i}{dt^2} + R\\frac{di}{dt} + \\frac{1}{C}\\int i \\,dt = e(t) \\]
- \\[ L\\frac{d^2i}{dt^2} + R\\frac{di}{dt} + \\frac{q}{C} = e(t) \\]
- Analogies :
  * \\(L \\leftrightarrow m\\) (inertie)
  * \\(R \\leftrightarrow h\\) (amortissement)
  * \\(\\frac{1}{C} \\leftrightarrow k\\) (raideur)

### 1.2 Grandeurs Caractéristiques
- Pulsation propre : \\(\\omega_{0} = \\frac{1}{\\sqrt{LC}}\\)
- Facteur d'amortissement : \\(\\lambda = \\frac{R}{2L}\\)
- Pseudo-pulsation : \\(\\omega' = \\sqrt{\\omega_{0}^{2} - \\lambda^{2}}\\)
- Facteur de qualité : \\(Q = \\frac{L\\omega_0}{R}\\)

### 1.3 Applications
- Filtrage de signaux
- Résonance en tension/courant
- Sélectivité des circuits radio

## 2. Pendule Simple

### 2.1 Équation (petits angles)
- \\[ \\frac{d^2\\theta}{dt^2} + \\frac{g}{l}\\theta = 0 \\]
- Période : \\[ T = 2\\pi\\sqrt{\\frac{l}{g}} \\]
- Énergie : \\[ E = \\frac{1}{2}ml^2\\left(\\frac{d\\theta}{dt}\\right)^2 + mgl(1-\\cos \\theta) \\]

### 2.2 Corrections Non Linéaires
- \\[ T = T_0\\left(1 + \\frac{\\theta_0^2}{16} + \\cdots\\right) \\]
- Effet de l'amplitude
- Pendule physique : \\[ T = 2\\pi\\sqrt{\\frac{J}{mgl}} \\]

### 2.3 Applications
- Horloges
- Sismographes
- Mesure de \\(g\\)

## 3. Système Masse-Ressort

### 3.1 Vertical
- \\[ m\\frac{d^2x}{dt^2} + kx = -mg \\]
- Position d'équilibre : \\(x_0 = -\\frac{mg}{k}\\)
- Oscillations autour de \\(x_0\\)
- Période indépendante de \\(m\\)

### 3.2 Horizontal avec Frottement
- \\[ m\\frac{d^2x}{dt^2} + \\mu\\frac{dx}{dt} + kx = 0 \\]
- Amortissement : \\(h = \\mu\\)
- Cas critique : \\(\\mu_c = 2\\sqrt{km}\\)

### 3.3 Applications
- Suspensions automobiles
- Sismographes
- Accéléromètres

## 4. Oscillations Couplées

### 4.1 Deux Masses-Ressorts
- \\[ m_1\\frac{d^2x_1}{dt^2} + k_1x_1 + k_{12}(x_1-x_2) = 0 \\]
- \\[ m_2\\frac{d^2x_2}{dt^2} + k_2x_2 + k_{12}(x_2-x_1) = 0 \\]
- Modes propres :
  * Mode symétrique
  * Mode antisymétrique

### 4.2 Battements
- Fréquence rapide : \\(\\frac{\\omega_1 + \\omega_2}{2}\\)
- Fréquence lente : \\(\\frac{|\\omega_1 - \\omega_2|}{2}\\)
- Transfert d'énergie périodique

### 4.3 Applications
- Instruments de musique
- Absorption vibratoire
- Filtres mécaniques

## 5. Oscillations Forcées

### 5.1 Résonance Mécanique
- Amplitude : \\[ A(\\omega) = \\frac{F_0}{\\sqrt{(k-m\\omega^2)^2 + h^2\\omega^2}} \\]
- Phase : \\[ \\phi(\\omega) = -\\arctan\\left(\\frac{h\\omega}{k-m\\omega^2}\\right) \\]
- Puissance moyenne : \\[ P = \\frac{1}{2}F_0\\omega A \\sin(\\phi) \\]

### 5.2 Résonance Électrique
- Impédance : \\[ Z = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\]
- Facteur de puissance : \\(\\cos(\\phi)\\)
- Puissance active : \\(P = RI^2\\)

### 5.3 Applications Pratiques
- Isolation vibratoire
- Absorption acoustique
- Accord d'instruments

## 6. Cas Particuliers Importants

### 6.1 Oscillations Paramétriques
- Balançoire : \\[ \\frac{d^2\\theta}{dt^2} + \\frac{g}{l(t)}\\theta = 0 \\]
- Pendule à longueur variable
- Équation de Mathieu : \\[ \\frac{d^2x}{dt^2} + (a - 2q\\cos(2t))x = 0 \\]

### 6.2 Auto-oscillations
- Corde frottée : \\[ m\\frac{d^2x}{dt^2} + h(v)\\frac{dx}{dt} + kx = 0 \\]
- Anche d'instrument
- Flottement aérodynamique

### 6.3 Oscillations Non Linéaires
- Pendule simple (grands angles) : \\[ \\frac{d^2\\theta}{dt^2} + \\frac{g}{l}\\sin(\\theta) = 0 \\]
- Oscillateur de Van der Pol : \\[ \\frac{d^2x}{dt^2} - \\mu(1-x^2)\\frac{dx}{dt} + x = 0 \\]
- Cycle limite

## Méthodes Expérimentales

### 1. Mesures
- Stroboscopie : \\(f_{\\text{strob}} = f_{\\text{osc}}\\)
- Capteurs de position : \\(x(t)\\)
- Analyse spectrale : \\[ X(\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-i\\omega t}\\,dt \\]

### 2. Caractérisation
- Décrément logarithmique : \\[ \\delta = \\frac{1}{n}\\ln\\left(\\frac{A_0}{A_n}\\right) \\]
- Diagramme de Bode : \\[ G_{\\text{dB}} = 20\\log_{10}|H(\\omega)| \\]
- Portraits de phase : \\(\\frac{dx}{dt} = f(x)\\)

### 3. Précautions
- Conditions initiales précises
- Minimiser perturbations
- Étalonnage des capteurs 