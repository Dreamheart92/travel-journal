import style from './index.module.css';

export default function FileInput(
  {
    buttonCaption,
    isUserProfile,
    placeholderSize,
    flexDirection,
    borderRadius,
    error,
    ...props
  }
) {
  const handlers = props.handlers;

  const width = placeholderSize?.width || '100%';
  const height = placeholderSize?.height || '100%';

  const handleUploadImage = (event) => {
    event.preventDefault();
    document.getElementById('file').click();
  }

  const flexDirectionStyle = flexDirection ? flexDirection : 'row';

  let imagePlaceholder;

  if (props.state.value) {
    if (props.state.value instanceof File) {
      imagePlaceholder = URL.createObjectURL(props.state.value);
    } else {
      imagePlaceholder = props.state.value;
    }
  } else {
    imagePlaceholder = isUserProfile ? "/userPlaceholder.png" : "/imagePlaceholder.jpg"
  }

  return (
    <>
      <div style={{ flexDirection: flexDirectionStyle }}
        className={style['image-wrapper']}>
        <img style={{ width: width, height: height, borderRadius }}
          src={imagePlaceholder} alt="" />

        <Button onClick={handleUploadImage}>{buttonCaption}</Button>

        {error &&
          <p className="error-message">Image is required</p>
        }
      </div>

      <input type="file" id="file" hidden {...handlers} accept=".jpg, .jpeg" />
    </>
  );
}
