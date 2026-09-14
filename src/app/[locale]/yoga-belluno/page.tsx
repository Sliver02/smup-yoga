"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { BookCta } from "@/components/sections/BookCta";
import { PracticeIntro } from "@/components/sections/PracticeIntro";
import { PracticesCards } from "@/components/sections/PracticesCards";
import { useTranslations } from "next-intl";
import pageImage from "@public/images/PXL_20250112_213048967.MP.jpg";
import aerialImage from "@public/images/belluno-aerial.jpg";
import cathedralImage from "@public/images/belluno-cathedral-center.jpg";
import "@/designSystem/utils.scss";

const YogaBellunoPage = () => {
	const t = useTranslations("locations.belluno");
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

			<PracticeIntro
				image={aerialImage}
				alt="Belluno vista dall'alto"
				insetImage={cathedralImage}
				insetAlt="Duomo di San Martino, centro storico di Belluno"
				credit={
					<>
						Foto: Jacobus,{" "}
						<a
							href="https://creativecommons.org/licenses/by-sa/3.0/"
							target="_blank"
							rel="noopener noreferrer"
						>
							CC BY-SA 3.0
						</a>
						; Loris Tullio Moratti,{" "}
						<a
							href="https://creativecommons.org/licenses/by-sa/4.0/"
							target="_blank"
							rel="noopener noreferrer"
						>
							CC BY-SA 4.0
						</a>
					</>
				}
			>
				<p className="text--p-lg text--measure">
					{t.rich("description", {
						strong: (children) => <strong>{children}</strong>,
					})}
				</p>
				<p className="text--p-lg text--measure">{t("description2")}</p>
			</PracticeIntro>

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

			<PracticesCards />
			<BookCta image={pageImage} />
			<Footer />
		</main>
	);
};

export default YogaBellunoPage;
