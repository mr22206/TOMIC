# Oscillateurs Harmoniques - Fiche de Synthèse

## 1. Définition et Concepts de Base

### 1.1 Oscillateur harmonique
- Système qui oscille autour d'une position d'équilibre
- Force de rappel proportionnelle à l'écart : F = -kx
- Équation différentielle : mẍ + kx = 0

### 1.2 Types d'oscillateurs
- Mécanique : masse-ressort, pendule
- Électrique : circuit RLC
- Acoustique : membrane vibrante
- Biologique : battements cardiaques

## 2. Oscillateur Libre Sans Amortissement

### 2.1 Équation caractéristique
- mẍ + kx = 0
- ω₀ = √(k/m) : pulsation propre
- Solution : x(t) = A cos(ω₀t + φ)
- Période : T = 2π/ω₀
- Énergie totale conservée : E = ½kx² + ½mẋ²

### 2.2 Paramètres importants
- Amplitude A
- Phase φ
- Fréquence f = 1/T
- Pulsation ω₀ = 2πf

## 3. Oscillateur Amorti

### 3.1 Équation différentielle
- mẍ + hẋ + kx = 0
- h : coefficient d'amortissement
- λ = h/(2m) : facteur d'amortissement

### 3.2 Régimes possibles
1. **Régime pseudo-périodique** (λ < ω₀)
   - x(t) = Ae^(-λt)cos(ω't + φ)
   - ω' = √(ω₀² - λ²)

2. **Régime critique** (λ = ω₀)
   - x(t) = (At + B)e^(-λt)

3. **Régime apériodique** (λ > ω₀)
   - x(t) = Ae^(r₁t) + Be^(r₂t)
   - r₁,r₂ : racines réelles négatives

## 4. Oscillateur Forcé

### 4.1 Équation avec force externe
- mẍ + hẋ + kx = F₀cos(ωt)
- ω : pulsation d'excitation
- F₀ : amplitude de la force

### 4.2 Solution en régime permanent
- x(t) = A(ω)cos(ωt + φ(ω))
- A(ω) = F₀/√((k-mω²)² + hω²)
- φ(ω) = -arctan(hω/(k-mω²))

### 4.3 Résonance
- Amplitude maximale quand ω ≈ ω₀
- Déphasage de -π/2 à la résonance
- Largeur de résonance : Δω = h/m

## 5. Applications Pratiques

### 5.1 Circuit RLC
- L : inductance (analogie avec m)
- R : résistance (analogie avec h)
- 1/C : inverse capacité (analogie avec k)
- Équation : Lï + Ri + q/C = e(t)

### 5.2 Pendule simple
- θ̈ + (g/l)θ = 0 (petites oscillations)
- T = 2π√(l/g)
- Analogie avec masse-ressort : k/m ↔ g/l

## Formules Essentielles
1. Période propre : T = 2π√(m/k)
2. Décrément logarithmique : δ = ln(x(t)/x(t+T))
3. Facteur de qualité : Q = ω₀/(2λ)
4. Puissance moyenne : P = ½F₀ωAsin(φ)

## Méthodes de Résolution
1. Identifier le type d'oscillateur
2. Écrire l'équation différentielle
3. Déterminer les conditions initiales
4. Résoudre selon le régime
5. Vérifier la cohérence physique 