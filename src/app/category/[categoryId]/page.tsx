
import NewsCard from "@/components/NewsCard";
import { INews } from "@/types/news.types"; 
const CategoryNewsPage = async ({ params }: { params: { categoryId: string } }) => {
    const { categoryId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const categoryNews = data.data
    return (
        <div className="max-w-7xl mx-auto px-2 my-4">
            <h2 className="text-2xl font-bold border-b-2 border-red-700 pb-2">{categoryNews[0].category}</h2>
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 mt-5 gap-2">
                {
                    categoryNews.map((news:INews) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNewsPage;