import { Link } from 'react-router-dom';
import SidebarSection from '../../../../components/Sidebar/SidebarSection';
import { PATHS } from '../../../../constants/paths';
import Button from '../../../../components/Button';

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
