#!/usr/bin/env node
'use strict'

const cows = require('cows')()
const cow = require('unique-random-array')(cows)
const stdout = process.stdout
let lastCow
let total = 0

function printCow () {
  let current = cow()
  let lines = current.split('\n')
  let i

  stdout.moveCursor(0, -total)

  for (i = 0; i < lines.length; i++) {
    stdout.clearLine()
    stdout.write(lines[i])
    if (i >= total) {
      stdout.write('\n')
      total++
    } else {
      stdout.moveCursor(-lines[i].length, 1)
    }
  }

  for (; i < total; i++) {
    stdout.clearLine()
    stdout.moveCursor(0, 1)
  }
}

module.exports = printCow

if (require.main = module) {
  setInterval(printCow, 2000)
  printCow()
}
