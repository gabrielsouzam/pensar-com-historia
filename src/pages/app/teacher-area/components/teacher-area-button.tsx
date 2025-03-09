import { HandPointing } from '@phosphor-icons/react'
import { useRef } from 'react'

interface TeacherAreaButtonProps {
  title: string
  selectedArea: string | null
  setSelectedArea: (area: string | null) => void
}

export function TeacherAreaButton({
  title,
  selectedArea,
  setSelectedArea,
}: TeacherAreaButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isActive = selectedArea === title

  function handleClick() {
    setSelectedArea(isActive ? null : title)
  }

  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        ref={buttonRef}
        onClick={handleClick}
        className={`relative flex h-28 w-[20rem] items-center justify-center rounded-full border-4 border-brown-700 px-8 py-4 transition-all ${isActive ? 'bg-brown-800 text-brown-50' : 'bg-brown-400 text-brown-900'}`}
      >
        <span className="text-center text-2xl font-semibold text-brown-50">
          {title}
        </span>
      </button>

      {!isActive && (
        <div className="relative left-28 top-[-1rem] flex h-8 w-8 items-center justify-center rounded-full border-4 border-brown-400 border-opacity-50 bg-brown-700">
          <HandPointing size={16} className="text-brown-50" weight="fill" />
        </div>
      )}
    </div>
  )
}
