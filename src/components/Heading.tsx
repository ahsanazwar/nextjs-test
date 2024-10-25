interface Props {
    children?: React.ReactNode,
}
 
const Heading = ({children}: Props) => {
    return ( 
            <h2 className="font-playfair text-white text-[50px] mb-6">
                {
                    children
                }
            </h2>  
    );
}
 
export default Heading;