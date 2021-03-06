import PropTypes from "prop-types";

export default function KeyboardIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.625 3H12.375C12.84 3 13.2525 3.015 13.62 3.0675C15.5925 3.285 16.125 4.215 16.125 6.75V11.25C16.125 13.785 15.5925 14.715 13.62 14.9325C13.2525 14.985 12.84 15 12.375 15H5.625C5.16 15 4.7475 14.985 4.38 14.9325C2.4075 14.715 1.875 13.785 1.875 11.25V6.75C1.875 4.215 2.4075 3.285 4.38 3.0675C4.7475 3.015 5.16 3 5.625 3Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.125 7.5H12.75" stroke={color} strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.25 11.625H5.265H12.75"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.57108 7.5H7.57781" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.32108 7.5H5.32781" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

KeyboardIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
