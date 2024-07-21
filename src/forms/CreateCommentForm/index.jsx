import { Form } from 'react-router-dom';
import TextAreaInput from '../../components/Input/TextAreaInput';
import Button from '../../components/Button';
import style from './index.module.css';
import useForm from '../../hooks/useForm';

export default function CreateCommentForm({ journalId }) {
  const { register } = useForm();

  const { handlers, state } = register('comment', '');

  return (
    <div className={style.container}>
      <Form>

        <TextAreaInput handlers={handlers} state={state} />

        <div className={style.button}>
          <Button
            submitButton
            caption="Comment"
          />
        </div>

      </Form>
    </div>
  );
}
