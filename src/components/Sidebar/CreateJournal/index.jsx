import { Link } from 'react-router-dom';
import SidebarSection from '../SidebarSection';
import { PATHS } from '../../../constants/paths';
import Button from '../../Button';

export default function CreateJournal() {
  return (
    <SidebarSection
      heading="Your Travel Stories"
    >
      <Link to={PATHS.CREATE}>
        <Button caption="Create Journal" />
      </Link>
    </SidebarSection>
  );
}
