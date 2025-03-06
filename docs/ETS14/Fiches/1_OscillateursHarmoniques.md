# Oscillateurs Harmoniques - Fiche de Synthèse

## 1. Définition et Concepts de Base

### 1.1 Oscillateur harmonique
- Système qui oscille autour d'une position d'équilibre
- Force de rappel proportionnelle à l'écart : \( F = -kx \)
- Équation différentielle : \( m\ddot{x} + kx = 0 \)

### 1.2 Types d'oscillateurs
- Mécanique : masse-ressort, pendule
- Électrique : circuit RLC
- Acoustique : membrane vibrante
- Biologique : battements cardiaques

## 2. Oscillateur Libre Sans Amortissement

### 2.1 Équation caractéristique
- \( m\ddot{x} + kx = 0 \)
- \( \omega_0 = \sqrt{\frac{k}{m}} \) : pulsation propre
- Solution : \( x(t) = A \cos(\omega_0t + \phi) \)
- Période : \( T = \frac{2\pi}{\omega_0} \)
- Énergie totale conservée : \( E = \frac{1}{2}kx^{2} + \frac{1}{2}m\dot{x}^{2} \)

### 2.2 Paramètres importants
- Amplitude \( A \)
- Phase \( \phi \)
- Fréquence \( f = \frac{1}{T} \)
- Pulsation \( \omega_0 = 2\pi f \)

## 3. Oscillateur Amorti

### 3.1 Équation différentielle
- \( m\ddot{x} + h\dot{x} + kx = 0 \)
- \( h \) : coefficient d'amortissement
- \( \lambda = \frac{h}{2m} \) : facteur d'amortissement

### 3.2 Régimes possibles
1. **Régime pseudo-périodique** (\( \lambda < \omega_0 \))
   - \( x(t) = Ae^{-\lambda t}\cos(\omega' t + \phi) \)
   - \( \omega' = \sqrt{\omega_0^{2} - \lambda^{2}} \)

2. **Régime critique** (\( \lambda = \omega_0 \))
   - \( x(t) = (At + B)e^{-\lambda t} \)

3. **Régime apériodique** (\( \lambda > \omega_0 \))
   - \( x(t) = Ae^{r_1t} + Be^{r_2t} \)
   - \( r_1,r_2 \) : racines réelles négatives

## 4. Oscillateur Forcé

### 4.1 Équation avec force externe
- \( m\ddot{x} + h\dot{x} + kx = F_0\cos(\omega t) \)
- \( \omega \) : pulsation d'excitation
- \( F_0 \) : amplitude de la force

### 4.2 Solution en régime permanent
- \( x(t) = A(\omega)\cos(\omega t + \phi(\omega)) \)
- \[ A(\omega) = \frac{F_0}{\sqrt{(k-m\omega^2)^2 + h^2\omega^2}} \]
- \[ \phi(\omega) = -\arctan\left(\frac{h\omega}{k-m\omega^2}\right) \]

### 4.3 Résonance
- Amplitude maximale quand \( \omega \approx \omega_0 \)
- Déphasage de \( -\frac{\pi}{2} \) à la résonance
- Largeur de résonance : \( \Delta\omega = \frac{h}{m} \)

## 5. Applications Pratiques

### 5.1 Circuit RLC
- \( L \) : inductance (analogie avec \( m \))
- \( R \) : résistance (analogie avec \( h \))
- \( \frac{1}{C} \) : inverse capacité (analogie avec \( k \))
- Équation : \( L\ddot{i} + R\dot{i} + \frac{q}{C} = e(t) \)

### 5.2 Pendule simple
- \( \ddot{\theta} + \frac{g}{l}\theta = 0 \) (petites oscillations)
- \( T = 2\pi\sqrt{\frac{l}{g}} \)
- Analogie avec masse-ressort : \( \frac{k}{m} \leftrightarrow \frac{g}{l} \)

## Formules Essentielles
1. Période propre : \( T = 2\pi\sqrt{\frac{m}{k}} \)
2. Décrément logarithmique : \( \delta = \ln\left(\frac{x(t)}{x(t+T)}\right) \)
3. Facteur de qualité : \( Q = \frac{\omega_0}{2\lambda} \)
4. Puissance moyenne : \( P = \frac{1}{2}F_0\omega A\sin(\phi) \)

## Méthodes de Résolution
1. Identifier le type d'oscillateur
2. Écrire l'équation différentielle
3. Déterminer les conditions initiales
4. Résoudre selon le régime
5. Vérifier la cohérence physique 