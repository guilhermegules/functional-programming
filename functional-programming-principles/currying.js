function textLengthBetween(min) {
  return (max) => {
    return (error) => {
      return (text) => {
        // Lazy Evaluation
        const length = (text || "").trim().length;

        if (length < min || length > max) {
          throw error;
        }
      };
    };
  };
}

function validate(fn) {
  return (value) => {
    // Lazy Evaluation
    try {
      fn(value);
    } catch (error) {
      return { error };
    }
  };
}

const p1 = { name: "A", preco: 14.99, desc: 0.25 };

const forceDefaultLength = textLengthBetween(4)(255);
const forceValidName = forceDefaultLength("Invalid name!");
const validateName = validate(forceValidName);

console.log(validateName(p1.name));
