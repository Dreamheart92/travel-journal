import InfoBlock from '../InfoBlock';
import JournalForm from '../../forms/JournalForm';
import { buildFormInitialState } from '../../helpers';

import style from './index.module.css';

export default function JournalEditor(
  {
    title,
    caption,
    buttonCaption,
    submitCallback,
    isSubmitting,
    journal,
    requestError,
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
        buttonCaption={buttonCaption}
        isSubmitting={isSubmitting}
        submitCallback={submitCallback}
        initialState={formInitialState}
        requestError={requestError}
      />
    </div>
  );
}
