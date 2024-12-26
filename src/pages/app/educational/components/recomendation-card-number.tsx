interface RecomendationCardNumberProps {
  number: string
}

export function RecomendationCardNumber({
  number,
}: RecomendationCardNumberProps) {
  return (
    <div className="relative -left-4 top-9 flex h-14 w-14 items-center justify-center rounded-full border-4 border-brown-400 bg-brown-700 p-4">
      <span className="text-5xl font-extrabold text-brown-50">{number}</span>
    </div>
  )
}
