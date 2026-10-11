'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { LiaGithub } from "react-icons/lia";
import { toast } from "react-toastify";


const SignInPage = () => {
    const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as { email: string, password: string }
        console.log('user data: ', userData)
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password
        })
        if (data) {
            toast.success('সাইন ইন সফল হয়েছে।')
            window.location.replace('/')
        }
        if (error) {
            toast.error('সাইন ইন সফল হয়নি')
        }
    }
    const handleGoogleSignIn = async()=>{
        await authClient.signIn.social({
            provider:'google'
        })

    }
    const handleGithubSignIn = async()=>{
        await authClient.signIn.social({
            provider:'github'
        })

    }
    return (
        <div className="mt-10">
            <form onSubmit={handleSignIn}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xl border p-4">
                    <h2 className="text-2xl text-center text-red-700">সাইন ইন</h2>

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input  w-full" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input  w-full" placeholder="পাসওয়ার্ড" />

                    <button type="submit" className="btn bg-red-700 text-white font-bold mt-4">সাইন ইন করুন</button>
                    <div className="grid grid-cols-12 items-center justify-center my-3">
                        <span className="col-span-5 border-t border-gray-200"></span>
                        <span className="col-span-2 mx-auto">অথবা</span>
                        <span className="col-span-5 border-t border-gray-200"></span>
                    </div>
                    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-2">
                        <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 border border-red-400 px-3 py-2 rounded-xl cursor-pointer">
                            <span><FcGoogle /></span>
                            <span>Google দিয়ে চালিয়ে যান</span>
                        </div>
                        <div onClick={handleGithubSignIn} className="flex items-center justify-center gap-2 border border-red-400 px-3 py-2 rounded-xl cursor-pointer">
                            <span><LiaGithub /></span>
                            <span>Github দিয়ে চালিয়ে যান</span>
                        </div>
                    </div>
                    <div className="mx-auto mt-4">
                        <span>অ্যাকাউন্ট নাই? <Link href='/signup' className="text-green-700">সাইন আপ করুন</Link></span>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;