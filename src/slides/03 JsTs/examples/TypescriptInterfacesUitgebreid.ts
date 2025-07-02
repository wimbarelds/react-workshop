interface Student {
  naam: string;
  leeftijd: number;
  isGeactiveerd?: boolean; // Optionele eigenschap
}

let nieuweStudent: Student = {
  naam: 'Charlie',
  leeftijd: 22,
};

// Interfaces kunnen ook worden uitgebreid:
interface Persoon {
  naam: string;
}

interface StudentUitgebreid extends Persoon {
  leeftijd: number;
  opleiding: string;
}

let student: StudentUitgebreid = {
  naam: 'Dana',
  leeftijd: 19,
  opleiding: 'Informatica',
};
