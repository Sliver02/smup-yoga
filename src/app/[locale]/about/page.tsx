"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CardFrame } from "@/components/molecules/CardFrame";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { BookCta } from "@/components/sections/BookCta";
import { PracticesCards } from "@/components/sections/PracticesCards";
import { useTranslations } from "next-intl";
import pageImage from "@public/images/PXL_20260702_065829289.jpg";
import aboutImage from "@public/images/PXL_20260831_083436827.PORTRAIT.jpg";
import "@/designSystem/utils.scss";

const AboutPage = () => {
	const t = useTranslations("about");
	const tCommon = useTranslations("breadcrumbs");

	return (
		<main>
			<Header />
			<Hero
				title={t("title")}
				subtitle="Sarah Pompanin"
				compact
				backgroundImage={pageImage}
				breadcrumbItems={[{ label: tCommon("home"), href: "/" }, { label: t("title") }]}
			/>

			<Section>
				<Container>
					<Row xsJustify={Justify.center} mdAlign={Align.center} gap="2rem 0">
						<Col xs={12} md={5}>
							<CardFrame image={aboutImage} alt="Sarah Pompanin" />
						</Col>
						<Col xs={12} md={6} mdOffset={1}>
							<p className="text--p-lg text--measure">
								{t.rich("description1", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
							<p className="text--p-lg text--measure">
								{t.rich("description2", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
							<p className="text--p-lg text--measure">
								{t.rich("description3", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section backgroundColor="var(--primary-active)">
				<Container>
					<Row gap="1rem 0">
						<Col xs={12} lg={7}>
							<SectionTitle text={t("approach_title")} />
							<p className="text--p-lg text--measure">{t("approach1")}</p>
							<p className="text--p-lg text--measure">{t("approach2")}</p>
							<p className="text--p-lg text--measure">{t("approach3")}</p>
						</Col>
						<Col xs={12} lg={5}>
							<SectionTitle text={t("credentials_title")} />
							<ul className="styled-list">
								<li>{t("credential1")}</li>
								<li>{t("credential2")}</li>
								<li>{t("credential3")}</li>
								<li>{t("credential4")}</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section>
				<Container>
					<Row xsJustify={Justify.center} gap="1rem 0">
						<Col xs={12} lg={10}>
							<p className="text--p-lg text--measure">
								{t.rich("extended_description1", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
							<p className="text--p-lg text--measure">
								{t.rich("extended_description2", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
							<p className="text--p-lg text--measure">
								{t.rich("extended_description3", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
						</Col>
					</Row>
				</Container>
			</Section>

			<PracticesCards />
			<BookCta />
			<Footer />
		</main>
	);
};

export default AboutPage;
