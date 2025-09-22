# Système Typographique Startbiz

## Police
- **Police principale** : Work Sans (Google Font)
- **Variable CSS** : `var(--font-work-sans)`
- **Fallback** : `ui-sans-serif, system-ui, sans-serif`

## Classes responsives

### Titres principaux (H1)
```css
.text-h1-responsive
```
- **Mobile** (<768px): 30px (1.875rem)
- **Tablet** (≥768px): 36px (2.25rem)  
- **Desktop** (≥1024px): 48px (3rem)
- **Font-weight**: 600 (semibold)
- **Letter-spacing**: -0.025em (tight)
- **Line-height**: 1.2

### Sous-titres de section (H2)
```css
.text-h2-responsive
```
- **Mobile** (<768px): 20px (1.25rem)
- **Tablet** (≥768px): 24px (1.5rem)
- **Desktop** (≥1024px): 30px (1.875rem)
- **Font-weight**: 600 (semibold)
- **Line-height**: 1.3

### Titres de composants (H3)
```css
.text-h3-responsive
```
- **Mobile/Tablet** (<1024px): 18px (1.125rem)
- **Desktop** (≥1024px): 20px (1.25rem)
- **Font-weight**: 500 (medium)
- **Line-height**: 1.4

### Texte de contenu (Body)
```css
.text-body-responsive
```
- **Mobile** (<768px): 15px (0.9375rem), line-height: 1.5
- **Tablet/Desktop** (≥768px): 16px (1rem), line-height: 1.75
- **Font-weight**: 400 (regular)
- **Color**: #4b5563 (text-gray-600)

### Texte secondaire (Small)
```css
.text-small
```
- **Taille**: 14px (0.875rem)
- **Line-height**: 1.25
- **Font-weight**: 400 (regular)
- **Color**: #6b7280 (text-gray-500)

## Utilisage dans les composants

### Exemple Hero
```tsx
<h1 className="text-h1-responsive text-gray-900 mb-6">
  Titre principal
</h1>

<p className="text-body-responsive mb-6 max-w-2xl">
  Description du contenu
</p>
```

### Exemple Section
```tsx
<h2 className="text-h2-responsive text-gray-900 mb-4">
  Titre de section
</h2>

<p className="text-body-responsive max-w-2xl mx-auto">
  Texte d'introduction
</p>
```

### Exemple Card
```tsx
<h3 className="text-h3-responsive text-gray-900 mb-2">
  Titre de carte
</h3>

<p className="text-body-responsive mb-4">
  Description de la carte
</p>
```

## Boutons et CTA
- **Font-weight**: 500 (medium)
- **Font-size**: 16px (1rem)
- **Letter-spacing**: normal (pas d'uppercase)

```tsx
<button className="font-medium text-base">
  Button Text
</button>
```

## Couleurs recommandées
- **Titres**: `text-gray-900` (#111827)
- **Corps de texte**: `text-gray-600` (#4b5563)
- **Texte secondaire**: `text-gray-500` (#6b7280)
- **Liens/CTA**: `text-blue-600` (#2563eb)



