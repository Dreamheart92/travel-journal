import Button from '../../../../Button';
import style from '../../index.module.css';

export default function FileInput({ fieldProps }) {
  const {
    value,
    onChange,
    name,
    placeholder,
    isJournal,
  } = fieldProps;

  const fileStyle = `${style['image-wrapper']} ${isJournal ? style.column : style.row}`;
  const imageClassName = `${isJournal ? style.journal : style.account}`;

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
    imagePlaceholder = !isJournal ? '/userPlaceholder.png' : '/imagePlaceholder.jpg';
  }

  return (
    <div className={fileStyle}>
      <img
        className={imageClassName}
        src={imagePlaceholder}
        alt=""
      />

      <Button onClick={handleUploadImage} caption="Upload your image" />

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
