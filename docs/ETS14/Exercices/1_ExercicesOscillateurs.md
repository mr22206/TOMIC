# Exercices - Oscillateurs Harmoniques

## 1. Oscillateur Libre Sans Amortissement

### Exercice 1.1 : Masse-Ressort
Un système masse-ressort a une masse m = 200g et une raideur k = 20 N/m.
1. Calculer la période propre
2. Déterminer la solution si x(0) = 2cm et ẋ(0) = 0

**Solution** :
1. ω₀ = √(k/m) = √(20/0.2) = 10 rad/s
   T = 2π/ω₀ = 0.628s
2. x(t) = 0.02 cos(10t)

**Programme calculatrice** :
```python
def oscillateur_libre(t, m=0.2, k=20, x0=0.02, v0=0):
    w0 = (k/m)**0.5
    return x0*cos(w0*t)
```

## 2. Oscillateur Amorti

### Exercice 2.1 : Circuit RLC
Circuit RLC avec L = 1H, R = 4Ω, C = 0.1F
1. Identifier le régime
2. Calculer les solutions
3. Tracer l'évolution temporelle

**Solution** :
1. λ = R/(2L) = 2
   ω₀ = 1/√(LC) = 3.16
   λ < ω₀ → Régime pseudo-périodique

2. ω' = √(ω₀² - λ²) = 2.45
   i(t) = Ae^(-2t)cos(2.45t + φ)

**Programme TI-83** :
```basic
:Input "T=",T
:Input "A=",A
:A*e^(-2*T)*cos(2.45*T)→Y
:Disp "I(T)=",Y
```

## 3. Oscillateur Forcé

### Exercice 3.1 : Résonance
Système masse-ressort forcé avec m = 100g, k = 10N/m, h = 0.4Ns/m
1. Calculer la pulsation de résonance
2. Déterminer l'amplitude maximale pour F₀ = 1N
3. Tracer la courbe de résonance

**Solution** :
1. ω₀ = √(k/m) = 10 rad/s
   ωr = √(ω₀² - 2λ²) = 9.8 rad/s

2. Amax = F₀/(hωr) = 2.55 cm

**Programme Numworks** :
```python
def amplitude(w, m=0.1, k=10, h=0.4, F0=1):
    return F0/((k-m*w**2)**2 + (h*w)**2)**0.5

def phase(w, m=0.1, k=10, h=0.4):
    return -atan2(h*w, k-m*w**2)
```

## 4. Applications Pratiques

### Exercice 4.1 : Pendule Simple
Un pendule de longueur l = 1m oscille avec de petites amplitudes.
1. Calculer la période
2. Déterminer l'influence d'une variation de 1% de l
3. Étudier l'effet de l'amplitude

**Solution** :
1. T = 2π√(l/g) = 2.01s

2. ΔT/T = ½(Δl/l) = 0.5%

**Programme calculatrice** :
```basic
:Input "L=",L
:Input "THETA0=",T
:2*π*√(L/9.81)→P
:Disp "PERIODE=",P
:Disp "CORRECTION=",(1+T²/16)
```

## 5. Exercices de Synthèse

### Exercice 5.1
Un système présente des oscillations d'équation :
x(t) = 3e^(-2t)cos(4t)
1. Identifier le type d'oscillateur
2. Déterminer les paramètres physiques
3. Calculer l'énergie mécanique à t=0

**Méthode** :
1. Régime pseudo-périodique car e^(-at)cos(ωt)
2. λ = 2 s⁻¹, ω = 4 rad/s
   → ω₀ = √(ω² + λ²) = 4.47 rad/s
3. E₀ = ½kA² = ½mω₀²A² = 30.1 J

## Conseils pour l'Examen
1. Toujours faire un schéma
2. Identifier le régime avant de résoudre
3. Vérifier les unités
4. Utiliser les analogies entre systèmes 