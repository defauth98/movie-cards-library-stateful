import React from 'react';
import PropTypes from 'prop-types';

import '../style/components/checkInputbox.css';

function CheckBoxInput(props) {
  const { checked, onChange } = props;

  return (
    <label
      htmlFor="favorites"
      data-testid="checkbox-input-label"
      className="checkbox-label"
    >
      Mostrar somente favoritos:
      <input
        type="checkbox"
        name="favorites"
        checked={ checked }
        className="checkbox-input"
        onChange={ onChange }
        data-testid="checkbox-input"
      />

    </label>
  );
}

CheckBoxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBoxInput;
