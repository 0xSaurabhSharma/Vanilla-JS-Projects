# JAVASCRIPT.INFO

## PART ONE

### JAVASCRIPT FUNDAMENTALS


- [Summary Till Now](https://javascript.info/javascript-specials)
- +prompt(title, default) = Number(prompt(title, default))
- variable = (cond'n) a : b;

did **git reset --hard** to notes till now

12. **Nullish coalescing operator '??'**
- to get first defined value
- a ?? b => returns a if defined, else be
    - result = (a !== null && a !== undefined) ? a : b;
    - result = a ?? b;
- to provide a default value
    - alert(firstName ?? lastName ?? nickName ?? "Anonymous"); 
- || doesn't distinguish between different type of falsy values
- to use ?? with && or || use () to avoid err, its forbidden without it

13. **Loops: while and for**
- while() {...} // when don't know how many times will it execute
- do {...} while() // when you want to execute at least ones
- for (begin; cond'n; step) {...}
- break; continue;
    - labelName: for (;;) {
    -     for(;;){
    -         // break labelName;
    -     }
    - }

14. **Switch**
- switch looks for exact match i.e. ===, and executes till break is found or switch ended
- expressions can be used
    - case b+1: ...
- grouping
    - case 3:
    - case 4: ...

15. **Functions Declaration**
- ***function (parameters) {... code ...}***
- Avoid Global Veriables: (function(){...code...})();
- function name (parameters) {...}
- name(arguments)
- default parameters; text = text ?? 'empty';
- A function with an empty return or without it returns undefined
- naming: start with verb: getValue();
- function should only do what it's name tells, nothing more or less
- divide function into small small parts, and 
- write self describing code
- if else can be replaced with '?' & '||';

16. **[Function Expression: check article's comments](https://javascript.info/function-expressions)**
- ***let name = function (para) {...code...};***
- Functions are first class citizen of the javascript.
- Function is a VALUE, so it can be treated like that. Regular value represent data, function represent action.
- no execution without (), name();
- We can put any value in function variable, in both exp and declaration fun.
- Callback Function, a function that is passed as an argument but called (or executed) only when necessary.
- fun1()
- fun2()
- ask (para1, fun1, fun2, function(){...3rd function...})
- here 3rd function is anonymous function.
- A Function Declaration can be called earlier than it is defined. 
- A Function Expression is created when the execution reaches it and is usable only from that moment.
- In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it. But FunctionExp can be accessed out side of block, but must be declared before.
- Prefer Function Declaration as they are accessable everywhere, but if we need conditional use Expressions.
- ***Function Declaration:*** can be used before declaration, but does not pollute global scope in strict mode.
- ***Function Expressions:*** hoisted inside the block, does not pollute global scope.

17. **Arrow Function**
- let name = (p1, p2) => ...code...; p1 => {...}; () => {...};
- same as function expression
