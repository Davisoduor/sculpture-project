import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sculptureList = require('./data.js');

const sculptureListLengths = {};

for (let i = 0; i < sculptureList.length; i++) {
  const lengthObj = {};

  for (const key in sculptureList[i]) {
    lengthObj[key] = sculptureList[i][key].length;
  }

  Object.assign(sculptureListLengths, { [i]: lengthObj });
}

console.log(sculptureListLengths);
