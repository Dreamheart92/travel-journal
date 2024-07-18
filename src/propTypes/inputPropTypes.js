import PropTypes from 'prop-types';

export const handlersPropType = PropTypes.shape({
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
});

export const statePropType = PropTypes.shape({
  value: PropTypes.string,
  isDirty: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf([null]),
  ]),
});

export const isSubmittedAndHasErrorsPropType = PropTypes.bool;
