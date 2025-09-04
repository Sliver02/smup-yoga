import Background from "@/components/atoms/Background";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";

const Filler = () => {
  return (
    <>
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
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
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
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
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
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
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
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--neutral-border)",
                }}
              >
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  odio voluptatum nisi!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  );
};

export default Filler;
