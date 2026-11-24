import { useEffect, useId, useRef } from 'react'
import { PrimaryButton, TextButton } from '../ui/index.ts'
import { Actions, Dialog, Message, Panel, Title } from './ConfirmDialog.styles.ts'
import type { ConfirmDialogProps } from './ConfirmDialog.types.ts'

// Built on the native <dialog>, which traps focus and makes the page behind inert.
export default function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <Dialog
      ref={ref}
      aria-labelledby={titleId}
      // Escape: let React state close it instead of the browser, so they stay in sync.
      onCancel={(e) => {
        e.preventDefault()
        onCancel()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel()
      }}
    >
      <Panel>
        <Title id={titleId}>{title}</Title>
        <Message>{message}</Message>
        <Actions>
          <PrimaryButton type="button" autoFocus onClick={onCancel}>
            {cancelLabel}
          </PrimaryButton>
          <TextButton type="button" onClick={onConfirm}>
            {confirmLabel}
          </TextButton>
        </Actions>
      </Panel>
    </Dialog>
  )
}
