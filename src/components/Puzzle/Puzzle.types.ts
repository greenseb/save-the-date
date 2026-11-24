export interface PuzzleProps {
  onSolved: () => void
  onMiss?: () => void // called when a swap doesn't put any more tiles in place
}
