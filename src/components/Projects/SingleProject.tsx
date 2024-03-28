import Link from "next/link";
import type { Content } from "@prismicio/client";
import { formatDate, truncateText } from "@/utils";

const SingleProject = ({ project }: { project: Content.ProjectDocument }) => {
  const { uid, tags, data } = project;

  if (!data) return null;

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/project/${uid}`}
          className="relative block aspect-[37/22] w-full"
        >
          <div className="absolute right-6 top-6 z-20">
            {tags &&
              tags.map((tag: string, index: number) => (
                <span
                  key={`${index}_tag`}
                  className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${data.poster.url})`,
            }}
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/project/${uid}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:h-16 sm:text-2xl"
            >
              {truncateText(data.name[0].text, 100, false)}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {truncateText(data.overview[0].text, 200, true)}
          </p>
          <div className="flex items-center">
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{formatDate(data.date)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
