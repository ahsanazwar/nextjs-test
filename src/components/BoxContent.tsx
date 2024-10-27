interface Props {
    subHeading?: string,
    heading?:string,
    content?: string,
}

import Image from "next/image";
import Link from "next/link";
import SubHeading from "@/components/SubHeading";
import HeadingTwo from "@/components/HeadingTwo";
 
const BoxContent = ({subHeading,heading,content}: Props) => {
    return ( 
        <div className="relative rounded-[38px] bg-[#fff]/[.1] pt-9 px-8 pb-14">
            <Link href="">
                <SubHeading title={subHeading}/>
                <div className="flex justify-between items-center">
                    <HeadingTwo title={heading}/>
                    <div className="absolute right-7 bottom-9 sm:bottom-0 sm:right-0  sm:relative ">
                        <Image
                            src="/images/card-arrow.png"
                            width={38}
                            height={28}
                            alt="map"
                        />
                    </div>
                </div>
                <p className="sm:pr-[40%]">{content}</p>
            </Link>
        </div>
    );
}
 
export default BoxContent;