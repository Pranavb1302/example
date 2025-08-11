# Angular: Migrating from Standalone Components to Module-Based Architecture

## Key Concepts
- **Modules** are used to group components together.
- Root App Module (`AppModule`) is good practice when working with modules.
- `@NgModule` decorator is used to configure a module (similar to `@Component` for components).
- `BrowserModule` should be imported for core Angular features needed in browser applications.
- In a module-based architecture, components are registered in a **central place**.

---

## Migration Steps

### Step 1 — Create Root Module File
Create a root module file:  
`app.module.ts`

### Step 2 — Import `NgModule`
Import the `NgModule` decorator from `@angular/core`.

### Step 3 — Basic Module Setup
```ts
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 4 — Update `main.ts`
Tell `main.ts` to bootstrap the module:
```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

### Step 5 — Add Components to Module
If components are **standalone**, add them to `imports`:
```ts
imports: [HeaderComponent, UserComponent, TasksComponent, RouterOutlet]
```
If components are **non-standalone**, move them to `declarations`.

### Step 6 — Fix Dependency Injection Errors
If you encounter an *Injectable not found* error, import `BrowserModule`:
```ts
imports: [BrowserModule, ...]
```

### Step 7 — Convert All Components to Non-Standalone
To fully switch to module-based:
1. Set `standalone: false` in components.
2. Add all components to `declarations`.
3. Keep `imports` for Angular modules like `FormsModule`, `RouterOutlet`, etc.

Example:
```ts
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    TaskgenComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## Advantages of Using Modules
- **Centralized registration** of components, directives, and pipes.
- **Leaner `@Component` decorators** — they no longer manage imports directly.
- Makes it easier to manage large applications by grouping related components in **feature modules**.
