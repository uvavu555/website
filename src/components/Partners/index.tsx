import { Partner } from "@/types/partner";
import Image from "next/image";
import partnersData from "./partnersData";
import SectionTitle from "../Common/SectionTitle";

import type { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";

const Partners = async () => {
  const client = createClient();

  const partners = (
    await client.getAllByType<Content.PartnerDocument>("partner")
  ).slice(0, 6);

  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle
          title="Our partners"
          paragraph="Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus."
          center
        />
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="-py-8 flex flex-wrap items-center justify-center rounded-sm px-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {partners.map(
                (partner: Content.PartnerDocument, index: number) => (
                  <SinglePartner
                    key={`{partner.id}_partner`}
                    partner={partner}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

const SinglePartner = ({ partner }: { partner: Content.PartnerDocument }) => {
  const { uid, tags, data } = partner;

  console.log(data);

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={data.webpage["url"]}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-36 w-36 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={data.logo.url} alt={data.logo.alt} fill className="block" />
      </a>
    </div>
  );
};
