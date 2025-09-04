'use client';
import { Phone, MapPin, Clock, Calendar, Instagram, Music } from 'lucide-react';


export default function Footer() {
    const phoneNumbers = [
        { number: '+380685302083', label: 'Мобільний' }
    ];

    const handleCall = (number: string) => {
        window.location.href = `tel:${number}`;
    };

    return (
        <footer className="w-full border-t bg-background text-muted-foreground py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    {/* Контактна інформація */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Контакти</h3>
                        <div className="space-y-3">
                            {phoneNumbers.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors"
                                    onClick={() => handleCall(item.number)}
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>
                                        {item.number} {item.label && <span className="text-xs">({item.label})</span>}
                                    </span>
                                </div>
                            ))}
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Літки, Броварський район, Київська область</span>
                            </div>
                        </div>
                    </div>

                    {/* Графік роботи */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Графік роботи</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Цілодобово</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Без вихідних</span>
                            </div>
                        </div>
                    </div>

                    {/* Соцмережі */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4">Соцмережі</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/avanfish_club?igsh=aDUzZDdsYXhib2Vm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-pink-600 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                                Instagram
                            </a>
                            <a
                                href="https://www.tiktok.com/@nestor_mahno87?_t=ZM-8xsgXSPKIru&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-black transition-colors"
                            >
                                <Music className="w-5 h-5" />
                                TikTok
                            </a>
                        </div>
                    </div>
                </div>

                {/* Копірайт */}
                <div className="pt-6 border-t text-center text-sm">
                    <span>
                        &copy; {new Date().getFullYear()} <span className="text-foreground font-medium">AvanFISH</span>. Всі права захищено. <br />
                        Powered by <a href="https://t.me/PaPaBaToShA" target="_blank" className="text-blue-600 font-medium hover:underline">Oleksiy Ermantraut</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
