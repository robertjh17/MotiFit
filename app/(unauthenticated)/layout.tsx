import Navbar from "@/components/menu's/navbar";
export default function UnAuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return(
        <div>
            <Navbar />
            <main>
            {children}
            </main>
        </div>
    );

}