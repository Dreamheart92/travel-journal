import {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  buildTemporaryCommentId,
  constructLocalComment,
  handleEmptyComment,
} from '../helpers/createCommentForm';

import TextAreaInput from '../../components/Input/TextAreaInput';
import Button from '../../components/Button';
import style from './index.module.css';
import useForm from '../../hooks/useForm';
import { CommentsContext } from '../../context/CommentsContext';

import Form from '../../components/Form';
import ErrorMessage from '../../components/ErrorMessage';
import useOnFetch from '../../hooks/useOnFetch';
import commentService from '../../services/commentService';

export default function CreateCommentForm({ user, journalId }) {
  const { onAddLocalComment, onUpdateCommentWithRealData } = useContext(CommentsContext);

  const {
    register,
    formData: commentData,
    handleSubmit,
    clearFieldValue,
  } = useForm();

  const {
    data: submittedCommentData,
    error,
    fetch: submitNewComment,
  } = useOnFetch();

  const [isCommentEmpty, setIsCommentEmpty] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const { handlers, state } = register('comment', '');
  const temporaryLocalCommentId = useRef(null);

  useEffect(() => {
    if (commentData) {
      if (commentData.comment.value.trim() === '') {
        handleEmptyComment(setIsCommentEmpty, setIsTyping);
      } else {
        clearFieldValue('comment');
        temporaryLocalCommentId.current = buildTemporaryCommentId();

        const localComment = constructLocalComment(
          user,
          commentData.comment.value,
          temporaryLocalCommentId.current,
        );

        onAddLocalComment(localComment);

        submitNewComment(commentService.createComment({
          comment: commentData.comment.value,
          createdAt: localComment.createdAt,
        }, journalId));
      }
    }
  }, [commentData]);

  useEffect(() => {
    if (submittedCommentData) {
      onUpdateCommentWithRealData(submittedCommentData.data, temporaryLocalCommentId.current);
    }
  }, [submittedCommentData]);

  return (
    <div className={style.container}>
      <Form onSubmit={handleSubmit}>

        {isCommentEmpty && !isTyping
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
