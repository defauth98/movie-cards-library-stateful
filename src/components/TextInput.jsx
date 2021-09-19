import React from 'react';
import PropTypes from 'prop-types';

import '../style/components/textInput.css';

function TextInput(props) {
  const { value, onChange, label, testLabelID, testInputID, name } = props;

  return (
    <div className="input-container">
      <label
        htmlFor={ name }
        data-testid={ testLabelID }
        className="input-label"
      >
        {label}
        <input
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ testInputID }
          className="input-text"
        />
      </label>
    </div>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testLabelID: PropTypes.string.isRequired,
  testInputID: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
