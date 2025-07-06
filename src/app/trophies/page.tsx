'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { collection, getDocs, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Перевірте шлях до файлу firebase.ts

import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Оновлена структура даних: тип медіа більше не потрібен
interface Trophy {
    id: string;
    description: string;
    mediaUrl: string; 
}

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

    const handleOpenDialog = (trophy: Trophy) => {
        setSelectedTrophy(trophy);
    };

    const handleCloseDialog = () => {
        setSelectedTrophy(null);
    };

    if (isLoading) {
        return <div className="container mx-auto p-4 text-center">Завантаження трофеїв...</div>;
    }

    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-center">Наші Трофеї</h1>

            {trophies.length === 0 ? (
                <p className="text-center text-muted-foreground">Ще немає жодного трофею. Час на риболовлю!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {trophies.map((trophy) => (
                        <Card
                            key={trophy.id}
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
                    ))}
                </div>
            )}

            {/* Модальне вікно для повноекранного перегляду */}
            <Dialog open={!!selectedTrophy} onOpenChange={handleCloseDialog}>
                <DialogContent className="max-w-4xl w-full h-auto max-h-[90vh] flex flex-col">
                    <DialogHeader className="flex-shrink-0">
                        <DialogTitle>Перегляд трофею</DialogTitle>
                    </DialogHeader>
                    {selectedTrophy && (
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
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}