import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",
        primary: "#4F46E5",
        secondary: "#10B981",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        border: "#E5E7EB",
        action: "#EF4444",
        tag: "#FACC15",
      },
    },
  },
  plugins: [daisyui],
}

