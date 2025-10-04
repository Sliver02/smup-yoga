import { Col, Container, Row } from "@/components/atoms/Grid";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <Container fullWidth>
        <Row>
          <Col>
            <p>© 2024 SMUP Yoga - All rights reserved</p>
            <p>
              Website by{" "}
              <Link href="https://www.jacopopanzera.com/">Jacopo Panzera</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
