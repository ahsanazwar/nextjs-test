import Layout from "@/components/layouts";
import ExperienceSection from "@/components/modules/ExperienceSection";
import GeneralSection from "@/components/modules/GeneralSection";
import MapSection from "@/components/modules/MapSection";

export default function Home() {
  return (
    <Layout>
        <GeneralSection/>
        <ExperienceSection/>
        <MapSection/>
    </Layout>
  );
}
