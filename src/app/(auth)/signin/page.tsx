'use client'
import { authClient } from "@/lib/auth-client";

import React from "react";
import { toast } from "react-toastify";


const SignInPage = () => {
    const handleSignIn = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries()) as {email:string, password:string}
        console.log('user data: ',userData)
        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password
        })
        if (data){
            toast.success('সাইন ইন সফল হয়েছে।')
            window.location.replace('/')
        }
        if (error){
            toast.error('সাইন ইন সফল হয়নি')
        }
    }
    return (
        <div className="mt-10">
            <form onSubmit={handleSignIn}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-2xl text-center text-red-700">সাইন ইন</h2>

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="পাসওয়ার্ড" />

                    <button type="submit" className="btn bg-red-700 text-white font-bold mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;