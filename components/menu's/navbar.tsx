import Image from "next/image"
import ThemeSwitch from "@/components/ThemeSwitch"
import Link from 'next/link';


export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-2 bg-white dark:bg-gray-900 border-b border-teal-500 shadow-bottom">
        <div className="flex items-center pl-6 space-x-4">
          <Image src="https://via.placeholder.com/100x40" placeholder="empty" alt="logo motifit" width={100} height={40}/>

          <Link href="/" className="dark:text-gray-400 rounded px-3 py-2 dark:hover:bg-gray-600/10 dark:hover:text-gray-200">
            <p className="">Home</p> 
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="dark:text-gray-400 semi-bold px-3 py-2 rounded dark:hover:bg-gray-600/10 dark:hover:text-gray-200">Login</Link>
          <Link href="/" className="bg-teal-600 hover:shadow-lg dark:hover:shadow-gray-800 hover:cursor-pointer text-white px-3 py-2 rounded">Sign up for free</Link>
          <div className="border-l border-gray-400 h-6 mx-3"></div>
          <div className="pr-4">
          <ThemeSwitch />
          </div>
        </div>
      </nav>
    )
}