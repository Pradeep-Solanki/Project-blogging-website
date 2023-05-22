import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./Home.css";

function DarkVariantExample() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h1>Top 10 Recent Post </h1>
            </div>
            <div className="page">
              <Card>
                <Card.Header>Recent Post's</Card.Header>
                <div className="recentPost">
                  <Card.Body>
                    <Card.Title>Blog title 1</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 2</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 3</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 4</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 5</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 6</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 7</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 8</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 9</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                  <Card.Body>
                    <Card.Title>Blog title 10</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    <Button variant="success">Read</Button>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </Col>

          <Col xs lg="4">
            <h1>Top Catogeries</h1>
            <ListGroup>
              <ListGroup.Item>Programming</ListGroup.Item>
              <ListGroup.Item>AI</ListGroup.Item>
              <ListGroup.Item>ML</ListGroup.Item>
              <ListGroup.Item>Data Science</ListGroup.Item>
              <ListGroup.Item>Block-Chain</ListGroup.Item>
              <ListGroup.Item>Block-Chain</ListGroup.Item>
            </ListGroup>

            <h1>Most loved Author's</h1>
            <ListGroup>
              <ListGroup.Item>Pankaj Lahare</ListGroup.Item>
              <ListGroup.Item>Rohit Dixit</ListGroup.Item>
              <ListGroup.Item>Aman Vaide</ListGroup.Item>
              <ListGroup.Item>Pradeep Solanki</ListGroup.Item>
              <ListGroup.Item>Renox</ListGroup.Item>
              <ListGroup.Item>Block-Chain</ListGroup.Item>
              <ListGroup.Item>Block-Chain</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DarkVariantExample;
