"use client";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useMemo, useState } from "react";
import { useTheme } from "next-themes";
import GeneralCard from "../cards/GeneralCard";
import NoData from "../status/NoData";
import useDonutConfig from "@/src/hooks/useHighCharts/useDonutConfig";

interface DonutChartProps {
  isLoading?: boolean;
  isSuccess?: boolean;
}

export default function DonutChart({
  isLoading,
  isSuccess = true,
}: DonutChartProps) {
  const { resolvedTheme } = useTheme();
  const data = useMemo(
    () => ({
      realNew: 200,
      fakeNew: 350,
    }),
    [],
  );

  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    name: string;
    y: number;
    value: number;
  } | null>(null);

  const { chartData, total } = useMemo(() => {
    const total = data.realNew + data.fakeNew;

    // Gradient definitions mapping to CSS variables
    const gradient3 =
      resolvedTheme === "dark"
        ? {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0.3, "#fff"],
              [0.7, "#4de5c5"],
            ],
          }
        : {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0.3, "#bde9e0"],
              [0.7, "#0fb490"],
            ],
          };

    const gradient4 =
      resolvedTheme === "dark"
        ? {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0.3, "#6aabfb"],
              [0.7, "#9133ff"],
            ],
          }
        : {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0.3, "#5392df"],
              [0.7, "#732cc5"],
            ],
          };

    const chartData = [
      {
        id: "realNew",
        name: "Real News",
        y: data.realNew,
        value: data.realNew,
        color: gradient3,
        gradientVar: "bg-[image:var(--FN-Gradient-3)]",
      },
      {
        id: "fakeNew",
        name: "Fake News",
        y: data.fakeNew,
        value: data.fakeNew,
        color: gradient4,
        gradientVar: "bg-[image:var(--FN-Gradient-4)]",
      },
    ];
    return { chartData, total };
  }, [data, resolvedTheme]);

  const hasData = total > 0;

  const options = useDonutConfig(
    {
      chart: {
        height: 300,
      },
      title: {
        text: "",
      },
      plotOptions: {
        pie: {
          borderRadius: 0,
        },
      },
      series: [
        {
          point: {
            events: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              mouseOver: function (e: any) {
                const targetId = e.target.id || e.target.options.id;
                setSelectedItem(
                  chartData.find((item) => item.id === targetId) ?? null,
                );
              },
              mouseOut: function () {
                setSelectedItem(null);
              },
            },
          },
          states: {
            inactive: {
              opacity: 0.2,
              enabled: true,
            },
          },
          name: "News",
          type: "pie",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data: chartData as any,
        },
      ],
    },
    [chartData],
  );

  return (
    <GeneralCard className="mt-4">
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-medium text-foreground">
            News Distribution
          </h3>
        </div>

        <div className="mt-4 h-[400px] sm:h-[400px] overflow-auto w-full relative">
          {isLoading || !isSuccess ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-[#2A2B2F] border-t-[#a5a5a5] rounded-full animate-spin" />
            </div>
          ) : hasData ? (
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <div className="relative w-full sm:w-2/3 h-[300px] flex justify-center items-center">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={options}
                  containerProps={{
                    style: { width: "100%", height: "100%" },
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                  <span className="text-3xl font-bold md:flex bg-clip-text text-transparent bg-[image:var(--FN-Gradient-2)]">
                    {selectedItem ? selectedItem.value : total}
                  </span>
                  <span className="text-xs text-muted-foreground mt-2">
                    {selectedItem ? selectedItem.name : "Total News"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 w-full sm:w-1/3">
                {chartData.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-around items-center rounded-md cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <div
                        className={`w-3 h-3 rounded-sm ${item.gradientVar}`}
                      />
                      <span
                        className={`text-sm font-semibold truncate transition-colors ${
                          selectedItem?.name === item.name
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        selectedItem?.name === item.name
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {((item.value / total) * 100).toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <NoData message="No data available" />
          )}
        </div>
      </div>
    </GeneralCard>
  );
}
