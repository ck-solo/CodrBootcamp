
# CSS COMPLETE NOTES (Beginner to Strong Foundation)
*(No Grid, No Animations, No Keyframes, No Media Queries, No Best Practices)*

---

## 1. What is CSS?

CSS stands for **Cascading Style Sheets**.
CSS is used to control the appearance of HTML elements.

### Why CSS is needed
HTML only defines structure.
CSS defines:
- colors
- sizes
- spacing
- alignment
- layout

### Analogy
HTML = Skeleton  
CSS = Clothes + Style

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

---

## 2. Ways to Apply CSS

### Inline CSS
Used inside an HTML tag.

```html
<p style="color:red;">Hello</p>
```

Affects only one element.

---

### Internal CSS
Written inside `<style>` tag.

```html
<style>
  p {
    color: green;
  }
</style>
```

Affects a single page.

---

### External CSS
Written in a separate `.css` file.

```html
<link rel="stylesheet" href="style.css">
```

Reusable and clean.

---

## 3. CSS Syntax

```css
p {
  color: red;
  font-size: 18px;
}
```

- Selector → chooses element
- Property → what to change
- Value → how to change

---

## 4. Selectors

### Element Selector
```css
p { color: black; }
```

### Class Selector
```css
.box { padding: 20px; }
```

### ID Selector
```css
#main { width: 100%; }
```

---

## 5. Specificity

Priority order:
Inline > ID > Class > Element

```css
#title { color: red; }
.title { color: blue; }
h1 { color: green; }
```

Final color → red

---

## 6. Box Model

Every element is a box.

Content → Padding → Border → Margin

```css
.card {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  box-sizing: border-box;
}
```

---

## 7. Units

- px → fixed
- rem → relative to root font
- vh → viewport height
- vw → viewport width

```css
font-size: 1rem;
height: 100vh;
width: 50vw;
```

---

## 8. Colors

```css
color: red;
color: #ff0000;
color: rgb(255,0,0);
color: rgba(255,0,0,0.5);
```

---

## 9. Typography

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}
```

---

## 10. Display

```css
div { display: block; }
span { display: inline; }
img { display: inline-block; }
.hidden { display: none; }
```

---

## 11. Positioning

```css
.box {
  position: relative;
  top: 20px;
  left: 10px;
}
```

Types:
- static
- relative
- absolute
- fixed
- sticky

---

## 12. Z-Index

```css
.popup {
  position: absolute;
  z-index: 999;
}
```

Higher value = on top.

---

## 13. Pseudo-Classes

```css
button:hover {
  background: black;
  color: white;
}
```

Used for hover, focus, active.

---

## 14. Pseudo-Elements

```css
p::first-letter {
  font-size: 30px;
}
```

Used for styling parts.

---

## 15. Overflow

```css
.box {
  overflow: auto;
}
```

Values:
hidden, scroll, auto

---

## 16. Flexbox (What, Why, How)

### What is Flexbox?
Flexbox is a one-dimensional layout system.

### Why Flexbox?
Used for easy alignment and spacing.

### How it works
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- `display: flex` → activates flexbox
- `justify-content` → horizontal alignment
- `align-items` → vertical alignment

---

## END OF NOTES
