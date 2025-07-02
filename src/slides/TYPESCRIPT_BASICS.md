# 📘 TypeScript Basics voor Beginners

---

## 🖥️ Wat is TypeScript?

- **TypeScript** is een superset van JavaScript met extra mogelijkheden, zoals types.
- Het helpt fouten te voorkomen door je code beter voorspelbaar te maken.

## 📜 Basisconcepten

### 1. **Variabelen**

```typescript
let naam: string = "Tim";
let leeftijd: number = 25;
let isIngeschreven: boolean = true;
```

### 2. **Functies**

```typescript
function zegHallo(naam: string): string {
  return `Hallo, ${naam}!`;
}

let begroeting = zegHallo("Alice");
```

### 3. **Arrays**

```typescript
let nummers: number[] = [1, 2, 3, 4];
let namen: string[] = ["Alice", "Bob", "Charlie"];
```

### 4. **Objecten**

```typescript
let student: { naam: string; leeftijd: number } = {
  naam: "Bob",
  leeftijd: 20,
};
```

## 🧰 Interfaces

- **Interfaces** definiëren hoe een object moet worden gestructureerd.
- Ze helpen om consistente objectstructuren te maken.

### Gebruik van een Interface

```typescript
interface Student {
  naam: string;
  leeftijd: number;
  isGeactiveerd?: boolean; // Optionele eigenschap
}

let nieuweStudent: Student = {
  naam: "Charlie",
  leeftijd: 22,
};
```

- Interfaces kunnen ook worden uitgebreid:

```typescript
interface Persoon {
  naam: string;
}

interface Student extends Persoon {
  leeftijd: number;
  opleiding: string;
}

let student: Student = {
  naam: "Dana",
  leeftijd: 19,
  opleiding: "Informatica",
};
```

## 🛠️ Toepassen in Project

1. **Definieer types voor je componenten**:
   - Gebruik interfaces om props en state te typeren.
   
2. **Consistency**:
   - Zorg ervoor dat je gegevens consistent en voorspelbaar zijn.

3. **Type Veiligheid**:
   - Voorkom runtime fouten door vooraf typefouten te ontdekken.

### ✨ Voorbeeld in een React Component

```typescript
interface Props {
  titel: string;
  items: string[];
}

const LijstComponent: React.FC<Props> = ({ titel, items }) => (
  <div>
    <h1>{titel}</h1>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
```