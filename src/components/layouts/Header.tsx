
import SocialMedia from "@/components/SocialMedia";
import ThemeButton from "@/components/ThemeButton";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    
    const [openMenu, setMenu] = useState("-translate-x-full");
    return ( 
        <>
            <header className="absolute w-full top-0 z-50">
                <div className="hidden sm:block">
                    <div className="flex items-center w-full flex-col py-5">
                        <div className="container">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href="/">
                                        <Image
                                            src="/images/logo.png"
                                            width={220}
                                            height={50}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <SocialMedia/>
                                    <ThemeButton url="" title="Log in"/>
            
                                </div>
                            </div>              
                        </div>
                    </div>
                    <div className="flex items-center w-full flex-col border-t border-t-white border-b border-b-white">
                        <div className="container">
                            <ul className="flex items-center justify-between">
                                <li><Link className="text-white uppercase text-sm p-3 block transition duration-700 hover:text-golden" href="">DINE WITH US</Link></li>
                                <li><Link className="text-white uppercase text-sm p-3 block transition duration-700 hover:text-golden" href="">PLAN YOUR VISIT</Link></li>
                                <li><Link className="text-white uppercase text-sm p-3 block transition duration-700 hover:text-golden" href="">EVENTS</Link></li>
                                <li><Link className="text-white uppercase text-sm p-3 block transition duration-700 hover:text-golden" href="">VIEW GROVES MAP</Link></li>
                                <li><Link className="text-white uppercase text-sm p-3 block transition duration-700 hover:text-golden" href="">OUR STORY</Link></li>
                                <li><Link className="text-white uppercase text-sm p-3 block transition duration-700 hover:text-golden" href="">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="block sm:hidden">
                    <div className="flex items-center w-full flex-col py-5">
                        <div className="container">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href="/">
                                        <Image
                                            src="/images/logo.png"
                                            width={189}
                                            height={43}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/" onClick={()=> setMenu("translate-x-0")}>
                                        <Image
                                            src="/images/hamburger.svg"
                                            width={26}
                                            height={17}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                            </div>              
                        </div>
                    </div>
                </div>
            </header>

            <div className={`fixed top-0 left-0 z-50 w-full h-screen bg-greenTheme ${openMenu} transition duration-200`}>
                <div className="block sm:hidden py-5">
                    <div className="flex items-center justify-between px-8">
                        <div>
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    width={189}
                                    height={43}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="/" onClick={()=> setMenu("-translate-x-full")}>
                                <Image
                                    src="/images/close.png"
                                    width={23}
                                    height={23}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>       
                    <ul className="py-6">
                        <li className="border-t border-b border-b-white border-t-white"><Link className="px-8 text-white uppercase text-sm p-3 block" href="">DINE WITH US</Link></li>
                        <li className="border-b border-b-white"><Link className="px-8 text-white uppercase text-sm p-3 block" href="">PLAN YOUR VISIT</Link></li>
                        <li className="border-b border-b-white"><Link className="px-8 text-white uppercase text-sm p-3 block" href="">EVENTS</Link></li>
                        <li className="border-b border-b-white"><Link className="px-8 text-white uppercase text-sm p-3 block" href="">VIEW GROVES MAP</Link></li>
                        <li className="border-b border-b-white"><Link className="px-8 text-white uppercase text-sm p-3 block" href="">OUR STORY</Link></li>
                        <li className="border-b border-b-white"><Link className="px-8 text-white uppercase text-sm p-3 block" href="">CONTACT US</Link></li>
                    </ul>
                    <div className="py-6 px-8">
                        <ThemeButton url="" title="Log in"/>
                    </div>
                    <div className="px-8 flex absolute bottom-12">
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;