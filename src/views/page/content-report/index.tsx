import IntroAppPage from "@/src/components/IntroAppPage";
import ContentTotal from "./ContentTotal";
import GraphSection from "@/src/components/Graph/GraphSection";
import { FakeNewSnapshot } from "@/src/hooks/useHighCharts/useLineChartData";
import DonutChart from "@/src/components/Graph/DonutChart";

// ── Fake data ─────────────────────────────────────────────────────────────────
function generateFakeSnapshots(): FakeNewSnapshot[] {
  const snapshots: FakeNewSnapshot[] = [];
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;

  for (let i = 90; i >= 0; i--) {
    const timestamp = new Date(now - i * dayMs).toISOString();
    snapshots.push({
      timestamp,
      fakenew1: Math.round(200 + Math.random() * 300 + Math.sin(i / 7) * 80),
      fakenew2: Math.round(100 + Math.random() * 200 + Math.cos(i / 5) * 60),
    });
  }
  return snapshots;
}

const fakeSnapshots = generateFakeSnapshots();

export default function ContentReport() {
  return (
    <>
      <div>
        <IntroAppPage
          title="Content Report"
          description="Content report description report description report description"
        />
        <div className="mt-10">
          <ContentTotal />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
          <div className="md:col-span-6">
            <GraphSection
              isLoading={false}
              isSuccess={true}
              snapshots={fakeSnapshots}
            />
          </div>
          <div className="md:col-span-4">
            <DonutChart />
          </div>
        </div>
      </div>
    </>
  );
}
