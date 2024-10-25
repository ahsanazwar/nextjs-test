
import SectionContainer from "@/components/layouts/SectionContainer";
import CenterText from "@/components/CenterText";
import Image from "next/image";
import Link from "next/link";


const GeneralSection = () => {
    return ( 
        <SectionContainer>
                <CenterText 
                    heading = "Mall Of: Endless Possibilities"
                    subHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            
            <div className="w-full sm:w-[80%] m-auto">
                <div className="relative">
                    <Link href="/">
                        <Image
                            src="/images/video-cover.png"
                            width={1360}
                            height={700}
                            alt="video"
                        />
                        <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] h-28 w-28 bg-white rounded-full">
                            <Image
                                className="relative top-2/4 left-2/4 translate-x-[-40%] translate-y-[-50%]"
                                src="/images/play-icon.png"
                                width={38}
                                height={42}
                                alt="play"
                            />
                        </div>
                    </Link>
                </div>    
            </div>
        </SectionContainer>
    );
}
 
export default GeneralSection;