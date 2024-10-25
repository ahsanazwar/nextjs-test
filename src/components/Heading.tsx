interface Props {
    children?: React.ReactNode,
    textPosition?: string
}
 
const Heading = ({children,textPosition}: Props) => {
    return ( 
        <h2 className={`font-playfair text-white text-[50px] mb-6 text-${textPosition? textPosition: 'left'}`}>
            {
                children
            }
        </h2>  
    );
}
 
export default Heading;