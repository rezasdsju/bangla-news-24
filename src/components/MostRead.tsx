import Link from "next/link";
interface IMostReadNews {
    id: string,
    title: string
}

const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const mostReadNews = data.data
    return (
        <div className="card p-2 bg-base-100 ">
            <div className="flex flex-col item justify-center gap-3">
                {
                    mostReadNews.map((news: IMostReadNews, index: number) => <Link href={`/news/${news.id}`} key={news.id} className="border-b border-gray-200 py-2">
                        <div className="flex gap-2 items-center">
                            <span className="text-red-600 font-bold">{index + 1}</span>
                            <h2 className="hover:underline">{news.title}</h2>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default MostRead;