
import SectionContainer from "@/components/layouts/SectionContainer";
import SubHeading from "@/components/SubHeading";
import Heading from "@/components/Heading";
import Image from "next/image";
import ButtonWithArrow from "@/components/ButtonWithArrow";
 
const MapSection = () => {
    return ( 
        <SectionContainer>
          <div className="flex items-center flex-col sm:flex-row">
            <div className="sm:order-1 order-2">
              <Image
                src="/images/map2.png"
                width={900}
                height={800}
                alt="map"
              />
            </div>
            <div className="sm:px-36 sm:order-2 order-1">
                <SubHeading title="EXPERIENCE THE GROVES"/>
                <Heading title="Find your place"/>
                <p className="mb-7 sm:mb-20">Our interactive map will show you the way to the shops and restaurants that you want to see.</p>
                <ButtonWithArrow url="/" title="Open the Map"></ButtonWithArrow>
            </div>
          </div>
        </SectionContainer>
    );
}
 
export default MapSection;