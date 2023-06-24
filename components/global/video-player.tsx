"use client"

import MuxVideo from "@mux/mux-video-react"

export const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <MuxVideo
      src={src}
      width={1920}
      height={1080}
      metadata={{
        video_title: "Juan Serrano Studio",
      }}
      controls
    />
  )
}
