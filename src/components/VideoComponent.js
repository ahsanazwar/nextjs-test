
import React, { useState } from 'react';
import Image from "next/image";
import ModalVideo from 'react-modal-video';

import 'react-modal-video/css/modal-video.min.css'
 
const VideoComponent = ({imgCover}) => {
    const [isOpen, setOpen] = useState(false);
    return ( 
        <>
            <div className="relative mb-5">
                <button  onClick={() => setOpen(true)}>
                    <Image
                        src={`/images/${imgCover}`}
                        width={1360}
                        height={700}
                        alt="video"
                    />
                    <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] h-14 w-14 sm:h-28 sm:w-28 bg-white rounded-full">
                        <Image
                            className="relative top-2/4 left-2/4 translate-x-[-40%] translate-y-[-50%]"
                            src="/images/play-icon.png"
                            width={38}
                            height={42}
                            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
                            alt="play"
                        />
                    </div>
                </button>
            </div>
            <ModalVideo
				channel="youtube"
				youtube={{ mute: 1, autoplay: 1 }}
				isOpen={isOpen}
				videoId="UesPCMWuJP8"
				onClose={() => setOpen(false)} 
			/>
        </>
    );
}
 
export default VideoComponent;