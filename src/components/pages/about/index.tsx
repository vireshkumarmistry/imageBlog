import Image from "next/image";
import { aboutPageData } from "./data";

const AboutPage = () => {
  return (
    <div className="flex p-5 gap-3 flex-col items-center justify-center">
      <div className="flex w-full h-fit justify-center">
        <Image
          src={
            "https://cdn.prod.website-files.com/5f471a7abc662b212e70b1ed/610468d227db50913d29b967_rita-p-harper-portrait.jpeg"
          }
          alt="user"
          width={240}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="flex  w-full flex-col text-sm gap-1 justify-center lg:justify-start">
        {aboutPageData.map(({ heading, content }) => (
          <div key={heading} className="mb-2">
            <p className="m-0 font-bold text-center">{heading}</p>
            <p className=" text-center">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
