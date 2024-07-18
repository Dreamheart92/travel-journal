import style from './index.module.css';

export default function Button({ variant = 'primary', children, isLoading, ...props }) {
  return (
    <button {...props} className={`${style.button} ${style[variant]} ${isLoading ? style.loading : null}`}>
      {children}
      {isLoading && <div className={style.loader}></div>}
    </button>
  )
}