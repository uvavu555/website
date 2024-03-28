import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&L Insatllations - contact page",
  description:
    "D&L Insatllation creating beautiful dream homes that last a lifetime. We're based in Shropshire and a full building service provider. Contact us today to discuss your project.",
};

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
