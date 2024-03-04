/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'RedHatDisplay': ["'Red Hat Display'", 'sans-serif']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInfromLeft: {
          '0%': { opacity: '0%', transform: 'translate(60px, 0)', },
          '100%': { opacity: '100%', transform: 'translate(0)',  },
        },
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        fadeOut: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
        slideIn: {
          '0%': { margin: '0 -100%'},
          '100%': { margin: '0 0%' },
        },
        cardOut: {
          '0%': { transform: 'scale(100%)', background: '#16161d'},
          '100%': { transform: 'scale(105%)', background: '#F0F0FB'},
        },
        cardIn: {
          '0%': { transform: 'scale(105%)', background: '#F0F0FB'},
          '100%': { transform: 'scale(100%)', background: '#16161d'},
        },
        btnOut: {
          '0%': { transform: 'scale(100%)'},
          '100%': { transform: 'scale(105%)'},
        },
        btnIn: {
          '0%': { transform: 'scale(105%)'},
          '100%': { transform: 'scale(100%)'},
        },
        btnLgOut: {
          '0%': { transform: 'scale(100%)'},
          '100%': { transform: 'scale(125%)'},
        },
        btnLgIn: {
          '0%': { transform: 'scale(125%)'},
          '100%': { transform: 'scale(100%)'},
        },
        cardForward: {
          '0%': { margin: '0 -100%'},
          '100%': { margin: '0%' },
        },
        cardBackward: {
          '0%': { margin: '0 -100%'},
          '100%': { margin: '0 0%' },
        },
        dividerLoop: {
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(100%)' },
        },
        cartInfromRight: {
          '0%': { transform: 'translateX(400px)'},
          '100%': { transform: 'translateX(0%)' },
        },
        cartInfromTop: {
          '0%': { transform: 'translateY(-45px)'},
          '100%': { transform: 'translateY(0%)' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '80%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(-100%)'},
        },
      },
    },
  },
  plugins: [],
}

