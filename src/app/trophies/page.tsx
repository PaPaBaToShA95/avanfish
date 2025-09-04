
import fs from 'fs';
import path from 'path';
import TrophiesClient from '@/app/components/TrophiesClient'; // We will create this component next

// Define the shape of a trophy object, which can be shared
export interface Trophy {
    id: string;
    mediaUrl: string;
}

export default function TrophiesPage() {
    // 1. Get the full path to the public/TROFY directory
    const trophiesDirectory = path.join(process.cwd(), 'public/TROFY');
    let trophyFiles: string[] = [];

    try {
        // 2. Read all filenames from the directory
        trophyFiles = fs.readdirSync(trophiesDirectory);
    } catch (error) {
        console.error("Could not read trophies directory:", error);
        // If the directory doesn't exist, we'll just pass an empty array
    }

    // 3. Filter for image files and map them to the Trophy structure
    const trophies: Trophy[] = trophyFiles
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map(file => ({
            id: file, // Use the filename as a unique ID
            mediaUrl: `/TROFY/${file}`, // The public URL path
        }));

    // 4. Render the client component and pass the trophy data as a prop
    return <TrophiesClient trophies={trophies} />;
}

