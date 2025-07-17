'use client';
import { useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, TreePalm, FishOff, TentTree, Phone, MapPin, Fish, Trophy } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";





export default function AboutPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut" as const,
            }
        })
    };
    useEffect(() => {
        document.title = 'Про нас — Аванфіш';
    }, []);


    return (
   

        <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/11.png"
                        alt="Озеро AvanFish"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center px-4 max-w-3xl">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-white mb-4"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            Про AvanFish
                        </motion.h1>
                        <motion.p
                            className="text-xl text-white/90"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            custom={1}
                        >
                            Професійне риболовне господарство з комфортом для кожного
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-16 max-w-5xl">
                {/* About Section */}
                <motion.div
                    className="mb-16 bg-white rounded-xl shadow-sm p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Ласкаво просимо до AvanFish</h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <MapPin className="text-primary" />
                                    <span>Ідеальна локація</span>
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Лише 40 хвилин від Києва, у мальовничому селі Літки, розташована унікальна водойма AvanFish.
                                    Це ідеальне місце для тих, хто цінує якісну риболовлю, тишу природи та незабутній відпочинок.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <Fish className="text-primary" />
                                    <span>Наші озера</span>
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span><strong>Головне озеро (4 га)</strong> - трофейні короп, амур, товстолоб, щука</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">•</span>
                                        <span><strong>Карасьове озеро (2 га)</strong> - ідеальне для спокійної риболовлі</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/22.jpg"
                                alt="Озеро AvanFish"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </motion.div>

                <Separator className="my-12" />

                {/* Values Section */}
                <motion.section
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Наші принципи</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[{
                            Icon: BadgeCheck,
                            title: "Чесність і прозорість",
                            desc: "Без прихованих платежів і з повною відкритістю.",
                            color: "text-green-600"
                        }, {
                            Icon: FishOff,
                            title: "Екологічна відповідальність",
                            desc: "Дотримуємося принципу 'спіймав-відпусти' для здорової популяції риби.",
                            color: "text-blue-600"
                        }, {
                            Icon: TreePalm,
                            title: "Гармонія з природою",
                            desc: "Ми не використовуємо хімікатів і пильно слідкуємо за чистотою водойми.",
                            color: "text-orange-600"
                        }].map(({ Icon, title, desc, color }, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeInUp}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className={`${color} mb-4`}>
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                                <p className="text-muted-foreground">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <Separator className="my-12" />

                {/* Infrastructure Section */}
                <motion.section
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Інфраструктура</h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-8 ">
                            {[{
                                Icon: TentTree,
                                title: "Комфортні альтанки",
                                desc: "Зручні місця для відпочинку з мангалами, тінню та освітленням. Ідеальні для сімей та компаній друзів."
                            }, {
                                Icon: Trophy,
                                title: "Спортивні зони",
                                desc: "Спеціальні місця для проведення турнірів та тренувань з професійним обладнанням."
                            }, {
                                Icon: Phone,
                                title: "Цілодобова підтримка",
                                desc: "Наші адміністратори завжди на зв'язку, щоб зробити ваш відпочинок комфортним."
                            }].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full items-center flex justify-center">
                                        <item.Icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/22.jpg"
                                alt="Інфраструктура AvanFish"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    className="bg-primary/10 rounded-xl p-8 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold mb-4">Готові до незабутнього відпочинку?</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Забронюйте свою риболовлю вже сьогодні та отримайте незабутні враження на природі!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button asChild size="lg">
                            <Link href="/price">
                                Переглянути ціни
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/contacts">
                                Як нас знайти
                            </Link>
                        </Button>
                    </div>
                </motion.section>
            </section>
        </div>
    );
}
   