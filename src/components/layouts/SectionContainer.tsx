interface Props {
    children?: React.ReactNode,
}
 
const SectionContainer = ({children}: Props) => {
    return ( 
            <div className="flex items-center w-full flex-col py-12">
                <div className="container">
                    {
                        children
                    }
                </div>
            </div>  
    );
}
 
export default SectionContainer;