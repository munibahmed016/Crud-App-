import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-slate-700 px-6 py-5 rounded-full">
            <Link href={"/"} className="text-white font-bold">Crud App</Link>
            <Link className="rounded-full bg-white p-2" href={'/addTopic'}>Add Topic</Link>
        </nav>
    );
}