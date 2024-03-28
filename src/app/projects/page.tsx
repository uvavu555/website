import SingleProject from "@/components/Projects/SingleProject";
import Breadcrumb from "@/components/Common/Breadcrumb";

import type { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&L Insatllations - recent projects",
  description:
    "D&L Insatllation creating beautiful dream homes that last a lifetime. We're based in Shropshire and a full building service provider. Here are a selection of our most recent projects",
};

export default async function Project({ params }) {
  const client = createClient();

  const projects = (
    await client.getAllByType<Content.ProjectDocument>("project")
  ).sort((a, b) => b.data.date.localeCompare(a.data.date));

  return (
    <>
      <Breadcrumb
        pageName="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[80px] pt-[30px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {projects.map((project: Content.ProjectDocument, index: number) => (
              <div
                key={`${project.id}_project`}
                className="mb-10 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/2"
              >
                <SingleProject project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
