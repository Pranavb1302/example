<!-- At its core, computed() is one of the most powerful features of Angular Signals. It lets you create a new signal whose value is derived from other signals.

Think of it like a formula in a spreadsheet. If you have a value in cell A1 and another in B1, you can create a formula in C1 like =A1 + B1. You never have to manually update C1; it automatically recalculates whenever A1 or B1 changes. computed() works exactly the same way.

Key Characteristics (The "Deep" Part)
It's Reactive and Declarative: You declare how a value should be calculated, and you never have to worry about when to update it. Angular handles that automatically. This makes your code much cleaner and less error-prone.

Automatic Dependency Tracking: When you create a computed signal, Angular automatically detects which other signals you read inside its calculation function. It builds a dependency graph behind the scenes.

TypeScript

firstName = signal('Pranav');
lastName = signal('Kala');

// Angular sees that `fullName` reads `firstName()` and `lastName()`.
// It now knows that `fullName` depends on them.
fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
It's Lazy and Efficient (Memoization): This is its secret superpower. A computed signal doesn't recalculate its value every single time a dependency changes. Instead:

It only recalculates its value the next time you read it (i.e., call fullName()).

If you read it multiple times but its dependencies haven't changed, it does not re-run the calculation. It returns a cached (memoized) value. This is incredibly efficient.

Example of Efficiency:

TypeScript

// In your component:
count = signal(0);
isEven = computed(() => {
  console.log('Calculating if even...'); // This will only log when `count` changes
  return this.count() % 2 === 0;
});

// In your template:
<p>Is the count even? {{ isEven() }}</p>
<p>We can check again: {{ isEven() }}</p>
<p>And one more time: {{ isEven() }}</p>
<button (click)="count.set(0)">Set to 0</button>
In the example above, "Calculating if even..." will only be logged to the console once, even though you are reading isEven() three times. It only recalculates if the count signal changes.

It's Read-Only: You cannot directly set the value of a computed signal using .set() or .update(). Its value is determined exclusively by its calculation function and its dependencies. This makes the flow of data in your application very predictable. -->