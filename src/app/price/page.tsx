'use client';

import {
    Card, CardHeader, CardTitle, CardDescription, CardContent
} from "@/components/ui/card";
import {
    Tabs, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';

// Анімації
const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const cardFade = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
};

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState("fishing");
    useEffect(() => {
        document.title = 'Ціни — Аванфіш';
    }, []);

    return (
        <div className="container mx-auto py-12">
            <motion.h1
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Ціни на нашому риболовному озері
            </motion.h1>

            <Tabs defaultValue="fishing" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                    <TabsTrigger value="fishing">Риболовля</TabsTrigger>
                    <TabsTrigger value="arbors">Альтанки</TabsTrigger>
                    <TabsTrigger value="without">Додаткові послуги</TabsTrigger>
                </TabsList>

                <motion.div layout>
                    <AnimatePresence mode="wait">
                        {activeTab === "fishing" && (
                            <motion.div
                                key="fishing"
                                variants={tabContentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid md:grid-cols-4 gap-6"
                            >
                                {[
                                    {
                                        title: "На мирну рибу",
                                        desc: "Для відпочинку та розваги",
                                        prices: [
                                            ["День", "750 грн", "Норма вилову: 2,5 кг"],
                                            ["Доба", "1000 грн", "Норма вилову: 3,5 кг"],
                                            ["Ніч", "750 грн", "Норма вилову: 2,5 кг", "Час: 19:00 - 07:00"]
                                        ]
                                    },
                                    {
                                        title: "Спортивна риболовля",
                                        desc: "Для змагань та тренувань",
                                        prices: [
                                            ["День", "500 грн", "Без норми вилову"],
                                            ["Доба", "750 грн", "Без норми вилову"]
                                        ]
                                    },
                                    {
                                        title: "Риболовля на поплавок",
                                        desc: "Для спокійної риболовлі",
                                        prices: [
                                            ["День", "400 грн", "Норма вилову: 2 кг"],
                                            ["Доба", "600 грн", "Норма вилову: 3 кг"]
                                        ]
                                    },
                                    {
                                        title: "На хижу рибу",
                                        desc: "Для любителів активної риболовлі",
                                        prices: [
                                            ["День", "750 грн", "Норма вилову: 2 кг"]
                                        ]
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={cardFade}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        className="h-full"
                                    >
                                        <Card className="h-full flex flex-col">
                                            <CardHeader className="text-center">
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                                <CardDescription>{item.desc}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <ul className="space-y-3">
                                                    {item.prices.map(([period, price, ...details], index) => (
                                                        <li key={index} className="flex flex-col">
                                                            <div className="flex justify-between items-baseline">
                                                                <span className="font-medium">{period}</span>
                                                                <span className="font-bold text-primary">{price}</span>
                                                            </div>
                                                            {details.map((detail, i) => (
                                                                <div key={i} className="text-sm text-muted-foreground mt-1">
                                                                    {detail}
                                                                </div>
                                                            ))}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === "arbors" && (
                            <motion.div
                                key="arbors"
                                variants={tabContentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid md:grid-cols-1 gap-6"
                            >
                                {[
                                    {
                                        title: "Оренда альтанки",
                                        desc: "Затишні альтанки для відпочинку",
                                        prices: [
                                            ["День", "500 грн", "Включає 4 особи"],
                                            ["Доба", "700 грн", "Включає 4 особи"],
                                            ["Додаткова особа", "100 грн", "За кожну особу"],
                                            ["", "", "В оренду входить мангал"]
                                        ]
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={cardFade}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        className="h-full"
                                    >
                                        <Card className="h-full flex flex-col">
                                            <CardHeader className="text-center">
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                                <CardDescription>{item.desc}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <ul className="space-y-3">
                                                    {item.prices.map(([period, price, ...details], index) => (
                                                        <li key={index} className="flex flex-col">
                                                            <div className="flex justify-between items-baseline">
                                                                <span className="font-medium">{period}</span>
                                                                <span className="font-bold text-primary">{price}</span>
                                                            </div>
                                                            {details.map((detail, i) => (
                                                                <div key={i} className="text-sm text-muted-foreground mt-1">
                                                                    {detail}
                                                                </div>
                                                            ))}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === "without" && (
                            <motion.div
                                key="without"
                                variants={tabContentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid md:grid-cols-1 gap-6"
                            >
                                {[
                                    {
                                        title: "Додаткові послуги",
                                        desc: "Зручності для вашого відпочинку",
                                        prices: [
                                            ["Мангал", "150 грн"],
                                            ["Ламзак", "150 грн"],
                                            ["Шампура (5 штук)", "100 грн"],
                                            ["Гамак", "200 грн"],
                                            ["Дрова", "200 грн"]
                                        ]
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={cardFade}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        className="h-full"
                                    >
                                        <Card className="h-full flex flex-col">
                                            <CardHeader className="text-center">
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                                <CardDescription>{item.desc}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <ul className="space-y-3">
                                                    {item.prices.map(([service, price], index) => (
                                                        <li key={index} className="flex justify-between items-baseline">
                                                            <span className="font-medium">{service}</span>
                                                            <span className="font-bold text-primary">{price}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Tabs>

            <motion.div
                className="mt-12 p-6 bg-secondary/50 rounded-lg border border-border shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Додаткова інформація</h2>
                <ul className="space-y-3 max-w-2xl mx-auto">
                   
                    <li className="flex items-start gap-2">
                        <span className="text-primary">🐟</span>
                        <span>Виловлену рибу можна придбати за додаткову плату</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">📞</span>
                        <span>Попереднє бронювання альтанок за телефоном</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">❗️</span>
                        <span>Уся риба вище 3,5 кг <strong>ВІДПУСКАЄТЬСЯ</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary">❗️</span>
                        <span>У вихідні та святкові дні сектора 1, 3, 12, 16, 19, 23 здаються тільки з альтанкою</span>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}