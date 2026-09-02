import { BaseProps } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import { CardFrame } from "@/components/molecules/CardFrame";
import { Section } from "@/components/organisms/Section";
import { StaticImageData } from "next/image";

export interface PracticeIntroProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt: string;
	/** Mirrors the layout (photo right, text left) for rhythm across pages. */
	reverse?: boolean;
	backgroundColor?: string;
}

export const PracticeIntro = ({
	className,
	image,
	alt,
	children,
	reverse = false,
	backgroundColor,
}: PracticeIntroProps) => {
	return (
		<Section backgroundColor={backgroundColor} className={className}>
			<Container>
				<Row mdAlign={Align.center} mdReverse={reverse}>
					<Col xs={12} md={5}>
						<CardFrame image={image} alt={alt} />
					</Col>
					<Col xs={12} md={6}>
						{children}
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
