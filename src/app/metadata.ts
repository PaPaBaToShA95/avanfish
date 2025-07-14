import type { Metadata } from 'next';
const siteUrl = 'https://avanfish.vercel.app/';

export const metadata: Metadata = {

    title: 'AvanFish | Спортивна рибалка та відпочинок в Літках (Броварський район)',
    description: 'Запрошуємо на трофейну та спортивну рибалку на озері AvanFish у селі Літки, Київська область. На вас чекає короп, щука, сом, окунь. Комфортний відпочинок на природі.',
    keywords: [
        'AvanFish',
        'АванФіш',
        'рибалка Літки',
        'риболовля Літки',
        'платна рибалка Київ',
        'рибалка Броварський район',
        'спортивна рибалка',
        'трофейна рибалка',
        'озеро для рибалки',
        'ловити щуку',
        'ловити коропа',
        'відпочинок на озері',
        'рибальське місце',
        'Avan Fish Litky',
    ],
    authors: [{ name: 'AvanFish', url: siteUrl }],
    creator: 'AvanFish',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    openGraph: {
        title: 'AvanFish | Незабутня рибалка під Києвом',
        description: 'Озеро AvanFish в Літках – ідеальне місце для спортивної риболовлі та відпочинку.',
        url: siteUrl,
        siteName: 'AvanFish',
   
        images: [
            {
                url: `https://avanfish.vercel.app/22.jpg`, 
                width: 1200,
                height: 630,
                alt: 'Рибалка на озері AvanFish',
            },
        ],
        locale: 'uk_UA',
        type: 'website',
    },

 
    twitter: {
        card: 'summary_large_image',
        title: 'AvanFish | Спортивна рибалка та відпочинок в Літках',
        description: 'Приїжджайте на трофейну рибалку в AvanFish! Короп, щука, сом та багато іншого.',
 
        images: [`https://avanfish.vercel.app/22.jpg`], 
    },

    alternates: {
        canonical: siteUrl,
    },

  
    icons: {
        icon: '/favicon.png',
        shortcut: '/22.jpg',
        apple: '/22.jpg',
    },
};
