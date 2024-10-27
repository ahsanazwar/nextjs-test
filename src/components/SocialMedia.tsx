
import Image from "next/image";
import Link from "next/link";



const SocialMedia = () => {

    return ( 
        <ul className="flex items-center justify-end sm:gap-0 gap-5 socialMedia">
            <li>
                <Link href="">
                    <Image
                        src="/images/tiktok.png"
                        width={20}
                        height={20}
                        alt="social"/>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Image
                        src="/images/insta.png"
                        width={20}
                        height={20}
                        alt="social"/>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Image
                        src="/images/twitter.png"
                        width={20}
                        height={20}
                        alt="social"/>
                </Link>
            </li>
            <li>
                <Link href="">
                    <Image
                        src="/images/snap.png"
                        width={20}
                        height={20}
                        alt="social"/>
                </Link>
            </li>
        </ul>
    );
}
 
export default SocialMedia;