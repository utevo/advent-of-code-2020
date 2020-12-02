'use strict';
import { count } from 'console';
import fs from 'fs';

const FILE_PATH = 'src/day_2/file.txt';

const SUM = 2020;

interface Policy {
  range: [number, number]
  letter: string
}

interface Row {
  policy: Policy
  password: string
}

const checkRow = ({policy, password}: Row): boolean => {
  let numberOfMatch = 0
  if (password[policy.range[0] - 1] === policy.letter) numberOfMatch += 1
  if (password[policy.range[1] - 1] === policy.letter) numberOfMatch += 1
  if (numberOfMatch === 1) return true
  return false
}

const parseRowAaString = (rowAsString: string): Row  => {
  const [rangeAsString, letterDirty, password] = rowAsString.split(' ')
  const range = rangeAsString.split('-').map(l => Number.parseInt(l)) as [number, number]
  const letter = letterDirty[0]

  const policy: Policy = {
    range,
    letter,
  }

  return {
    policy,
    password,
  }
}

const compute = () => {
  const data = fs.readFileSync(FILE_PATH, 'utf-8')
  const rowsAsString = data.split('\n').filter(str => str !== '');
  const rows: Row[] = rowsAsString.map(ras => parseRowAaString(ras))
  return rows.filter(row => checkRow(row)).length
}

console.log(compute())

