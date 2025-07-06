import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function PricingPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Ціни на нашому риболовному озері</h1>

            <Tabs defaultValue="fishing" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                    <TabsTrigger value="fishing">Риболовля</TabsTrigger>
                    <TabsTrigger value="arbors">Альтанки</TabsTrigger>
                    <TabsTrigger value="without">Без риболовлі</TabsTrigger>
                </TabsList>

                {/* Риболовля */}
                <TabsContent value="fishing">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Звичайна риболовля</CardTitle>
                                <CardDescription>Для відпочинку та розваги</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>Дорослий (цілий день)</span>
                                        <span className="font-bold">250 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Дорослий (1/2 дня)</span>
                                        <span className="font-bold">150 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Дитячий (до 14 років)</span>
                                        <span className="font-bold">100 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Нічна риболовля (з 20:00 до 6:00)</span>
                                        <span className="font-bold">300 грн</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Спортивна риболовля</CardTitle>
                                <CardDescription>Для професіоналів та змагань</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>Тренування (4 години)</span>
                                        <span className="font-bold">350 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Участь у змаганнях</span>
                                        <span className="font-bold">500 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Аренда спорядження</span>
                                        <span className="font-bold">200 грн/день</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Тренерський супровід</span>
                                        <span className="font-bold">400 грн/год</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Альтанки */}
                <TabsContent value="arbors">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Мала альтанка</CardTitle>
                                <CardDescription>До 4 осіб</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>1 година</span>
                                        <span className="font-bold">100 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>День (до 8 год)</span>
                                        <span className="font-bold">500 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Доба</span>
                                        <span className="font-bold">800 грн</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Середня альтанка</CardTitle>
                                <CardDescription>До 8 осіб</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>1 година</span>
                                        <span className="font-bold">150 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>День (до 8 год)</span>
                                        <span className="font-bold">700 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Доба</span>
                                        <span className="font-bold">1200 грн</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Велика альтанка</CardTitle>
                                <CardDescription>До 15 осіб</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>1 година</span>
                                        <span className="font-bold">250 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>День (до 8 год)</span>
                                        <span className="font-bold">1200 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Доба</span>
                                        <span className="font-bold">2000 грн</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Без риболовлі */}
                <TabsContent value="without">
                    <div className="max-w-md mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Відвідування без риболовлі</CardTitle>
                                <CardDescription>Для супроводжуючих осіб</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex justify-between">
                                        <span>Дорослий</span>
                                        <span className="font-bold">100 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Дитячий (до 14 років)</span>
                                        <span className="font-bold">50 грн</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Парковка авто</span>
                                        <span className="font-bold">30 грн/день</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

            <div className="mt-12 p-6 bg-secondary rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Додаткова інформація</h2>
                <ul className="space-y-2">
                    <li>⚡ Знижка 10% для пенсіонерів та людей з інвалідністю</li>
                    <li>🎣 Спорядження можна принести своє або орендувати на місці</li>
                    <li>🐟 Виловлену рибу можна придбати за додаткову плату</li>
                    <li>📞 Попереднє бронювання альтанок за телефоном</li>
                </ul>
            </div>
        </div>
    );
}