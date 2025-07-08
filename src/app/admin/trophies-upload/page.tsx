'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    User
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TrophiesUploadPage() {
    const [user, setUser] = useState<User | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setStatus('Помилка авторизації: ' + error.message);
            } else {
                setStatus('Невідома помилка авторизації.');
            }
        }
    };

    const handleLogout = () => {
        signOut(auth);
        setStatus('');
        setMediaUrl('');
    };

    const handleAddTrophy = async () => {
        if (!mediaUrl.trim()) {
            setStatus('Введіть посилання на зображення.');
            return;
        }
        try {
            await addDoc(collection(db, 'trophies'), {
                mediaUrl,
            });
            setStatus('Трофей успішно додано!');
            setMediaUrl('');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setStatus('Помилка додавання трофею: ' + error.message);
            } else {
                setStatus('Невідома помилка при додаванні трофею.');
            }
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Завантаження трофеїв</h1>

            {!user ? (
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleLogin} className="w-full">Увійти</Button>
                        {status && <p className="text-sm text-red-500">{status}</p>}
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardContent className="p-6 space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Авторизовано як: <strong>{user.email}</strong>
                        </p>
                        <Input
                            type="text"
                            placeholder="Посилання на зображення"
                            value={mediaUrl}
                            onChange={(e) => setMediaUrl(e.target.value)}
                        />
                        <div className="flex justify-between">
                            <Button onClick={handleAddTrophy}>Додати трофей</Button>
                            <Button variant="destructive" onClick={handleLogout}>
                                Вийти
                            </Button>
                        </div>
                        {status && <p className="text-sm text-green-600">{status}</p>}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
