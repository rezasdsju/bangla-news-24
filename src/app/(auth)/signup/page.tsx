

const SignUpPage = () => {
    return (
        <div className="flex flex-col justify-center mt-10">
            
            <form action="">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-center text-2xl font-bold text-red-700">সাইন আপ</h2>
                    <label className="label">নাম</label>
                    <input name="name" type="text" className="input" placeholder="নাম" />

                    <label className="label">ছবি লিংক</label>
                    <input name="image" type="url" className="input" placeholder="ইউ.আর.এল " />

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="পাসওয়ার্ড" />

                    <button className="btn bg-red-600 mt-4 text-white font-bold">সাইন আপ করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;