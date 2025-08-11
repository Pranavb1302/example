# Angular Services & Dependency Injection

Angular services are used to share logic, data, or functions across different parts of your application.

---

## What is an Angular Service?

At its core, a **service** is just a regular **TypeScript class**. Its purpose is to hold business logic, data, or reusable functions and keep components focused on the user interface.

---

## Why Not Just Use `new`? (The Singleton Problem)

You might think of using services like this:

```ts
// In Component A
private tasksService = new TasksService();

// In Component B
private tasksService = new TasksService();
```

### ❌ The Problem

This creates **two separate instances** of `TasksService`. If Component A updates the service data, Component B won't see it because it has its own copy.

We want **a single shared instance** of the service across the app — a **singleton**.

---

## Dependency Injection (DI)

Dependency Injection is a design pattern and a core feature of Angular.

Instead of components creating their own dependencies, they **ask for them**, and Angular provides them.

### ✅ Benefits

- Centralized instance management
- Easy to test and mock
- Clean, decoupled architecture

---

## 1. Constructor Injection (The Classic Way)

You request a service using the component's constructor.

```ts
constructor(private tasksService: TasksService) {}
```

This is equivalent to:

```ts
private tasksService: TasksService;

constructor(tasksService: TasksService) {
  this.tasksService = tasksService;
}
```

Angular sees the type and provides the service automatically.

---

## 2. The `inject()` Function (Modern Way)

Angular also provides a more flexible alternative:

```ts
import { inject } from '@angular/core';

export class MyComponent {
  private tasksService = inject(TasksService);
}
```

This is useful outside constructors, such as inside functions, initializers, etc.

---

## Making a Class Injectable

To allow Angular to manage and inject a service, decorate it with `@Injectable()`.

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  // Service logic here
}
```

### Explanation

- `@Injectable()` tells Angular this class can be injected.
- `{ providedIn: 'root' }` registers the service at the root level (application-wide singleton).

---

## Summary

| Feature                | Description |
|------------------------|-------------|
| Service                | A TypeScript class for shared logic |
| Singleton              | One shared instance across app |
| Dependency Injection   | Angular provides service automatically |
| Constructor Injection  | Inject via constructor |
| `inject()` Function    | Inject anywhere in the class |
| `@Injectable()`        | Marks class for DI |
| `providedIn: 'root'`   | Registers as root-level singleton |

---