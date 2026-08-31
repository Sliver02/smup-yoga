"use client";
import { RouteEnum } from "@/common/routeEnum";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { BookCta } from "@/components/sections/BookCta";
import { Contact } from "@/components/sections/Contact";
import { PracticesCards } from "@/components/sections/PracticesCards";
import { useTranslations } from "next-intl";
import Image from "next/image";
import pageImage from "@public/images/PXL_20250601_164142948.MP.jpg";
import "@/designSystem/utils.scss";

const PilatesPage = () => {
	const t = useTranslations("classes.pilates");
	const tClasses = useTranslations("classes");
	const tCommon = useTranslations("breadcrumbs");

	return (
		<main>
			<Header />
			<Hero
				title={t("title")}
				subtitle={t("hero_subtitle")}
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
								alt="Pilates"
								width={600}
								height={400}
								className="responsive-image"
								placeholder="blur"
							/>
						</Col>
						<Col xs={12} md={6} mdOffset={1} mdAlignSelf={Align.center}>
							<p className="text--p-lg text--measure">
								{t.rich("description_long", {
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
						<Col xs={12} lg={6}>
							<SectionTitle text={t("expect_title")} />
							<ul className="styled-list">
								<li>{t("expect1")}</li>
								<li>{t("expect2")}</li>
								<li>{t("expect3")}</li>
								<li>{t("expect4")}</li>
							</ul>
						</Col>
						<Col xs={12} lg={6}>
							<SectionTitle text={t("info_title")} />
							<ul className="styled-list">
								<li>{t("info1")}</li>
								<li>{t("info2")}</li>
								<li>{t("info3")}</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Section>

			<PracticesCards exclude={RouteEnum.YIN} title={tClasses("other_title")} />
			<BookCta />
			<Contact />
			<Footer />
		</main>
	);
};

export default PilatesPage;
