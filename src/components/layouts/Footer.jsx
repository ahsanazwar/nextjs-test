
import SectionContainer from "@/components/layouts/SectionContainer";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import SocialMedia from "@/components/SocialMedia";

import Image from "next/image";
import Link from "next/link";



const Footer = () => {

    return ( 
        <footer className="border-t border-t-white">
            <SectionContainer>
                <div className="flex justify-between sm:items-center items-start sm:flex-row flex-col">
                    <div className="block sm:hidden pb-6">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                width={200}
                                height={46}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="w-full sm:w-[37%]">
                        <Heading title="Join us for an unforgettable experience"/>
                    </div>
                    <div>
                        <SubHeading title="DOWNLOAD THE GROVES APP"/>
                        <div className="flex gap-5">

                            <Link href="" className="inline-block">
                                <Image
                                    src="/images/app-store.png"
                                    width={169}
                                    height={50}
                                    alt="play store"
                                    className="h-full"
                                />
                            </Link>
                            <Link href="" className="inline-block">
                                <Image
                                    src="/images/google-play.png"
                                    width={169}
                                    height={60}
                                    alt="google play"
                                    className="h-full"
                                />
                            </Link>
                        </div>
                    </div>

                </div>     
                <div className="flex flex-wrap sm:py-12 py-6 sm:flex-row flex-col">
                    <div className="sm:w-[30%] w-full">
                        <SubHeading title="LOCATION"/>
                        <ul className="text-white text-sm leading-6 mb-8 last:mb-0 ">
                            <li>Al-Hizam</li>
                            <li>Park Al-Semairi, Yanbu Al Bahr 46455</li>
                            <li>Riyadh Saudi Arabia</li>
                        </ul>
                    </div>
                    <div className="sm:w-[30%] w-full">
                        <SubHeading title="WORKING HOURS"/>
                        <ul className="text-white text-sm leading-6 mb-8 last:mb-0">
                            <li>Sun until Thurs: 4:00PM</li>
                            <li>Fri & Sat: 2:30PM</li>
                        </ul>
                        <ul className="text-white text-sm leading-6 mb-8 last:mb-0">
                            <li>Gates Close at: Sat until Wed: 12:00AM</li>
                            <li>Thu & Fri: 12:30AM</li>
                            <li>Riyadh Saudi Arabia</li>
                        </ul>
                    </div>
                    <div className="sm:w-[30%] w-full">
                        <SubHeading title="GUEST SERVICE CALL"/>
                        <ul className="text-white text-sm leading-6 mb-8 last:mb-0">
                            <li><Link className="hover:text-golden" href="mailTo:cc@thegroves-sa.com">cc@thegroves-sa.com</Link></li>
                            <li><Link className="hover:text-golden" href="tel:920001672">920001672</Link></li>
                        </ul>
                        <ul className="text-white text-sm leading-6 mb-8 last:mb-0">
                            <li><Link className="hover:text-golden" href="tel:920001672">+966556631309</Link></li>
                        </ul>
                    </div>
                </div>   
                <div className="flex justify-between sm:flex-row flex-col sm:items-center items-start sm:py-12 py-6">
                    <div className="hidden sm:block">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                width={286}
                                height={65}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div>
                        <SocialMedia/>
                    </div>
                </div>    

                <div className="flex justify-between sm:flex-row flex-col sm:items-center py-6">
                    <div className="sm:m-0 mb-7">
                        <ul className="flex sm:items-center sm:flex-row flex-col sm:gap-14 gap-7 text-white footerLinks">
                            <li><Link href="">Terms & Conditions</Link></li>
                            <li><Link href="">Privacy Policy</Link></li>
                            <li><Link href="">©2023 The Groves for Entertainment</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex sm:justify-end justify-start items-center gap-3">
                            <li><Image
                                src="/images/visa.svg"
                                width={43}
                                height={14}
                                alt="logo"
                            /></li>
                            <li><Image
                                src="/images/mastercard.png"
                                width={31}
                                height={31}
                                alt="logo"
                            /></li>
                            <li><Image
                                src="/images/americacard.png"
                                width={26}
                                height={26}
                                alt="logo"
                            /></li>
                        </ul>
                    </div>
                </div>    
            </SectionContainer>
        </footer>
    );
}
 
export default Footer;