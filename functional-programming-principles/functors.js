// Wrapper

// ARRAY  is a example of Functors
const nums = [1, 2, 3, 4, 5, 6];
const newNumbers = nums.map((num) => num + 10).map((num) => num * 2);

console.log(nums, newNumbers);

function safeType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalid()) {
        return safeType(null);
      }
      return safeType(fn(this.value));
    },
  };
}

const result = safeType("Functors")
  .map((text) => text.toUpperCase())
  // .map((text) => null) // invalid method test
  .map((text) => `${text}!!!`)
  .map((text) => text.split("").join(" "));

console.log(result.value);
