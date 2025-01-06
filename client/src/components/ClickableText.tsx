interface ClickableTextProps {
  text: string
  onClick: () => void
}

export const ClickableText = ({ text, onClick }: ClickableTextProps) => {
  return (
    <span
      className="underline text-blue-400"
      onClick={onClick}
      style={{ cursor: "pointer" }}>
      {text}
    </span>
  )
}