import Background from "@/components/atoms/Background";
import Col from "@/components/atoms/Grid/Col";
import Container from "@/components/atoms/Grid/Container";
import Row from "@/components/atoms/Grid/Row";
import { Justify } from "@/components/atoms/Grid/interfaces";

export default function Home() {
  return (
    <main>
      <Background>
        <Container fullHeight>
          <Row>
            <Col xs={12} md={4} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row xsJustify={Justify.between}>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
          </Row>
          <Row xsJustify={Justify.between}>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio
                voluptatum nisi!
              </div>
            </Col>
          </Row>
        </Container>
      </Background>
    </main>
  );
}
