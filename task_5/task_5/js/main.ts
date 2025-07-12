// Define a nominal type for MajorCredits
interface MajorCredits {
  credits: number;
  __brand: 'major';
}

// Define a nominal type for MinorCredits
interface MinorCredits {
  credits: number;
  __brand: 'minor';
}

// Function to add MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'major' };
}

// Function to add MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'minor' };
}

// 👇 Optional test output
const major1: MajorCredits = { credits: 3, __brand: 'major' };
const major2: MajorCredits = { credits: 4, __brand: 'major' };

const minor1: MinorCredits = { credits: 1, __brand: 'minor' };
const minor2: MinorCredits = { credits: 2, __brand: 'minor' };

console.log('Major:', sumMajorCredits(major1, major2));
console.log('Minor:', sumMinorCredits(minor1, minor2));
