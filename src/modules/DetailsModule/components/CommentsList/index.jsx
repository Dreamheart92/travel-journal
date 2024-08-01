import CommentCard from '../../../../components/CommentCard';
import style from './index.module.css';

export default function CommentsList({ comments, userId, onSetTargetItemId }) {
  return (
    <div className={style['comments-list']}>
      {comments.map((comment) => (
        <CommentCard
          key={comment._id}
          comment={comment}
          userId={userId}
          onSetModalTargetItemId={onSetTargetItemId}
        />
      ))}
    </div>
  );
}
