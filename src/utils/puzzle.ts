// Pure puzzle logic (no React), so it's easy to test.
// A board is an array where board[position] = id of the tile sitting there.
// Tile ids are 0..SIZE-1; the solved board is [0, 1, 2, ...].

export const COLS = 3
export const ROWS = 3
export const SIZE = COLS * ROWS

export type Board = number[]

export const solvedBoard = (): Board => Array.from({ length: SIZE }, (_, i) => i)

export const countCorrect = (tiles: Board): number =>
  tiles.reduce((n, id, pos) => n + (id === pos ? 1 : 0), 0)

export const isSolved = (tiles: Board): boolean => countCorrect(tiles) === tiles.length

export function swap(tiles: Board, a: number, b: number): Board {
  const next = tiles.slice()
  ;[next[a], next[b]] = [next[b], next[a]]
  return next
}

// Starts solved and applies a handful of random swaps, so a guest can always
// finish in at most `swaps` moves. Re-rolls until enough tiles look wrong.
export function makeShuffled(swaps = 5, minWrong = 5, rand: () => number = Math.random): Board {
  for (;;) {
    let tiles = solvedBoard()
    for (let s = 0; s < swaps; s += 1) {
      const a = Math.floor(rand() * SIZE)
      let b = Math.floor(rand() * SIZE)
      while (b === a) b = Math.floor(rand() * SIZE)
      tiles = swap(tiles, a, b)
    }
    if (SIZE - countCorrect(tiles) >= minWrong) return tiles
  }
}

// Returns [posA, posB]: swapping these two positions fixes tile posA.
// Returns null when the board is already solved.
export function findHint(tiles: Board): [number, number] | null {
  const wrongPos = tiles.findIndex((id, pos) => id !== pos)
  if (wrongPos === -1) return null
  return [wrongPos, tiles.indexOf(wrongPos)]
}

// CSS background-position (in %) that shows tile `id` of the full image.
export function tileBackgroundPosition(id: number): string {
  const col = id % COLS
  const row = Math.floor(id / COLS)
  const x = COLS > 1 ? (col * 100) / (COLS - 1) : 0
  const y = ROWS > 1 ? (row * 100) / (ROWS - 1) : 0
  return `${x}% ${y}%`
}
