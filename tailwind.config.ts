import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        systemBlue: '#007AFF',
        systemGreen: '#34C759',
        systemIndigo: '#5856D6',
        systemOrange: '#FF9500',
        systemPink: '#FF2D55',
        systemPurple: '#AF52DE',
        systemRed: '#FF3B30',
        systemTeal: '#64D2FF',
        systemYellow: '#FFCC00',
        systemGray: '#8E8E93',
        systemGray2: '#AEAEB2',
        systemGray3: '#C7C7CC',
        systemGray4: '#D1D1D6',
        systemGray5: '#E5E5EA',
        systemGray6: '#F2F2F7',
        label: '#000000',
        secondaryLabel: '#3C3C4399',
        tertiaryLabel: '#3C3C434D',
        quaternaryLabel: '#3C3C432E',
        systemBackground: '#FFFFFF',
        secondarySystemBackground: '#F2F2F7',
        tertiarySystemBackground: '#FFFFFF',
        mint: '#00FFC2',
        graymap: "#27292B"
      },
    },
  },
  plugins: [],
}
export default config
