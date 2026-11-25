import { useCallback, useState } from 'react'
import { Body, Eyebrow, Page, SkipButton, Title } from './App.styles.ts'
import { ConfirmDialog } from './components/ConfirmDialog/index.ts'
import { Puzzle } from './components/Puzzle/index.ts'
import { Reveal } from './components/Reveal/index.ts'
import { config } from './config.ts'
import GlobalStyle from './GlobalStyle.ts'

export default function App() {
  const [revealed, setRevealed] = useState(false)
  const [misses, setMisses] = useState(0)
  const [confirmingGiveUp, setConfirmingGiveUp] = useState(false)
  const handleSolved = useCallback(() => setRevealed(true), [])
  const handleMiss = useCallback(() => setMisses((n) => n + 1), [])
  const { intro, giveUp } = config

  return (
    <>
      <GlobalStyle />
      {revealed ? (
        <Reveal />
      ) : (
        <Page>
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <Title>{intro.title}</Title>
          <Body>{intro.body}</Body>
          <Puzzle onSolved={handleSolved} onMiss={handleMiss} />
          {misses >= config.skipAfterMisses && (
            <SkipButton type="button" onClick={() => setConfirmingGiveUp(true)}>
              {intro.skip}
            </SkipButton>
          )}
          <ConfirmDialog
            open={confirmingGiveUp}
            title={giveUp.title}
            confirmLabel={giveUp.confirm}
            cancelLabel={giveUp.cancel}
            onConfirm={handleSolved}
            onCancel={() => setConfirmingGiveUp(false)}
          />
        </Page>
      )}
    </>
  )
}
