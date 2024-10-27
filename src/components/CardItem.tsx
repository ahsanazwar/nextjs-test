
import Image from "next/image";
import Link from "next/link";

interface Props {
    imgUrl?: string,
    heading?: string,
    subHeading?: string
}

const CardItem = ({imgUrl,heading,subHeading}: Props) => {
    return ( 
        <div className="w-full sm:w-[48%] mb-8 px-3 pt-3 pb-16 rounded-[38px] bg-[#fff]/[.1] itemsCard">
            <Link href="">
                <div className="mb-4">
                    <Image
                        src={`/images/${imgUrl}`}
                        width={800}
                        height={450}
                        alt="card-img"
                    />
                </div>
                <div className="pl-7 pr-2 sm:px-7">
                    <div className="flex items-center justify-between">
                        <div>
                            <div>
                                <h2 className="font-playfair text-white text-3xl mb-4 inline-block">{heading}</h2> 
                            </div>
                            <span className="bg-golden rounded-full px-5 py-1 text-white text-center text-xs tracking-[2.6px]">{subHeading}</span>
                        </div>
                        <div className="relative w-6 h-5 sm:w-10 sm:h-7">
                            <Image
                                src="/images/card-arrow.png"
                                fill
                                alt="arrow-img"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default CardItem;