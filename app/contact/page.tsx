import type { Metadata } from "next"
import Image from "next/image"

import { client } from "@/lib/graphql-client"
import { contactQuery } from "@/lib/graphql-queries"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Muebles artesanos creados por Juan Serrano, carpintero y ebanista basado en Madrid.",
}

const getContactPage = async () => {
  const { infos }: { infos: any } = await client.request(contactQuery)

  return infos[0]
}

export default async function ContactPage() {
  const { contact } = await getContactPage()
  return (
    <section className="mx-auto grid h-screen grid-rows-2 md:grid-cols-2 md:grid-rows-1">
      <ul className="col-span-1 flex flex-col place-content-center gap-y-5 px-5 font-serif text-6xl font-bold md:w-1/2 md:px-10 md:text-7xl">
        <li className="tw-animation hover:text-blue-700">
          <a href={`mailto:${contact.email}`}>Email</a>
        </li>
        <li className="tw-animation hover:text-blue-700">
          <a href={`tel:${contact.phone}`}>Teléfono</a>
        </li>
        <li className="tw-animation hover:text-blue-700">
          <a
            href={contact.instagram}
            target="_blank"
            rel="”noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
      <div className="relative col-span-1 row-start-1 md:row-start-auto">
        <Image
          src={contact.image.url}
          alt="Hombre susteniendo una mesa de madera."
          fill
          className="bg-blue-800 object-cover object-center"
        />
      </div>
    </section>
  )
}
