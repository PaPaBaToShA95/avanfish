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

// SVG іконка для Instagram
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

// SVG іконка для TikTok
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.97-6.46-2.98-1.6-1.98-2.2-4.52-1.89-6.95.22-1.72 1-3.32 2.08-4.63.99-1.2 2.34-2.14 3.82-2.61.01-1.63.01-3.25.01-4.87.01-1.58.48-3.13 1.4-4.42.95-1.31 2.42-2.28 4.04-2.68z" />
    </svg>
);


export default function ContactsPage() {
    const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);

    const phoneNumbers = [
        { number: '+380685302083', label: '' },
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
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="flex flex-col"
                    >
                        <Card className="flex-grow flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-2xl">Наші контакти</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 flex-grow">
                                {/* Адреса */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Адреса</h3>
                                        <p
                                            className="text-muted-foreground cursor-pointer group"
                                            onClick={() => {
                                                const address = encodeURIComponent("50.719527, 30.783984");
                                                const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
                                                window.open(googleMapsUrl, '_blank');
                                            }}
                                        >
                                            Літки, Броварський район, Київська область
                                            <br />
                                            <span className='text-primary underline group-hover:text-primary/80 transition-colors'>Прокласти маршрут</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Телефони */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Телефони</h3>
                                        {phoneNumbers.map((item, index) => (
                                            <p
                                                key={index}
                                                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                                                onClick={() => handleCall(item.number)}
                                            >
                                                {item.number}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Графік */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Графік роботи</h3>
                                        <p className="text-muted-foreground">Цілодобово</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="flex flex-col"
                >
                <div className="mt-12 flex justify-center">
                    <div className="flex items-center gap-4">
                <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Соціальні мережі</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground mb-4">
                                Слідкуйте за нами в соціальних мережах, щоб бути в курсі всіх новин та акцій!
                            </p>
                        </CardContent>
                        <CardFooter className="flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="https://www.instagram.com/avanfish_club?igsh=aDUzZDdsYXhib2Vm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full gap-3 text-lg py-6 group hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-all duration-300"
                                >
                                    <InstagramIcon className="w-24 h-24 transition-transform duration-300 group-hover:scale-110" />
                                    Instagram
                                </Button>
                            </a>
                            <a
                                href="https://www.tiktok.com/@nestor_mahno87?_t=ZM-8xsgXSPKIru&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full gap-3 text-lg py-6 group hover:bg-black hover:text-white transition-all duration-300"
                                >
                                    <TikTokIcon className="w-24 h-24 text-black group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
                                    TikTok
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                    
                    </div>
                </div>
                </motion.div>
                {/* Мапа з анімацією */}
                <motion.div
                    className="mt-12 rounded-lg overflow-hidden shadow-lg"
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
                        referrerPolicy="no-referrer-when-downgrade"
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
                                    className="w-full justify-start gap-4 p-4 h-auto"
                                    onClick={() => handleCall(item.number)}
                                >
                                    <Phone className="w-8 h-8 text-primary" />
                                    <div className="text-left flex flex-col">
                                        {item.label && <div className="text-base">{item.label}</div>}
                                        <div className="text-lg font-semibold">{item.number}</div>
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