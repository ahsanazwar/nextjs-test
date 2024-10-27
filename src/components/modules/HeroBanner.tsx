import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionContainer from "@/components/layouts/SectionContainer";
import SubHeading from "@/components/SubHeading";
import ButtonWithArrow from "@/components/ButtonWithArrow";


const HeroBanner = () => {
    var settings = {
        slideToShow:1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
    };
    return (
        <div className="heroBanner h-screen">
            <Slider {...settings}>
                <div className="bg-[url('/images/banner1.png')] h-full w-full bg-cover bg-no-repeat relative heroBannerImg">
                    <div className="absolute top-1/2 -translate-y-1/2 w-full z-10">
                        <SectionContainer>
                            <div className="sm:w-1/2 sm:pr-56">
                                <SubHeading title="KHAWAJA YANNI"/>
                                <h2 className="font-playfair text-white text-5xl sm:text-7xl mb-6">The new era of luxury</h2>  
                                <p className="mb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
                                <ButtonWithArrow url="/" title="Book reservation now"></ButtonWithArrow>
                            </div>
                        </SectionContainer>
                    </div>
                </div>

                <div className="bg-[url('/images/the-groves.jpg')] h-full w-full bg-cover bg-no-repeat relative heroBannerImg">
                    <div className="absolute top-1/2 -translate-y-1/2 w-full z-10">
                        <SectionContainer>
                            <div className="sm:w-1/2 sm:pr-56">
                                <SubHeading title="KHAWAJA YANNI"/>
                                <h2 className="font-playfair text-white text-5xl sm:text-7xl mb-6">The is dummy</h2>  
                                <p className="mb-20">Lorem Ipsum is simply</p>
                                <ButtonWithArrow url="/" title="Book reservation now"></ButtonWithArrow>
                            </div>
                        </SectionContainer>
                    </div>
                </div>

                <div className="bg-[url('/images/the-groves.jpg')] h-full w-full bg-cover bg-no-repeat relative heroBannerImg">
                    <div className="absolute top-1/2 -translate-y-1/2 w-full z-10">
                        <SectionContainer>
                            <div className="sm:w-1/2 sm:pr-56">
                                <SubHeading title="KHAWAJA YANNI"/>
                                <h2 className="font-playfair text-white text-5xl sm:text-7xl mb-6">The luxury resort</h2>  
                                <p className="mb-20">Lorem Ipsum is simply dummy text of the.</p>
                                <ButtonWithArrow url="/" title="Book reservation now"></ButtonWithArrow>
                            </div>
                        </SectionContainer>
                    </div>
                </div>

            </Slider>
            
        </div>
    );
}
 
export default HeroBanner;