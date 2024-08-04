import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/paths';
import InfoBlock from '../../../../components/InfoBlock';
import { ERROR_PAGE_MESSAGE, ERROR_PAGE_TYPES } from '../../../../constants/errorMessages';
import Button from '../../../../components/Button';

export default function ErrorContent({ notFoundError }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(PATHS.HOME);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const errorType = notFoundError
    ? {
      type: ERROR_PAGE_TYPES.NOT_FOUND,
      buttonAction: handleRedirect,
    }
    : {
      type: ERROR_PAGE_TYPES.SERVER_ERROR,
      buttonAction: handleRefresh,
    };

  const {
    code,
    title,
    caption,
    buttonCaption,
  } = ERROR_PAGE_MESSAGE[errorType.type];

  return (
    <>
      <h1 style={{ fontWeight: 'bold' }}>{code}</h1>
      <InfoBlock
        title={title}
        caption={caption}
      />
      <Button
        onClick={errorType.buttonAction}
        caption={buttonCaption}
      />
    </>
  );
}
