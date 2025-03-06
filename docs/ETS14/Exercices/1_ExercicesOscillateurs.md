# Exercices sur les Oscillateurs

## 1. Oscillateur Harmonique Simple

### Exercice 1.1
Un ressort de constante de raideur $k = 100$ N/m supporte une masse $m = 0.5$ kg.
1. Calculer la période d'oscillation : $$T = 2\pi\sqrt{\frac{m}{k}}$$
2. Quelle est la fréquence propre ? $$f_0 = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

### Exercice 1.2
Un pendule simple de longueur $l = 1$ m oscille avec une amplitude $\theta_0 = 5°$.
1. Calculer la période pour les petites oscillations : $$T = 2\pi\sqrt{\frac{l}{g}}$$
2. Estimer l'erreur due à l'amplitude finie : $$T = T_0(1 + \frac{\theta_0^2}{16} + ...)$$

## 2. Oscillateur Amorti

### Exercice 2.1
Un oscillateur de masse $m = 1$ kg et de raideur $k = 400$ N/m est soumis à un amortissement $h = 4$ N⋅s/m.
1. Calculer le facteur d'amortissement : $$\lambda = \frac{h}{2m}$$
2. Déterminer le régime d'oscillation (sous-amorti, critique, sur-amorti)
3. Calculer la pseudo-période si applicable : $$T' = \frac{2\pi}{\sqrt{\omega_0^2 - \lambda^2}}$$

### Exercice 2.2
Un circuit RLC série a les caractéristiques suivantes : $L = 0.1$ H, $C = 10$ μF, $R = 100$ Ω.
1. Calculer la pulsation propre : $$\omega_0 = \frac{1}{\sqrt{LC}}$$
2. Calculer le facteur de qualité : $$Q = \frac{L\omega_0}{R}$$
3. Déterminer le régime d'oscillation

## 3. Oscillateur Forcé

### Exercice 3.1
Un oscillateur de masse $m = 0.2$ kg et de raideur $k = 80$ N/m est soumis à une force périodique $F(t) = F_0\cos(\omega t)$ avec $F_0 = 2$ N.
1. Calculer l'amplitude en régime permanent : $$A(\omega) = \frac{F_0}{\sqrt{(k-m\omega^2)^2 + h^2\omega^2}}$$
2. Déterminer la pulsation de résonance : $$\omega_r = \sqrt{\omega_0^2 - 2\lambda^2}$$
3. Calculer l'amplitude maximale

### Exercice 3.2
Un circuit RLC parallèle est alimenté par une tension sinusoïdale.
1. Calculer l'impédance : $$Z = \sqrt{R^2 + (L\omega - \frac{1}{C\omega})^2}$$
2. Déterminer la fréquence de résonance
3. Calculer la puissance moyenne : $$P = \frac{1}{2}UI\cos(\phi)$$

## 4. Applications

### Exercice 4.1
Une suspension automobile peut être modélisée par un système masse-ressort-amortisseur.
Données : $m = 400$ kg, $k = 16000$ N/m, $h = 800$ N⋅s/m
1. La suspension est-elle sur ou sous-amortie ?
2. Calculer la fréquence propre
3. Estimer le temps de retour à l'équilibre

### Exercice 4.2
Un sismographe est constitué d'un pendule amorti.
1. Quelle doit être sa période propre ?
2. Quel amortissement choisir ?
3. Comment calculer l'amplitude du séisme ?

## 5. Oscillations Couplées

### Exercice 5.1
Deux pendules identiques de masse $m$ et de longueur $l$ sont couplés par un ressort de raideur $k$.
1. Écrire les équations du mouvement : $$m\ddot{x_1} + kx_1 + k(x_1-x_2) = 0$$ $$m\ddot{x_2} + kx_2 + k(x_2-x_1) = 0$$
2. Trouver les modes propres
3. Calculer les fréquences propres

### Exercice 5.2
Un système de deux masses reliées par trois ressorts présente des battements.
1. Calculer la fréquence rapide : $$f_r = \frac{f_1 + f_2}{2}$$
2. Calculer la fréquence lente : $$f_l = \frac{|f_1 - f_2|}{2}$$
3. Décrire le transfert d'énergie 