
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ItemSliderCard from "@/components/ItemSliderCard";



interface itemsDataTypes {
    id: number,
    heading: string,
    imgUrl: string,
}

interface itemsProps {
    itemsData: itemsDataTypes[];
}

const ItemsSlider = ({itemsData}:itemsProps) => {
    var settings = {
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      };


    return ( 
        <div className="itemsSlider w-screen">
            <Slider {...settings}>
                {
                    itemsData?.map((item:itemsDataTypes,index:number)=>{
                        return(
                            <ItemSliderCard key={item.id} heading={item.heading} imgUrl={item.imgUrl}/>
                        );
                    })
                }
            </Slider>
        </div>
    );
}
 
export default ItemsSlider;