import PropTypes from 'prop-types';
import Button from '../../Button';

import { handlersPropType, statePropType } from '../../../propTypes/inputPropTypes';

import style from './index.module.css';

export default function FileInput(
  {
    buttonCaption,
    isUserProfile,
    placeholderSize,
    flexDirection,
    borderRadius,
    error,
    handlers,
    state,
  },
) {
  const width = placeholderSize?.width || '100%';
  const height = placeholderSize?.height || '100%';

  const handleUploadImage = (event) => {
    event.preventDefault();
    document.getElementById('file').click();
  };

  const flexDirectionStyle = flexDirection || 'row';

  let imagePlaceholder;

  if (state.value) {
    if (state.value instanceof File) {
      imagePlaceholder = URL.createObjectURL(state.value);
    } else {
      imagePlaceholder = state.value;
    }
  } else {
    imagePlaceholder = isUserProfile ? '/userPlaceholder.png' : '/imagePlaceholder.jpg';
  }

  return (
    <>
      <div
        style={{ flexDirection: flexDirectionStyle }}
        className={style['image-wrapper']}
      >
        <img
          style={{ width, height, borderRadius }}
          src={imagePlaceholder}
          alt=""
        />

        <Button onClick={handleUploadImage}>{buttonCaption}</Button>

        {error
          && <p className="error-message">Image is required</p>}
      </div>

      <input type="file" id="file" hidden onChange={handlers.onChange} onBlur={handlers.onBlur} accept=".jpg, .jpeg" />
    </>
  );
}

FileInput.propTypes = {
  buttonCaption: PropTypes.string,
  isUserProfile: PropTypes.bool,
  placeholderSize: PropTypes.objectOf(PropTypes.shape([{
    width: PropTypes.string,
    height: PropTypes.string,
  }])),
  borderRadius: PropTypes.string,
  flexDirection: PropTypes.string,
  error: PropTypes.bool,
  handlers: handlersPropType,
  state: statePropType,
};
