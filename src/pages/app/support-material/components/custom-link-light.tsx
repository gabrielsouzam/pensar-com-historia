import { Link } from '@phosphor-icons/react'

interface CustomLinkLightProps {
  title: string
  link: string
}

export function CustomLinkLight({ title, link }: CustomLinkLightProps) {
  return (
    <div className="flex items-start gap-2">
      <Link weight="light" className="shrink-0 text-2xl text-brown-50" />
      <a
        href={link}
        className="text-normal text-2xl underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  )
}
