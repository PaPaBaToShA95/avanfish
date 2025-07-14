'use client';

import { Button } from "@/components/ui/button";
import { MapPin, Fish, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
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

        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AvanFish</h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Преміальне риболовне озеро у Літках
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="gap-2">
                <Link href="/price">
                  <Fish size={20} /> Ціни
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/contacts">
                  <MapPin size={20} /> Як доїхати
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <motion.section
        className="container mx-auto py-16 px-4 text-center max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-8">Чому обирають AvanFish?</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: "📍",
              title: "Доступна локація",
              text: "Лише 40 хвилин від Києва"
            },
            {
              icon: "🐟",
              title: "Трофейна риба",
              text: "Короп, амур, щука, товстолоб"
            },
            {
              icon: "🌿",
              title: "Чиста природа",
              text: "Заповідна зона без міського шуму"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <Button asChild variant="outline" className="gap-2 mx-auto">
          <Link href="/about">
            Дізнатися більше <ArrowRight size={18} />
          </Link>
        </Button>
      </motion.section>

      {/* Quick Links Section */}
      <motion.section
        className="bg-secondary py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">Швидкий доступ</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
              href: "/trophies",
              icon: <Trophy className="w-6 h-6" />,
              label: "Наші трофеї",
              desc: "Фото уловів"
            }, {
              href: "/price",
              icon: <Fish className="w-6 h-6" />,
              label: "Ціни",
              desc: "Послуги та вартість"
            }, {
              href: "/contacts",
              icon: <MapPin className="w-6 h-6" />,
              label: "Контакти",
              desc: "Як нас знайти"
            }].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={item.href} className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}