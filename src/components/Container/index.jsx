import style from './index.module.css';

export default function Container(
  {
    children,
    heading,
  },
) {
  return (
    <div
      className={style.container}
    >
      {heading
        && <h1 className={style.heading}>{heading}</h1>}

      {children}
    </div>
  );
}
