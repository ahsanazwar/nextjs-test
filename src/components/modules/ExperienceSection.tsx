
import SectionContainer from "@/components/layouts/SectionContainer";
import CenterText from "@/components/CenterText";
import Image from "next/image";
import Link from "next/link";


const ExperienceSection = () => {
    return ( 
        <SectionContainer>
            <CenterText 
                heading = "Experience the Finest Cuisine"
                subHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <div className="flex flex-wrap justify-between">
                <div className="w-full sm:w-[48%] mb-8 px-3 pt-3 pb-16 rounded-[38px] bg-[#fff]/[.1]">
                    <Link href="">
                        <div className="mb-4">
                            <Image
                                src="/images/exp-img1.png"
                                width={800}
                                height={450}
                                alt="map"
                            />
                        </div>
                        <div className="px-7">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="font-playfair text-white text-3xl mb-4">Vida Vera</h2> 
                                    <span className="bg-golden rounded-full px-5 py-1 text-white text-center text-xs tracking-[2.5px]">100 SR PER GUEST</span>
                                </div>
                                <div>
                                    <Image
                                        src="/images/card-arrow.png"
                                        width={38}
                                        height={28}
                                        alt="map"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </SectionContainer>
    );
}
 
export default ExperienceSection;