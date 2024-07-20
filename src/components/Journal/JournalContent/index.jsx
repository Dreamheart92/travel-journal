import style from './index.module.css';

export default function JournalContent({ description }) {
  const descriptionChunks = description.split('\n');

  return (
    <div className={style.content}>
      {descriptionChunks?.map((chunk, index) => (
        <p key={index}>{chunk}</p>
      ))}
    </div>
  );
}
