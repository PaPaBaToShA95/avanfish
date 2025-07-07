'use client';

import { Separator } from "@/components/ui/separator";
import { BadgeCheck, TreePalm, FishOff, TentTree, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
            <section className="container mx-auto py-16 px-4 max-w-5xl">
                <motion.h1
                    className="text-4xl font-bold text-center mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Про AvanFish
                </motion.h1>

                <motion.p
                    className="text-lg text-center mb-12 text-muted-foreground"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    custom={1}
                >
                    Професійне риболовне господарство з комфортом для кожного
                </motion.p>

                {/* Загальна інформація */}
                <motion.div
                    className="flex flex-col md:flex-row gap-10 items-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="md:w-1/2">
                        <Image
                            src="/11.png"
                            alt="Вигляд на озеро AvanFish"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-xl"
                        />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <h2 className="text-2xl font-semibold">Місце, де зупиняється час</h2>
                        <p className="text-base leading-relaxed">
                            AvanFish розташоване в мальовничому селі Літки, Броварського району, лише 40 хвилин від Києва.
                            Тут, серед природи та співу птахів, ви знайдете не лише риболовлю — а справжній відпочинок душею.
                        </p>
                        <p className="text-base leading-relaxed">
                            Наша водойма — це 2.5 гектара чистої води, доглянута територія, обладнані зони для лову та затишні альтанки для компаній будь-якого розміру.
                        </p>
                    </div>
                </motion.div>

                <Separator className="my-10" />

                {/* Цінності */}
                <motion.section
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl font-semibold text-center mb-8">Наші принципи</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[{
                            Icon: BadgeCheck,
                            title: "Чесність і прозорість",
                            desc: "Без прихованих платежів і з повною відкритістю.",
                            color: "text-green-600"
                        }, {
                            Icon: FishOff,
                            title: "Риболовля з повагою",
                            desc: "Принцип спіймав—відпусти для здорової популяції.",
                            color: "text-blue-600"
                        }, {
                            Icon: TreePalm,
                            title: "Природа — наш союзник",
                            desc: "Ми не використовуємо хімікатів і слідкуємо за чистотою.",
                            color: "text-orange-600"
                        }].map(({ Icon, title, desc, color }, i) => (
                            <motion.div key={i} custom={i} variants={fadeInUp}>
                                <div className="flex justify-center mb-4">
                                    <Icon size={36} className={color} />
                                </div>
                                <h3 className="text-lg font-medium mb-2">{title}</h3>
                                <p className="text-muted-foreground">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <Separator className="my-10" />

                {/* Інфраструктура */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl font-semibold text-center mb-8">Інфраструктура</h2>
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <TentTree size={28} className="text-primary mt-1" />
                                <div>
                                    <h4 className="font-medium text-lg">Альтанки для відпочинку</h4>
                                    <p className="text-muted-foreground">
                                        Зручності для невеликих компаній і великих свят — з мангалами, тінню та освітленням.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FishOff size={28} className="text-primary mt-1" />
                                <div>
                                    <h4 className="font-medium text-lg">Зони для спортивної риболовлі</h4>
                                    <p className="text-muted-foreground">
                                        Простори для тренувань і турнірів.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone size={28} className="text-primary mt-1" />
                                <div>
                                    <h4 className="font-medium text-lg">Підтримка на зв'язку</h4>
                                    <p className="text-muted-foreground">
                                        Ми завжди поруч — від бронювання до допомоги на місці.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src="/infrastructure.jpg"
                            alt="Інфраструктура озера"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </motion.section>

               
            </section>
        </div>
    );
}
