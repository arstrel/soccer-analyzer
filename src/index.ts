import fs from 'fs';

/*
Issues:
1. Magic strings comparisons
2. Source of data is hardcoded
3. Data array is all strings, even though it might have numbers in it
4. Variable named after a specific team
5. Analisis type is fixed
6. No ability to output the report in different formats
*/

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row): string[] => row.split(','));

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
