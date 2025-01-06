import { useState } from 'react'

export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleHide = () => {
    if (!visible) return;
    setVisible(false)
  }

  const handleShow = () => {
    if (visible) return;
    setVisible(true)
  }

  return { visible, handleHide, handleShow }
}