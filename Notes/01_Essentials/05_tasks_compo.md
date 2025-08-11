# Angular: Data Patterns & TypeScript Best Practices

*A collection of notes on efficient state management, handling optional values, and defining data structures in Angular and TypeScript.*

---

### 1. State Management: Deriving Data with a Getter

A common and efficient pattern in Angular is to store the "minimum" amount of state and derive other values from it. Instead of storing both a user's ID and the full user object, store only the ID and calculate the user object when needed.

* **The Getter:** A `get` property is a function that looks and acts like a regular property. It runs its code every time you access it from the template or other code.

    ```typescript
    export class AppComponent {
      users = DUMMY_USERS;
      selectedUserId = 'u1'; // The minimal state we store

      // This getter derives the user object from the state
      get userSelected() {
        // It finds and returns the user object every time it's needed
        return this.users.find((user) => user.id === this.selectedUserId);
      }
    }
    ```

* **Why it's good:** This prevents your data from getting out of sync. If `selectedUserId` changes, `userSelected` will automatically return the new, correct user the next time it's accessed.

---

### 2. Handling Potentially `undefined` Values in TypeScript

TypeScript is strict about values that might be `undefined` or `null`. The `.find()` array method is a perfect example, as it returns `undefined` if no matching item is found. Here are several ways to handle this:

* **The Non-Null Assertion Operator (`!`)**
    * **Syntax:** `this.users.find(...)!`
    * **Meaning:** This is you telling TypeScript, "Trust me, I know this will never be `undefined`." It's a promise that can be dangerous if you're wrong, as it can lead to runtime errors. Use it only when you are absolutely certain a value exists.

* **The Optional Chaining Operator (`?.`)**
    * **Syntax:** `this.users.find(...)?.name`
    * **Meaning:** This is a safe way to access a property. It means, "If the result of `.find()` is not `null` or `undefined`, then give me the `.name` property. Otherwise, stop and return `undefined`." This prevents runtime crashes.

* **Explicitly Defining Optional Types**
    * **Syntax:** `@Input() name?: string;` or `@Input() name: string | undefined;`
    * **Meaning:** Both of these tell TypeScript that the `name` property is allowed to be either a `string` or `undefined`. This forces you to handle the `undefined` case in your code, making it safer than using `!`.

---

### 3. Component Inputs: Primitives vs. Objects

When passing data to a child component via `@Input`, you can pass each piece of data separately or as a single, cohesive object.

* **Passing Primitives (The Verbose Way):**
    ```typescript
    // In child component
    @Input({ required: true }) id!: string;
    @Input({ required: true }) name!: string;
    @Input({ required: true }) avatar!: string;
    ```

* **Passing an Object (The Clean & Recommended Way):**
    ```typescript
    // In child component
    @Input({ required: true }) user!: {
      id: string;
      name: string;
      avatar: string;
    };
    ```
* **Why the object approach is better:** It makes your component's public API much cleaner. The parent only needs to bind to one property (`[user]`), and if you ever need to add more user data (like an email), you only have to update the object's definition, not add a whole new `@Input`.

---

### 4. Defining Reusable Data Structures: `type` vs. `interface`

Defining a complex object shape directly in an `@Input` can become messy. The industry standard is to "outsource" this definition into a reusable structure using either a `type` alias or an `interface`.

* **`type` (Type Alias):**
    * **Syntax:** `type User = { ... };`
    * **Use Case:** A `type` alias is very flexible. It can define not only object shapes but also unions (`string | number`), intersections, and other complex custom types. It's a powerful, general-purpose tool.

* **`interface`:**
    * **Syntax:** `interface User { ... };`
    * **Use Case:** An `interface` is specifically designed for defining the shape of an **object**. It's slightly more limited than `type` but is excellent for this purpose. A key feature is that interfaces can be "extended" by other interfaces, which is useful in object-oriented programming.

* **The Bottom Line:** For defining the shape of your data objects, both `type` and `interface` are excellent choices. Many developers prefer `interface` for objects because its purpose is more explicit, but `type` is more flexible overall.
