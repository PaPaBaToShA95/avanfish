'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Phone, MapPin, Clock, Star, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

// Анімації
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.5 }
    }),
};

export default function ContactsPage() {
    const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);

    const phoneNumbers = [
        { number: '+380441234567', label: '' },
        { number: '+380501234567', label: '' }
    ];

    const handleCall = (number: string) => {
        setIsPhoneDialogOpen(false);
        window.location.href = `tel:${number}`;
    };

    const handleLeaveReview = () => {
        window.open(
            'https://search.google.com/local/reviews?placeid=ChIJkTBGipgt1UARDDjU2KAjUIE&q=AvanFish&hl=uk&gl=UA',
            '_blank'
        );
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Контакти
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Відгук */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Залиште відгук</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <Star className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Ваша думка важлива для нас</h3>
                                    <p className="text-muted-foreground">
                                        Допоможіть іншим клієнтам дізнатися про якість наших послуг, залишивши відгук на Google Maps
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button onClick={handleLeaveReview} className="w-full gap-2">
                                    <MessageSquare className="w-5 h-5" />
                                    Залишити відгук
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>

                    {/* Контактна інформація */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Наші контакти</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Адреса */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Адреса</h3>
                                        <p
                                            className="text-muted-foreground cursor-pointer"
                                            onClick={() => {
                                                const address = encodeURIComponent("50.719527, 30.783984");
                                                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
                                                window.open(googleMapsUrl, '_blank');
                                            }}
                                        >
                                            Літки, Броварський район, Київська область
                                            <br />
                                            <span className='text-black underline'>Маршрут</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Телефони */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Телефони</h3>
                                        {phoneNumbers.map((item, index) => (
                                            <p
                                                key={index}
                                                className="text-muted-foreground hover:text-primary cursor-pointer"
                                                onClick={() => handleCall(item.number)}
                                            >
                                                {item.number}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Графік */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Графік роботи</h3>
                                        <p className="text-muted-foreground">Цілодобово</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button
                                    variant="outline"
                                    className="w-full gap-2"
                                    onClick={() => setIsPhoneDialogOpen(true)}
                                >
                                    <Phone className="w-5 h-5" />
                                    Зателефонуйте нам
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>

                {/* Мапа з анімацією */}
                <motion.div
                    className="mt-12 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.749209246495!2d30.7834907!3d50.7194047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d52d988a463091%3A0x815023a0d8d4380c!2sAvanFish!5e1!3m2!1suk!2sua!4v1751820493461!5m2!1suk!2sua"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                    ></iframe>
                </motion.div>

                {/* Діалог */}
                <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Оберіть номер для дзвінка</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-2">
                            {phoneNumbers.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="w-full justify-start gap-2"
                                    onClick={() => handleCall(item.number)}
                                >
                                    <Phone className="w-10 h-10" />
                                    <div className="text-left flex flex-col">
                                        <div>{item.label}</div>
                                        <div className="text-sm font-mono">{item.number}</div>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
