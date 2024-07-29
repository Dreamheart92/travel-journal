import InfoBlock from '../../components/InfoBlock';
import Container from '../../components/Container';

export default function JournalEditorLayout({ title, caption, children }) {
  return (
    <Container customStyle={{ paddingTop: '5em' }}>
      {children}
    </Container>
  );
}
