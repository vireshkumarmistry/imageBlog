import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 2000,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
  className: "!flex items-center h-full",
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
    <div className="w-[calc(100%-20px)] my-5 h-[calc(100svh-143px)] lg:h-[calc(100svh-182px)] overflow-auto">
      <Slider {...settings}>
        {dashboadImages.map((img) => (
          <div className="p-1 flex outline-0 cursor-move">
            <Image
              src={`/assets/dashboard/${img}.jpg`}
              alt={img}
              layout="responsive"
              width={100}
              height={100}
              className="max-w-[900px] w-full h-full mx-auto min-h-[450px] max-h-[500px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
