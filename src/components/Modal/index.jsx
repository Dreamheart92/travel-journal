import { useEffect, useRef } from 'react';

import style from './index.module.css';

export default function Modal({ isOpen, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
        document.body.classList.add('no-scroll');
      } else {
        dialogRef.current.close();
      }
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={style.dialog}
    >
      <div className={style.content}>
        {isOpen
          && children}
      </div>
    </dialog>
  );
}
