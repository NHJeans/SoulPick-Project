export const IconLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="60"
    focusable="false"
    fill="currentColor"
  >
    <path d="M20.512 20.965A8.973 8.973 0 0 1 19 15.973v-6.68A8.214 8.214 0 0 0 11.246 1 8 8 0 0 0 3 9v3a11.013 11.013 0 0 0 11 11h6a1 1 0 0 0 .832-1.555zM14 21a9.01 9.01 0 0 1-9-9V9a6 6 0 0 1 6-6h.186A6.2 6.2 0 0 1 17 9.293v6.68A10.965 10.965 0 0 0 18.215 21zM9 11a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm6-2v2a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm-2 5a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1z"/>
  </svg>
);

const Icon = function ({ icon }) {
  switch (icon) {
    case "logo":
      return <IconLogo />;
    default:
      return null;
  }
};
export default Icon;
