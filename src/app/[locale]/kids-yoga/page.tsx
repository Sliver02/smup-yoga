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
import pageImage from "@public/images/photo_2_2025-09-03_09-38-20.jpg";
import "@/designSystem/utils.scss";

const KidsYogaPage = () => {
	const t = useTranslations("classes.kids");
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

			<PracticeIntro image={pageImage} alt="Kids Yoga">
				<p className="text--p-lg text--measure">
					{t.rich("description_long", {
						strong: (children) => <strong>{children}</strong>,
					})}
				</p>
				<p className="text--p-lg text--measure">{t("description_long2")}</p>
			</PracticeIntro>

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

			<PracticesCards exclude={RouteEnum.KID} title={tClasses("other_title")} />
			<BookCta image={pageImage} />
			<Footer />
		</main>
	);
};

export default KidsYogaPage;
