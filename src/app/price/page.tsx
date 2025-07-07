'use client';

import {
    Card, CardHeader, CardTitle, CardDescription, CardContent
} from "@/components/ui/card";
import {
    Tabs, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
                    <TabsTrigger value="without">Без риболовлі</TabsTrigger>
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
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {[
                                    {
                                        title: "Звичайна риболовля",
                                        desc: "Для відпочинку та розваги",
                                        prices: [
                                            ["Дорослий (цілий день)", "250 грн"],
                                            ["Дорослий (1/2 дня)", "150 грн"],
                                            ["Нічна риболовля (з 20:00 до 6:00)", "300 грн"]
                                        ]
                                    },
                                    {
                                        title: "Спортивна риболовля",
                                        desc: "Для професіоналів та змагань",
                                        prices: [
                                            ["Тренування (4 години)", "350 грн"],
                                            ["Участь у змаганнях", "500 грн"],
                                            ["Аренда спорядження", "200 грн/день"],
                                        ]
                                    }
                                ].map((item, i) => (
                                    <motion.div key={i} variants={cardFade} custom={i} initial="hidden" animate="visible">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>{item.title}</CardTitle>
                                                <CardDescription>{item.desc}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-3">
                                                    {item.prices.map(([label, price], index) => (
                                                        <li key={index} className="flex justify-between">
                                                            <span>{label}</span>
                                                            <span className="font-bold">{price}</span>
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
                                className="grid md:grid-cols-3 gap-6"
                            >
                                {[
                                    ["Мала альтанка", "До 4 осіб", [["1 година", "100 грн"], ["День (до 8 год)", "500 грн"], ["Доба", "800 грн"]]],
                                    ["Середня альтанка", "До 8 осіб", [["1 година", "150 грн"], ["День (до 8 год)", "700 грн"], ["Доба", "1200 грн"]]],
                                    ["Велика альтанка", "До 15 осіб", [["1 година", "250 грн"], ["День (до 8 год)", "1200 грн"], ["Доба", "2000 грн"]]],
                                ].map(([title, desc, list], i) => (
                                    <motion.div key={i} variants={cardFade} custom={i} initial="hidden" animate="visible">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>{title}</CardTitle>
                                                <CardDescription>{desc}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="space-y-3">
                                                    {(list as string[][]).map(([label, price], index) => (
                                                        <li key={index} className="flex justify-between">
                                                            <span>{label}</span>
                                                            <span className="font-bold">{price}</span>
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
                                className="max-w-md mx-auto"
                            >
                                <motion.div variants={cardFade} custom={0} initial="hidden" animate="visible">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Відвідування без риболовлі</CardTitle>
                                            <CardDescription>Для супроводжуючих осіб</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex justify-between"><span>Дорослий</span><span className="font-bold">100 грн</span></li>
                                                <li className="flex justify-between"><span>Дитячий (до 14 років)</span><span className="font-bold">50 грн</span></li>
                                                <li className="flex justify-between"><span>Парковка авто</span><span className="font-bold">30 грн/день</span></li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Tabs>

            {/* Винесено за межі AnimatePresence */}
            <motion.div
                className="mt-12 p-6 bg-secondary rounded-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <h2 className="text-2xl font-bold mb-4">Додаткова інформація</h2>
                <ul className="space-y-2">
                    <li>⚡ Знижка 10% для пенсіонерів та людей з інвалідністю</li>
                    <li>🎣 Спорядження можна принести своє або орендувати на місці</li>
                    <li>🐟 Виловлену рибу можна придбати за додаткову плату</li>
                    <li>📞 Попереднє бронювання альтанок за телефоном</li>
                </ul>
            </motion.div>
        </div>
    );
}