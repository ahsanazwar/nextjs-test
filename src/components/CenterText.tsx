import Heading from "@/components/Heading";


interface Props {
    heading?: string
    subHeading?: string
}


const CenterText = ({heading,subHeading}: Props) => {
    return ( 
        <div className="px-[30rem]">
            <Heading textPosition="center">{heading}</Heading>
            <p className="text-center mb-16">{subHeading}</p>
        </div>
    );
}
 
export default CenterText;