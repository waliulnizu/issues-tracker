
---

# 1️⃣ var, let, const এর difference

| Feature   | var            | let         | const       |
| --------- | -------------- | ----------- | ----------- |
| Scope     | Function scope | Block scope | Block scope |
| Reassign  | করা যায়        | করা যায়     | করা যায় না  |
| Redeclare | করা যায়        | করা যায় না  | করা যায় না  |

### Example

```javascript
var a = 10;
var a = 20;   // allowed

let b = 10;
b = 20;       // allowed

const c = 10;
c = 20;       // ❌ error
```

### Block scope example

```javascript
if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // works
console.log(y); // error
```

👉 `let` এবং `const` বেশি **modern এবং safe**।

---



# 2️⃣ Spread Operator (... )

Spread operator array বা object **copy বা expand** করতে ব্যবহার হয়।

### Array example

```javascript
const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];

console.log(arr2);
```

Output

```
[1,2,3,4,5]
```

### Object example

```javascript
const user = {name:"Nizu", age:25};

const newUser = {...user, country:"BD"};
```

Output

```
{name:"Nizu", age:25, country:"BD"}
```

👉 React state update এ খুব বেশি ব্যবহার হয়।

---



# 3️⃣ map(), filter(), forEach() difference

| Method    | কাজ                                     |
| --------- | --------------------------------------- |
| map()     | নতুন array return করে                   |
| filter()  | condition অনুযায়ী নতুন array return করে |
| forEach() | শুধু loop চালায়, কিছু return করে না     |

---

### map()

```javascript
const numbers = [1,2,3];

const result = numbers.map(n => n*2);

console.log(result);
```

Output

```
[2,4,6]
```

---

### filter()

```javascript
const numbers = [1,2,3,4];

const result = numbers.filter(n => n>2);
```

Output

```
[3,4]
```

---

### forEach()

```javascript
const numbers = [1,2,3];

numbers.forEach(n => {
  console.log(n);
});
```

👉 শুধু iterate করে।

---



# 4️⃣ Arrow Function

Short syntax দিয়ে function লেখার modern JavaScript পদ্ধতি।

### Normal function

```javascript
function add(a,b){
 return a+b;
}
```

### Arrow function

```javascript
const add = (a,b) => {
  return a+b;
};
```

Short version

```javascript
const add = (a,b) => a+b;
```

👉 React এ প্রায় সব জায়গায় arrow function ব্যবহার হয়।

---



# 5️⃣ Template Literals

Dynamic string বানানোর জন্য backtick `` ` ` `` ব্যবহার করা হয়।

### Old way

```javascript
const name = "Nizu";

console.log("My name is " + name);
```

### Template literal

```javascript
const name = "Nizu";

console.log(`My name is ${name}`);
```

Output

```
My name is Nizu
```

### Multi-line string

```javascript
const text = `
Hello
How are you
`;
```



---

 **Summary**

* `var / let / const` → variable declaration
* `...` → spread operator (copy/merge)
* `map / filter / forEach` → array methods
* `=>` → arrow function
* `` ` ${} ` `` → template literals

---


