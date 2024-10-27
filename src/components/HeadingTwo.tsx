interface Props {
    title?: string
}
 
const HeadingTwo = ({title}: Props) => {
    return ( 
        <h3 className="font-playfair text-white text-2xl sm:text-3xl mb-4">
            {
                title
            }
        </h3>  
    );
}
 
export default HeadingTwo;