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

      {/* Short About Section */}
      <motion.section
        className="container mx-auto py-16 px-4 text-center max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6">Про AvanFish</h2>
        <p className="text-lg mb-4">
          AvanFish — сучасне риболовне озеро для відпочинку, спортивної риболовлі та сімейного дозвілля. Площа — 2.5 га.
        </p>
        <p className="text-lg mb-8">
          Комфортні альтанки, зони для професіоналів та аматорів, паркінг та зручна локація.
        </p>
        <Button asChild variant="outline" className="gap-2">
          <Link href="/about">
            Детальніше про нас <ArrowRight size={18} />
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
          <h2 className="text-2xl font-bold text-center mb-10">Швидкі переходи</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
            {[{
              href: "/trophies",
              icon: <Trophy />,
              label: "Наші трофеї"
            }, {
              href: "/price",
              icon: <Fish />,
              label: "Послуги та ціни"
            }, {
              href: "/contacts",
              icon: <MapPin />,
              label: "Контакти"
            }].map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeInUp}>
                <Button asChild variant="outline" className="justify-center gap-4 w-full text-lg">
                  <Link href={item.href}>
                    {item.icon} {item.label}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
