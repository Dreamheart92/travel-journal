import PropTypes from 'prop-types';

export default function SidebarSection({ heading, children }) {
  return (
    <div>
      <h3>{heading}</h3>
      {children}
    </div>
  );
}

SidebarSection.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
};
