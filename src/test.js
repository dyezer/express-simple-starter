const foo = 1
console.log(foo)
let bar
// eslint-disable-next-line prefer-const, no-unused-vars
bar = 1
// eslint-disable-next-line no-unused-vars
function test() {
    // eslint-disable-next-line no-undef
    console.log(baz)
}
// var baz = 123;
