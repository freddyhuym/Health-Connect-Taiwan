import { Layout } from "@/components/layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import groupImg from "@assets/S__57081883_1768463982611.jpg";
import vipImg from "@assets/S__57081884_1768463982612.jpg";
import machineImg from "@assets/S__57081890_1768463982614.jpg";
import boothImg from "@assets/S__57081889_1768463982614.jpg";
import vip2Img from "@assets/S__57081887_1768463982613.jpg";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "【影片】日本中部國際醫療中心介紹影片",
      date: "2025-01-15",
      type: "Video",
      image: boothImg, // Placeholder for video
      link: "https://youtu.be/tQpgCZQM97M?si=Ehy4Sz0RKL3TgPSn",
      desc: "深入了解 CJIM 的設施與服務，以及我們如何透過先進科技改變癌症治療的未來。"
    },
    {
      id: 2,
      title: "賴清德副總統參訪醫療科技展 肯定台日醫療交流",
      date: "2024-12-05",
      type: "News",
      image: vipImg,
      link: "https://news.ltn.com.tw/news/life/breakingnews/5267615",
      desc: "副總統賴清德親臨 2024 台灣醫療科技展，參觀本中心展位，對於引進質子治療技術表示高度肯定。"
    },
    {
      id: 3,
      title: "ETtoday 健康雲：癌症治療新突破 質子治療受矚目",
      date: "2024-12-06",
      type: "Media",
      image: machineImg,
      link: "https://health.ettoday.net/news/3079187",
      desc: "ETtoday 專題報導：隨著科技進步，質子治療已成為癌症患者的重要選擇之一，副作用低且精準度高。"
    },
    {
      id: 4,
      title: "三立新聞：日本醫療集團插旗台灣 提升癌症照護品質",
      date: "2024-12-06",
      type: "Media",
      image: groupImg,
      link: "https://www.setn.com/News.aspx?NewsID=1760860",
      desc: "日本中部國際醫療中心宣布將在台灣設立服務據點，提供更直接的醫療諮詢與轉介服務。"
    },
    {
      id: 5,
      title: "LINE TODAY：高端醫療展登場 質子治療機成亮點",
      date: "2024-12-07",
      type: "Media",
      image: boothImg,
      link: "https://today.line.me/tw/v3/article/Kwz5wpG",
      desc: "2024 醫療科技展現場直擊，民眾熱烈詢問最新的放射治療技術。"
    },
    {
      id: 6,
      title: "健康傳媒：跨國醫療合作新篇章",
      date: "2024-12-08",
      type: "Media",
      image: vip2Img,
      link: "https://healthmedia.com.tw/main_detail.php?id=68890",
      desc: "深入報導台日醫療合作的細節與未來展望。"
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 pt-32 pb-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">最新消息</h1>
          <p className="text-muted-foreground">News & Events</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300 border-gray-100 flex flex-col h-full">
                <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold rounded shadow-sm text-primary uppercase">
                      {item.type}
                    </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.desc}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-secondary/20 group-hover:border-secondary">
                      閱讀全文 <ExternalLink className="w-3 h-3" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
