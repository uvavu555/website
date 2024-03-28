import Image from "next/image";
import { Metadata } from "next";
import { createClient } from "@/prismicio";
import type { Content } from "@prismicio/client";
import { formatDate } from "@/utils";

export async function generateMetadata({ params }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID<Content.ProjectDocument>(
    "project",
    params.slug,
  );
  return {
    title: `D&L Installations - ${page.data.name[0].text}`,
    openGraph: {
      images: [page.data.poster.url],
    },
  };
}

export default async function Project({ params }) {
  const client = createClient();

  const page = await client.getByUID("project", params.slug);
  const data = page.data;

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 ">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {data.name[0].text}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        {formatDate(data.date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex-end flex">
                    {page.tags &&
                      page.tags.map((tag: any, index: number) => (
                        <div key={`${index}_tag`} className="mb-5">
                          <a
                            href="#0"
                            className="ml-3 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                          >
                            {tag}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={data.poster.url}
                        alt={data.poster.alt}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  {data.overview &&
                    data.overview.map((overview: any, index: number) => (
                      <p
                        key={`${index}_overview`}
                        className="my-7 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                      >
                        {overview.text}
                      </p>
                    ))}
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                    {data.slices &&
                      data.slices.map((slice: any, index: number) => (
                        <div key={`${index}_slice`} className="group relative">
                          <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <img
                              src={slice.primary.image.url}
                              alt={slice.primary.image.alt}
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="mb-5 font-bold text-black dark:text-white sm:h-8 sm:text-xl lg:text-xl xl:text-xl">
                                {slice.primary.title[0].text}
                              </h3>
                              <p className="text-base font-medium leading-relaxed text-body-color">
                                {slice.primary.text[0].text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
