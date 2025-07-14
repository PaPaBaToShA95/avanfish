"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const modalFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const sectorsData = [
    {
        id: 1,
        name: 'Сектор 1',
        description: 'Затишний сектор на сонячній стороні озера. Ідеально для сімейного відпочинку.',
        mainImage: '/images/sector1-main.jpeg',
        images: ['/sectors/1/1.jpg', '/sectors/1/2.jpg', '/sectors/1/3.jpg'],
        position: { top: '52%', left: '63%' },
    },
    {
        id: 2,
        name: 'Сектор 2',
        description: 'Сектор з великим пірсом для зручної риболовлі.',
        mainImage: '/images/sector2-main.jpeg',
        images: ['/sectors/2/1.jpg', '/sectors/2/2.jpg'],
        position: { top: '45%', left: '45%' },
    },
    {
        id: 3,
        name: 'Сектор 3',
        description: 'Віддалений та тихий сектор для справжніх поціновувачів природи.',
        mainImage: '/images/sector3-main.jpeg',
        images: ['/sectors/3/1.jpg', '/sectors/3/2.jpg', '/sectors/3/3.jpg'],
        position: { top: '68%', left: '50%' },
    },
];

type Sector = (typeof sectorsData)[0];

const SectorPreview = ({ sector }: { sector: Sector }) => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="absolute top-4 right-4 w-64 bg-popover text-popover-foreground p-3 rounded-lg shadow-xl border z-10 pointer-events-none"
    >
        <div className="relative w-full h-36 rounded-md mb-2 overflow-hidden">
            <Image
                src={sector.mainImage}
                alt={sector.name}
                fill
                className="object-cover"
            />
        </div>
        <h3 className="font-bold text-lg">{sector.name}</h3>
    </motion.div>
);

export default function LakeSectorsPage() {
    const [hoveredSector, setHoveredSector] = useState<Sector | null>(null);
    const [selectedSector, setSelectedSector] = useState<Sector | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const transformRef = useRef<ReactZoomPanPinchRef>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSectorClick = (sector: Sector) => {
        setSelectedSector(sector);
    };

    const closeModal = () => setSelectedSector(null);

    return (
        <div className="w-full min-h-screen bg-background p-4 sm:p-8 text-foreground">
            <motion.h1
                className="text-3xl sm:text-4xl font-bold text-center mb-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                Мапа озера і сектори
            </motion.h1>

            <motion.div
                className="relative w-full max-w-6xl mx-auto border border-muted rounded-xl shadow-xl overflow-hidden bg-gray-100"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <TransformWrapper
                    ref={transformRef}
                    initialScale={1}
                    minScale={0.8}
                    maxScale={4}
                    wheel={{ step: 0.1 }}
                    doubleClick={{ disabled: true }}
                    pinch={{ step: 0.1 }}
                    limitToBounds={false}
                >
                    <TransformComponent
                        wrapperStyle={{ width: '100%', height: '75vh', cursor: 'grab' }}
                        contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div
                            className="relative w-full"
                            style={{ paddingBottom: '56.25%' }}
                        >
                            <Image
                                src="/lakemap.png"
                                alt="Карта озера"
                                fill
                                className="object-contain select-none pointer-events-none"
                                draggable={false}
                                priority
                            />

                            {sectorsData.map((sector) => (
                                <div
                                    key={sector.id}
                                    className="absolute"
                                    style={{
                                        top: sector.position.top,
                                        left: sector.position.left,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <button
                                        className="bg-red-600 text-white rounded-full border-1 border-white shadow-lg flex items-center justify-center font-bold transition-transform duration-200 hover:bg-red-500  hover:scale-150"
                                        style={{
                                            width: isMobile ? '0.75rem' : '2.25rem',
                                            height: isMobile ? '0.75rem' : '2.25rem',
                                            fontSize: isMobile ? '0.5rem' : '1rem',
                                        }}
                                        onClick={() => handleSectorClick(sector)}
                                        onMouseEnter={() => !isMobile && setHoveredSector(sector)}
                                        onMouseLeave={() => !isMobile && setHoveredSector(null)}
                                        aria-label={`Деталі про ${sector.name}`}
                                    >
                                        {sector.id}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </TransformComponent>
                </TransformWrapper>

                <AnimatePresence>
                    {hoveredSector && !isMobile && <SectorPreview sector={hoveredSector} />}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selectedSector && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalFade}
                        onClick={closeModal}
                    >
                        <div
                            className="bg-card text-card-foreground rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 w-9 h-9 bg-background/80 border text-xl font-bold rounded-full shadow flex items-center justify-center hover:bg-muted transition z-50"
                                aria-label="Закрити"
                            >
                                &times;
                            </button>
                            <div className="p-4 sm:p-6">
                                <h2 className="text-2xl font-bold mb-4 pr-12">{selectedSector.name}</h2>
                                <div className="relative h-64 sm:h-96 mb-4 rounded-lg overflow-hidden border">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        navigation
                                        pagination={{ clickable: true }}
                                        loop
                                        className="h-full"
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                        } as React.CSSProperties}
                                    >
                                        {selectedSector.images.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="relative w-full h-full bg-black/10">
                                                    <Image
                                                        src={img}
                                                        alt={`${selectedSector.name} - фото ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        priority={index === 0}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <p className="text-muted-foreground">{selectedSector.description}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
