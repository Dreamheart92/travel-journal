import { useEffect, useState } from 'react';
import TextAreaInput from '../../components/Input/TextAreaInput';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import Form from '../../components/Form';
import ErrorMessage from '../../components/ErrorMessage';
import style from './index.module.css';

export default function CreateCommentForm({ onCreateCommentSubmit }) {
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

    onCreateCommentSubmit(commentData.comment);
    clearFieldValue('comment');
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
