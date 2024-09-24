import ImageGallery from "@/components/image-gallery";
import About from "@/components/about";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import { getTravelData, PAGE_TITLE, TravelData } from "@/lib/api";

interface Props {
  params: {
    page: string;
  };
}

const imageGalleryPages = [
  PAGE_TITLE.RECENT,
  PAGE_TITLE.PERSONAL,
  PAGE_TITLE.COMMISSION,
  PAGE_TITLE.TRAVEL,
];

const Page = ({ params }: Props) => {
  const { page } = params;

  const actualData: TravelData[] = getTravelData(page);

  const renderContent = () => {
    if (imageGalleryPages.includes(page)) {
      return (
        // <div className="w-full">
          <ImageGallery actualData={actualData} />
        // </div>
      );
    }

    switch (page) {
      case PAGE_TITLE.RESUME:
        return <Resume />;
      case PAGE_TITLE.CONTACT:
        return <Contact />;
      default:
        return <About />;
    }
  };

  return renderContent();
};

export default Page;

export async function generateStaticParams() {
  return Object.values(PAGE_TITLE).map((page) => ({ page }));
}
