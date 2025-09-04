
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// You can import this from the page.tsx or redefine it here
interface Trophy {
    id: string;
    mediaUrl: string;
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

const modalFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

// The component now accepts the trophies data as a prop
export default function TrophiesClient({ trophies }: { trophies: Trophy[] }) {
    const [selectedTrophy, setSelectedTrophy] = useState<Trophy | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // No more isLoading state or data fetching useEffect!
    // The data is already here when the component mounts.

    const handleOpenDialog = (trophy: Trophy, index: number) => {
        setSelectedTrophy(trophy);
        setCurrentIndex(index);
    };

    const handleCloseDialog = () => setSelectedTrophy(null);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % trophies.length;
        setSelectedTrophy(trophies[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + trophies.length) % trophies.length;
        setSelectedTrophy(trophies[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    useEffect(() => {
        document.title = 'Трофеї — Аванфіш';
    }, []);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <motion.h1
                className="mb-8 text-4xl font-bold tracking-tight text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Наші Трофеї
            </motion.h1>

            {trophies.length === 0 ? (
                <p className="text-center text-muted-foreground">
                    Ще немає жодного трофею. Час на риболовлю! 🎣
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {trophies.map((trophy, index) => (
                        <motion.div
                            key={trophy.id}
                            custom={index}
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                        >
                            <Card
                                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => handleOpenDialog(trophy, index)}
                            >
                                <CardContent className="p-0">
                                    <AspectRatio ratio={4 / 3}>
                                        <Image
                                            src={trophy.mediaUrl}
                                            alt="Трофей"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                        />
                                    </AspectRatio>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}

            <AnimatePresence>
                {selectedTrophy && (
                    <Dialog open={!!selectedTrophy} onOpenChange={handleCloseDialog}>
                        <DialogContent
                            forceMount
                            className="max-w-[95vw] w-full max-h-[95vh] h-full sm:max-w-[90vw] sm:max-h-[90vh]"
                        >
                            <motion.div
                                variants={modalFade}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full h-full flex flex-col"
                            >
                                <DialogHeader>
                                    <DialogTitle>Фото трофею ({currentIndex + 1}/{trophies.length})</DialogTitle>
                                </DialogHeader>
                                <div className="mt-4 flex-1 flex items-center gap-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handlePrev}
                                        className="rounded-full h-12 w-12 shrink-0 hidden sm:flex"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </Button>

                                    <div className="relative flex-1 h-full">
                                        <Image
                                            src={selectedTrophy.mediaUrl}
                                            alt="Трофей"
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 80vw"
                                            priority
                                        />
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleNext}
                                        className="rounded-full h-12 w-12 shrink-0 hidden sm:flex"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </Button>
                                </div>
                                <div className="flex sm:hidden justify-center gap-4 mt-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handlePrev}
                                        className="rounded-full h-12 w-12"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleNext}
                                        className="rounded-full h-12 w-12"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </Button>
                                </div>
                            </motion.div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
}