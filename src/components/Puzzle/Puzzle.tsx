import { useEffect, useRef, useState } from 'react'
import { config } from '../../config.ts'
import {
  countCorrect,
  findHint,
  isSolved,
  makeShuffled,
  swap,
  tileBackgroundPosition,
} from '../../utils/puzzle.ts'
import { Board, Quip, Tile } from './Puzzle.styles.ts'
import type { PuzzleProps } from './Puzzle.types.ts'

const SOLVED_DELAY_MS = 1400

export default function Puzzle({ onSolved }: PuzzleProps) {
  const [tiles, setTiles] = useState(() => makeShuffled())
  const [selected, setSelected] = useState<number | null>(null)
  const [hint, setHint] = useState<[number, number] | null>(null)
  const [quip, setQuip] = useState(config.quips.start)
  const [done, setDone] = useState(false)
  const quipCount = useRef(0)

  // Nudge a stuck guest: after a quiet spell, pulse a pair of tiles that fixes one.
  useEffect(() => {
    if (done) return undefined
    setHint(null)
    const id = setTimeout(() => setHint(findHint(tiles)), config.hintDelayMs)
    return () => clearTimeout(id)
  }, [tiles, selected, done])

  // Let the finished picture sit for a moment before the reveal.
  useEffect(() => {
    if (!done) return undefined
    const id = setTimeout(onSolved, SOLVED_DELAY_MS)
    return () => clearTimeout(id)
  }, [done, onSolved])

  const handleTap = (pos: number) => {
    if (done) return
    if (selected === null) {
      setSelected(pos)
      return
    }
    if (selected === pos) {
      setSelected(null)
      return
    }

    const next = swap(tiles, selected, pos)
    const improved = countCorrect(next) > countCorrect(tiles)
    setTiles(next)
    setSelected(null)

    if (isSolved(next)) {
      setQuip(config.quips.solved)
      setDone(true)
      return
    }
    const list = improved ? config.quips.good : config.quips.meh
    setQuip(list[quipCount.current % list.length])
    quipCount.current += 1
  }

  return (
    <>
      <Board $done={done} role="group" aria-label="Picture puzzle">
        {tiles.map((id, pos) => (
          <Tile
            key={id}
            type="button"
            $done={done}
            $correct={!done && id === pos}
            $selected={selected === pos}
            $hint={hint !== null && hint.includes(pos)}
            aria-label={`Tile ${pos + 1}${selected === pos ? ', selected' : ''}`}
            aria-pressed={selected === pos}
            onClick={() => handleTap(pos)}
            style={{
              backgroundImage: `url(${config.image})`,
              backgroundPosition: tileBackgroundPosition(id),
            }}
          />
        ))}
      </Board>
      <Quip aria-live="polite">{quip}</Quip>
    </>
  )
}
