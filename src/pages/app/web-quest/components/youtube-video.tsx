interface YouTubeVideoProps {
  videoId: string
}

export function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[41.87rem] w-[75.31rem] overflow-hidden rounded-2xl">
        <iframe
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
