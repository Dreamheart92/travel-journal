import PropTypes from 'prop-types';
import style from './index.module.css';

export default function Grid({ outerClassName = '', children }) {
  return (
    <div className={`${style.grid} ${outerClassName}`}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  outerClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
