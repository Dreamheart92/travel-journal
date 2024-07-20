import PropTypes from 'prop-types';

import style from './index.module.css';

export default function SidebarSection({ heading, children }) {
  return (
    <div className={style['sidebar-section']}>
      <h3>{heading}</h3>
      {children}
    </div>
  );
}

SidebarSection.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
};
