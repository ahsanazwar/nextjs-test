interface Props {
    title?: string,
}
 
const Heading = ({title}: Props) => {
    return ( 
        <h2 className="font-playfair text-white text-4xl sm:text-5xl mb-6">
            {
                title
            }
        </h2>  
    );
}
 
export default Heading;