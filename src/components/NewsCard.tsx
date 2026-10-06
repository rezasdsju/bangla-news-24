
import Image from "next/image";
interface INews {
  id:string,
  title:string,
  imageUrl:string,
  imageAlt: string,
  description:string,
  category:string,
  lastPublished: string|null
}
const NewsCard = ({news}:{news:INews}) => {
  
    return (
            <div className="card bg-base-100  shadow-sm">
                <figure >
                    <Image src={news.imageUrl} alt={news.imageAlt} width={100} height={100} className="w-full  "></Image>
                </figure>
                <div className="card-body">
                    <h3 className="text-red-700">{news.category}</h3>
                    <h2 className="card-title">{news.title}</h2>
                    <p >{news.description}</p>
                    {news.lastPublished && <p className="text-xs text-neutral-500">{new Date(news.lastPublished).toLocaleDateString('bn-BD', { dateStyle: 'full' })}</p>}

                </div>
            </div>
    );
};

export default NewsCard;