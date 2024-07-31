import style from './index.module.css';

export default function AppLayout({ navigation, content, footer }) {
  return (
    <div className={style.container}>
      {navigation}

      <div className={style.content}>
        {content}
      </div>

      <div className={style.footer}>
        {footer}
      </div>
    </div>
  );
}
