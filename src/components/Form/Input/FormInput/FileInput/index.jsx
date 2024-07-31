import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons/faFileUpload';

import Button from '../../../../Button';
import style from './index.module.css';

export default function FileInput({ fieldProps }) {
  const {
    value,
    onChange,
    name,
    placeholder,
    userProfileImage = false,
  } = fieldProps;

  const imageClassName = `${userProfileImage ? style.account : style.journal}`;

  const handleUploadImage = (event) => {
    event.preventDefault();
    document.getElementById('file').click();
  };

  let imagePlaceholder;

  if (value) {
    if (value instanceof File) {
      imagePlaceholder = URL.createObjectURL(value);
    } else {
      imagePlaceholder = value;
    }
  } else {
    imagePlaceholder = userProfileImage ? '/userPlaceholder.png' : '/placeholder-image.jpg';
  }

  return (
    <div className={style['image-wrapper']}>
      <img
        onClick={handleUploadImage}
        className={imageClassName}
        src={imagePlaceholder}
        alt=""
      />

      <FontAwesomeIcon
        onClick={handleUploadImage}
        className={style['icon-upload']}
        icon={faFileUpload}
      />

      <input
        type="file"
        id="file"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        hidden
        accept=".jpg, .jpeg"
      />
    </div>
  );
}
