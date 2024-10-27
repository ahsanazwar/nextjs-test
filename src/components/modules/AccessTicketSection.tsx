
import SectionContainer from "@/components/layouts/SectionContainer";
import Heading from "@/components/Heading";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import ItemsSlider from "@/components/ItemsSlider";


const AccessTicketSection = () => {
 
    const itemsData= [
        {
            "id": 0,
            "heading":"Little Krazy",
            "imgUrl": "item-img1.png",
        },
        {
            "id": 1,
            "heading":"Hawanim Groves City",
            "imgUrl": "item-img2.png",
        },
        {
            "id": 2,
            "heading":"Picnic Market",
            "imgUrl": "item-img3.png",
        },
        {
            "id": 3,
            "heading":"Lucaworld",
            "imgUrl": "item-img4.png",
        },
    ]

    return ( 
        <>
            <SectionContainer>
                <div className="sm:pr-[52%]">
                    <Heading title="Book General Access ticket and enjoy the attractions for free"/>
                </div>
                <ButtonWithArrow url="/" title="Book General Access Ticket"></ButtonWithArrow>
                <div className="mt-16">
                    <ItemsSlider itemsData={itemsData}/>
                </div>
            </SectionContainer>
        </>


    );
}
 
export default AccessTicketSection;