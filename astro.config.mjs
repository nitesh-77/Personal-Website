import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://nitesh-77.github.io',
    vite: {
        plugins: [tailwindcss()],
    },
});
