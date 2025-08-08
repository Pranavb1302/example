# Web Storage: Your Browser's Notepad 📝

Web storage allows websites to save small pieces of information directly in your browser.  
This is useful for:
- Remembering user preferences
- Keeping a user logged in
- Saving data from a form that hasn't been submitted yet

There are **two types** of web storage: `localStorage` and `sessionStorage`.  
They work the same way but differ in **how long the data lasts**.

---

## **localStorage: The Permanent Notepad**
- **Lifetime:** Data never expires. It stays in the browser even after:
  - Closing the tab
  - Closing the browser
  - Restarting the computer  
  It remains until you or the website explicitly deletes it.
- **Use Case:** Long-term storage, e.g.:
  - Theme preference (dark/light mode)
  - Username
  - To-do list items

---

## **sessionStorage: The Temporary Sticky Note**
- **Lifetime:** Data exists only for the duration of the browser tab session.
  - Deleted automatically when the tab is closed
  - Each tab has its own separate `sessionStorage`
- **Use Case:** Temporary storage, e.g.:
  - Multi-page form data
  - Temporary states that shouldn’t persist forever

---

## **Using Web Storage (Commands)**
Web storage stores data as **key-value pairs**.  
Both `localStorage` and `sessionStorage` use the same commands:

### 1. `setItem(key, value)` – Save data
```javascript
localStorage.setItem('theme', 'dark');
```

### 2. `getItem(key)` – Read data
```javascript
let currentTheme = localStorage.getItem('theme'); // Returns 'dark'
```

### 3. `removeItem(key)` – Delete specific data
```javascript
localStorage.removeItem('theme');
```

### 4. `clear()` – Delete all stored data
```javascript
localStorage.clear();
```

---

## **Important Rule: Everything is a String**
Web storage can only store **strings**.  
To store objects or arrays, convert them to JSON first.

**Save an Object:**
```javascript
const user = { id: 'u1', name: 'Pranav' };
localStorage.setItem('user', JSON.stringify(user));
```

**Read an Object:**
```javascript
const savedUserString = localStorage.getItem('user');
const userObject = JSON.parse(savedUserString); // Back to object
```

---

## **localStorage vs sessionStorage – Quick Comparison**

| Feature               | localStorage 🗄 | sessionStorage 🗒 |
|-----------------------|----------------|------------------|
| **Data Lifetime**     | Until explicitly deleted | Until browser tab is closed |
| **Storage Limit**     | ~5–10 MB       | ~5–10 MB         |
| **Scope**             | Shared across all tabs/windows for the same origin | Unique to each tab/window |
| **Use Case**          | Long-term settings, saved data | Temporary form data, session states |
| **Persistence**       | Survives browser restart | Cleared when tab is closed |
