import PropTypes from "prop-types";

export default function LoginIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.67505 5.66999C6.90755 2.96999 8.29505 1.86749 11.3325 1.86749H11.43C14.7825 1.86749 16.125 3.20999 16.125 6.56249V11.4525C16.125 14.805 14.7825 16.1475 11.43 16.1475H11.3325C8.31755 16.1475 6.93005 15.06 6.68255 12.405"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M1.5 9H11.16" stroke={color} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M9.48755 6.48749L12 8.99999L9.48755 11.5125"
        stroke={color}
        stroke-width="1.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

LoginIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
