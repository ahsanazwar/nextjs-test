interface Props {
    title?: string,
}
 
const SubHeading = ({title}: Props) => {
    return ( 
            <h4 className="text-white text-xs uppercase mb-8 tracking-[2.6px]">
                {
                    title
                }
            </h4>  
    );
}
 
export default SubHeading;