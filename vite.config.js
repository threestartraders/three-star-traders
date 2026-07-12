import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    // Keep '/' for a custom domain. Change to '/repository-name/' only if needed.
    base: '/',
});
