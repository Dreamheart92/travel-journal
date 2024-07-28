import { useState } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import ErrorMessage from '../../components/ErrorMessage';
import style from './index.module.css';
import useForm from '../../hooks/useForm';

export default function CreateCommentForm({ onCreateCommentSubmit }) {
  const [isEmptyComment, setIsEmptyComment] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [form] = useForm();

  const handleCreateCommentSubmit = (commentData) => {
    setIsTyping(false);

    if (isEmptyComment) {
      setIsEmptyComment(false);
    }

    if (commentData.comment.trim() === '') {
      setIsEmptyComment(true);
      return;
    }

    onCreateCommentSubmit(commentData.comment);
    form.resetField('comment');
  };

  return (
    <div className={style.container}>

      {isEmptyComment && !isTyping
        && <ErrorMessage message="Please enter your comment before submitting" />}

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
