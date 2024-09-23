import posts from "@/data/data.json";

export const PAGE_TITLE = {
  RECENT: "recent-photography",
  PERSONAL: "personal",
  COMMISSION: "commission",
  TRAVEL: "travel",
  ABOUT: "about",
  RESUME: "resume",
  CONTACT: "contact",
};

export interface TravelData {
  imageUrl: string;
  slug: string;
  title: string;
  location: string;
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getTravelData(page: string) {
  return posts.filter(
    (obj) =>
      obj.type === (page === PAGE_TITLE.TRAVEL ? PAGE_TITLE.RECENT : page)
  );
}
