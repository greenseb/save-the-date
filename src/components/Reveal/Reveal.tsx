import { useMemo } from 'react'
import { config } from '../../config.ts'
import { downloadIcs, formatDateRange } from '../../utils/calendar.ts'
import { Photo } from '../ui/index.ts'
import {
  CalendarButton,
  Confetti,
  DateText,
  Footer,
  Heading,
  Names,
  Note,
  Wrap,
} from './Reveal.styles.ts'
import type { ConfettiPiece } from './Reveal.types.ts'

const PIECES = ['💕', '💍', '✨', '🥂', '💖']

export default function Reveal() {
  const pieces = useMemo<ConfettiPiece[]>(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        char: PIECES[i % PIECES.length],
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 4 + Math.random() * 4,
        size: 18 + Math.random() * 18,
      })),
    [],
  )

  const { names, date, eventTitle, image, reveal } = config

  return (
    <>
      <Confetti aria-hidden="true">
        {pieces.map((p) => (
          <span
            key={p.id}
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            {p.char}
          </span>
        ))}
      </Confetti>

      <Wrap>
        <Photo>
          <img src={image} alt={`${names[0]} and ${names[1]}`} />
        </Photo>
        <Heading>{reveal.heading}</Heading>
        <Names>
          {names[0]} &amp; {names[1]} 💍
        </Names>
        <DateText>{formatDateRange(date)}</DateText>
        <Note>{reveal.note}</Note>
        <CalendarButton type="button" onClick={() => downloadIcs(date, eventTitle)}>
          {reveal.calendar}
        </CalendarButton>
        <Footer>{reveal.footer}</Footer>
      </Wrap>
    </>
  )
}
