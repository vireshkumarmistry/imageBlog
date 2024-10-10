import { getTravelData, PAGE_TITLE, TravelData } from "@/lib/api";
import AboutPage from "@/components/pages/about";
import ContactPage from "@/components/pages/contact";
import ResumePage from "@/components/pages/resume";
import ImageGallery from "@/components/common/other/image-gallery";

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
      return <ImageGallery actualData={actualData} />;
    }

    switch (page) {
      case PAGE_TITLE.RESUME:
        return <ResumePage />;
      case PAGE_TITLE.CONTACT:
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return renderContent();
};

export default Page;

export async function generateStaticParams() {
  return Object.values(PAGE_TITLE).map((page) => ({ page }));
}
