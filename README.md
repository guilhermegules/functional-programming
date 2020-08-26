## Functional and reactive JavaScript

> Here is my functional programming studies

### Programming paradigms:

- The paradigms are the base of the knowledge for a great solutions;
- Paradigms are a mental models, so you need a pattern for follow;
- New languages === easy && new paradigms === hard;
- Paradigms and patterns;
- [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern);
- [Functional](https://en.wikipedia.org/wiki/Functional_programming) created in 1957;
- [Procedural](https://en.wikipedia.org/wiki/Procedural_programming) created in 1968;
- [Object orientation](https://en.wikipedia.org/wiki/Object-oriented_programming) created in 1980/90;

### Declarative vs Imperative

- The declarative code style does not say how, but what the imperative already says how and teaches the computer;

```
Imperative      | Declarative
Flow focus      | Logic focus
Mutate state    | Immutability
How             | What
More code       | Less code
Low scalability | Higher scalability
More knowledged | Less knowledged
More explicit   | Less explicit
```

- Showing the differences:

```
Imperative

SQL:
SELECT registration, name, email, average FROM students WHERE average >= 9;

HTML:
<div>
  <div>Hello world</div>
</div>

JavaScript Imperative:
const grades = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

function average(grades) {
  let total = 0;
  for(let i = 0; i < grades.length; i++) {
    total += grades[i];
  }

  return total / grades.length;
}

const averageClass = average(grades);
console.log(`Average is ${averageClass}`);

JavaScript Declarative:
const grades = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

const sum = (a, b) => a + b;
const divide = (a, b) => a / b;

const averageClass = divide(grades.reduce(sum), grades.length);

console.log(`Average is ${averageClass}`);
```
