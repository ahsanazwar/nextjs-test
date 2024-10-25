interface Props {
    children?: React.ReactNode,
}
 
const SectionContainer = ({children}: Props) => {
    return ( 
            <div className="flex items-center w-full flex-col">
                <div className="container">
                    {
                        children
                    }
                </div>
            </div>  
    );
}
 
export default SectionContainer;