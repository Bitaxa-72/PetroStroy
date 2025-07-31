import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    root: './src',
    base: '/PetroStroy/',
    server: {
        port: 3001,
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
                about: './src/about.html',
                account: './src/account.html',
                contacts: './src/contacts.html',
                createdProjects: './src/createdProjects.html',
                moreInfo: './src/moreInfo.html',
                objects: './src/objects.html',
                ourUsers: './src/ourUsers.html',
                paymentInfo: './src/paymentInfo.html',
                publickCom: './src/publickCom.html',
                publickInfo: './src/publickInfo.html',
                publickOrg: './src/publickOrg.html',
            },
        },
    },
    plugins: [
        injectHTML(),
    ],
});