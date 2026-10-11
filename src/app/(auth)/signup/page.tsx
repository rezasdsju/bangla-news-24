'use client'
import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { LiaGithub } from "react-icons/lia";


const SignUpPage = () => {
    const handleSignUp = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries()) as {name:string,image:string, email:string, password:string}
        const {data, error} = await authClient.signUp.email({
            ...user,
            // callbackURL:'/'
        })
        if (data){
            toast.success('সাইন আপ সফল হয়েছে।')
            // redirect('/')
            window.location.replace('/')
        }
        if (error){
            toast.error('সাইন আপ সফল হয় নি!')
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
        <div className="flex flex-col justify-center mt-10">
            
            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xl border p-4">
                    <h2 className="text-center text-2xl font-bold text-red-700">সাইন আপ</h2>
                    <label className="label">নাম *</label>
                    <input name="name" type="text" className="input w-full" placeholder="নাম" required/>

                    <label className="label">ছবি লিংক</label>
                    <input name="image" type="url" className="input w-full" placeholder="ইউ.আর.এল " />

                    <label className="label">ইমেইল *</label>
                    <input name="email" type="email" className="input w-full" placeholder="ইমেইল" required/>

                    <label className="label">পাসওয়ার্ড *</label>
                    <input name="password" type="password" className="input w-full" placeholder="পাসওয়ার্ড" required/>

                    <button type="submit" className="btn bg-red-600 mt-4 text-white font-bold">সাইন আপ করুন</button>

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
                        <span>অ্যাকাউন্ট আছে? <span className="text-green-700">সাইন ইন করুন</span></span>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;