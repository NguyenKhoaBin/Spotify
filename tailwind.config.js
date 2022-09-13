module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        player: "calc(100vh - 6rem - 6rem)",
        playerMb: "calc(100vh - 6rem - 9rem)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        pingSlow: "pingSlow 1s linear infinite",
      },
      keyframes: {
        pingSlow: {
          "0%, 100%": { transform: "scale(1.05)" },
          "80%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
