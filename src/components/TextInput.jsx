import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  const { value, onChange, label, testLabelID, testInputID, name } = props;

  return (
    <div className="text-input">
      <label htmlFor={ name } data-testid={ testLabelID }>
        {label}
        <input
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ testInputID }
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
