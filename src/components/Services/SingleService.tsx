import { Service } from "@/types/service";
import Image from "next/image";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="w-full ">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-black bg-opacity-70 text-primary dark:bg-primary dark:bg-opacity-20">
          <Image
            src={`/images/services/${icon}.svg`}
            alt={icon.toString()}
            width={60}
            height={60}
            className=""
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
