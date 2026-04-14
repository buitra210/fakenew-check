import IntroAppPage from "@/src/components/IntroAppPage";
import ContentTotal from "./ContentTotal";

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
      </div>
    </>
  );
}
