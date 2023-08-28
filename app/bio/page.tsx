import type { Metadata } from "next"
import Image from "next/image"
import { RichText } from "@graphcms/rich-text-react-renderer"

import { client } from "@/lib/graphql-client"
import { bioQuery } from "@/lib/graphql-queries"
import { VideoPlayer } from "@/components/global/video-player"

export const revalidate = 60

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
    <section className="grid h-screen md:grid-cols-2">
      <div className="col-span-1 px-2.5 py-5 md:overflow-y-scroll md:p-10">
        <div className="prose prose-lg">
          <RichText content={about.ownerBio.raw.children} />
        </div>
        <h1 className="mt-5 font-serif text-2xl font-bold md:text-4xl">
          — {about.ownerName}
        </h1>

        <div className="my-10 aspect-video bg-blue-800">
          <VideoPlayer src={about.reelUrl} />
        </div>
      </div>
      <div className="relative col-span-1 row-start-1 md:row-start-auto md:overflow-y-hidden">
        <Image
          src={about.ownerPicture.url}
          alt={about.ownerPicture.alt}
          width={960}
          height={960}
          priority
          sizes="(min-width: 780px) 50vw, 100vw"
          className="h-auto w-full bg-blue-800 object-cover object-center"
        />
      </div>
    </section>
  )
}
