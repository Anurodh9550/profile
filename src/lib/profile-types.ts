import { BRAND as BRAND_DATA } from "./brand";

export type ProfileCard = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type ProfileStat = {
  value: string;
  label: string;
};

export type ProfileTimelineItem = {
  year: string;
  text: string;
};

export type ProfileFlow = {
  title: string;
  nodes: string[];
};

export type ProfileMeta = {
  images: string[];
  icons: string[];
  designNotes: string;
  colors: string;
  layout: string;
  footer: string;
};

export type ProfilePageData = {
  id: string;
  pageNumber: number;
  title: string;
  heading: string;
  intro: string;
  bullets?: string[];
  cards?: ProfileCard[];
  stats?: ProfileStat[];
  timeline?: ProfileTimelineItem[];
  flow?: ProfileFlow;
  flows?: ProfileFlow[];
  meta: ProfileMeta;
  variant?: "cover" | "inside" | "default";
};

export const BRAND = BRAND_DATA;

export { COMPANY, GROUP_BRANDS } from "./brand";

export function defaultMeta(
  partial: Partial<ProfileMeta> & Pick<ProfileMeta, "images" | "icons">
): ProfileMeta {
  return {
    designNotes:
      "Premium corporate layout with navy anchor, white content field, and green accent highlights. Maintain generous whitespace and left-edge brand stripe.",
    colors: "Dark Navy #0B1F3A · White #FFFFFF · Electric Green #00C853 · Silver #D9E2EC",
    layout: "A4 portrait · Left accent bar · Header title block · Two-column content where applicable",
    footer: "SPARS ELECTRIC · Mass Kalpana Traders · Confidential Corporate Profile",
    ...partial,
  };
}
