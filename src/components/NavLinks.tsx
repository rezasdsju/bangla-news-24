

import Link from "next/link";
interface INav {
    "slug": string,
    "title": string,
    "topicId":string|null,
    "url": string,
    "scrapable": boolean
}
const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navs:INav[] = data.data
    return (
        <div className="flex flex-wrap gap-2 min-[400px]:gap-3 min-[450]:gap-4 sm:gap-5 justify-center">
            <Link href={'/'}>হোম</Link>
            {
                navs.map((item:INav, index:number) => item.scrapable && <Link href={item.slug} key={index}>{item.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;