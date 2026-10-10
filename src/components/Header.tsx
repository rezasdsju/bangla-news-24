import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";
const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' })
    return (
        <header className="mx-auto flex flex-col">
            <div className=" mx-auto flex justify-between max-w-7xl sm:px-4 py-4 ">

                <div className="flex items-center gap-1 min-[355px]:gap-2">
                    <Image className="w-10 h-10" src={'/logo.webp'} alt="logo" height={20} width={20}></Image>
                    <div>
                        <h2 className="min-[355px]:text-sm sm:text-2xl font-bold text-red-700">Bangla News 24</h2>
                        <p className="text-xs text-neutral-500">{date}</p>
                    </div>
                </div>

                <UserInfo></UserInfo>
            </div>
            <NavLinks></NavLinks>
        </header>
    );
};

export default Header;