import ContactTemplate from "@/common/emailTemplates/ContactTemplate";
import { AlertResponse } from "@/common/globalInterfaces";
import { Alert } from "@/components/atoms/Alert";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Col, Row } from "@/components/atoms/Grid";
import { Input } from "@/components/atoms/Input";
import { Modal } from "@/components/atoms/Modal";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactElement, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./Contact.module.scss";

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

export interface ContactProps {
	/** Element that opens the modal, e.g. a `Button` — rendered via Base UI's Dialog.Trigger. */
	trigger: ReactElement;
}

export const Contact = ({ trigger }: ContactProps) => {
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
				publicKey
			);

			if (res.text === "OK") {
				setAlert({
					severity: "success",
					text: "Email inviata!",
				});
				reset();
			} else {
				setAlert({
					severity: "error",
					text: "Errore nell'invio",
				});
			}
		} catch (error) {
			setAlert({
				severity: "error",
				text: "Errore: " + error,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Modal trigger={trigger} label={t("title")} className={classNames(styles.contact)}>
			<form onSubmit={handleSubmit(submitForm)}>
				<Card
					title={t("title")}
					subtitle={t("description")}
					surface="shadow"
					size="large"
					className={styles.formCard}
				>
					<Row>
						<Col xs={12} lg={6}>
							<Input
								fullWidth
								type="email"
								label={t("email")}
								error={errors.email?.message}
								{...register("email")}
							/>
						</Col>
						<Col xs={12} lg={6}>
							<Input
								fullWidth
								label={t("name")}
								error={errors.name?.message}
								{...register("name")}
							/>
						</Col>
						<Col xs={12}>
							<Input label={t("message")} rows={8} multiline fullWidth {...register("message")} />
						</Col>
						<Col xs={12}>
							<Button
								fullWidth
								size="large"
								type="submit"
								variant="contained"
								disabled={loading}
								icon={<Send size={18} />}
								iconPosition="start"
							>
								{loading ? "Loading..." : t("send")}
							</Button>
						</Col>
					</Row>

					{alert && (
						<Row>
							<Col>
								<Alert variant="outlined" severity={alert.severity} onClose={() => setAlert(null)}>
									{alert.text}
								</Alert>
							</Col>
						</Row>
					)}
				</Card>
			</form>
		</Modal>
	);
};
