import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "首頁" },
    { href: "/about", label: "關於我們" },
    { href: "/treatments", label: "質子治療" },
    { href: "/news", label: "最新消息" },
    { href: "/contact", label: "聯絡諮詢" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3" : "bg-transparent py-5 text-white"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a className={cn("text-2xl font-serif font-bold tracking-tight flex items-center gap-2", scrolled ? "text-primary" : "text-white")}>
              <span className="text-sm md:text-base opacity-80 uppercase tracking-widest font-sans font-normal block mb-[-5px]">Central Japan</span>
              <span>International Medical Center</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent-foreground/80 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all hover:after:w-full",
                    location === link.href ? "after:w-full font-semibold" : "",
                    scrolled ? "text-gray-700 after:bg-primary" : "text-white/90 after:bg-white"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant={scrolled ? "default" : "secondary"} 
                size="sm"
                className={cn("ml-4 font-serif italic px-6", !scrolled && "bg-white text-primary hover:bg-white/90")}
              >
                預約諮詢
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-primary" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-primary" : "text-white"} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10">
          <nav className="flex flex-col gap-6 text-lg font-serif">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn("pb-2 border-b border-gray-100", location === link.href && "text-primary font-bold")}>
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4" size="lg">預約諮詢</Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">CJIM</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                連結日本頂尖醫療資源，引進世界最先進的質子線癌症治療技術。<br/>
                為台灣民眾提供安心、專業的海外醫療轉介服務。
              </p>
              <div className="flex gap-4">
                {/* Social Icons placeholder */}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-accent">快速連結</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/about"><a className="hover:text-white transition-colors">關於我們</a></Link></li>
                <li><Link href="/treatments"><a className="hover:text-white transition-colors">質子治療</a></Link></li>
                <li><Link href="/news"><a className="hover:text-white transition-colors">最新消息</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition-colors">聯絡諮詢</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-accent">聯絡資訊</h4>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <span>
                    日本中部國際醫療中心<br/>
                    Central Japan International Medical Center
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-accent" />
                  <span>
                    (台灣辦事處籌備中)<br/>
                    線上諮詢請利用聯絡表單
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Central Japan International Medical Center. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>隱私權政策</span>
              <span>使用條款</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
