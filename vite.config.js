import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    root: './src',
    base: '/IdeaStart/',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                post: './src/postIdea.html',
                new: './src/newIdea.html',
            },
        },
    },
    plugins: [
        injectHTML(),
    ],
});