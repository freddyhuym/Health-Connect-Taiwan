import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, UserCheck } from "lucide-react";

// Images
import heroBg from "@assets/stock_images/modern_futuristic_ho_5d22c45d.jpg";
import treatmentImg from "@assets/S__57081890_1768463982614.jpg"; // Machine
import boothImg from "@assets/S__57081889_1768463982614.jpg"; // Booth
import groupImg from "@assets/S__57081883_1768463982611.jpg"; // Group

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern Medical Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 text-white px-4 md:px-6 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-4">
              Advanced Cancer Treatment
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              連結日本頂尖醫療 <br/>
              <span className="text-white/90">開啟癌症治療新希望</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl font-light">
              日本中部國際醫療中心 (CJIM) 引進世界最先進的質子線治療系統，
              為患者提供更精準、低副作用的癌症治療方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/treatments">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                  了解質子治療
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                  預約諮詢
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Intro */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">為什麼選擇 CJIM？</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              我們致力於將日本最先進的醫療技術與服務帶給台灣民眾，建立無國界的醫療關懷網絡。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-10 h-10 text-primary" />,
                title: "先進質子治療",
                desc: "採用 Varian ProBeam® 360° 質子治療系統，精準定位腫瘤，大幅降低對周邊正常組織的傷害。"
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-primary" />,
                title: "日本醫療品質",
                desc: "傳承日本職人精神的醫療服務，嚴謹的治療計畫與細緻的照護流程，讓患者安心。"
              },
              {
                icon: <UserCheck className="w-10 h-10 text-primary" />,
                title: "全方位轉介服務",
                desc: "從諮詢、病歷翻譯到赴日就醫安排，我們提供一站式的專業醫療轉介協助。"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-secondary/20">
                <CardContent className="pt-8 pb-8 px-6 text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatment - Split Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
              <img 
                src={treatmentImg} 
                alt="Proton Therapy Machine" 
                className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block">
                <p className="text-primary font-bold text-lg mb-1">ProBeam® 360°</p>
                <p className="text-sm text-muted-foreground">世界領先的質子治療系統</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-accent-foreground uppercase tracking-widest font-semibold text-sm mb-4">Technology</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                精準抗癌的新選擇：質子治療
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                質子治療是一種先進的放射治療技術。利用迴旋加速器產生高能質子束，精準釋放能量於腫瘤部位 (Bragg Peak)，能有效殺死癌細胞，同時大幅減少對周圍健康組織的輻射劑量。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "精準度高：集中能量破壞腫瘤 DNA",
                  "副作用低：保護心臟、肺部等重要器官",
                  "適應症廣：適用於肝癌、肺癌、頭頸癌等多種癌症",
                  "恢復期短：不影響日常生活品質"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/treatments">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  深入了解技術原理 <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">最新消息</h2>
              <p className="text-muted-foreground">媒體報導與活動動態</p>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="hidden md:flex gap-2">查看更多 <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* News Item 1 - Video placeholder */}
             <Card className="overflow-hidden border-none shadow-md group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
               <div className="relative aspect-video bg-black/5">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/tQpgCZQM97M?si=Ehy4Sz0RKL3TgPSn" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
               </div>
               <CardContent className="p-6">
                 <div className="text-xs text-accent-foreground font-semibold mb-2 uppercase">Video</div>
                 <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                   最新醫療技術介紹影片
                 </h3>
               </CardContent>
             </Card>

             {/* News Item 2 */}
             <Card className="overflow-hidden border-none shadow-md group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
               <div className="relative aspect-video overflow-hidden">
                 <img src={groupImg} alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <CardContent className="p-6">
                 <div className="text-xs text-accent-foreground font-semibold mb-2 uppercase">Event</div>
                 <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                   賴清德副總統參訪展位，肯定台日醫療合作成果
                 </h3>
                 <p className="text-muted-foreground text-sm line-clamp-3">
                   副總統賴清德親臨醫療科技展，參觀日本中部國際醫療中心展位，與日方代表親切交流，期許未來更緊密的醫療合作。
                 </p>
               </CardContent>
             </Card>

             {/* News Item 3 */}
             <Card className="overflow-hidden border-none shadow-md group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
               <div className="relative aspect-video overflow-hidden">
                 <img src={boothImg} alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <CardContent className="p-6">
                 <div className="text-xs text-accent-foreground font-semibold mb-2 uppercase">Exhibition</div>
                 <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                   2025 台灣醫療科技展：展示最先進質子治療設備
                 </h3>
                 <p className="text-muted-foreground text-sm line-clamp-3">
                   本中心於此次展會中展出 Varian ProBeam 360 模型，吸引眾多專業人士與民眾駐足詢問。
                 </p>
               </CardContent>
             </Card>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/news">
              <Button variant="outline" className="w-full">查看更多消息</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">守護健康，從現在開始</h2>
          <p className="text-white/80 text-lg mb-8">
            如果您或您的家人需要癌症治療諮詢，請不要猶豫。我們的專業團隊隨時為您提供協助，評估最適合的治療方案。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary hover:bg-white border-none font-bold text-lg px-8 py-6 h-auto shadow-xl">
              免費預約諮詢
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
