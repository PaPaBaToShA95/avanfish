import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Fish, Tent, Phone, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Відео фон */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/11.mp4" type="video/mp4" />
            Ваш браузер не підтримує HTML5 відео.
          </video>
        </div>

        {/* Затемнення і контент */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AvanFish</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Преміальне риболовне озеро у Літках, Броварський район</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="gap-2">
                <Link href="#prices">
                  <Fish size={20} /> Ціни
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="#contacts">
                  <MapPin size={20} /> Як доїхати
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="/11.png"
              alt="Вигляд на озеро AvanFish"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Про AvanFish</h2>
            <p className="text-lg mb-4">
              Риболовне озеро AvanFish - це ідеальне місце для справжніх поціновувачів риболовлі та природи.
              Наша водойма площею 2.5 га розташована в мальовничому селі Літки Броварського району.
            </p>
            <p className="text-lg mb-6">
              Ми пропонуємо комфортні умови як для аматорів, так і для професіоналів спортивної риболовлі.
              На території є альтанки, місця для парковки та вся необхідна інфраструктура.
            </p>
            <Button asChild className="gap-2">
              <Link href="#services">
                Наші послуги <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наші послуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Fish className="text-blue-600" size={24} />
                </div>
                <CardTitle>Звичайна риболовля</CardTitle>
                <CardDescription>Відпочинок для всієї родини</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Ідеально підходить для новачків та тих, хто хоче розслабитися біля води.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#prices">Детальніше</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Tent className="text-green-600" size={24} />
                </div>
                <CardTitle>Спортивна риболовля</CardTitle>
                <CardDescription>Для професіоналів та змагань</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Спеціальні зони для спортивної риболовлі з можливістю участі в турнірах.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#prices">Детальніше</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Tent className="text-orange-600" size={24} />
                </div>
                <CardTitle>Аренда альтанок</CardTitle>
                <CardDescription>Комфортний відпочинок</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Затишні альтанки різного розміру для відпочинку компанією чи сім`єю.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#prices">Детальніше</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наші ціни</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Риболовля</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Дорослий (цілий день)</span>
                <span className="font-bold">300 грн</span>
              </div>
              <div className="flex justify-between">
                <span>Дорослий (1/2 дня)</span>
                <span className="font-bold">200 грн</span>
              </div>
              <div className="flex justify-between">
                <span>Діти до 14 років</span>
                <span className="font-bold">150 грн</span>
              </div>
              <div className="flex justify-between">
                <span>Нічна риболовля</span>
                <span className="font-bold">400 грн</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Альтанки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Мала (до 4 осіб)</span>
                <span className="font-bold">500 грн/день</span>
              </div>
              <div className="flex justify-between">
                <span>Середня (до 8 осіб)</span>
                <span className="font-bold">800 грн/день</span>
              </div>
              <div className="flex justify-between">
                <span>Велика (до 15 осіб)</span>
                <span className="font-bold">1200 грн/день</span>
              </div>
              <div className="flex justify-between">
                <span>Парковка</span>
                <span className="font-bold">50 грн/день</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакти</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="text-primary" /> Адреса
              </h3>
              <p className="mb-6">с. Літки, Броварський район, Київська область</p>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="text-primary" /> Телефони
              </h3>
              <p className="mb-2">
                <a href="tel:+380991234567" className="hover:underline">+38 (099) 123 45 67</a>
              </p>
              <p className="mb-6">
                <a href="tel:+380971234567" className="hover:underline">+38 (097) 123 45 67</a>
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="text-primary" /> Години роботи
              </h3>
              <p>Щоденно з 6:00 до 22:00</p>
            </div>

            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.749209246495!2d30.7834907!3d50.7194047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d52d988a463091%3A0x815023a0d8d4380c!2sAvanFish!5e1!3m2!1suk!2sua!4v1751820493461!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}