# Angular Core Concepts

## 1. EventEmitter Object

### What is EventEmitter?
`EventEmitter` is a special class in Angular for **child-to-parent communication**, letting a child component send messages or data to its parent.

---

### Doorbell Analogy 🔔
- **Installation (`new EventEmitter()`):** Installing the doorbell mechanism on the child.
- **Naming (`@Output() select = ...`):** The name of the doorbell the parent listens for.
- **Ringing (`.emit()`):** Pressing the button to send a signal.
- **Delivering (`.emit(data)`):** Sending a "package" of data to the parent.

---

### Key Points
- **Class Instance:** `new EventEmitter()` creates an object with `.emit()` method.
- **Generics `<T>` for Type Safety:**
  - `new EventEmitter<string>()` → only strings allowed.
  - `new EventEmitter<User>()` → only `User` objects allowed.
  - Without type → defaults to `any` (not recommended).
- **`.emit(payload)` Method:** Sends the payload to the parent via `$event`.

---

## 2. `output()` → Signal-Based Event

### What is `output()`?
A **modern, signal-based** method to send data from a child to a parent, replacing `@Output()` + `EventEmitter`.

---

### Syntax
```typescript
import { Component, output, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button (click)="notifyParent()">Send Data to Parent</button>
  `
})
export class ChildComponent {
  userId = input.required<string>();  
  userSelected = output<string>();    

  notifyParent() {
    this.userSelected.emit(this.userId()); 
  }
}
```

**Process:**
1. Child defines output property.
2. Calls `.emit()` to send data to the parent.

---

## 3. FormsModule (Template-Driven Forms)

### Purpose
`FormsModule` makes HTML forms **Angular-aware**, enabling data binding & validation.

---

### Features
1. **Two-Way Binding (`[(ngModel)]`)**
   ```html
   <input [(ngModel)]="taskTitle">
   ```
   ```typescript
   taskTitle = 'Initial Title';
   ```

2. **Smart Submission (`(ngSubmit)`)**
   ```html
   <form (ngSubmit)="onFormSubmit()">
     <button type="submit">Save</button>
   </form>
   ```

3. **Form State Tracking**
   - Validity (valid/invalid)
   - Pristine / Dirty
   - Touched / Untouched

---

## 4. Pipes

### What are Pipes?
Tools to **transform data in templates** without altering the original value.

---

### Examples
```html
<p>{{ 'hello world' | uppercase }}</p>    <!-- HELLO WORLD -->
<p>{{ today | date:'shortDate' }}</p>     <!-- 8/8/25 -->
<p>{{ 123.45 | currency:'USD' }}</p>      <!-- $123.45 -->
```

**Why use them?**  
Keep TypeScript clean, format directly in HTML.

---

## 5. Services

### What are Services?
**Reusable classes** for sharing data, logic, or features across components.

---

### Why Use Them?
Avoids duplication → ensures consistent data across components.

---

### How They Work (Dependency Injection)
1. **Create Service**
   ```typescript
   @Injectable({ providedIn: 'root' })
   export class TasksService {}
   ```
2. **Inject into Component**
   ```typescript
   constructor(private tasksService: TasksService) {}
   ```

---

### `providedIn: 'root'`
- **Singleton:** One shared instance app-wide.
- **Tree-Shaking:** Removes unused services from final build.

---

### DI Recap
- **Provider:** Recipe for creating a service.
- **Root Injector:** Central hub supplying services.
