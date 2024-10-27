import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string,
    url: string
}
 
const ButtonWithArrow = ({title,url}: Props) => {
    return ( 
        <Link className="group hover:shadow-[0_0px_10px_1px_rgba(188,152,87,0.7)] transition-shadow duration-300 bg-goldenGradient text-white text-md pt-4 pb-5 pl-6 pr-24 rounded-xl font-normal inline-block relative" 
        href={url}>
            <span>{
                    title
                }</span>
            <Image 
            className="absolute right-3 top-2/4 -translate-y-1/2 group-hover:-translate-x-1 transition duration-300"
            src="/images/right-arrow.svg" 
            width={22}
            height={16}
            alt="arrow"
            />
        </Link>
    );
}
 
export default ButtonWithArrow;