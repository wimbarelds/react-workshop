const isWeekend = true;
const hasTime = false;

if (isWeekend && hasTime) {
  console.log("Time to relax!");
}

if (isWeekend || hasTime) {
    console.log("At least it's the weekend or I have time!");
}

if (!hasTime) {
    console.log("No time to waste!");
}
