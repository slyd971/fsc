import { DestinationPageTemplate } from "@/components/site/DestinationPageTemplate";
import { destinationPages } from "@/data/site";

export default function LondonCarnivalPage() {
  return <DestinationPageTemplate page={destinationPages["london-carnival"]} />;
}
