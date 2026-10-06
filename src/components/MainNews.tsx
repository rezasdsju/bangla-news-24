
import Image from "next/image";
interface INews {
    id:string,
    imageUrl: string,
    imageAlt: string,
    title: string,
    description: string
}
const MainNews = ({ news }: { news: INews[] }) => {
    const [firstNews, ...otherNews] = news
    return (
        <div className='sm:grid sm:grid-cols-2 mx-2 my-5'>
            <div className="card bg-base-100  shadow-sm">
                <figure >
                    <Image src={firstNews.imageUrl} alt={firstNews.imageAlt} width={100} height={100} className="w-full  "></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>

                </div>
            </div>
            <div className="grid gap-2 ml-2 ">
                {
                    otherNews.slice(0,5).map((news)=><div key={news.id} className="card bg-base-100 border border-gray-300 px-2">
                        <p className="text-red-700 ">প্রধান খবর</p>
                        <div>{news.title}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MainNews;