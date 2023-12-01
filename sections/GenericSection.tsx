import { SectionContent } from "../utils/types.ts";
import CompileCSS from "../islands/CompileCSS.tsx";
export interface SectionProps {
  sectionContents: SectionContent[];
  index: number;
}

export interface Props {
  sectionContents: SectionContent[];
}

export const loader = (props: Props, req: Request): SectionProps => {
  return {
    sectionContents: props.sectionContents,
    index: parseInt(new URL(req.url).searchParams.get("i") || "0", 10),
  };
};

export default function GenericSection(props: SectionProps) {
  return (
    <>
      <CompileCSS />
      {props.sectionContents.length > 0
        ? (
          <div
            dangerouslySetInnerHTML={{
              __html: props.sectionContents[props.index].html,
            }}
          />
        )
        : <>No section present</>}
    </>
  );
}
