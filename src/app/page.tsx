
import Marquee from "@/components/Marquee";
import MainNews from "@/components/MainNews";
export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  return (
    <div >
      <Marquee></Marquee>
      <div className="sm:grid sm:grid-cols-3 max-w-7xl mx-auto">
        <div className="sm:col-span-2">
        <MainNews news={mainNews}></MainNews>
        </div>
        <div className="sm:col-span-1">
          <h2>সর্বাধিক পঠিত</h2>
        </div>
      </div>
    </div>
  );
}
