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
import pageImage from "@public/images/PXL_20260831_085105491.MP.jpg";
import introImage from "@public/images/PXL_20260831_083240581.PORTRAIT.jpg";
import "@/designSystem/utils.scss";

const PrivateLessonsPage = () => {
	const t = useTranslations("private");
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

			<PracticeIntro image={introImage} alt="Private yoga lesson" reverse>
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
				<p className="text--p-lg text--measure">{t("description3")}</p>
			</PracticeIntro>

			<Section backgroundColor="var(--primary-active)">
				<Container>
					<Row gap="1rem 0">
						<Col xs={12} lg={6}>
							<SectionTitle text={t("benefits_title")} />
							<ul className="styled-list">
								<li>{t("benefit1")}</li>
								<li>{t("benefit2")}</li>
								<li>{t("benefit3")}</li>
								<li>{t("benefit4")}</li>
								<li>{t("benefit5")}</li>
							</ul>
						</Col>
						<Col xs={12} lg={6}>
							<SectionTitle text={t("formats_title")} />
							<ul className="styled-list">
								<li>{t("format1")}</li>
								<li>{t("format2")}</li>
								<li>{t("format3")}</li>
								<li>{t("format4")}</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Section>

			<PracticesCards exclude={RouteEnum.PRIVATE_LESSONS} title={tClasses("other_title")} />
			<BookCta image={pageImage} />
			<Footer />
		</main>
	);
};

export default PrivateLessonsPage;
