import Image from "next/image";
interface IBodyItem {
    type: "text" | "image" | "subheading";
    text: string;
    url: string;

    caption: string;
    altText: string;
    copyrightHolder?: string;
}
interface ITopic {
    id:string,
    name:string
}
const NewsDetailsPage = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const detailNews = data.data
    return (
        <div className="max-w-4xl mx-auto my-5 px-2">
            <h2 className=" text-3xl pb-2">{detailNews.title}</h2>
            <h2 className="text-xl text-neutral-700 ">{detailNews.description.blocks[0].model.blocks[0].model.text}</h2>
            <div className="flex gap-4 text-sm text-neutral-600 border-t border-gray-200 my-4 py-2 border-b ">
                <p>{detailNews.byline[0]?.name}</p>
                <p>{new Date(data.cachedAt).toLocaleString('bn-BD', { dateStyle: 'full', timeStyle: 'short' })}</p>
                <p>{detailNews.wordCount} শব্দ</p>
            </div>
            {/* <div >
                <Image src={detailNews.imageUrl} alt='Image' width={400} height={100} className="w-full h-90 object-cover rounded-xl"></Image>
                <p className="text-sm text-neutral-600 py-2">{detailNews.body[0].caption} ({detailNews.body[0].copyrightHolder})</p>
            </div> */}
             {detailNews.body.map((item:IBodyItem,index:number)=>            <div key={index}>
               
                {
                    item.type==='text' && <p className="pb-2 text-justify">{item.text}</p>
                }
                        {item.type === "subheading" && (
            <h2 className="text-2xl font-bold my-5">
                {item.text}
            </h2>
        )}
        {item.type === "image" && (
            <div className="my-2">
                <Image
                    src={item.url}
                    alt={item.altText}
                    width={400}
                    height={100}
                    className="w-full h-90 object-cover rounded-xl"
                />
                <p className="my-2 text-sm text-neutral-600">
                    {item.caption} ({item.copyrightHolder})
                </p>
            </div>
        )}
            </div>)}
<div className="flex gap-5 my-5">
                {
                detailNews.topics.map((topic:ITopic)=><div key={topic.id} className="bg-base-200 border border-gray-100 px-2 py-1 rounded-xl">
                    <p className="text-sm text-neutral-700">{topic.name}</p>
                </div>)
            }
</div>
        </div>
    );
};

export default NewsDetailsPage;