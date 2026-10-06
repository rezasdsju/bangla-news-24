
import Marquee from "@/components/Marquee";
import MainNews from "@/components/MainNews";
import NewsCard from "@/components/NewsCard";
interface IArticles {
  id: string,
  title: string,
  imageUrl: string,
  imageAlt: string,
  description: string,
  category: string,
  lastPublished: string|null
}
interface ISection {
  curationId: string,
  title: string,
  articles: IArticles[]
}
export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
const blockedSections = [
    "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!",
    "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
    "সামাজিক মাধ্যমে বিবিসি বাংলা",
];
  const sections = data.data.filter((section:ISection)=>!blockedSections.includes(section.title))
  const mainNews = sections[0].articles

  const otherSections = sections.slice(1)
  return (
    <div >
      <Marquee></Marquee>
      <div className="sm:grid sm:grid-cols-3 max-w-7xl mx-auto">
        <div className="sm:col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div className="grid gap-5">
            {
              otherSections.map((section: ISection) => <div key={section.curationId} className="mx-2 ">
                <h1 className="font-bold  border-b-2 border-red-700">{section.title}</h1>
                <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 py-2 gap-2">
                  {
                    section.articles.map((article) => <NewsCard key={article.id} news={article}></NewsCard>)
                  }
                </div>
              </div>)
            }
          </div>
        </div>
        <div className="sm:col-span-1">
          <h2>সর্বাধিক পঠিত</h2>
        </div>
      </div>
    </div>
  );
}
