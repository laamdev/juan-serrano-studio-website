import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

import { client } from "@/lib/graphql-client"
import { projectQuery, projectsQuery } from "@/lib/graphql-queries"
import { DetailContainer } from "@/components/project/detail-container"
import { PriceContainer } from "@/components/project/price-container"
import { StockContainer } from "@/components/project/stock-container"

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
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
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
      description: project.description,
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
    <section className="mx-auto flex flex-col-reverse gap-y-5 pb-10 md:h-full md:flex-row md:gap-y-0 md:pb-0">
      <Image
        src="/images/scroll-icon.png"
        alt="Scroll icon."
        width={560}
        height={560}
        className="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow md:block"
      />
      <Image
        src="/images/drag-icon.png"
        alt="Drag icon."
        width={560}
        height={560}
        className="fixed right-5 top-5 z-50 block h-16 w-16 animate-spin-slow md:hidden"
      />
      <div className="w-full px-2.5 pb-10 md:w-1/2 md:p-10 md:pb-0">
        <h1 className="font-serif text-5xl font-bold md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-2.5 text-xl text-stone-700 md:text-2xl">
          {project.description}
        </p>

        <hr className="mt-5 border-t-2 border-stone-900" />

        <DetailContainer label="Materiales" value={project.materials} />

        <PriceContainer
          label="Precio"
          value={project.price}
          emailAddress="jserranopalencia@gmail.com"
          emailSubject={`Encargar ${project.title}.`}
          emailBody={`Hola, estoy interesado en encargar la construcción de un ${project.title}.`}
          emailButtonLabel="Encargar"
        />

        <DetailContainer label="Año" value={project.year} />

        <StockContainer
          label="Stock"
          value={project.stock}
          emailAddress="jserranopalencia@gmail.com"
          emailSubject={`Reservar ${project.title}.`}
          emailBody={`Hola, estoy interesado en reservar una de las unidades de ${project.title} que está en stock.`}
          emailButtonLabel="Reservar"
        />
      </div>
      <div className="scrollbar-thin scrollbar-thumb-blue-700 flex w-full gap-x-5 overflow-x-scroll sm:overflow-x-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col md:gap-y-10">
        {project.images.map(
          (img: { url: string; alt: string }, imgIdx: number) => (
            <Image
              key={imgIdx}
              src={img.url}
              alt={img.alt}
              width={1080}
              height={1080}
              priority={imgIdx === 0 ? true : false}
              className="h-auto w-screen bg-blue-800 object-cover md:w-full md:object-contain"
            />
          )
        )}
      </div>
    </section>
  )
}
