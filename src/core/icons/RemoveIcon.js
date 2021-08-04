import PropTypes from "prop-types";

export default function RemoveIcon({ color }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 4.98335C14.725 4.70835 11.9333 4.56668 9.15 4.56668C7.5 4.56668 5.85 4.65001 4.2 4.81668L2.5 4.98335"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08333 4.14166L7.26667 3.04999C7.4 2.25832 7.5 1.66666 8.90833 1.66666H11.0917C12.5 1.66666 12.6083 2.29166 12.7333 3.05832L12.9167 4.14166"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7083 7.61667L15.1667 16.0083C15.075 17.3167 15 18.3333 12.675 18.3333H7.325C5 18.3333 4.925 17.3167 4.83333 16.0083L4.29167 7.61667"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.60833 13.75H11.3833" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7.91667 10.4167H12.0833"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

RemoveIcon.propTypes = {
  color: PropTypes.string.isRequired,
};
