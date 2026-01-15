import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import treatmentImg from "@assets/S__57081890_1768463982614.jpg"; 

export default function Treatments() {
  return (
    <Layout>
      <div className="bg-slate-900 pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">質子治療</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Proton Therapy Technology
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">什麼是質子治療？</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                質子治療（Proton Therapy）是目前世界上最先進的放射治療技術之一。不同於傳統 X 光放射治療，質子射線具有獨特的「布拉格峰（Bragg Peak）」物理特性。
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                這意味著質子束在穿透組織時釋放的能量極低，只有在到達預定的腫瘤深度時，才會瞬間釋放最大能量，隨後能量迅速降為零。這種特性使得醫師能夠精準地對腫瘤進行高劑量照射，同時極大程度地保護腫瘤後方和周圍的正常組織與器官。
              </p>
              
              <div className="my-12 p-6 bg-secondary/20 rounded-lg border border-secondary">
                <h3 className="text-xl font-bold text-primary mb-4">質子治療 vs. 傳統放療</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-2">傳統 X 光放療</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>射線穿透身體，沿途釋放能量</li>
                      <li>腫瘤前後正常組織皆受輻射影響</li>
                      <li>副作用較明顯</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-accent-foreground">質子治療</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>能量集中於腫瘤深處釋放</li>
                      <li>腫瘤後方組織幾乎無輻射劑量</li>
                      <li>大幅降低副作用，保護重要器官</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-serif font-bold text-primary mb-6">適用癌症</h2>
              <p className="text-muted-foreground mb-6">
                質子治療特別適合生長在敏感器官旁、或形狀複雜的腫瘤，以及兒童癌症。
              </p>
              
              <Tabs defaultValue="head" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger value="head">頭頸部癌</TabsTrigger>
                  <TabsTrigger value="chest">胸腔癌症</TabsTrigger>
                  <TabsTrigger value="abdomen">腹部癌症</TabsTrigger>
                  <TabsTrigger value="other">其他</TabsTrigger>
                </TabsList>
                <TabsContent value="head" className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">頭頸部腫瘤</h3>
                  <p className="text-muted-foreground">腦瘤、鼻咽癌、口腔癌等。質子治療能避開視神經、腦幹等關鍵區域，保留患者視力與聽力功能。</p>
                </TabsContent>
                <TabsContent value="chest" className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">胸腔腫瘤</h3>
                  <p className="text-muted-foreground">肺癌、食道癌、乳癌等。能有效減少對心臟和肺部的輻射劑量，降低併發症風險。</p>
                </TabsContent>
                <TabsContent value="abdomen" className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">腹部腫瘤</h3>
                  <p className="text-muted-foreground">肝癌、胰臟癌、攝護腺癌。對於肝功能不佳或無法手術的患者，提供有效的治療選擇。</p>
                </TabsContent>
                <TabsContent value="other" className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">兒童癌症與其他</h3>
                  <p className="text-muted-foreground">兒童腫瘤因身體仍在發育，更需避免輻射造成的生長遲緩或二次癌風險，質子治療是首選。</p>
                </TabsContent>
              </Tabs>

            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4">治療設備</h3>
                  <img src={treatmentImg} alt="Machine" className="w-full rounded mb-4" />
                  <p className="text-sm text-muted-foreground">
                    我們採用 Varian ProBeam® 360° 質子治療系統，具備高精準度的筆尖式掃描技術 (Pencil Beam Scanning)。
                  </p>
                </div>
                
                <div className="bg-primary text-white p-8 rounded-lg shadow-xl text-center">
                  <h3 className="text-2xl font-serif font-bold mb-4">諮詢評估</h3>
                  <p className="mb-6 opacity-90">想了解您的狀況是否適合質子治療？</p>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full font-bold">預約專家評估</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
