import { RouteEnum } from "@/common/routeEnum";
import { Button } from "@/components/atoms/Button";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { Instagram } from "@/components/atoms/SocialIcons";
import { Section } from "@/components/organisms/Section";
import { Contact } from "@/components/sections/Contact";
import classNames from "classnames";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import defaultImage from "@public/images/IMG_2646.jpg";
import styles from "./BookCta.module.scss";

export interface BookCtaProps {
	/** Photo behind the band — import it so Next generates the blur placeholder. */
	image?: StaticImageData;
}

export const BookCta = ({ image = defaultImage }: BookCtaProps) => {
	const t = useTranslations("cta");

	return (
		<Section id="contact" className={classNames(styles.band)} backgroundImage={image}>
			<Container>
				<Row xsJustify={Justify.center}>
					<Col xs={12} lg={8}>
						<h2 className={classNames(styles.title, "text--align-center")}>
							{t("title")}
						</h2>
						<p
							className={classNames(
								styles.description,
								"text--p-lg",
								"text--align-center"
							)}
						>
							{t("description")}
						</p>
						<div className={classNames(styles.actions)}>
							<Contact
								trigger={
									<Button size="large" icon={<MessageCircle size={18} />}>
										{t("primary")}
									</Button>
								}
							/>
							<a href={RouteEnum.INSTAGRAM} target="_blank" rel="noopener noreferrer">
								<Button
									size="large"
									variant="outlined"
									className={classNames(styles.secondaryButton)}
									icon={<Instagram size={18} />}
								>
									{t("secondary")}
								</Button>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
