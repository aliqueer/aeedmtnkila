/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  Wrench, 
  Zap, 
  Cpu, 
  Battery, 
  Truck, 
  ShieldCheck, 
  Clock, 
  MapPin,
  ChevronLeft,
  Menu,
  X,
  Snowflake,
  Droplets,
  Search
} from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    id: "mechanical",
    title: "تشخيص الأعطال الميكانيكية",
    description: "فحص شامل للمحرك ونظام نقل الحركة (القير) باستخدام أحدث التقنيات. نقوم بإصلاح التسريبات، مشاكل الحرارة، وأصوات المحرك الغريبة في موقعك مع توفير قطع غيار أصلية.",
    icon: Wrench,
    color: "text-orange-500",
    image: "https://i.postimg.cc/RZVvJqwm/فني_صيانة_سيارات_في_الرياض.png"
  },
  {
    id: "electrical",
    title: "كهرباء السيارات المتقدمة",
    description: "إصلاح كافة المشاكل الكهربائية من الضفائر والحساسات إلى أنظمة الإضاءة والتشغيل. نستخدم مخططات كهربائية دقيقة لضمان إصلاح العطل من جذوره دون المساس بسلامة السيارة.",
    icon: Zap,
    color: "text-yellow-500",
    image: "https://i.postimg.cc/9QFcwzyV/صيانة_كهرباء_السيارات_في_الرياض.png"
  },
  {
    id: "computer",
    title: "فحص وبرمجة الكمبيوتر",
    description: "قراءة ومسح أكواد الأخطاء (Check Engine)، إعادة ضبط أنظمة السيارة، وبرمجة المفاتيح والحساسات الجديدة باستخدام أجهزة فحص متطورة تغطي جميع أنواع السيارات الحديثة.",
    icon: Cpu,
    color: "text-blue-500",
    image: "https://i.postimg.cc/kgX7RDWd/فحص_وصيانة_حديثة_للسيارات.png"
  },
  {
    id: "battery",
    title: "تغيير البطاريات والدينامو",
    description: "فحص كفاءة البطارية ونظام الشحن (الدينامو). نوفر خدمة توصيل وتركيب بطاريات عالمية بضمان حقيقي، مع التأكد من سلامة أقطاب البطارية ونظام التشغيل بالكامل.",
    icon: Battery,
    color: "text-red-500",
    image: "https://i.postimg.cc/zXkJfTb6/فحص_البطارية_والختبار_الفني_للسيارة.png"
  },
  {
    id: "brakes",
    title: "صيانة نظام الفرامل",
    description: "تغيير فحمات وهوبات الفرامل في الموقع، فحص زيت الفرامل، وإصلاح مشاكل نظام ABS. نضمن لك قوة توقف مثالية لسلامتك وسلامة عائلتك على الطريق.",
    icon: ShieldCheck,
    color: "text-rose-500",
    image: "https://i.postimg.cc/65KWwM3b/فني_صيانة_فرامل_السيارات_في_العمل.png"
  },
  {
    id: "ac",
    title: "صيانة التكييف والتبريد",
    description: "فحص تسريب الفريون، إعادة تعبئة الغاز، وتغيير فلتر المكيف. كما نقوم بفحص مروحة التبريد والرديتر لضمان أداء تبريد مثالي حتى في أشد درجات الحرارة.",
    icon: Snowflake,
    color: "text-cyan-400",
    image: "https://i.postimg.cc/FsvrmTRq/صيانة_تكييف_السيارات_في_الهواء_الطلق.png"
  },
  {
    id: "oil",
    title: "تغيير الزيت والفلتر",
    description: "خدمة تغيير زيت المحرك والسيفون في موقعك باستخدام زيوت معتمدة تناسب نوع سيارتك، مع فحص مستويات السوائل الأخرى (المساحات، الرديتر، الفرامل) مجاناً.",
    icon: Droplets,
    color: "text-amber-600",
  },
  {
    id: "inspection",
    title: "فحص ما قبل الشراء",
    description: "تقرير فني مفصل وشامل يتضمن فحص البدي، الشاصي، المحرك، والقير. نعطيك الصورة الحقيقية لحالة السيارة لتتخذ قرار الشراء بكل ثقة وطمأنينة.",
    icon: Search,
    color: "text-indigo-500",
    image: "https://i.postimg.cc/fTszZ8L5/فحص_ما_قبل_الشراء_للسيارة.png"
  },
];

const features = [
  {
    title: "سرعة الاستجابة",
    description: "نصل إليك في أسرع وقت ممكن أينما كنت.",
    icon: Clock,
  },
  {
    title: "فنيون مختصون",
    description: "طاقم عمل مدرب وخبير في جميع أنواع السيارات.",
    icon: ShieldCheck,
  },
  {
    title: "خدمة في الموقع",
    description: "نوفر عليك عناء سحب السيارة لورش الصناعية.",
    icon: MapPin,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<"privacy" | "terms" | "cookies" | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when lightbox or legal modal is open
  useEffect(() => {
    if (selectedImage || activeLegalModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage, activeLegalModal]);

  const phoneNumber = "0565218059";
  const whatsappNumber = "966565218059";

  return (
    <div className="min-h-screen font-sans selection:bg-orange-500/30" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 orange-gradient rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Wrench className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-orange-500">ورشة</span> متنقلة
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1">
                الخدمات
                <ChevronLeft className="w-3 h-3 -rotate-90 group-hover:rotate-90 transition-transform" />
              </a>
              <div className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl">
                {services.map((s) => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-orange-500 transition-all text-sm"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
            <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors">لماذا نحن؟</a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors">اتصل بنا</a>
            <a 
              href={`tel:${phoneNumber}`}
              className="px-5 py-2.5 orange-gradient rounded-full text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
            >
              اطلب الآن
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-center">
            <div className="flex flex-col gap-4">
              <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">خدماتنا</span>
              {services.map((s) => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-lg font-bold text-white hover:text-orange-500 transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </div>
            <div className="h-px bg-white/10 my-2" />
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white">لماذا نحن؟</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white">اتصل بنا</a>
            <a 
              href={`tel:${phoneNumber}`}
              className="mt-4 px-8 py-4 orange-gradient rounded-xl text-xl font-bold text-white"
            >
              اتصل الآن
            </a>
          </div>
        </motion.div>
      )}

      {/* Hero Section with Banner */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        {/* Banner Image Background */}
        <div 
          className="absolute inset-0 z-0 cursor-pointer"
          onClick={() => setSelectedImage("https://i.postimg.cc/9QFcwzyQ/ورشة_متنقلة_لصيانة_السيارات_بالرياض.png")}
        >
          <img 
            src="https://i.postimg.cc/9QFcwzyQ/ورشة_متنقلة_لصيانة_السيارات_بالرياض.png" 
            alt="ورشة متنقلة لصيانة السيارات"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay for text readability without losing image clarity */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold uppercase tracking-wider mb-8 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                خدمة متنقلة فورية 24/7
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-white drop-shadow-2xl">
                ورشة صيانة <br />
                <span className="text-orange-500">سيارات متنقلة</span> <br />
                بالرياض
              </h1>
              
              <p className="text-xl text-white/90 mb-12 max-w-xl leading-relaxed font-medium drop-shadow-md">
                نصل إليك أينما كنت في الرياض. خدمات ميكانيكا، كهرباء، فحص كمبيوتر، وتغيير بطاريات بأعلى جودة وأفضل الأسعار.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="px-10 py-5 orange-gradient rounded-2xl text-xl font-bold text-white shadow-2xl shadow-orange-500/40 hover:scale-105 transition-transform flex items-center gap-4"
                >
                  <Phone className="w-6 h-6" />
                  اتصل بنا الآن
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  className="px-10 py-5 bg-white text-black rounded-2xl text-xl font-bold hover:bg-zinc-100 transition-all flex items-center gap-4 shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  تواصل واتساب
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">خدماتنا المتكاملة</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
            <p className="text-zinc-400 max-w-2xl mx-auto">
              نقدم مجموعة واسعة من الخدمات الاحترافية لضمان عودة سيارتك للطريق بأمان وكفاءة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl hover:border-orange-500/50 transition-all group overflow-hidden flex flex-col scroll-mt-24"
              >
                {service.image && (
                  <div 
                    className="w-full h-64 overflow-hidden relative cursor-pointer"
                    onClick={() => setSelectedImage(service.image!)}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  </div>
                )}
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -z-10" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">لماذا يختارنا العملاء؟</h2>
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        <feature.icon className="text-orange-500 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-zinc-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/nzPrFySP/ورشة_حديثة_لصيانة_السيارات_الكهربائية.png" 
                  alt="ورشة حديثة لصيانة السيارات"
                  className="rounded-3xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-500"
                  onClick={() => setSelectedImage("https://i.postimg.cc/nzPrFySP/ورشة_حديثة_لصيانة_السيارات_الكهربائية.png")}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 p-8 bg-orange-500 rounded-3xl shadow-xl">
                  <div className="text-4xl font-black text-white mb-1">+10</div>
                  <div className="text-white/90 font-bold">سنوات خبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">تواصل معنا</h2>
              <p className="text-zinc-400 text-lg mb-8">
                هل لديك استفسار أو ترغب في حجز موعد؟ املأ النموذج وسنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">اتصل بنا</div>
                    <div className="font-bold">{phoneNumber}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">موقعنا</div>
                    <div className="font-bold">الرياض، المملكة العربية السعودية</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 md:p-10 rounded-[2rem]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 mr-2">الاسم</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="اسمك الكريم" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 mr-2">رقم الجوال</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="05xxxxxxxx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 mr-2">نوع الخدمة</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors appearance-none">
                    <option className="bg-zinc-900">اختر الخدمة</option>
                    {services.map(s => <option key={s.id} className="bg-zinc-900" value={s.id}>{s.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 mr-2">الرسالة</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors h-32" placeholder="كيف يمكننا مساعدتك؟"></textarea>
                </div>
                <button className="w-full orange-gradient py-4 rounded-xl font-bold text-white shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform">
                  إرسال الطلب
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 lg:p-20 rounded-[3rem] orange-gradient relative"
          >
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">جاهزون لخدمتك الآن</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              لا تتردد في الاتصال بنا، فريقنا الفني جاهز للانطلاق إليك في أي وقت وفي أي مكان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${phoneNumber}`}
                className="px-10 py-5 bg-black text-white rounded-2xl text-xl font-bold hover:bg-zinc-900 transition-colors flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                اتصل بنا مباشرة
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                className="px-10 py-5 bg-white text-orange-600 rounded-2xl text-xl font-bold hover:bg-zinc-100 transition-colors flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 orange-gradient rounded flex items-center justify-center">
                  <Wrench className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">
                  <span className="text-orange-500">ورشة</span> متنقلة
                </span>
              </div>
              <p className="text-zinc-400 max-w-sm leading-relaxed">
                نحن خيارك الأول لصيانة السيارات المتنقلة في الرياض. نقدم خدمات احترافية، سريعة، وموثوقة في موقعك 24 ساعة طوال أيام الأسبوع.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-zinc-500 hover:text-orange-500 transition-colors">خدماتنا</a></li>
                <li><a href="#features" className="text-zinc-500 hover:text-orange-500 transition-colors">لماذا نحن؟</a></li>
                <li><a href="#contact" className="text-zinc-500 hover:text-orange-500 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">قانوني</h4>
              <ul className="space-y-4">
                <li><button onClick={() => setActiveLegalModal("privacy")} className="text-zinc-500 hover:text-orange-500 transition-colors text-sm cursor-pointer">سياسة الخصوصية</button></li>
                <li><button onClick={() => setActiveLegalModal("terms")} className="text-zinc-500 hover:text-orange-500 transition-colors text-sm cursor-pointer">الشروط والأحكام</button></li>
                <li><button onClick={() => setActiveLegalModal("cookies")} className="text-zinc-500 hover:text-orange-500 transition-colors text-sm cursor-pointer">سياسة الكوكيز</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} ورشة متنقلة بالرياض. جميع الحقوق محفوظة.
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-zinc-500 hover:text-orange-500 transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                {phoneNumber}
              </a>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                الرياض، المملكة العربية السعودية
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href={`https://wa.me/${whatsappNumber}`}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 text-white"
          title="تواصل عبر واتساب"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href={`tel:${phoneNumber}`}
          className="w-14 h-14 orange-gradient rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 text-white"
          title="اتصل بنا"
        >
          <Phone className="w-7 h-7" />
        </motion.a>
      </div>
      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            <motion.img
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Legal Modals */}
      <AnimatePresence>
        {activeLegalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-zinc-900 border border-white/10 w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="absolute top-6 left-6 text-zinc-400 hover:text-white p-2 bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {activeLegalModal === "privacy" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">سياسة الخصوصية</h2>
                  <p className="text-zinc-400 mb-4">نحن في ورشة متنقلة نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.</p>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">1. المعلومات التي نجمعها</h3>
                  <p className="text-zinc-400">نجمع المعلومات التي تقدمها لنا مباشرة عند طلب الخدمة، مثل الاسم ورقم الهاتف والموقع الجغرافي.</p>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">2. كيف نستخدم معلوماتك</h3>
                  <p className="text-zinc-400">نستخدم معلوماتك لتقديم خدمات الصيانة، والتواصل معك بخصوص طلبك، وتحسين جودة خدماتنا.</p>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">3. حماية البيانات</h3>
                  <p className="text-zinc-400">نتخذ إجراءات أمنية تقنية وإدارية لحماية بياناتك من الوصول غير المصرح به.</p>
                </div>
              )}

              {activeLegalModal === "terms" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">الشروط والأحكام</h2>
                  <p className="text-zinc-400 mb-4">باستخدامك لخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية.</p>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">1. تقديم الخدمة</h3>
                  <p className="text-zinc-400">نحن نقدم خدمات صيانة السيارات المتنقلة في مدينة الرياض. قد تختلف أوقات الاستجابة بناءً على الموقع وحالة المرور.</p>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">2. الرسوم والدفع</h3>
                  <p className="text-zinc-400">يتم تحديد تكلفة الخدمة بناءً على نوع العطل وقطع الغيار المطلوبة. يجب سداد الرسوم عند اكتمال الخدمة.</p>
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">3. الضمان</h3>
                  <p className="text-zinc-400">نقدم ضماناً على الخدمات المقدمة وقطع الغيار المركبة وفقاً لسياسة كل قطعة.</p>
                </div>
              )}

              {activeLegalModal === "cookies" && (
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">سياسة الكوكيز</h2>
                  <p className="text-zinc-400 mb-4">يستخدم موقعنا ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم وتحليل حركة المرور.</p>
                  <p className="text-zinc-400">يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك، ولكن قد يؤثر ذلك على وظائف الموقع.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
