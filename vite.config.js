import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    build: {
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue', 'vue-router']
                },
            },
        },
    },
    plugins: [
        laravel({
            input: ['front/src/assets/main.css', 'front/src/main.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'node_modules'),
            '@': path.resolve(__dirname, 'front/src'),
            '@views': path.resolve(__dirname, 'front/src/views'),
            '@pages': path.resolve(__dirname, 'front/src/pages'),
            '@store': path.resolve(__dirname, 'front/src/store'),
            '@services': path.resolve(__dirname, 'front/src/services'),
            '@router': path.resolve(__dirname, 'front/src/router'),
            '@components': path.resolve(__dirname, 'front/src/components'),
            '@resource': path.resolve(__dirname, 'resources'),
        },
    },
});
