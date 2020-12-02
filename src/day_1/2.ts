'use strict';
import { promises as fs } from 'fs';

const FILE_PATH = 'src/day_1/file.txt';

const SUM = 2020;

const compute = async () => {
  const data = await fs.readFile(FILE_PATH, 'utf-8')
  const numbers = data.split('\n').map(str => Number.parseInt(str));

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i; j < numbers.length; j += 1) {
      for (let k = j; k < numbers.length; k += 1) {
        if (numbers[i] + numbers[j] + numbers[k] == SUM) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }

}

Promise.resolve(compute()).then(([number0, number1, number2]) => console.log(number0 * number1 * number2))
