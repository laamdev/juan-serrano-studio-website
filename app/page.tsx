import Image from "next/image"

import { client } from "@/lib/graphql-client"
import { homePageQuery } from "@/lib/graphql-queries"
import { Card } from "@/components/projects/card"

export const revalidate = 60

const getHomePage = async () => {
  const { homePages }: { homePages: any } = await client.request(homePageQuery)

  return homePages[0]
}

export default async function Home() {
  const { featuredProjects } = await getHomePage()

  return (
    <div className="grid grid-rows-2 md:h-screen md:grid-cols-2 md:grid-rows-1">
      <div className="relative col-span-1 mx-auto flex w-full items-center justify-center">
        <div>
          <h1 className="font-serif text-7xl md:text-9xl">
            <span className="block font-bold text-stone-900">Juan</span>
            <span className="block italic text-blue-700">Serrano</span>
            <span className="block font-bold text-stone-900">Studio</span>
          </h1>
          <h2 className="mt-2.5 text-lg text-stone-700 md:mt-5 md:text-2xl">
            Muebles Artesanos
          </h2>
        </div>
        <Image
          src="/images/drag-icon.png"
          alt="Drag icon."
          width={96}
          height={96}
          sizes="96px"
          priority
          className="absolute -bottom-10 right-5 z-50 block h-20 w-20 animate-spin-slow rounded-full bg-blue-800 md:hidden"
        />
      </div>

      <div className="relative col-span-1 flex w-full gap-x-5 overflow-x-auto md:flex-col md:gap-y-10 md:overflow-y-auto md:overflow-x-hidden">
        {featuredProjects.map((project: any, projectIdx: number) => (
          <Card key={projectIdx} project={project} index={projectIdx} />
        ))}
      </div>

      <Image
        src="/images/scroll-icon.png"
        alt="Scroll icon."
        width={96}
        height={96}
        sizes="96px"
        priority
        className="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow rounded-full bg-blue-800 md:block"
      />
    </div>
  )
}
