import Card from './components/Card';
import Container from './components/Container';
import qrCode from './images/image-qr-code.png';

function App() {
  return (
    <Container>
      <Card 
      title="Improve your front-end skills by building projects" 
      description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      image={qrCode}
      alt="QR Code"
      />
    </Container>
  );
}

export default App;
