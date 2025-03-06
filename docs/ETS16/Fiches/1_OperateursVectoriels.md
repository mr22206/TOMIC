# Opérateurs Vectoriels - Fiche de Synthèse

## 1. Champs Vectoriels et Scalaires

### 1.1 Définitions
- Champ scalaire : f(x,y,z) → ℝ
- Champ vectoriel : F(x,y,z) → ℝ³
- Notation : F = (P,Q,R) ou F = Pi + Qj + Rk

### 1.2 Exemples physiques
- Scalaires : température, pression, potentiel
- Vectoriels : vitesse, force, champ électrique

## 2. Opérateurs Différentiels

### 2.1 Gradient (∇f ou grad f)
- Pour un champ scalaire f
- ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)
- Direction de plus forte variation
- Perpendiculaire aux surfaces de niveau

### 2.2 Divergence (∇·F ou div F)
- Pour un champ vectoriel F
- div F = ∂P/∂x + ∂Q/∂y + ∂R/∂z
- Mesure du flux sortant par unité de volume
- div F > 0 : source, div F < 0 : puits

### 2.3 Rotationnel (∇×F ou rot F)
- Pour un champ vectoriel F
- rot F = (∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y)
- Mesure la rotation locale du champ
- rot F = 0 : champ irrotationnel

## 3. Propriétés Importantes

### 3.1 Relations fondamentales
- rot(grad f) = 0
- div(rot F) = 0
- rot(rot F) = grad(div F) - ΔF

### 3.2 Règles de calcul
- grad(fg) = f grad(g) + g grad(f)
- div(fF) = f div(F) + F·grad(f)
- rot(fF) = f rot(F) + grad(f)×F

## 4. Applications en Physique

### 4.1 Électromagnétisme
- E = -grad V (champ électrique)
- div E = ρ/ε₀ (équation de Maxwell-Gauss)
- rot E = -∂B/∂t (équation de Maxwell-Faraday)
- div B = 0 (absence de monopôles magnétiques)

### 4.2 Mécanique des fluides
- div v = 0 (incompressibilité)
- rot v = 2ω (vorticité)
- Équation de continuité : ∂ρ/∂t + div(ρv) = 0

## 5. Théorèmes Intégraux

### 5.1 Théorème de Green
- ∫∫D rot F·n dS = ∮∂D F·dr
- Version 2D du théorème de Stokes

### 5.2 Théorème de Stokes
- ∫∫S rot F·n dS = ∮∂S F·dr
- Relie intégrale de surface et circulation

### 5.3 Théorème de Gauss
- ∫∫∂V F·n dS = ∫∫∫V div F dV
- Relie flux sortant et divergence

## 6. Méthodes de Calcul

### 6.1 Coordonnées cylindriques (r,θ,z)
- grad f = (∂f/∂r)er + (1/r)(∂f/∂θ)eθ + (∂f/∂z)ez
- div F = (1/r)∂(rFr)/∂r + (1/r)∂Fθ/∂θ + ∂Fz/∂z

### 6.2 Coordonnées sphériques (r,θ,φ)
- grad f = (∂f/∂r)er + (1/r)(∂f/∂θ)eθ + (1/(r sin θ))(∂f/∂φ)eφ
- div F = (1/r²)∂(r²Fr)/∂r + (1/(r sin θ))∂(sin θ Fθ)/∂θ + (1/(r sin θ))∂Fφ/∂φ

## Formules à Retenir
1. Laplacien : Δf = div(grad f)
2. Identité vectorielle : a×(b×c) = (a·c)b - (a·b)c
3. Produit mixte : a·(b×c) = b·(c×a) = c·(a×b)
4. Gradient de r : grad(r) = er 