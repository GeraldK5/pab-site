/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2cdd9b',
                darkprimary: '#28cf91',
                secondary: '#1dc8cd',
                midnight_text: '#263238',
                muted: '#8d97b7',
                error: '#ff4d7e',
                warning: '#ff6a5b',
                light_grey: '#e9ecef',
                grey: '#f5f7fa',
                border: '#e1e1e1',
                success: '#3cd278',
                darkmode: '#0a2219',
                darklight: '#000f30',
                dark_border: '#203535',
                dark: '#00180f',
            },
        },
    },
    plugins: [],
}