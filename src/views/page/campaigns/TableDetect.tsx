"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import GeneralCard from "@/src/components/cards/GeneralCard";
import NoData from "@/src/components/status/NoData";
import { Table, TableColumn } from "@/src/components/ui/table";
import { cn } from "@/src/lib/utils";
import { useMemo, useCallback, useRef, useState } from "react";

interface DetectEntry extends Record<string, unknown> {
  id: string;
  title: string;
  url: string;
  source: string;
  date: string;
  confidence: number;
  label: string;
}

const FakeData = [
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 50,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 90,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 90,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 90,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 90,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 10,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 60,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 90,
    label: "Fake",
  },
  {
    title: "VPBank đảm bảo duyệt vay 100% chỉ cần CMND - Lừa đảo",
    url: "https://google.com",
    source: "Facebook",
    date: "2022-01-01",
    confidence: 90,
    label: "Fake",
  },
];

const TableDetect = () => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);

  // Calculate staggered animation delay for rows
  const getRowAnimationDelay = useCallback((index: number) => {
    return Math.min(index * 50, 500); // Cap at 500ms
  }, []);

  const data = useMemo(() => {
    return FakeData.map((item, index) => ({
      ...item,
      id: index.toString(),
    }));
  }, []);

  const displayData = useMemo(() => {
    const result = [...data];
    if (sortDirection === "asc") {
      result.sort((a, b) => a.confidence - b.confidence);
    } else if (sortDirection === "desc") {
      result.sort((a, b) => b.confidence - a.confidence);
    }
    return result;
  }, [data, sortDirection]);

  const columns: TableColumn<DetectEntry>[] = [
    {
      key: "title",
      title: "TITLE",
      dataIndex: "title",
      width: "40%",
      align: "left",
      render: (value: unknown, record: DetectEntry) => (
        <div>
          <a
            href={record.url}
            target="_blank"
            className="font-medium text-sm line-clamp-2 cursor-pointer hover:text-(--text-high)"
          >
            {value as string}
          </a>
        </div>
      ),
    },
    {
      key: "source",
      title: "SOURCE",
      dataIndex: "source",
      width: "15%",
      align: "left",
      render: (value: unknown) => (
        <div>
          <div className="font-medium text-sm">{value as string}</div>
        </div>
      ),
    },
    {
      key: "label",
      title: "LABEL",
      dataIndex: "label",
      width: "5%",
      align: "left",
      render: (value: unknown) => (
        <div className="bg-(--rate-high) rounded-full px-2 py-1 w-fit border border-(--text-high)">
          <div className="font-medium text-sm text-(--text-high)">
            {value as string}
          </div>
        </div>
      ),
    },
    {
      key: "confidence",
      title: "CONFIDENCE",
      dataIndex: "confidence",
      width: "15%",
      align: "center",
      headerRender: () => (
        <div
          className="flex items-center justify-center gap-1 cursor-pointer select-none hover:text-(--text-high) transition-colors"
          onClick={() => {
            if (sortDirection === null) setSortDirection("desc");
            else if (sortDirection === "desc") setSortDirection("asc");
            else setSortDirection(null);
          }}
        >
          <span>CONFIDENCE</span>
          <span className="text-sm font-normal opacity-70">
            {sortDirection === "desc" ? "↓" : sortDirection === "asc" ? "↑" : "↑↓"}
          </span>
        </div>
      ),
      render: (value: unknown) => (
        <div className="flex items-center justify-center gap-1">
          <span
            className={cn(
              "font-medium text-sm",
              (value as number) >= 80
                ? "text-(--text-high)"
                : "text-(--text-low)",
            )}
          >
            {value as number}%
          </span>
        </div>
      ),
    },
    {
      key: "date",
      title: "DATE",
      dataIndex: "date",
      width: "10%",
      align: "right",
      render: (value: unknown) => (
        <div>
          <div className="font-medium text-sm text-gray-400">
            {value as string}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="animate-leaderboard-card">
      <GeneralCard>
        <div className="flex flex-col md:flex-row md:items-center justify-between ">
          <h5 className="font-bold">Latest Detections</h5>
          {/* <div className="w-75 pt-2"> */}
          {/* <TabCustom
              height={36}
              defaultValue="all"
              value={tableMode}
              isSmall={true}
              onValueChange={(value) => setTableMode(value as TableModeType)}
              tabs={[
                { label: 'All', value: 'all', content: <></> },
                { label: '30 days', value: '30_days', content: <></> },
                { label: '7 days', value: '7_days', content: <></> },
                { label: '24 hours', value: '24_hours', content: <></> },
              ]}
            /> */}
          {/* </div> */}
        </div>
        {displayData.length === 0 ? (
          <NoData message="No detection data available" />
        ) : (
          <div ref={tableContainerRef} className="mt-4">
            <Table<DetectEntry>
              columns={columns}
              data={displayData}
              rowKey="id"
              hoverable
              size="small"
              className="bg-transparent"
              onRow={(record, index) => ({
                className: cn(
                  "animate-leaderboard-row leaderboard-row-hover relative",
                ),
                style: {
                  ["--row-delay" as string]: `${getRowAnimationDelay(index)}ms`,
                },
              })}
            />
          </div>
        )}
      </GeneralCard>
    </div>
  );
};

export default TableDetect;
