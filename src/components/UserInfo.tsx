'use client'
import { FaUser } from "react-icons/fa";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
const UserInfo = () => {
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
                    <div className="right-4 top-4 flex items-center min-[355px]:gap-1 min-[395px]:gap-3 text-sm sm:absolute ml-2 sm:ml-0">
                        <div className="flex items-center justify-center gap-2">
                            <div>
                                {
                                    session?.user?.image ?
                                        <div className="avatar">
                                            <div className="ring-primary ring-offset-base-100 w-5  rounded-full ring-2 ring-offset-2">
                                                <Image src={session?.user?.image} alt="Profile Image" width={20} height={20}></Image>
                                            </div>
                                        </div> : <span><FaUser /></span>

                                }

                            </div>
                            <span className="font-bold">{session?.user?.name}</span>
                        </div>
                        <button onClick={handleSignOut} className="btn bg-red-600 text-white">সাইন আউট</button>
                    </div>
                    :
                    <div className=" right-4 top-4 flex items-center min-[355px]:gap-1 min-[395px]:gap-3 text-sm sm:absolute ml-2 sm:ml-0">
                        <Link href={`/signin`}><button className="btn">সাইন ইন</button></Link>
                        <Link href={`/signup`}><button className="btn bg-red-600 text-white">সাইন আপ</button></Link>
                    </div>
            }
        </div>
    );
};

export default UserInfo; 