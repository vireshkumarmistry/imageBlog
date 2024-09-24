import Image from "next/image";

interface DynamicImageProps {
  url: string;
  alt?: string;
  onLoad?: () => void;
}

const DynamicImage: React.FC<DynamicImageProps> = ({ url, alt, onLoad }) => {
  return (
    <Image
      src={url}
      alt={alt || ""}
      width={100}
      height={100}
      loading="lazy"
      onLoad={onLoad}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="w-full h-full object-cover"
    />
  );
};

export default DynamicImage;
