## Functional programming principles

#### Pure functions

- A pure function is a function in which the return value is determined only by its input values, with no observable side effects;
- Easy for testing because they are predictable;

#### High order functions

- Functions that operate on other functions, taking them as arguments or returning them, are called higher-order functions;

#### First class functions

- First class functions are when these functions are treated as a variable;

```
const x = 3;
const y = (text) => text;
const z = function() {
  console.log('zzzzzzz!')
}

console.log(x);
console.log(y('Hey'));
z();
```

#### Closure

- Closure is when a function "remembers" its lexical scope, even when the function is executed outside that lexical scope;

#### Functors

- Objects that implement a function but are also a container of values;
