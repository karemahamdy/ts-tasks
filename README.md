# 📘 دليل TypeScript الكامل للمبتدئين

هذا الدليل يغطي كل الجوانب المهمة والأساسية في TypeScript، خاصة للمطورين القادمين من خلفية JavaScript والمهتمين بتطوير الواجهة الأمامية (Front-End). كل قسم يحتوي على شرح، مفاهيم، وأمثلة كود.

---

## 🔹 ما هو TypeScript?
TypeScript هي لغة برمجة تُبنى على JavaScript وتضيف نظام أنواع (Type System) ثابت. تُستخدم لاكتشاف الأخطاء أثناء التطوير وتجعل الكود أكثر وضوحًا وتنظيمًا.

---

## 🔹 تثبيت TypeScript
```bash
npm install -g typescript
```

لتحويل ملف `.ts` إلى `.js`:
```bash
tsc index.ts
```

---

## 🔹 الأنواع (Types)

### الأنواع البدائية:
```ts
let age: number = 25;
let name: string = 'Ali';
let isStudent: boolean = true;
```

### المصفوفات:
```ts
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ['apple', 'banana'];
```

### Tuples:
```ts
let user: [string, number] = ['Ahmed', 30];
```

### Any:
```ts
let random: any = 5;
random = 'hello';
```

### Union:
```ts
let id: number | string = 101;
id = 'ABC';
```

### Literal Types:
```ts
let direction: 'left' | 'right';
direction = 'left';
```

### Enum:
```ts
enum Status {
  Success,
  Failure,
  Pending
}
let current: Status = Status.Success;
```

---

## 🔹 Type Aliases و Interfaces

### Type Alias:
```ts
type Point = {
  x: number;
  y: number;
};
```

### Interface:
```ts
interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // خاصية اختيارية
}
```

### متى أستخدم interface ومتى type؟
- استخدم `interface` عندما تكون تعمل مع كائنات (objects) وترغب في الاستفادة من `extends`.
- استخدم `type` عندما تحتاج مزيداً من المرونة والتعبير عن أنواع مركبة مثل Union و Tuple.

---

## 🔹 الدوال (Functions)
```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

const add = (a: number, b: number): number => a + b;
```

### معاملات اختيارية:
```ts
function log(message: string, user?: string) {
  console.log(user ? `${user}: ${message}` : message);
}
```

---

## 🔹 Classes و OOP
```ts
class Person {
  constructor(public name: string, private age: number) {}

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

### الوراثة:
```ts
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
}
```

---

## 🔹 Generics
```ts
function identity<T>(value: T): T {
  return value;
}

let result = identity<string>('hello');
```

### متى أستخدم Generics؟
- عندما ترغب في العمل مع أنواع مختلفة مع احتفاظ بنفس البنية.
- في الدوال العامة (Generic Functions) والكلاسات.
- لتفادي `any` والاحتفاظ بالأنواع الصحيحة.

---

## 🔹 Type Narrowing (التضييق)
```ts
function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

---

## 🔹 Type Assertions
```ts
let input = document.getElementById('username') as HTMLInputElement;
input.value = 'test';
```

---

## 🔹 Modules
```ts
// math.ts
export function sum(a: number, b: number): number {
  return a + b;
}

// index.ts
import { sum } from './math';
console.log(sum(2, 3));
```

---

## 🔹 TypeScript مع React
```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

---

## 🔹 أنواع خاصة في React:
- `useState<Type>()`
- `React.ChangeEvent<HTMLInputElement>`
- `React.FC<Props>`

---

## 📝 نصائح عامة:
- دايمًا عرِف أنواع المتغيرات بوضوح.
- تجنَّب استخدام `any` إلا عند الضرورة.
- استخدم `interface` للكائنات المعقدة و `type` للتحكم المرن.

---
