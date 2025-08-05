# Angular Concepts: From Project Structure to Signals

*A summary of key Angular concepts based on development notes.*

---

## 1. Angular: A Platform, Not Just a Framework

Angular is a complete platform that includes a collection of tools and a robust structure for building applications.

### Root Files & `*.json`

These are configuration files that manage the project.

- **`angular.json`**: The main configuration for the Angular CLI, defining how the project builds, serves, and tests. This is where you configure things like the `assets` folder.
- **`package.json`**: Manages the project's dependencies (the libraries your project needs).
- **`tsconfig.json`**: Configures the TypeScript compiler.
- **`.editorconfig`**: Defines coding style rules for your editor to ensure consistency.

---

## 2. How an Angular App Starts

The application loading process follows a clear sequence:

1. **`main.ts`**: The very first file that executes. It "bootstraps" (starts) the main application module and the root component.
2. **`app.component.ts`**: The root component that gets loaded. It acts as the main container for the rest of your application.
3. **`app.component.html`**: The `templateUrl` in `app.component.ts` points to this HTML file, which provides the initial view for the root component.

---

## 3. Change Detection: How Angular Updates the UI

Angular automatically keeps your UI in sync with your data.

- **The Mechanism**: Angular’s change detection works by checking if your application’s data has changed. It compares the current DOM state with the expected state and updates only the parts that are different.
- **`zone.js`**: Traditionally used to detect asynchronous operations (clicks, HTTP calls) that may trigger data changes and then run change detection.
- **The Future with Signals**: New Angular versions support **Signals**, which allow fine-grained control over state changes and remove the need for `zone.js`.

---

## 4. State Management with Signals

Signals are a modern way to manage state in Angular.

- **`signal()`**: Creates a reactive value. Use `.set()` to update it.
- **`computed()`**: Creates a value derived from one or more signals. Automatically updates when dependencies change.

### Example

```ts
import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * (DUMMY_USERS.length));

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Create a signal with an initial user
  UserSelected = signal(DUMMY_USERS[randomIndex]);

  // Computed signal that depends on `UserSelected`
  imagePath = computed(() => {
    return `./assets/users/${this.UserSelected().avatar}`;
  });

  OnUserSelect() {
    const newIndex = Math.floor(Math.random() * (DUMMY_USERS.length));
    this.UserSelected.set(DUMMY_USERS[newIndex]);
  }
}
```
## 5. Parent-to-Child Communication (`@Input`)

### ✅ Core Question Answered:  
**"Why are values set in `app.component.html` going into `user.component.ts`?"**

This happens via:

- **Property Binding** in the **parent** component's template  
- The **`@Input` decorator** in the **child** component's class

---

### 🧒 Child Component (`user.component.ts`)

```ts
import { Input } from '@angular/core';

export class UserComponent {
  @Input({ required: true }) name!: string;
}

## 5. Parent-to-Child Communication (`@Input`)

### 🧒 Child Component: `user.component.ts`

```ts
import { Input } from '@angular/core';

export class UserComponent {
  @Input({ required: true }) name!: string;
}
```

- `@Input()` makes `name` a **bindable property** from the parent component.
- The `!` (non-null assertion operator) is a promise to TypeScript that this property will be initialized by Angular.
- `{ required: true }` enforces that Angular **must receive** this value from a parent component.

---

### 👨 Parent Component: `app.component.html`

```html
<app-user [name]="users[0].name"></app-user>
```

- `[name]="users[0].name"` is **property binding**.
- This tells Angular:  
  > "Set the `name` property of the `<app-user>` component to the value of `users[0].name` from the parent component."

---

### 📝 Summary

- `@Input()` in the child acts like a **door** for receiving data.
- `[property]` in the parent is the **key** that sends data through that door.
- Together, they allow **one-way data flow** from parent to child.

---

## 6. Signal-based Inputs

Modern Angular (v17+) introduces `input()` — a more **reactive and signal-based** approach to handle component inputs.

### ✅ Comparison:

| Feature              | `@Input()`                      | `input()` (Signal)                      |
|----------------------|----------------------------------|------------------------------------------|
| Type                 | Decorator                       | Function                                 |
| Value                | Plain property                  | Read-only signal                         |
| Reactivity           | Basic change detection          | Fine-grained reactivity (Signals)        |
| Required enforcement | Via `{ required: true }`        | Via `input.required<Type>()`            |
| Access in template   | `{{ name }}`                    | `{{ name() }}`                           |

---

### ✨ Signal Input Example: `user.component.ts`

```ts
import { Component, input, computed } from '@angular/core';

export class UserComponent {
  // Define required signal-based inputs
  name = input.required<string>();
  path = input.required<string>();

  // Computed signal that reacts to `path`
  imagePath = computed(() => {
    return `./assets/users/${this.path()}`;
  });
}
```

- `input.required<string>()` creates a **signal-based input** that must be provided by the parent.
- `computed()` creates a **derived signal** that updates whenever its dependencies (`path`) change.

---

### 🧩 Template: `user.component.html`

```html
<img [src]="imagePath()" [alt]="name()">
<span>{{ name() }}</span>
```

- Because `name` and `imagePath` are **signals**, you **call them as functions** (e.g., `name()`).
- This makes templates **reactive and efficient**, with updates tied to actual changes.

---

### 🚀 Summary: Why Use `input()`?

- It gives **fine-grained reactivity**.
- It works without `zone.js`.
- It integrates better with Angular Signals-based architecture.
- Ideal for performance-critical or reactive-heavy apps.
