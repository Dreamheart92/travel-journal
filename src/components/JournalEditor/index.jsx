import InfoBlock from '../InfoBlock';
import JournalForm from '../../forms/JournalForm';
import { buildFormInitialState } from '../../helpers';

import style from './index.module.css';

export default function JournalEditor(
  {
    title,
    caption,
    type,
    submitCallback,
    error,
    isSubmitting,
    journal,
  },
) {
  const formInitialState = buildFormInitialState(journal);

  return (
    <div className={style.container}>
      <InfoBlock
        caption={caption}
        title={title}
        paddingBottom="2em"
      />

      <JournalForm
        type={type}
        error={error}
        isSubmitting={isSubmitting}
        submitCallback={submitCallback}
        initialState={formInitialState}
      />
    </div>
  );
}
