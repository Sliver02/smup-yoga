import { RouteEnum } from "@/common/routeEnum";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CardDisplay } from "@/components/molecules/CardDisplay";
import { Section } from "@/components/organisms/Section";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import anukalanaImage from "@public/images/PXL_20260701_045401209.jpg";
import yinImage from "@public/images/PXL_20250601_164142948.MP.jpg";
import kidsImage from "@public/images/photo_2_2025-09-03_09-38-20.jpg";
import outdoorImage from "@public/images/PXL_20250726_110233771.MP.jpg";
import privateImage from "@public/images/PXL_20260831_085105491.MP.jpg";
import pilatesImage from "@public/images/PXL_20250823_075608610.jpg";
import styles from "./PracticesCards.module.scss";

interface Practice {
	key: string;
	href: RouteEnum;
	image: StaticImageData;
}

const PRACTICES: Practice[] = [
	{ key: "anukalana", href: RouteEnum.ANUKALANA, image: anukalanaImage },
	{ key: "yin", href: RouteEnum.YIN, image: yinImage },
	{ key: "pilates", href: RouteEnum.PILATES, image: pilatesImage },
	{ key: "kids", href: RouteEnum.KID, image: kidsImage },
	{ key: "outdoor", href: RouteEnum.OUTDOOR, image: outdoorImage },
	{ key: "private", href: RouteEnum.PRIVATE_LESSONS, image: privateImage },
];

export interface PracticesCardsProps {
	/** Route of the page currently open — its own card is dropped from the grid. */
	exclude?: RouteEnum;
	/** Overrides the default "What I teach" heading (used for cross-links). */
	title?: string;
	backgroundColor?: string;
}

export const PracticesCards = ({ exclude, title, backgroundColor }: PracticesCardsProps) => {
	const t = useTranslations("classes");
	const practices = PRACTICES.filter((practice) => practice.href !== exclude);

	return (
		<div id="classes">
			<Section backgroundColor={backgroundColor}>
				<Container>
					<Row>
						<Col>
							<SectionTitle text={title ?? t("title")} center />
						</Col>
					</Row>
					{/* The intro pitches the whole offering — it only belongs on the home
              grid, not on the "other practices" cross-link at the foot of a page. */}
					{!title && (
						<Row xsJustify={Justify.center}>
							<Col xs={12} lg={8}>
								<p
									className={classNames(
										styles.intro,
										"text--p-lg",
										"text--align-center"
									)}
								>
									{t("intro")}
								</p>
							</Col>
						</Row>
					)}
					<Row xsJustify={Justify.center} gap="1.5rem 0">
						{practices.map((practice, index) => (
							<Col key={practice.key} xs={12} sm={6} lg={4}>
								<FadeIn
									className={classNames(styles.card)}
									delay={(index % 3) * 0.12}
									y={32}
								>
									<CardDisplay
										image={practice.image}
										href={practice.href}
										title={t(`${practice.key}.title`)}
										cta={t("discover")}
										description={t.rich(`${practice.key}.description`, {
											strong: (children) => <strong>{children}</strong>,
										})}
									/>
								</FadeIn>
							</Col>
						))}
					</Row>
				</Container>
			</Section>
		</div>
	);
};
