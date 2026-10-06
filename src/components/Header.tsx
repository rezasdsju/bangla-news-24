import Image from "next/image";
import NavLinks from "./NavLinks";
const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' })
    return (
        <header className="mx-auto flex flex-col">
            <div className=" mx-auto flex justify-between max-w-7xl sm:px-4 py-4 ">

                <div className="flex items-center gap-2">
                    <Image className="w-10 h-10" src={'/logo.webp'} alt="logo" height={20} width={20}></Image>
                    <div>
                        <h2 className="sm:text-2xl font-bold text-red-700">Bangla News 24</h2>
                        <p className="text-xs text-neutral-500">{date}</p>
                    </div>
                </div>

                <div className=" right-4 top-4 flex items-center gap-1 sm:gap-3 text-sm sm:absolute ml-2 sm:ml-0">
                    <button className="btn">সাইন ইন</button>
                    <button className="btn bg-red-600 text-white">সাইন আপ</button>
                </div>
            </div>
            <NavLinks></NavLinks>
        </header>
    );
};

export default Header;