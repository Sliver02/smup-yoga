"use client";
import { RouteEnum } from "@/common/routeEnum";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { BookCta } from "@/components/sections/BookCta";
import { PracticeIntro } from "@/components/sections/PracticeIntro";
import { PracticesCards } from "@/components/sections/PracticesCards";
import { useTranslations } from "next-intl";
import pageImage from "@public/images/PXL_20250726_110233771.MP.jpg";
import introImage from "@public/images/PXL_20260702_065722552.MP.jpg";
import "@/designSystem/utils.scss";

const OutdoorYogaPage = () => {
	const t = useTranslations("outdoor");
	const tClasses = useTranslations("classes");
	const tCommon = useTranslations("breadcrumbs");

	const spots = [
		{ name: t("location1_name"), desc: t("location1_desc") },
		{ name: t("location2_name"), desc: t("location2_desc") },
		{ name: t("location3_name"), desc: t("location3_desc") },
	];

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

			<PracticeIntro image={introImage} alt="Outdoor Yoga">
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
			</PracticeIntro>

			<Section backgroundColor="var(--primary-active)">
				<Container>
					<Row>
						<Col></Col>
					</Row>
					<Row gap="6rem 0">
						<Col xs={12} lg={7}>
							<Row>
								<Col>
									<SectionTitle text={t("locations_title")} />
								</Col>
							</Row>
							<Row>
								{spots.map((spot) => (
									<Col key={spot.name} xs={12} md={4}>
										<div className="info-card">
											<h4 className="location-heading">{spot.name}</h4>
											<p className="text--p-md">{spot.desc}</p>
										</div>
									</Col>
								))}
							</Row>
						</Col>
						<Col xs={12} lg={4} lgOffset={1}>
							<SectionTitle text={t("practical_title")} />
							<ul className="styled-list">
								<li>{t("practical1")}</li>
								<li>{t("practical2")}</li>
								<li>{t("practical3")}</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Section>

			<PracticesCards exclude={RouteEnum.OUTDOOR} title={tClasses("other_title")} />
			<BookCta image={pageImage} />
			<Footer />
		</main>
	);
};

export default OutdoorYogaPage;
