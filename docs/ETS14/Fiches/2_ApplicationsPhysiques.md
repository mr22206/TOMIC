# Applications Physiques des Oscillateurs

## 1. Circuit RLC

### 1.1 Équation
- Lï + Ri + (1/C)∫i dt = e(t)
- Lï + Ri + q/C = e(t)
- Analogies :
  * L ↔ m (inertie)
  * R ↔ h (amortissement)
  * 1/C ↔ k (raideur)

### 1.2 Grandeurs Caractéristiques
- Pulsation propre : ω₀ = 1/√(LC)
- Facteur d'amortissement : λ = R/(2L)
- Pseudo-pulsation : ω' = √(ω₀² - λ²)
- Facteur de qualité : Q = Lω₀/R

### 1.3 Applications
- Filtrage de signaux
- Résonance en tension/courant
- Sélectivité des circuits radio

## 2. Pendule Simple

### 2.1 Équation (petits angles)
- θ̈ + (g/l)θ = 0
- Période : T = 2π√(l/g)
- Énergie : E = ½ml²θ̇² + mgl(1-cos θ)

### 2.2 Corrections Non Linéaires
- T = T₀(1 + θ₀²/16 + ...)
- Effet de l'amplitude
- Pendule physique : T = 2π√(J/mgl)

### 2.3 Applications
- Horloges
- Sismographes
- Mesure de g

## 3. Système Masse-Ressort

### 3.1 Vertical
- mẍ + kx = -mg
- Position d'équilibre : x₀ = -mg/k
- Oscillations autour de x₀
- Période indépendante de m

### 3.2 Horizontal avec Frottement
- mẍ + μẋ + kx = 0
- Amortissement : h = μ
- Cas critique : μc = 2√(km)

### 3.3 Applications
- Suspensions automobiles
- Sismographes
- Accéléromètres

## 4. Oscillations Couplées

### 4.1 Deux Masses-Ressorts
- m₁ẍ₁ + k₁x₁ + k₁₂(x₁-x₂) = 0
- m₂ẍ₂ + k₂x₂ + k₁₂(x₂-x₁) = 0
- Modes propres :
  * Mode symétrique
  * Mode antisymétrique

### 4.2 Battements
- Fréquence rapide : (ω₁ + ω₂)/2
- Fréquence lente : |ω₁ - ω₂|/2
- Transfert d'énergie périodique

### 4.3 Applications
- Instruments de musique
- Absorption vibratoire
- Filtres mécaniques

## 5. Oscillations Forcées

### 5.1 Résonance Mécanique
- Amplitude : A(ω) = F₀/√((k-mω²)² + hω²)
- Phase : φ(ω) = -arctan(hω/(k-mω²))
- Puissance moyenne : P = ½F₀ωA sin(φ)

### 5.2 Résonance Électrique
- Impédance : Z = √(R² + (Lω - 1/Cω)²)
- Facteur de puissance : cos(φ)
- Puissance active : P = RI²

### 5.3 Applications Pratiques
- Isolation vibratoire
- Absorption acoustique
- Accord d'instruments

## 6. Cas Particuliers Importants

### 6.1 Oscillations Paramétriques
- Balançoire
- Pendule à longueur variable
- Équation de Mathieu

### 6.2 Auto-oscillations
- Corde frottée
- Anche d'instrument
- Flottement aérodynamique

### 6.3 Oscillations Non Linéaires
- Pendule simple (grands angles)
- Oscillateur de Van der Pol
- Cycle limite

## Méthodes Expérimentales

### 1. Mesures
- Stroboscopie
- Capteurs de position
- Analyse spectrale

### 2. Caractérisation
- Décrément logarithmique
- Diagramme de Bode
- Portraits de phase

### 3. Précautions
- Conditions initiales précises
- Minimiser perturbations
- Étalonnage des capteurs 