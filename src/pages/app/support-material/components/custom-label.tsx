interface CustomLabelProps {
  title: string
}

export function CustomLabel({ title }: CustomLabelProps) {
  return (
    <div className="rounded-full bg-brown-700 px-2 py-1">
      <span className="text-sm font-normal">{title}</span>
    </div>
  )
}
