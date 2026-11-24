import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  SIZE,
  countCorrect,
  findHint,
  isSolved,
  makeShuffled,
  solvedBoard,
  swap,
  tileBackgroundPosition,
} from './puzzle.ts'
import { buildIcs, formatDateRange } from './calendar.ts'

test('makeShuffled is never solved and always has a valid permutation', () => {
  for (let i = 0; i < 500; i += 1) {
    const tiles = makeShuffled()
    assert.equal(isSolved(tiles), false)
    assert.deepEqual(
      [...tiles].sort((a, b) => a - b),
      solvedBoard(),
    )
    assert.ok(SIZE - countCorrect(tiles) >= 5)
  }
})

test('following hints always solves the puzzle within 5 swaps', () => {
  for (let i = 0; i < 500; i += 1) {
    let tiles = makeShuffled()
    let moves = 0
    let hint = findHint(tiles)
    while (hint) {
      tiles = swap(tiles, hint[0], hint[1])
      moves += 1
      assert.ok(moves <= 5, 'took too many moves')
      hint = findHint(tiles)
    }
    assert.ok(isSolved(tiles))
  }
})

test('findHint returns null on a solved board', () => {
  assert.equal(findHint(solvedBoard()), null)
})

test('tileBackgroundPosition maps corners correctly for a 3x3 grid', () => {
  assert.equal(tileBackgroundPosition(0), '0% 0%')
  assert.equal(tileBackgroundPosition(2), '100% 0%')
  assert.equal(tileBackgroundPosition(4), '50% 50%')
  assert.equal(tileBackgroundPosition(8), '100% 100%')
})

test('formatDateRange', () => {
  // The comma after the weekday varies between ICU versions, so allow either.
  assert.match(
    formatDateRange({
      start: { year: 2029, month: 5, day: 25 },
      end: { year: 2029, month: 5, day: 28 },
    }),
    /^Friday,? 25th May – Monday,? 28th May 2029$/,
  )
  assert.match(
    formatDateRange({
      start: { year: 2029, month: 5, day: 25 },
      end: { year: 2029, month: 5, day: 25 },
    }),
    /^Friday,? 25th May 2029$/,
  )
})

test('buildIcs covers the whole range, end exclusive', () => {
  const ics = buildIcs(
    { start: { year: 2029, month: 12, day: 30 }, end: { year: 2029, month: 12, day: 31 } },
    'Test',
  )
  assert.match(ics, /DTSTART;VALUE=DATE:20291230/)
  assert.match(ics, /DTEND;VALUE=DATE:20300101/)
  assert.match(ics, /SUMMARY:Test/)
})

test('formatDateRange uses the right ordinal suffixes', () => {
  const day = (d: number) =>
    formatDateRange({
      start: { year: 2029, month: 5, day: d },
      end: { year: 2029, month: 5, day: d },
    })
  assert.match(day(1), /1st May/)
  assert.match(day(2), /2nd May/)
  assert.match(day(3), /3rd May/)
  assert.match(day(11), /11th May/)
  assert.match(day(22), /22nd May/)
})
