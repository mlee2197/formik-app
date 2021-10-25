import './App.css';
import YoutubeForm from './components/YoutubeForm';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <YoutubeForm/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
