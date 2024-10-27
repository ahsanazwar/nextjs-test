interface Props {
    heading?: string,
    imgUrl:string
}

import Image from "next/image";
import HeadingTwo from "./HeadingTwo";
 
const ItemSliderCard = ({heading,imgUrl}: Props) => {
    return ( 
        <div className="w-[215px] sm:w-[385px] m-2 slickItem">
            <div className="relative w-[215px] h-[295px] sm:w-[385px] sm:h-[526px]">
                <Image 
                    className=""
                    src={`/images/${imgUrl}`} 
                    fill
                    alt="item"
                />
            </div>
            <div className="text-center mt-4 sm:px-20">
                <HeadingTwo title={heading}/>
            </div>
        </div>  
    );
}
 
export default ItemSliderCard;