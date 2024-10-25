interface Props {
    children?: React.ReactNode,
}
 
const SubHeading = ({children}: Props) => {
    return ( 
            <h3 className="text-white text-xs uppercase mb-8">
                {
                    children
                }
            </h3>  
    );
}
 
export default SubHeading;