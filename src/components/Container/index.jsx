import style from './index.module.css';

export default function Container(
  {
    children,
    width = 'fitContent',
    heading,
    direction = 'column',
  },
) {
  return (
    <div
      style={{ width, flexDirection: direction }}
      className={style.container}
    >
      {heading
        && <h1 className={style.heading}>{heading}</h1>}

      {children}
    </div>
  );
}
