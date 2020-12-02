'use strict';
import { promises as fs } from 'fs';

const FILE_PATH = 'src/day_1/file.txt';

const SUM = 2020;

const compute = async () => {
  const data = await fs.readFile(FILE_PATH, 'utf-8')
  const numbers = data.split('\n').map(str => Number.parseInt(str));

  const isNumberExist = new Set(numbers)

  for (const number of isNumberExist) {
    if (isNumberExist.has(SUM - number)) {
      return [number, SUM - number]
    }
  }
}

Promise.resolve(compute()).then(([number, otherNumber]) => console.log(number * otherNumber))
