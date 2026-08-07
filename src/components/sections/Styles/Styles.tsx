import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CardDisplay } from "@/components/molecules/CardDisplay";
import { Section } from "@/components/organisms/Section";
import { useTranslations } from "next-intl";
import anukalanaImage from "@public/images/PXL_20250823_075608610.jpg";
import yinImage from "@public/images/PXL_20250601_164142948.MP.jpg";
import kidsImage from "@public/images/photo_2_2025-09-03_09-38-20.jpg";

export const Styles = () => {
	const t = useTranslations("classes");

	return (
		<div id="classes">
			<Section>
				<Container>
					<Row>
						<Col>
							<SectionTitle text={t("title")} center />
						</Col>
					</Row>
					<Row xsJustify={Justify.center}>
						<Col xs={12} md={6} lg={4}>
							<CardDisplay
								image={anukalanaImage}
								title={t("anukalana.title")}
								description={t.rich("anukalana.description", {
									strong: (children) => <strong>{children}</strong>,
								})}
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<CardDisplay
								image={yinImage}
								title={t("yin.title")}
								description={t.rich("yin.description", {
									strong: (children) => <strong>{children}</strong>,
								})}
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<CardDisplay
								image={kidsImage}
								title={t("kids.title")}
								description={t.rich("kids.description", {
									strong: (children) => <strong>{children}</strong>,
								})}
							/>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);
};
