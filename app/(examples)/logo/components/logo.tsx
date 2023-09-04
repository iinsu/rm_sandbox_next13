import Image from "next/image";
import Facebook from "@/public/logo/facebook.svg";
import Disney from "@/public/logo/disney.svg";
import Airbnb from "@/public/logo/airbnb.svg";
import Apple from "@/public/logo/apple.svg";
import Spark from "@/public/logo/spark.svg";
import Samsung from "@/public/logo/samsung.svg";
import Quora from "@/public/logo/quora.svg";
import Sass from "@/public/logo/sass.svg";

const LogoCarousel = () => {
  const logos = [
    { src: Facebook, alt: "Facebook" },
    { src: Disney, alt: "Disney" },
    { src: Airbnb, alt: "Airbnb" },
    { src: Apple, alt: "Apple" },
    { src: Spark, alt: "Spark" },
    { src: Samsung, alt: "Samsung" },
    { src: Quora, alt: "Quora" },
    { src: Sass, alt: "Sass" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
