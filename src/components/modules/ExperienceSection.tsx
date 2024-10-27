
import SectionContainer from "@/components/layouts/SectionContainer";
import CenterText from "@/components/CenterText";
import CardItem from "@/components/CardItem";

const ExperienceSection = () => {
    
    interface itemsDataTypes {
        id: number,
        heading: string,
        subHeading: string,
        imgUrl: string,
    }

    const itemsData = [
        {
            "id": 0,
            "heading":"Vida Vera",
            "subHeading":"100 SR PER GUEST",
            "imgUrl": "exp-img1.png",
        },
        {
            "id": 1,
            "heading":"Zama Zulu",
            "subHeading":"100 SR PER GUEST",
            "imgUrl": "exp-img2.png",
        },
        {
            "id": 2,
            "heading":"Khawaja Yanni",
            "subHeading":"100 SR PER GUEST",
            "imgUrl": "exp-img3.png",
        },
        {
            "id": 3,
            "heading":"Yamagata",
            "subHeading":"100 SR PER GUEST",
            "imgUrl": "exp-img4.png",
        },
    ]

    return ( 
        <SectionContainer>
            <CenterText 
                heading = "Experience the Finest Cuisine"
                subHeading = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <div className="flex flex-wrap justify-between">
                {
                    itemsData?.map((item:itemsDataTypes,index)=>{
                        return(    
                            <CardItem 
                                key={item.id}
                                imgUrl={item.imgUrl}
                                heading={item.heading}
                                subHeading={item.subHeading}
                            />
                        )
                    })
                }
            </div>
        </SectionContainer>
    );
}
 
export default ExperienceSection;