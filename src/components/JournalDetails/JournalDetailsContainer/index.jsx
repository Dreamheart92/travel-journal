import style from './index.module.css';

export default function JournalDetailsContainer({ children }) {
  return (
    <div className={style['detail-container']}>
      {children}
    </div>
  );
}
