import { useCallback, useState } from 'react';
import { Body, Eyebrow, Page, Prompt, SkipButton, Title } from './App.styles.ts';
import { Puzzle } from './components/Puzzle/index.ts';
import { Reveal } from './components/Reveal/index.ts';
import { config } from './config.ts';
import GlobalStyle from './GlobalStyle.ts';

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const handleSolved = useCallback(() => setRevealed(true), []);
  const { intro } = config;

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
          <Puzzle onSolved={handleSolved} />
          <Prompt>{intro.prompt}</Prompt>
          <SkipButton type="button" onClick={handleSolved}>
            {intro.skip}
          </SkipButton>
        </Page>
      )}
    </>
  );
}
