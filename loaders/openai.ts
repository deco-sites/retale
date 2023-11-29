import { ObjectStorage } from "../storage/kv.ts";
import { SectionContent } from "../utils/types.ts";

export interface Props {
  sectionId: string;
}

export type Choice = {
  message: { content: string };
};

export default async function LoadAdminData(
  { sectionId }: Props,
  _req: Request,
): Promise<SectionContent[]> {
  const choices = await ObjectStorage.get([sectionId]) as string[];

  return choices
    ? choices.map((x) => ({
      html: x,
    }))
    : [];
}
