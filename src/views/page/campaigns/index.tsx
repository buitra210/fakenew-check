import IntroAppPage from "@/src/components/IntroAppPage";
import CardItem from "./CardItem";

export default function Campaigns() {
  return (
    <div>
      <IntroAppPage
        title="Campaigns"
        description="Campaigns description Campaigns description Campaigns description Campaigns description"
      />
      <div className="mt-10">
        <CardItem />
      </div>
    </div>
  );
}
