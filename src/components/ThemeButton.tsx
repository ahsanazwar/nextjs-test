import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string,
    url: string
}
 
const ThemeButton = ({title,url}: Props) => {
    return ( 
        <Link className="group hover:shadow-[0_0px_10px_1px_rgba(188,152,87,0.7)] transition-shadow duration-300 bg-goldenGradient text-white text-md pt-3 pb-3 px-12 rounded-xl font-normal inline-block relative text-center" 
        href={url}>
            <span>{
                    title
            }</span>
        </Link>
    );
}
 
export default ThemeButton;