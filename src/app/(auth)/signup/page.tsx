'use client'
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";


const SignUpPage = () => {
    const handleSignUp = async(e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {name:string,image:string, email:string, password:string}
        const {data, error} = await authClient.signUp.email({
            ...user,
            callbackURL:'/'
        })
        if (data){
            // console.log(data)
            redirect('/')
        }
        if (error){
            toast.error('সাইন আপ সফল হয় নি!')
        }
    }
    return (
        <div className="flex flex-col justify-center mt-10">
            
            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-center text-2xl font-bold text-red-700">সাইন আপ</h2>
                    <label className="label">নাম</label>
                    <input name="name" type="text" className="input" placeholder="নাম" required/>

                    <label className="label">ছবি লিংক</label>
                    <input name="image" type="url" className="input" placeholder="ইউ.আর.এল " />

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input" placeholder="ইমেইল" required/>

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="পাসওয়ার্ড" required/>

                    <button type="submit" className="btn bg-red-600 mt-4 text-white font-bold">সাইন আপ করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;