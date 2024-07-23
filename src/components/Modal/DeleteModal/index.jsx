import Container from '../../Container';
import Button from '../../Button';

import style from './index.module.css';

export default function DeleteModal({ text, onDelete, onCloseModal }) {
  return (
    <Container>
      <h3>{text}</h3>
      <div className={style.controls}>
        <Button
          onClick={onDelete}
          variant="warning"
          caption="Delete"
        />

        <Button
          onClick={onCloseModal}
          variant="secondary"
          caption="Cancel"
        />
      </div>
    </Container>
  );
}
