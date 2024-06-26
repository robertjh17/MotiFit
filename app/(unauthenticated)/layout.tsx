import Navbar from "@/components/menu's/navbar";
export default function UnAuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return(
        <div>
            <Navbar />
            <main className="flex flex-col max-h-screen items-center justify-between">
            {children}
            </main>
        </div>
    );

}