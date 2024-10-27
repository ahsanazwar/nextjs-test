import Layout from "@/components/layouts";
import HeroBanner from "@/components/modules/HeroBanner";
import GeneralSection from "@/components/modules/GeneralSection";
import AccessTicketSection from "@/components/modules/AccessTicketSection";
import ExperienceSection from "@/components/modules/ExperienceSection";
import BookingSection from "@/components/modules/BookingSection";
import MapSection from "@/components/modules/MapSection";

export default function Home() {
  return (
    <Layout>
        <HeroBanner/>
        <GeneralSection/>
        <AccessTicketSection/>
        <ExperienceSection/>
        <BookingSection/>
        <MapSection/>
    </Layout>
  );
}
