interface YouTubeVideoProps {
  videoId: string
}

export function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className="flex items-center justify-center">
      <iframe
        width="1205"
        height="670"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
