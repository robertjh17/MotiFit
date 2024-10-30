import Navbar from "@/components/menu's/navbar";
export default function UnAuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return(
        <div>
            <Navbar />
            <main className="max-h-screen justify-between">
            {children}
            </main>
        </div>
    );

}