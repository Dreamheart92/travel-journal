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
    handleSubmit,
    clearFieldValue,
  } = useForm();

  const [isCommentEmpty, setIsCommentEmpty] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const { handlers, state } = register('comment', '');
  const temporaryLocalCommentId = useRef(null);

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
