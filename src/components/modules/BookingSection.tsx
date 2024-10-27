
import SectionContainer from "@/components/layouts/SectionContainer";
import Heading from "@/components/Heading";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import ItemsSlider from "@/components/ItemsSlider";


const BookingSection = () => {
 
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
                <div className="flex justify-between flex-col sm:flex-row">
                    <div className="sm:w-[20%] sm:mt-9">
                        <div>
                            <Heading title="Curate your experience as you like"/>
                        </div>
                        <ButtonWithArrow url="/" title="Book Tickets"></ButtonWithArrow>
                    </div>
                    <div className="sm:w-[80%] sm:pl-20 mt-12 sm:m-0">
                        <ItemsSlider itemsData={itemsData}/>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
 
export default BookingSection;