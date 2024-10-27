import Heading from "@/components/Heading";


interface Props {
    heading: string
    subHeading?: string
}


const CenterText = ({heading,subHeading}: Props) => {
    return ( 
        <div className="sm:px-[20rem] text-center">
            <Heading title={heading}/>
            <p className="text-center mb-16">{subHeading}</p>
        </div>
    );
}
 
export default CenterText;