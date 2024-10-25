
import SectionContainer from "@/components/layouts/SectionContainer";
import SubHeading from "@/components/SubHeading";
import Heading from "@/components/Heading";
import Image from "next/image";
import ButtonWithArrow from "@/components/ButtonWithArrow";
 
const MapSection = () => {
    return ( 
        <SectionContainer>
          <div className="flex items-center">
            <div>
              <Image
                src="/images/map-img.png"
                width={900}
                height={800}
                alt="map"
              />
            </div>
            <div className="px-36">
                <SubHeading>EXPERIENCE THE GROVES</SubHeading>
                <Heading>Find your place</Heading>
                <p className="mb-20">Our interactive map will show you the way to the shops and restaurants that you want to see.</p>
                <ButtonWithArrow url="/">Open the Map</ButtonWithArrow>
            </div>
          </div>
        </SectionContainer>
    );
}
 
export default MapSection;