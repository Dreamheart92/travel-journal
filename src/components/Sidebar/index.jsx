import style from './index.module.css';

export default function Sidebar({ width = '100%', children }) {
  return (
    <div
      style={{ width }}
      className={style.sidebar}
    >
      {children}
    </div>
  );
}
