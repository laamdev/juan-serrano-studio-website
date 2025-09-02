import Image from "next/image"
import Link from "next/link"

export const Card = ({ project, index }: { project: any; index: number }) => {
  return (
    <Link href={`/work/${project.slug}`} className="w-full flex-none">
      <h2 className="tw-vertical-text absolute z-20 flex items-baseline gap-x-2.5 whitespace-nowrap bg-stone-50/50 p-2.5 drop-shadow-lg backdrop-blur-lg">
        <span className="inline-block text-lg font-bold uppercase tracking-wider md:text-xl">
          {project.title}
        </span>
        <span className="inline-block text-base font-medium text-stone-700 md:text-lg">
          {project.year}
        </span>
      </h2>
      <Image
        src={project.images[0].url}
        alt={project.title}
        width={950}
        height={950}
        priority={index === 0 ? true : false}
        sizes="(min-width: 780px) 50vw, 100vw"
        className="h-auto w-full bg-blue-800 object-cover object-center"
      />
    </Link>
  )
}
