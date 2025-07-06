"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sectorsData = [
    {
        id: 1,
        name: 'Сектор 1 "Сонячний"',
        description: 'Затишний сектор на сонячній стороні озера. Ідеально для сімейного відпочинку.',
        mainImage: '/images/sector1-main.jpg', // Головне фото для ПК
        images: ['/images/sector1-a.jpg', '/images/sector1-b.jpg', '/images/sector1-c.jpg'], // Фото для слайдера
        position: { top: '25%', left: '15%' }, // Позиція маркера на карті в %
    },
    {
        id: 2,
        name: 'Сектор 2 "Рибальський"',
        description: 'Найкраще місце для риболовлі з глибокою водою біля берега.',
        mainImage: '/images/sector2-main.jpg',
        images: ['/images/sector2-a.jpg', '/images/sector2-b.jpg'],
        position: { top: '50%', left: '30%' },
    },
    {
        id: 3,
        name: 'Сектор 3 "Тихий Залив"',
        description: 'Віддалений сектор для тих, хто шукає спокій та усамітнення.',
        mainImage: '/images/sector3-main.jpg',
        images: ['/images/sector3-a.jpg', '/images/sector3-b.jpg', '/images/sector3-c.jpg'],
        position: { top: '70%', left: '65%' },
    },
    {
        id: 4,
        name: 'Сектор 4 "VIP"',
        description: 'Сектор з підвищеним комфортом, альтанкою та мангалом.',
        mainImage: '/images/sector4-main.jpg',
        images: ['/images/sector4-a.jpg', '/images/sector4-b.jpg', '/images/sector4-c.jpg', '/images/sector4-d.jpg'],
        position: { top: '35%', left: '80%' },
    },
];


type Sector = typeof sectorsData[0];

export default function LakeSectorsPage() {
    const [hoveredSector, setHoveredSector] = useState<Sector | null>(null);
    const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

    const openModal = (sector: Sector) => setSelectedSector(sector);
    const closeModal = () => setSelectedSector(null);

    return (
        <div className="w-full min-h-screen bg-background p-4 sm:p-8 text-foreground">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Мапа озера і сектори</h1>

            {/* Desktop Map */}
            <div className="hidden md:block">
                <div
                    className="relative w-full max-w-5xl mx-auto border border-muted rounded-xl shadow-xl"
                    onMouseLeave={() => setHoveredSector(null)}
                >
                    <Image
                        src="/images/lake-map.png"
                        alt="Карта озера"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-md"
                    />

                    {sectorsData.map((sector) => (
                        <button
                            key={sector.id}
                            className="absolute w-8 h-8 bg-destructive text-white rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-white shadow flex items-center justify-center text-xs font-bold hover:scale-110 transition"
                            style={{ top: sector.position.top, left: sector.position.left }}
                            onMouseEnter={() => setHoveredSector(sector)}
                            onClick={() => openModal(sector)}
                        >
                            {sector.id}
                        </button>
                    ))}

                    {hoveredSector && (
                        <div className="absolute top-5 right-5 w-64 bg-popover text-popover-foreground p-4 rounded-lg shadow-xl border pointer-events-none">
                            <Image
                                src={hoveredSector.mainImage}
                                alt={hoveredSector.name}
                                width={256}
                                height={160}
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />
                            <h3 className="font-bold text-lg">{hoveredSector.name}</h3>
                            <p className="text-sm text-muted-foreground">{hoveredSector.description}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile List */}
            <div className="md:hidden space-y-8">
                {sectorsData.map((sector) => (
                    <div key={sector.id} className="bg-card rounded-xl shadow-md overflow-hidden">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            className="w-full h-64"
                        >
                            {sector.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={img}
                                        alt={`${sector.name} - фото ${index + 1}`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-none"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="p-4">
                            <h3 className="font-semibold text-xl mb-2 text-foreground">{sector.name}</h3>
                            <p className="text-muted-foreground">{sector.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedSector && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-card text-card-foreground rounded-xl shadow-2xl w-full max-w-3xl relative">
                        <button
                            onClick={closeModal}
                            className="absolute -top-4 -right-4 w-10 h-10 bg-background border text-xl font-bold rounded-full shadow flex items-center justify-center hover:bg-muted transition"
                        >
                            &times;
                        </button>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">{selectedSector.name}</h2>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                className="w-full h-64 sm:h-96 rounded-lg mb-4"
                            >
                                {selectedSector.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={img}
                                            alt={`${selectedSector.name} - фото ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="rounded-lg"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="text-muted-foreground">{selectedSector.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
