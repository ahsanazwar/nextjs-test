
import SectionContainer from "@/components/layouts/SectionContainer";
import CenterText from "@/components/CenterText";
import VideoComponent from "@/components/VideoComponent";
import BoxContent from "@/components/BoxContent";




const GeneralSection = () => {
    return ( 
        <SectionContainer>
            <CenterText 
                heading = "Mall Of: Endless Possibilities"
                subHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            
            <div className="w-full sm:w-[80%] m-auto">
                <VideoComponent imgCover="video-cover.png"/>
                <BoxContent 
                    subHeading="25 SR/GUEST"
                    heading="Get your General Access Ticket"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text e"
                />
            </div>
        </SectionContainer>
    );
}
 
export default GeneralSection;