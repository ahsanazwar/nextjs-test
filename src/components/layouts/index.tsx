interface Props {
    children?: React.ReactNode
}


function Layout({ children }: Props) {
    return ( 
        <main className="bg-greenTheme">
            {children}
        </main>
     );
}

export default Layout;