/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}","./index.html"],
  theme: {
    extend: {
      colors: {
        MarineBlue: 'hsl(213, 96%, 18%)',
        PurplishBlue: 'hsl(243, 100%, 62%)',
        PastelBlue: 'hsl(228, 100%, 84%)',
        LightBlue: 'hsl(206, 94%, 87%)',
        StrawberryRed: 'hsl(354, 84%, 57%)',
        CoolGray: 'hsl(231, 11%, 63%)',
        LightGray: 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        btnHover: 'hsl(213, 82%, 28%)',
        White: 'hsl(0, 0%, 100%)',
      },
      screens: {
        sm: '350px',
      },
      backgroundImage:{
        mobile: "url('./assets/bg-sidebar-mobile.svg')",
        desktop: "url('./assets/bg-sidebar-desktop.svg')"

      },
      animation:{
        expando: 'expando 1.5s linear 1'
      },
      keyframes:{
        expando:{
          '0%':{width: '0px'},
          '100%':{width: '50px'},

        }
      }
    },
  },
  plugins: [],
}