/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tipis: "rgba(0,0,0,0.3)",
        pudar: "rgba(0,0,0,0.5)",
        bglogin: "rgba(0,0,0,0.6)",
        biru: "rgba(1, 132, 145, 0.5)",
        sign: "rgba(1, 132, 145, 0.75)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
