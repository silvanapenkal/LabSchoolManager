import { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import { StyledInput, InputContainer, InputLabel } from "./styles";

const Input = forwardRef(({ id, labelText, helperText, ...props }, ref) => {
  const refId = useMemo(() => id ?? labelText, [id, labelText]);

  return (
    <InputContainer className="container">
      {labelText && (
        <InputLabel htmlFor={refId} className="label">
          {labelText}
        </InputLabel>
      )}

      <StyledInput id={refId} className="input" ref={ref} {...props} />

      {!!helperText && <span className="error">{helperText}</span>}
    </InputContainer>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  helperText: PropTypes.string,
};

Input.displayName = "Input";

export default Input;
