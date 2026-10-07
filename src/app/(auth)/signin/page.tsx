

const SignInPage = () => {
    return (
        <div className="mt-10">
            <form >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-2xl text-center text-red-700">সাইন ইন</h2>

                    <label className="label">ইমেইল</label>
                    <input type="email" className="input" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="পাসওয়ার্ড" />

                    <button className="btn bg-red-700 text-white font-bold mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;