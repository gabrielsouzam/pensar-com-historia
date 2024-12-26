import { HandPointing } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'

import { ChevronTop } from './chevron-top'

interface DescriptionButtonProps {
  title: string
  align?: 'left' | 'right'
}

export function DescriptionButton({ title, align }: DescriptionButtonProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const popupRef = useRef<HTMLDivElement>(null)

  function setPopUpVisibility() {
    setIsPopupVisible((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`relative flex w-[17rem] items-center justify-center rounded-full border-4 border-brown-700 bg-brown-400 px-8 py-3 ${
          align === 'left' ? 'left-16' : align === 'right' ? 'right-16' : ''
        }`}
      >
        <span className="text-2xl font-bold text-brown-50">{title}</span>
      </div>

      <button
        type="button"
        onClick={setPopUpVisibility}
        className={`relative top-[-1rem] flex h-8 w-8 items-center justify-center rounded-full border-4 border-brown-400 border-opacity-50 bg-brown-700 ${
          align === 'left' ? 'left-16' : align === 'right' ? 'right-16' : ''
        }`}
      >
        <HandPointing
          size={isPopupVisible ? 12 : 16}
          className="text-brown-50"
          weight="fill"
        />
      </button>

      {isPopupVisible && (
        <div
          ref={popupRef}
          className={`absolute top-[5.5rem] z-50 w-[20rem] rounded-lg bg-brown-800 p-4 shadow-lg ${
            align === 'left' ? 'left-10' : align === 'right' ? 'right-10' : ''
          }`}
        >
          <ChevronTop />
          <p className="text-brown-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            vitae sapiente facilis fuga earum ratione distinctio tempora quod!
            Obcaecati deserunt voluptatibus similique. Commodi eaque, fugiat
            perferendis fuga dolores exercitationem nesciunt.
          </p>
        </div>
      )}
    </div>
  )
}
