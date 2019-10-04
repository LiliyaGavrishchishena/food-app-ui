import * as React from 'react';
import { Container, Row } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <>
      <div>
        <div>Header</div>
        <Container>
          <Row>
            <p>1</p>
          </Row>
          <Row>
            <p>2</p>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
