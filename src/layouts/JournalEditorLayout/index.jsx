import InfoBlock from '../../components/InfoBlock';
import Container from '../../components/Container';

export default function JournalEditorLayout({ title, caption, children }) {
  return (
    <Container customStyle={{ margin: '2em 0' }}>
      <InfoBlock
        title={title}
        caption={caption}
        paddingBottom="2em"
      />
      {children}
    </Container>
  );
}
