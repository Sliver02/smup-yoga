import ContactTemplate from "@/common/emailTemplates/ContactTemplate";
import { AlertResponse } from "@/common/globalInterfaces";
import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import { Col, Container, Row } from "@/components/atoms/Grid";
import SectionTitle from "@/components/atoms/SectionTitle";
import TextField from "@/components/atoms/TextField";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./styles.module.scss";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .includes("@", { message: "Invalid email address" }),
  message: z.string().optional(),
});

export type ContactFormProps = z.infer<typeof contactSchema>;

const Contact = () => {
  const t = useTranslations("contact");

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormProps>({
    resolver: zodResolver(contactSchema),
  });

  const submitForm = async (data: ContactFormProps) => {
    console.log("submit-form", data);

    try {
      setLoading(true);
      setAlert(null);

      const htmlContent = renderToStaticMarkup(<ContactTemplate {...data} />);

      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          reciver_email: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
          name: data.name,
          email: data.email,
          title: `Request from ${data.name}`,
          message_html: htmlContent,
        },
        publicKey,
      );

      if (res.text === "OK") {
        console.log("Email inviata!");
        setAlert({
          severity: "success",
          text: "Email inviata!",
        });
        reset();
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
    <div id="contact" className={classNames(styles.contact)}>
      <form onSubmit={handleSubmit(submitForm)}>
        <Container>
          <Row>
            <Col>
              <SectionTitle text={t("title")} />
              <p className={classNames("text--p-lg")}>{t("description")}</p>

              {/* <div className={classNames(styles.socialContainer)}>
                <Link
                  href={"https://www.instagram.com/smup_yoga/"}
                  target="_blank"
                  aria-description="Instagram Profile"
                >
                  <button
                    className={classNames(styles.socialButton)}
                    aria-label="Sarah Pompanin Instagram"
                    type="button"
                  >
                    <InstagramIcon
                      fontSize="large"
                      className={classNames(styles.icon)}
                    />
                    {t("instagram")}
                  </button>
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/sarah-maria-ursula-pompanin-4492a1100/"
                  }
                  target="_blank"
                  aria-description="LinkedIn Profile"
                >
                  <button
                    className={classNames(styles.socialButton)}
                    aria-label="Sarah Pompanin Linkedin"
                    type="button"
                  >
                    <LinkedInIcon
                      fontSize="large"
                      className={classNames(styles.icon)}
                    />
                    {t("linkedin")}
                  </button>
                </Link>
              </div> */}
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <p className={classNames("text--strong", "text--p-lg")}>
                {t("email")}
              </p>
            </Col>
            <Col xs={12} lg={6}>
              <TextField
                fullWidth
                type="email"
                label={t("email")}
                error={errors.email?.message}
                {...register("email")}
              />
            </Col>
            <Col xs={12} lg={6}>
              <TextField
                fullWidth
                label={t("name")}
                error={errors.name?.message}
                {...register("name")}
              />
            </Col>
            <Col xs={12}>
              <TextField
                label={t("message")}
                rows={8}
                multiline
                fullWidth
                {...register("message")}
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
                {loading ? "Loading..." : t("send")}
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
