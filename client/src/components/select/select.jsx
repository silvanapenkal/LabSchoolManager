import PropTypes from "prop-types";
import { forwardRef } from "react";
import { SelectContainer, SelectLabel, StyledSelect } from "./styles";

const Select = forwardRef(
  ({ labelText, helperText, inputName, data, ...props }, ref) => {
    return (
      <SelectContainer>
        <SelectLabel htmlFor={labelText}>{labelText}</SelectLabel>
        <StyledSelect id={labelText} name={inputName} {...props} ref={ref}>
          <option value="">selecione</option>
          {data.map((item) => (
            <option key={item.id} value={parseInt(item?.id)}>
              {item?.name}
            </option>
          ))}
        </StyledSelect>
        {!!helperText && <span>{helperText}</span>}
      </SelectContainer>
    );
  }
);

Select.propTypes = {
  labelText: PropTypes.string,
  helperText: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

Select.defaultProps = {};

export default Select;
