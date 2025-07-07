'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

// Тип
interface Trophy {
    id: string;
    description: string;
    mediaUrl: string;
}

// Анімації
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

export default function TrophiesPage() {
    const [trophies, setTrophies] = useState<Trophy[]>([]);
    const [selectedTrophy, setSelectedTrophy] = useState<Trophy | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTrophies = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'trophies'));
                const trophiesData = querySnapshot.docs.map(
                    (doc: QueryDocumentSnapshot<DocumentData>) => ({
                        id: doc.id,
                        ...doc.data(),
                    })
                ) as Trophy[];
                setTrophies(trophiesData);
            } catch (error) {
                console.error("Помилка завантаження трофеїв:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTrophies();
    }, []);

    const handleOpenDialog = (trophy: Trophy) => setSelectedTrophy(trophy);
    const handleCloseDialog = () => setSelectedTrophy(null);

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

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-0">
                                <AspectRatio ratio={4 / 3}>
                                    <Skeleton className="w-full h-full" />
                                </AspectRatio>
                                <div className="p-4 space-y-2">
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : trophies.length === 0 ? (
                <p className="text-center text-muted-foreground">
                    Ще немає жодного трофею. Час на риболовлю!
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
                                onClick={() => handleOpenDialog(trophy)}
                            >
                                <CardContent className="p-0">
                                    <AspectRatio ratio={4 / 3}>
                                        <Image
                                            src={trophy.mediaUrl}
                                            alt={trophy.description}
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
                        <DialogContent asChild forceMount>
                            <motion.div
                                variants={modalFade}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="max-w-4xl w-full h-auto max-h-[90vh] flex flex-col bg-background rounded-lg shadow-xl overflow-hidden"
                            >
                                <DialogHeader className="flex-shrink-0 p-4">
                                    <DialogTitle>Перегляд трофею</DialogTitle>
                                </DialogHeader>
                                <div className="flex-grow overflow-y-auto p-4">
                                    <Image
                                        src={selectedTrophy.mediaUrl}
                                        alt={selectedTrophy.description}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto rounded-md object-contain"
                                    />
                                    <DialogDescription className="mt-4 text-lg text-center">
                                        {selectedTrophy.description}
                                    </DialogDescription>
                                </div>
                            </motion.div>
                        </DialogContent>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
}
