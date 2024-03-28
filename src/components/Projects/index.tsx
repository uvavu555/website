import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";

import type { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";

const Project = async () => {
  const client = createClient();

  const projects = (
    await client.getAllByType<Content.ProjectDocument>("project")
  )
    .sort((a, b) => b.data.date.localeCompare(a.data.date))
    .slice(0, 6);

  return (
    <section
      id="project"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Recent projects"
          paragraph="Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {projects.map((project: Content.ProjectDocument, index: number) => (
            <div key={project.id} className="w-full">
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
