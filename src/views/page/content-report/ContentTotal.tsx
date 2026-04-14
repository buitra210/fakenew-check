"use client";
import Image from "next/image";

import { useFormatValue } from "@/src/hooks/useFormatValue";
import GradientBorderCardV1 from "@/src/components/cards/GradientBorderCardV1";
import img1 from "@/public/image/img1.png";
import img2 from "@/public/image/img2.png";
import img3 from "@/public/image/img3.png";
import img4 from "@/public/image/img4.png";

const ContentTotal = () => {
  const listGeneralInfo = [
    {
      imageSrc: img1.src,
      title: "Total News Crawled Today",
      value: useFormatValue(1500, 0),
    },
    {
      imageSrc: img3.src,
      title: "Total Fake News Detected",
      value: useFormatValue(500, 0),
    },
    {
      imageSrc: img3.src,
      title: "Fake News Rate",
      value: useFormatValue(30, 0) + " %",
    },
    {
      imageSrc: img4.src,
      title: "Active Scam Campaigns",
      value: useFormatValue(300, 0),
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {listGeneralInfo.map((info, index) => (
        <GradientBorderCardV1 key={index} background="var(--card-bg)">
          <div className="flex justify-around items-center">
            <div className="flex-1/3">
              <Image
                src={info.imageSrc}
                alt={info.title}
                width={80}
                height={80}
              />
            </div>
            <div className="flex-2/3">
              <h5 className="text-[23px] font-bold bg-clip-text text-transparent bg-[image:var(--FN-Gradient-1)]">
                {info.value}
              </h5>
              <p className="muted text-[15px]">{info.title}</p>
            </div>
          </div>
        </GradientBorderCardV1>
      ))}
    </div>
  );
};

export default ContentTotal;
