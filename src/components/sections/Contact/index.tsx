import ContactTemplate from "@/common/emailTemplates/ContactTemplate";
import { AlertResponse } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/atoms/Grid";
import SectionTitle from "@/components/atoms/SectionTitle";
import emailjs from "@emailjs/browser";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Alert, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

export interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertResponse | null>(null);

  const [form, setForm] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });

  const htmlContent = renderToStaticMarkup(<ContactTemplate {...form} />);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    console.log("submit-form");
    e.preventDefault();

    try {
      setLoading(true);
      setAlert(null);

      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          name: form?.name,
          email: form?.email,
          title: "RSVP inviato da " + form?.name,
          message_html: htmlContent,
        },
        publicKey
      );

      if (res.text == "OK") {
        console.log("Email inviata!");
        setAlert({
          severity: "success",
          text: "Email inviata!",
        });
      } else {
        console.error("Errore nell'invio");
        setAlert({
          severity: "error",
          text: "Errore nell'invio",
        });
      }
    } catch (error) {
      console.error("Errore:", error);
      setAlert({
        severity: "error",
        text: "Errore: " + error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <form onSubmit={submitForm}>
        <Container customWidth="1000px">
          <Row>
            <Col>
              <SectionTitle text="Contact me" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6}>
              <TextField
                required
                fullWidth
                type="email"
                label="Email"
                onChange={(e) =>
                  setForm((form) => ({ ...form, email: e.target.value }))
                }
              />
            </Col>
            <Col xs={12} lg={6}>
              <TextField
                fullWidth
                required
                label="Nome Cognome"
                onChange={(e) =>
                  setForm((form) => ({ ...form, name: e.target.value }))
                }
              />
            </Col>
            <Col xs={12}>
              <TextField
                label="Messaggio"
                rows={8}
                multiline
                fullWidth
                onChange={(e) =>
                  setForm((form) => ({ ...form, message: e.target.value }))
                }
              />
            </Col>
            <Col xs={12}>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                disabled={loading}
                startIcon={<SendRoundedIcon />}
              >
                {loading ? "Loading..." : "Invia!"}
              </Button>
            </Col>
          </Row>
          {alert && (
            <Row>
              <Col>
                <Alert
                  variant="outlined"
                  severity={alert.severity}
                  onClose={() => setAlert(null)}
                >
                  {alert.text}
                </Alert>
              </Col>
            </Row>
          )}
        </Container>
      </form>
    </div>
  );
};

export default Contact;
