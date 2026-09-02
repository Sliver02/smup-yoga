import { RouteEnum } from "@/common/routeEnum";
import { Col, Container, Row } from "@/components/atoms/Grid";
import classNames from "classnames";
import { Instagram, Linkedin } from "@/components/atoms/SocialIcons";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
	const t = useTranslations("header");

	return (
		<footer className={classNames(styles.footer)}>
			<Container fullWidth>
				<Row>
					<Col xs={12} md={6} lg={3}>
						<h3 className={styles.footerTitle}>{t("classes")}</h3>
						<ul className={styles.footerList}>
							<li>
								<Link href={RouteEnum.ANUKALANA}>{t("anukalana")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.YIN}>{t("yin")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.PILATES}>{t("pilates")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.KID}>{t("kids")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.OUTDOOR}>{t("outdoor")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.PRIVATE_LESSONS}>{t("private")}</Link>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<h3 className={styles.footerTitle}>{t("locations")}</h3>
						<ul className={styles.footerList}>
							<li>
								<Link href={RouteEnum.BELLUNO}>{t("belluno")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.CORTINA}>{t("cortina")}</Link>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<h3 className={styles.footerTitle}>SMUP Yoga</h3>
						<ul className={styles.footerList}>
							<li>
								<Link href={RouteEnum.HOME}>{t("home")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.ABOUT}>{t("about")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.CONTACT}>{t("contact")}</Link>
							</li>
							<li>
								<Link href={RouteEnum.PRIVACY}>{t("privacy")}</Link>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={6} lg={3}>
						<h3 className={styles.footerTitle}>Social</h3>
						<ul className={styles.footerList}>
							<li>
								<NextLink
									href="https://www.instagram.com/smup_yoga/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.socialLink}
								>
									<Instagram size={18} /> Instagram
								</NextLink>
							</li>
							<li>
								<NextLink
									href="https://www.linkedin.com/in/sarah-maria-ursula-pompanin-4492a1100/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.socialLink}
								>
									<Linkedin size={18} /> LinkedIn
								</NextLink>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<div className={styles.copyright}>
							<p>
								© 2024 SMUP Yoga - All rights reserved |{" "}
								<Link href={RouteEnum.PRIVACY}>{t("privacy")}</Link>
							</p>
							<p>
								Website by{" "}
								<NextLink
									href="https://www.jacopopanzera.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Jacopo Panzera
								</NextLink>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
