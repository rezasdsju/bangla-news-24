

const SignUpPage = () => {
    return (
        <div className="flex flex-col justify-center mt-5">
            <h2>Sign Up</h2>
            <form action="">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">সাইন আপ</legend>

                    <label className="label">ইমেইল</label>
                    <input type="email" className="input" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" className="input" placeholder="পাসওয়ার্ড" />

                    <button className="btn bg-red-600 mt-4 text-white font-bold">সাইন আপ</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;