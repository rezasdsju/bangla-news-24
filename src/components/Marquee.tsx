
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import Link from "next/link"
interface IHeadLine {
    id: string,
    title: string
}
const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()

    const headLines = data.data
    return (
        <div className="bg-red-700 text-white w-full mt-2">
            <div className="flex w-full max-w-7xl  mx-auto ">
                <div className="bg-red-800 py-1 text-white px-3 shrink-0">সর্বশেষ</div>
                <MarqueeText direction="right" duration={15} className="min-w-0 flex-1 py-1">
                    {
                        headLines.map((headLine: IHeadLine) => <span key={headLine.id}>
                            <Link href={`/news/${headLine.id}`} className="hover:underline">
                                <span>{headLine.title}</span>
                                <span className="mx-5">•</span>
                            </Link>
                        </span>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;