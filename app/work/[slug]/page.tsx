import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { RichText } from "@graphcms/rich-text-react-renderer"

import { client } from "@/lib/graphql-client"
import { projectQuery, projectsQuery } from "@/lib/graphql-queries"
import { DetailContainer } from "@/components/project/detail-container"
import { PriceContainer } from "@/components/project/price-container"
import { StockContainer } from "@/components/project/stock-container"

export const revalidate = 60

export async function generateStaticParams() {
  const { projects }: { projects: any[] } = await client.request(projectsQuery)
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const getProjectBySlug = async (params: any) => {
  const { project }: { project: any } = await client.request(projectQuery, {
    slug: params.slug,
  })

  return project
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const project = await getProjectBySlug(params)
  if (!project) {
    return
  }

  const ogImage = project.images[0].url
    ? `https://www.juanserrano.studio/${project.images[0].url}`
    : `https://www.juanserrano.studio/api/og?title=${project.title}`

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `https://www.juanserrano.studio/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [ogImage],
    },
  }
}

export default async function WorkPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = await getProjectBySlug(params)
  if (!project) notFound()

  return (
    <div className="grid md:h-screen md:grid-cols-2 md:grid-rows-1">
      <div className="relative col-span-1 mb-10 flex w-full overflow-y-auto px-5 py-10">
        <div>
          <h1 className="font-serif text-5xl font-bold md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-2.5 text-xl text-stone-700 md:text-2xl">
            {project.summary}
          </p>
          <hr className="mt-5 border-t-2 border-blue-800" />

          <DetailContainer label="Materiales" value={project.materials} />
          {project.price && (
            <PriceContainer
              label="Precio"
              value={project.price}
              emailAddress="jserranopalencia@gmail.com"
              emailSubject={`Encargar ${project.title}.`}
              emailBody={`Hola, estoy interesado en encargar la construcción de un ${project.title}.`}
              emailButtonLabel="Encargar"
            />
          )}

          <DetailContainer label="Año" value={project.year} />
          {project.stock && (
            <StockContainer
              label="Stock"
              value={project.stock}
              emailAddress="jserranopalencia@gmail.com"
              emailSubject={`Reservar ${project.title}.`}
              emailBody={`Hola, estoy interesado en reservar una de las unidades de ${project.title} que está en stock.`}
              emailButtonLabel="Reservar"
            />
          )}

          {project.description && (
            <>
              <hr className="mt-5 border-t-2 border-blue-800" />

              <div>
                {project.description && (
                  <div className="prose prose-lg mt-10">
                    <RichText content={project.description.raw.children} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Image
        src="/images/drag-icon.png"
        alt="Drag icon."
        width={96}
        height={96}
        sizes="96px"
        priority
        className="absolute right-5 top-5 z-50 block h-20 w-20 animate-spin-slow rounded-full bg-blue-800 md:hidden"
      />

      <div className="relative col-span-1 row-start-1 flex gap-x-5 overflow-x-auto md:row-start-auto md:flex-col md:gap-y-10 md:overflow-y-auto md:overflow-x-hidden">
        {project.images.map(
          (img: { url: string; alt: string }, imgIdx: number) => (
            <Image
              key={imgIdx}
              src={img.url}
              alt={img.alt}
              width={950}
              height={950}
              // // sizes="(min-width: 780px) 50vw, 100vw"
              priority={imgIdx === 0 ? true : false}
              className="h-auto w-screen bg-blue-800 object-cover md:w-full md:object-contain"
            />
          )
        )}
      </div>

      <Image
        src="/images/scroll-icon.png"
        alt="Scroll icon."
        width={96}
        height={96}
        priority
        sizes="96px"
        className="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow rounded-full bg-blue-800 md:block"
      />
    </div>
  )
}
