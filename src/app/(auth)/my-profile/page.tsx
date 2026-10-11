'use client'
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const MyProfilePage = () => {
    const { data: session } = authClient.useSession()
    const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false)

    const handleUpdateProfile = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as {name:string, image:string}

        const {data, error} = await authClient.updateUser({
            name: userData.name || session?.user?.name,
            image: userData.image || session?.user?.image || ''
        })
        if (data){
            toast.success('প্রোফাইল আউডেট হয়েছে')
        }
        if (error){
            toast.error('প্রোফাইল আউডেট হয়নি')
        }
    }

    const handleSignOut = async()=>{
        const {data, error} = await authClient.signOut()
        if (data) {
            toast.success('সাইন আউট সম্পন্ন হয়েছে')
            window.location.replace('/')
        }
        if (error) {
            toast.error('সাইন আউট সম্পন্ন হয়নি')
        }
    }
    return (
        <div className="max-w-4xl mx-auto my-5">

            <div className="border border-gray-100 rounded-2xl px-3 py-3 min-w-70 space-y-4">
                <div className="px-3 py-2 rounded-2xl">
                    <h2 className=" text-center font-bold text-2xl">আমার প্রোফাইল</h2>
                </div>
                <div className="flex flex-col min-[310px]:flex-row items-center justify-between border border-gray-100 rounded-2xl px-3 py-3 gap-10">
                    <div className="flex items-center justify-center gap-2">
                        <div>
                            {
                                session?.user?.image ?
                                    <div className="bg-gray-100 border border-gray-200 px-2 py-2 rounded-2xl">
                                        <Image src={session?.user?.image} alt={session?.user?.name} width={50} height={50} className="rounded-2xl"></Image>
                                    </div> :
                                    <span><FaUser /></span>
                            }
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-bold">{session?.user?.name}</span>
                            <span className="text-neutral-500 text-sm">{session?.user?.email}</span>
                        </div>
                    </div>
                    <div onClick={handleSignOut} className="border border-red-600 rounded-2xl px-3 py-1 cursor-pointer">
                        <span className="text-neutral-700">সাইন আউট</span>
                    </div>
                </div>
                <div onClick={() => setShowUpdateForm(!showUpdateForm)} className="flex items-center justify-center cursor-pointer pt-10">
                    <button className="flex item justify-center bg-green-600 border border-gray-200 px-3 py-2 rounded-2xl text-white">
                        <span>আপডেট প্রোফাইল</span>
                        <span className={`flex items-center justify-center ${showUpdateForm && 'rotate-180'}`}><IoIosArrowDown />
                        </span>

                    </button>
                </div>
                {
                    showUpdateForm && <div>
                        <form onSubmit={handleUpdateProfile}>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">


                                <label className="label">নাম</label>
                                <input name="name" type="text" className="input w-full" placeholder="আহমেদ খলিল" />

                                <label className="label">ছবি</label>
                                <input name="image" type="url" className="input w-full" placeholder="ছবির ইউ. আর. এল" />

                                <button type="submit" className="btn bg-red-600 text-white mt-4">আপডেট করুন</button>
                            </fieldset>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyProfilePage;