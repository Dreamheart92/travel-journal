import TextAreaInput from '../../components/Input/TextAreaInput';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form';
import ErrorMessage from '../../components/ErrorMessage';
import style from './index.module.css';
import { useEffect, useState } from 'react';

export default function CreateCommentForm({ onSendCreateCommentRequest }) {
  const [isEmptyComment, setIsEmptyComment] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleCreateCommentSubmit = (commentData) => {
    setIsTyping(false);

    if (isEmptyComment) {
      setIsEmptyComment(false);
    }
    if (commentData.comment.trim() === '') {
      setIsEmptyComment(true);
      return;
    }

    clearFieldValue('comment');
    onSendCreateCommentRequest(commentData);
  };

  const {
    register,
    handleSubmit,
    clearFieldValue,
    formState,
  } = useForm({ submitCallback: handleCreateCommentSubmit });

  const {
    handlers,
    state,
  } = register('comment', '');

  useEffect(() => {
    if (!isTyping && formState.comment.value.trim() !== '') {
      setIsTyping(true);
    }
  }, [formState.comment]);

  return (
    <div className={style.container}>
      <Form onSubmit={handleSubmit}>

        {isEmptyComment && !isTyping
          && <ErrorMessage message="Please enter your comment before submitting" />}

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
