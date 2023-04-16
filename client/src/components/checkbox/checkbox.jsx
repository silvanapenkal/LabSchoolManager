import { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import { CheckBoxLabel, CheckBoxContainer } from "./styles";

const Checkbox = forwardRef(({ id, labelText, helperText, ...props }, ref) => {
  const refId = useMemo(() => id ?? labelText, [id, labelText]);

  return (
    <CheckBoxContainer className="container">
      {labelText && (
        <CheckBoxLabel htmlFor={refId} className="label">
          {labelText}
        </CheckBoxLabel>
      )}

      <input type="checkbox" id={refId} ref={ref} {...props} />
    </CheckBoxContainer>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  helperText: PropTypes.string,
};

Checkbox.displayName = "Input";

export default Checkbox;
