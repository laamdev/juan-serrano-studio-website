import type { Metadata } from "next"
import Image from "next/image"
import { RichText } from "@graphcms/rich-text-react-renderer"

import { client } from "@/lib/graphql-client"
import { bioQuery } from "@/lib/graphql-queries"
import { VideoPlayer } from "@/components/global/video-player"

export const metadata: Metadata = {
  title: "Bio",
}

const getBioPage = async () => {
  const { infos }: { infos: any } = await client.request(bioQuery)

  return infos[0]
}

export default async function BioPage() {
  const { about } = await getBioPage()

  return (
    <section className="mx-auto grid h-screen grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <div className="col-span-1 px-2.5 py-5 md:overflow-y-scroll md:p-10">
        <div className="prose">
          <RichText content={about.ownerBio.raw.children} />
        </div>
        <h1 className="mt-5 font-serif text-2xl font-bold md:text-4xl">
          — {about.ownerName}
        </h1>

        <div className="mt-10 pb-20 md:pb-10">
          <VideoPlayer src="https://res.cloudinary.com/brother-sailor/video/upload/v1687543184/Juan%20Serrano%20Studio/muebles_fqdjpe.mp4" />
        </div>
      </div>
      <div className="relative col-span-1 row-start-1 md:row-start-auto">
        <Image
          src={about.ownerPicture.url}
          alt={about.ownerPicture.alt}
          fill
          className="object-cover object-center bg-blue-500"
        />
      </div>
    </section>
  )
}
