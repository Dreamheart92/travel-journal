import style from './index.module.css';

export default function Container(
  {
    children,
    heading,
    customStyle = {},
  },
) {
  return (
    <div
      style={customStyle}
      className={style.container}
    >
      {heading
        && <h1 className={style.heading}>{heading}</h1>}

      {children}
    </div>
  );
}
