import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@assets/stock_images/modern_futuristic_ho_5d22c45d.jpg"; // Reusing building image

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={heroBg} className="w-full h-full object-cover mix-blend-overlay" alt="Background" />
        </div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">關於我們</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Central Japan International Medical Center
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">連結台日，守護生命</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  日本中部國際醫療中心 (CJIM) 成立的初衷，是為了將日本高品質的癌症治療技術——特別是質子線治療，分享給更多需要的患者。
                </p>
                <p>
                  我們深知癌症治療是一場與時間的賽跑，也是對病患與家屬身心的巨大考驗。因此，我們不僅引進最先進的硬體設備，更重視人性化的醫療照護。
                </p>
                <p>
                  透過在台灣設立服務據點，我們希望消除語言與文化的隔閡，為台灣民眾建立一條通往日本頂尖醫療的綠色通道。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-accent rounded-lg -z-10 translate-x-4 translate-y-4"></div>
              <img 
                src={heroBg} 
                alt="Hospital Building" 
                className="rounded-lg shadow-xl w-full object-cover aspect-square md:aspect-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">我們的優勢</h2>
            <p className="text-muted-foreground">Why Choose CJIM?</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "頂尖醫療團隊", desc: "匯集日本放射腫瘤科權威醫師與物理師，提供最專業的治療計畫。" },
              { title: "最新治療設備", desc: "採用 Varian ProBeam 360° 系統，具備超導迴旋加速器與 360 度旋轉機架。" },
              { title: "多國語言服務", desc: "配備專業醫療翻譯人員，確保醫病溝通無障礙，安心就診。" },
              { title: "一站式服務", desc: "協助辦理醫療簽證、住宿安排、機票預訂等生活支援。" },
              { title: "台日遠距諮詢", desc: "出發前即可透過視訊與日本醫師諮詢，評估治療可行性。" },
              { title: "後續追蹤照護", desc: "返台後持續追蹤病情，並與台灣主治醫師保持聯繫。" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-serif font-bold mb-8">準備好邁出第一步了嗎？</h2>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8">
                聯絡我們
              </Button>
            </Link>
        </div>
      </section>
    </Layout>
  );
}
