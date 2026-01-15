import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "請輸入您的姓名" }),
  phone: z.string().min(8, { message: "請輸入有效的聯絡電話" }),
  email: z.string().email({ message: "請輸入有效的 Email" }),
  subject: z.string().min(2, { message: "請選擇或輸入主旨" }),
  message: z.string().min(10, { message: "請輸入至少 10 個字的諮詢內容" }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would submit to a backend
    console.log(values);
    toast({
      title: "諮詢單已送出",
      description: "我們會盡快由專人與您聯繫，謝謝。",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">聯絡諮詢</h1>
          <p className="opacity-80">Contact Us</p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">我們隨時為您提供協助</h2>
                <p className="text-muted-foreground mb-8">
                  若您對質子治療、赴日醫療或其他服務有任何疑問，歡迎填寫右側表單，或透過以下方式聯繫我們。我們的專業個案管理師將會盡快回覆您。
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">地址</h3>
                      <p className="text-sm text-muted-foreground">
                        日本中部國際醫療中心 (CJIM)<br/>
                        (台灣辦事處籌備處地址)<br/>
                        104 台北市中山區...
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">電話</h3>
                      <p className="text-sm text-muted-foreground">
                        +886-2-xxxx-xxxx (台灣)<br/>
                        +81-xx-xxxx-xxxx (日本)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-primary mb-1">服務時間</h3>
                      <p className="text-sm text-muted-foreground">
                        週一至週五：09:00 - 18:00<br/>
                        週六、日及國定假日休息
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">線上諮詢表單</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>姓名</FormLabel>
                        <FormControl>
                          <Input placeholder="王小明" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>聯絡電話</FormLabel>
                          <FormControl>
                            <Input placeholder="0912-345-678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>電子信箱</FormLabel>
                          <FormControl>
                            <Input placeholder="example@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>諮詢主旨</FormLabel>
                        <FormControl>
                          <Input placeholder="例如：質子治療費用詢問" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>諮詢內容</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="請簡述您的狀況或想詢問的問題..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                    送出諮詢
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
