import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectDetails`.
 */
export type ProjectDetailsProps =
  SliceComponentProps<Content.ProjectDetailsSlice>;

/**
 * Component for "ProjectDetails" Slices.
 */
const ProjectDetails = ({ slice }: ProjectDetailsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for project_details (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectDetails;
