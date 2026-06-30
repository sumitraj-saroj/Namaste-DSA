# Recursion 

## What is Recursion?
Recursion is a programming technique where a **function calls itself** to solve a **smaller version of the same problem**.

Instead of solving a big problem at once, recursion:
- Breaks it into smaller sub-problems
- Solves them one by one
- Combines the results

---

## Two Parts of Recursion

### 1️⃣ Base Case
- The **stop condition**
- Decides **when recursion should stop**
- Prevents infinite calls

> Without a base case → **Infinite recursion → Stack Overflow**

---

### 2️⃣ Recursive Case
- The part where the function **calls itself**
- The input must move **closer to the base case**

---

## Simple Example (Infinite Recursion ❌)

```js
function greet() {
  console.log("Sumit");
  greet(); // calls itself forever
}
```

---

## Correct Example (With Base Case ✅)

```js
function fun(num) {
  if (num === 0) return;   // Base Case
  console.log(num);
  fun(num - 1);            // Recursive Case
}

let a = 5;
fun(a);
```

### Output:
```
5
4
3
2
1
```

---

## Recursion & Call Stack 🧠

Each recursive call is stored in the **call stack**.

Example flow:
```
fun(3)
 └── fun(2)
      └── fun(1)
           └── fun(0)
```

---

## Common Mistakes 🚨
1. Missing base case  
2. Not simplifying input  
3. Too deep recursion  
4. Ignoring time complexity  
5. Forgetting return values  

---

## Real-Life Examples 🌍
- Queue of people
- Comment threads
- Organizational hierarchy
- Folder structures

---

## When to Use Recursion ✅
- Trees & Graphs
- Backtracking
- Dynamic Programming
- Divide & Conquer

---

## Recursion vs Loop

| Recursion | Loop |
|---------|------|
| Uses call stack | Uses iteration |
| Risk of stack overflow | Safer |
| Cleaner for trees | Faster for simple tasks |

---

## Key Takeaways
- Always write base case
- Reduce problem size
- Visualize call stack

---



