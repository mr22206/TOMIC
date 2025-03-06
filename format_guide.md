# Guide de Formatage des Expressions Mathématiques

## Règles Générales

1. **Délimiteurs**
   - Expressions en ligne : `\\(` et `\\)`
   - Expressions en bloc : `\\[` et `\\]`
   - Ne jamais utiliser `$` ou `$$`

2. **Échappement**
   - Double échappement pour tous les backslashes : `\\`
   - Exemple : `\\frac` au lieu de `\frac`
   - Pour les matrices, utiliser `\\\\` pour les sauts de ligne

3. **Espaces**
   - Ajouter des espaces après les délimiteurs de bloc
   - Exemple : `\\[ formule \\]`
   - Pas d'espace dans les expressions en ligne : `\\(formule\\)`

4. **Symboles Mathématiques**
   - Fonctions : `\\mathbb{R}`, `\\mathbb{N}`, etc.
   - Opérateurs : `\\frac`, `\\partial`, `\\nabla`, etc.
   - Texte dans formules : `\\text{ texte }`

5. **Structures**
   - Matrices : 
     ```
     \\[\\begin{pmatrix}
     a & b \\\\
     c & d
     \\end{pmatrix}\\]
     ```
   - Listes avec formules :
     ```
     - \\(x\\) : description
     - \\(y\\) : description
     ```

## Exemples Types

### 1. Fractions
```
\\[\\frac{\\partial f}{\\partial x}\\]
```

### 2. Intégrales
```
\\[\\iint_D f(x,y) \\,dx\\,dy\\]
```

### 3. Limites
```
\\[\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\]
```

### 4. Matrices
```
\\[\\begin{pmatrix}
\\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x\\partial y} \\\\
\\frac{\\partial^2 f}{\\partial x\\partial y} & \\frac{\\partial^2 f}{\\partial y^2}
\\end{pmatrix}\\]
```

### 5. Variables avec Indices
```
- \\(x_1, x_2, \\ldots, x_n\\)
- \\(a_{ij}\\)
```

## Vérification

Pour vérifier qu'un document est correctement formaté :
1. Tous les backslashes sont doublés
2. Pas de `$` ou `$$` dans le document
3. Espaces cohérents autour des blocs
4. Alignement correct des matrices
5. Texte dans les formules utilise `\\text` 