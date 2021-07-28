import PropTypes from "prop-types";

export default function ArrowUpIcon({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5575 11.5575L9 8.1225L12.4425 11.5575L13.5 10.5L9 6L4.5 10.5L5.5575 11.5575Z" fill={color} />
    </svg>
  );
}

ArrowUpIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
