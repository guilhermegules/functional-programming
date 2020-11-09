Number.prototype.log = function () {
  console.log(this);
};

Function.prototype.log = function () {
  console.log(this.toString());
};

const I = (a) => a;

I(3).log();

I(I).log();

const SELF = (f) => f(f);

SELF(I).log();

const FIRST = (a) => (_) => a;

FIRST(1)(2).log();

const LAST = (_) => (b) => b;

LAST(1)(2).log();

const CHANGE = (f) => (a) => (b) => f(b)(a);

CHANGE(LAST)(1)(2).log();

const T = FIRST;
const F = LAST;

T.toString = () => "True";
F.toString = () => "False";

T;
F;

const NOT = (a) => a(F)(T);

NOT(F).log();

const AND = (a) => (b) => a(b)(F);

AND(T)(T).log();

const OR = (a) => (b) => a(T)(b);

OR(F)(T).log();

const EQUAL = (a) => (b) => a(b)(NOT(b));

EQUAL(F)(F).log();

EQUAL(T)(F).log();

EQUAL(F)(T).log();

EQUAL(T)(T).log();

const XOR = (a) => (b) => NOT(EQUAL(a)(b));

XOR(T)(T).log();

XOR(F)(F).log();

XOR(T)(F).log();

XOR(F)(T).log();
