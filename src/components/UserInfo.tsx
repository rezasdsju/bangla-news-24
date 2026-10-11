'use client'
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useState } from "react";
const UserInfo = () => {
    const [showUserDropDown, setShowUserDropDown] = useState<boolean>(false)
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log('user: ', user)
    const handleSignOut = async () => {
        const { data, error } = await authClient.signOut()
        if (data) {
            toast.success('সাইন আউট সফল হয়েছে।')
            window.location.replace('/')
        }
        if (error) {
            toast.error('সাইন আউট সফল হয়নি')
        }
    }
    return (
        <div>
            {
                session?.user ?
                    <div className="right-4 top-4 flex items-center min-[355px]:gap-1 min-[395px]:gap-2 text-sm sm:absolute ml-2 sm:ml-0">
                        <div onClick={()=>setShowUserDropDown(!showUserDropDown)} className="flex items-center justify-center gap-1">
                            <div>
                                {
                                    session?.user?.image ?
                                        <div className="avatar cursor-pointer">
                                            <div className="ring-primary ring-offset-base-100 w-8  rounded-full ring-2 ring-offset-2">
                                                <Image src={session?.user?.image} alt="Profile Image" width={20} height={20}></Image>
                                            </div>
                                        </div> : <span><FaUser /></span>

                                }

                            </div>
                            <span className={` cursor-pointer text-xl${showUserDropDown && 'rotate-180'}`} ><GoTriangleDown  /></span>
                            {/* <span className="font-bold">{session?.user?.name}</span> */}
                        </div>
                        <button onClick={handleSignOut} className="btn bg-red-600 text-white">সাইন আউট</button>
                    </div>
                    :
                    <div className=" right-4 top-4 flex items-center min-[355px]:gap-1 min-[395px]:gap-3 text-sm sm:absolute ml-2 sm:ml-0">
                        <Link href={`/signin`}><button className="btn">সাইন ইন</button></Link>
                        <Link href={`/signup`}><button className="btn bg-red-600 text-white">সাইন আপ</button></Link>
                    </div>
            }


{
    (showUserDropDown && session?.user) && 
                <div className='bg-red-50 border border-gray-200 px-3 py-5 rounded-2xl right-4 top-15 absolute z-50 space-y-3'>
                <div>
                    <h2 className="text-bold">{session?.user?.name}</h2>
                    <span className="text-sm text-neutral-500">{session?.user?.email}</span>
                </div>
                <div onClick={()=>setShowUserDropDown(!showUserDropDown)} className="cursor-pointer hover:text-red-800">
                    <Link href={`/my-profile`}>আমার প্রোফাইল</Link>
                </div>
                <div>
                    <button onClick={()=>{handleSignOut();setShowUserDropDown(!showUserDropDown)}} className="cursor-pointer hover:text-red-600">সাইন আউট</button>

                </div>
            </div>
}
        </div>
    );
};

export default UserInfo; 