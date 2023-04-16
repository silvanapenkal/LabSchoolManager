import PropTypes from "prop-types";

function Select({ labelText, helperText, inputName, data, ...props }, ref) {
  return (
    <>
      <label htmlFor={labelText}>{labelText}</label>
      <Select id={labelText} name={inputName} {...props} ref={ref}>
        {data.map((item) => (
          <option key={item.id} value={parseInt(item?.id)}>
            {item?.name}
          </option>
        ))}
      </Select>
      {!!helperText && <span>{helperText}</span>}
    </>
  );
}

Select.propTypes = {
  labelText: PropTypes.string,
  helperText: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

Select.defaultProps = {};

export default Select;
