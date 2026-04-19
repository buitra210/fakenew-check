/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import GradientBorderCardV1 from "@/src/components/cards/GradientBorderCardV1";
const FakeData = [
  {
    title: "Scam Fake VPBank loan approval guarantee scheme",
    total: 100,
    rate: 100,
    details: [
      {
        detailTitle: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
        url: "https://google.com",
        author: "John Doe",
      },
    ],
  },
  {
    title: "Scam Fake VPBank loan approval guarantee scheme",
    total: 100,
    rate: 80,
    details: [
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
    ],
  },
  {
    title: "Scam Fake VPBank loan approval guarantee scheme",
    total: 100,
    rate: 40,
    details: [
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
    ],
  },
  {
    title: "Scam Fake VPBank loan approval guarantee scheme",
    total: 100,
    rate: 10,
    details: [
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
      {
        detailTitle: "Scam Campaigns",
        url: "https://google.com",
        author: "John Doe",
      },
    ],
  },
];

function RateConfirm({ rate }: { rate: number }) {
  type RateType = "High" | "Medium" | "Low";
  const rateType: RateType = rate > 80 ? "High" : rate > 50 ? "Medium" : "Low";
  return (
    <div
      className={`flex items-center justify-center gap-2 border rounded-full px-2 py-1 ${rateType === "High" ? "bg-(--rate-high) border-(--text-high)" : rateType === "Medium" ? "bg-(--rate-medium) border-(--text-medium)" : "bg-(--rate-low) border-(--text-low)"} min-w-15 max-h-8.5`}
    >
      <p
        className={`font-semibold ${rateType === "High" ? "text-(--text-high)" : rateType === "Medium" ? "text-(--text-medium)" : "text-(--text-low)"}`}
      >
        {rateType}
      </p>
    </div>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CampaignCard({ item }: { item: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GradientBorderCardV1 background="var(--card-bg)">
      <div className="relative z-10 py-4 px-5 animate-prediction-rule-card prediction-rule-card-hover h-full flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <p className="text-(--text-primary) font-bold text-[1.15rem] leading-snug pe-4">
              {item.title}
            </p>
            <RateConfirm rate={item.rate} />
          </div>
          <p className="text-(--text-secondary) mb-3 text-[15px]">
            {item.total} related articles
          </p>

          {/* <div className="flex gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#F1F3F5] dark:bg-[#2A2B31] text-gray-700 dark:text-[#E3E2E7] text-[13px] font-medium rounded-full cursor-default">
                {tag}
              </span>
            ))}
          </div> */}
        </div>

        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 font-semibold text-[15px] hover:opacity-80 transition-opacity mt-2"
          >
            <span className="bg-clip-text text-transparent bg-(image:--FN-Gradient-2)">
              {isExpanded ? "Hide related news" : "Show related news"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 text-[#1070e4] dark:text-[#6aabfb] ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-border pt-4 flex flex-col gap-4">
                {item.details.map((detail: any, dIndex: number) => (
                  <div key={dIndex} className="flex gap-3 items-start">
                    <div>
                      <div className="flex items-center gap-2 align-center">
                        <svg
                          className="w-5 h-5 text-(--text-high) shrink-0 mt-[2px]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <a
                          href={detail.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-(--text-primary) hover:text-(--text-high) font-medium text-[15px] transition-colors"
                        >
                          {detail.detailTitle}
                        </a>
                      </div>
                      <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm px-7">
                        {detail.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GradientBorderCardV1>
  );
}

export default function CardItem() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {FakeData.map((item, index) => (
        <CampaignCard key={index} item={item} />
      ))}
    </div>
  );
}
