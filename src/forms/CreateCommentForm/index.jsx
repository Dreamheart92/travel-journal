import Button from '../../components/Button';
import Form from '../../components/Form';
import style from './index.module.css';
import useForm from '../../hooks/useForm';

export default function CreateCommentForm({ onCreateCommentSubmit }) {
  const [form] = useForm();

  const handleCreateCommentSubmit = (commentData) => {
    onCreateCommentSubmit(commentData.comment);
    form.resetField('comment');
  };

  return (
    <div className={style.container}>
      <Form
        submitCallback={handleCreateCommentSubmit}
      >
        <Form.Input
          name="comment"
          inputType="text-area"
        />

        <Button
          submitButton
          caption="Comment"
        />
      </Form>
    </div>
  );
}
