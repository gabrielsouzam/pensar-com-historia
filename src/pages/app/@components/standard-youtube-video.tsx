interface StandardYouTubeVideoProps {
  videoId: string
  index: number
  title: string
}

export function StandardYouTubeVideo({
  videoId,
  index,
  title,
}: StandardYouTubeVideoProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <ol
        className="list-outside list-decimal px-8 text-justify text-2xl font-semibold"
        start={index}
      >
        <li className="h-auto pl-4">{title}</li>
      </ol>

      <div className="h-[20.93rem] w-full overflow-hidden rounded-2xl">
        <iframe
          width="479"
          height="335"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
