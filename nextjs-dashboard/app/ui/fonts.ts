import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// Importer la police Lusitana (secondaire) avec sous-ensemble et poids
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

