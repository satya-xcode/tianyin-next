import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Tianyin Worldtech',
        short_name: 'Tianyin Worldtech',
        description: 'Tianyin Worldtech – Leading manufacturer of high-quality mobile chargers and adapters. Join us to innovate in power solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#F0F0F0', // Adjusted to a lighter color matching your branding
        theme_color: '#2E3B4E', // Assuming a deep blue or your brand color
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-touch-icon.png', // For iOS
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
