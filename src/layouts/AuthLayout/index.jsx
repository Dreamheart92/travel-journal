import PropTypes from 'prop-types';
import InfoBlock from '../../components/InfoBlock';

import style from './index.module.css';

export default function AuthLayout({ form, title, caption }) {
  return (
    <div className={style.container}>
      <InfoBlock caption={caption} title={title} />

      <div className={style.form}>
        {form}
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  form: PropTypes.node.isRequired,
};
