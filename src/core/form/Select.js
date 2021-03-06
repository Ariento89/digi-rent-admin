import PropTypes from "prop-types";
import ReactSelect from "react-select";

export default function Select({ options, width, placeholder, value, onChange, menuPlacement }) {
  return (
    <div style={{ width: width }}>
      <ReactSelect
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        options={options}
        placeholder={placeholder}
        menuPlacement={menuPlacement}
      />
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  menuPlacement: PropTypes.oneOf(["top", "bottom"]),
};

Select.defaultProps = {
  placeholder: "",
  value: null,
  onChange: () => {},
  menuPlacement: "bottom",
};
