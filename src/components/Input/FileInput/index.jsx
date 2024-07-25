import PropTypes from 'prop-types';
import Button from '../../Button';

import { handlersPropType, statePropType } from '../../../propTypes/inputPropTypes';

import style from './index.module.css';
import Wrapper from '../index';

export default function FileInput(
  {
    handlers,
    state,
    isJournal = false,
  },
) {
  const fileStyle = `${style['image-wrapper']} ${isJournal ? style.column : style.row}`;
  const imageClassName = `${isJournal ? style.journal : style.account}`;

  const
    handleUploadImage = (event) => {
      event.preventDefault();
      document.getElementById('file').click();
    };

  let imagePlaceholder;

  if (state.value) {
    if (state.value instanceof File) {
      imagePlaceholder = URL.createObjectURL(state.value);
    } else {
      imagePlaceholder = state.value;
    }
  } else {
    imagePlaceholder = !isJournal ? '/userPlaceholder.png' : '/imagePlaceholder.jpg';
  }

  return (
    <Wrapper
      state={state}
      label="Image"
      isFile
      fileWrapper={fileStyle}
    >
      <img
        className={imageClassName}
        src={imagePlaceholder}
        alt=""
      />

      <Button onClick={handleUploadImage} caption="Upload your image" />

      <input type="file" id="file" hidden onChange={handlers.onChange} onBlur={handlers.onBlur} accept=".jpg, .jpeg" />
    </Wrapper>
  );
}

FileInput.propTypes = {
  handlers: handlersPropType,
  state: statePropType,
  isJournal: PropTypes.bool,
};
