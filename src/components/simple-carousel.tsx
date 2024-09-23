import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  pauseOnHover: false,
};

const dashboadImages = [
  "Dashboard1",
  "Dashboard2",
  "Dashboard3",
  "Dashboard4",
  "Dashboard5",
  "Dashboard6",
];
export default function SimpleSlider() {
  return (
    <div className="w-[calc(100%-20px)] my-5">
      <Slider {...settings}>
        {dashboadImages.map((img) => (
          <div className="p-1 flex ">
            <Image
              src={`/assets/dashboard/${img}.jpg`}
              alt={img}
              layout="responsive"
              width={100}
              height={100}
              className="max-w-[900px] w-full h-full mx-auto min-h-[580px] max-h-[800px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
