import style from './index.module.css';

export default function Grid({ outerClassName = '', children }) {
  return (
    <div className={`${style.grid} ${outerClassName}`}>
      {children}
    </div>
  );
}
