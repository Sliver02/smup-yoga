"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { BookCta } from "@/components/sections/BookCta";
import { Contact } from "@/components/sections/Contact";
import { Styles } from "@/components/sections/Styles";
import { useTranslations } from "next-intl";
import Image from "next/image";
import pageImage from "@public/images/IMG_2646.jpg";
import "@/designSystem/utils.scss";

const YogaCortinaPage = () => {
	const t = useTranslations("locations.cortina");
	const tLoc = useTranslations("locations");
	const tCommon = useTranslations("breadcrumbs");

	return (
		<main>
			<Header />
			<Hero
				title={t("title")}
				subtitle={t("subtitle")}
				compact
				backgroundImage={pageImage}
				breadcrumbItems={[{ label: tCommon("home"), href: "/" }, { label: t("title") }]}
			/>

			<Section>
				<Container>
					<Row xsJustify={Justify.center} mdAlign={Align.center} gap="2rem 0">
						<Col xs={12} md={5}>
							<Image
								src={pageImage}
								alt="Yoga a Cortina d'Ampezzo"
								width={600}
								height={400}
								className="responsive-image"
								placeholder="blur"
							/>
						</Col>
						<Col xs={12} md={6} mdOffset={1} mdAlignSelf={Align.center}>
							<p className="text--p-lg text--measure">
								{t.rich("description", {
									strong: (children) => <strong>{children}</strong>,
								})}
							</p>
							<p className="text--p-lg text--measure">{t("description2")}</p>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section backgroundColor="var(--primary-active)">
				<Container>
					<Row xsJustify={Justify.center}>
						<Col xs={12} lg={9}>
							<SectionTitle text={tLoc("venues_title")} />
							<ul className="styled-list">
								<li>{t("venue1")}</li>
								<li>{t("venue2")}</li>
								<li>{t("venue3")}</li>
								<li>{t("venue4")}</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Section>

			<Styles />
			<BookCta />
			<Contact />
			<Footer />
		</main>
	);
};

export default YogaCortinaPage;
