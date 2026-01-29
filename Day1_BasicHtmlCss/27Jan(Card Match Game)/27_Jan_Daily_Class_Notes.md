# 📅 Daily Class Notes --- 27 January

## 🧠 Main Topics Covered

-   Regular Expressions (Regex)\
-   Form Handling in JavaScript\
-   Password Validation using Regex\
-   Email Validation using Regex\
-   Game Logic Revision\
-   Card Flip Game Concept Revision

------------------------------------------------------------------------

## 📌 1️⃣ Regular Expressions (Regex)

### ✅ What is Regex?

Regular Expression is a pattern used to: - Validate input\
- Search text\
- Replace text\
- Filter data

### ✅ Where We Used Regex Today

-   Password checking\
-   Email validation

------------------------------------------------------------------------

## 🔐 Password Regex Explained

### Pattern Used:

    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

### 🧩 Breakdown

  --------------------------------------------------------------------------------------------------------------------------
  Part                                                                                   Meaning
  -------------------------------------------------------------------------------------- -----------------------------------
  \^                                                                                     Start of string

  (?=.\*\[A-Za-z\])                                                                      At least one letter required

  (?=.\*`\d)`{=tex}                                                                      At least one number required

  (?=.\*\[@$!%*?&]) | At least one special character required | | [A-Za-z\d@$!%\*?&\]+   Allowed characters

  \$                                                                                     End of string
  --------------------------------------------------------------------------------------------------------------------------

### ✅ Example

✔ Hello@123 → Valid\
❌ hello → Invalid\
❌ 123456 → Invalid

------------------------------------------------------------------------

## 📧 Email Regex Explained

### Pattern Used:

    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

### 🧩 Breakdown

  Part                   Meaning
  ---------------------- ---------------------------
  \[a-zA-Z0-9.\_%+-\]+   Username
  @                      Must contain @
  \[a-zA-Z0-9.-\]+       Domain name
  .                      Dot before extension
  \[a-zA-Z\]{2,}         Extension (min 2 letters)

------------------------------------------------------------------------

## 📝 Form Handling Concept

### ✅ Steps

1.  Select form using `querySelector`\
2.  Add submit event listener\
3.  Prevent default reload → `e.preventDefault()`\
4.  Get values using `e.target[index].value`\
5.  Validate inputs\
6.  Reset form

------------------------------------------------------------------------

## ⚠️ Important Learning Points

-   `test()` method returns **true / false**\
-   Regex validation should happen **before sending data**\
-   Always check empty fields first\
-   `form.reset()` clears form after submission

------------------------------------------------------------------------

## 🎮 Game Logic Revision

### 🧠 General Game Logic Structure

-   Select elements\
-   Store game state (score, timer, moves)\
-   Add event listeners\
-   Update UI\
-   Reset game state

------------------------------------------------------------------------

## 🃏 Card Flip Game Concept Revision

### 🏗 Structure Idea

    Container
     ├ Card
     │ ├ Top Layer (Front)
     │ └ Bottom Layer (Back)

### 🧠 Logic

-   Click card\
-   Add class → flip / remove top\
-   Show bottom content

### 💡 Common Methods Used

-   `classList.add()`\
-   `classList.remove()`\
-   `classList.toggle()`\
-   `addEventListener("click")`

------------------------------------------------------------------------

## 🚀 Today's Practical Understanding

✔ Regex real use case\
✔ Form validation logic\
✔ Event driven programming\
✔ Game logic thinking\
✔ UI interaction flow

------------------------------------------------------------------------

## 📈 Next Improvement Goals

-   Make stronger password regex (length limit add)\
-   Add real-time validation (on input change)\
-   Store form data in localStorage\
-   Build full working card flip game from scratch

------------------------------------------------------------------------

## 🧾 Self Reflection

Today I learned how real-world forms actually validate user input using
regex and event handling. I also revised game logic thinking which will
help me build projects without copy-paste.
