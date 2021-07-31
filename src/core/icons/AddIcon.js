import PropTypes from "prop-types";

export default function AddIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 9H13.5" stroke={color} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 13.5V4.5" stroke={color} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

AddIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
