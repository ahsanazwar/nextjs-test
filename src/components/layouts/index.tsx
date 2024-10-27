import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

interface Props {
    children?: React.ReactNode
}


function Layout({ children }: Props) {
    return ( 
        <main className="bg-greenTheme overflow-hidden">
            <Header/>
            {children}
            <Footer/>
        </main>
     );
}

export default Layout;