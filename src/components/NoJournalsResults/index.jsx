import { useNavigate } from 'react-router-dom';
import { NO_JOURNAL_RESULTS } from '../../constants/constants';
import { PATHS } from '../../constants/paths';
import Button from '../Button';
import style from './index.module.css';

export default function NoJournalResults({ contextType = 'catalogue' }) {
  const navigate = useNavigate();
  const message = NO_JOURNAL_RESULTS[contextType];

  const handleRedirect = () => {
    navigate(PATHS.CREATE);
  };

  return (
    <div className={style['no-journals']}>
      <h3>
        {message}
      </h3>

      {contextType === 'account'
        && (
          <Button
            onClick={handleRedirect}
            caption="Create"
          />
        )}
    </div>
  );
}
