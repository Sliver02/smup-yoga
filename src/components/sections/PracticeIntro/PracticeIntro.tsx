import { BaseProps } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import { CardFrame } from "@/components/molecules/CardFrame";
import { PhotoCollage } from "@/components/molecules/PhotoCollage";
import { Section } from "@/components/organisms/Section";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface PracticeIntroProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt: string;
	/** Second photo for a static two-image collage. Omit to keep the animated single-portrait frame. */
	insetImage?: StaticImageData;
	insetAlt?: string;
	/** Small credit line for sourced (non-own-camera) photography. */
	credit?: ReactNode;
	/** Mirrors the layout (photo right, text left) for rhythm across pages. */
	reverse?: boolean;
	backgroundColor?: string;
}

export const PracticeIntro = ({
	className,
	image,
	alt,
	insetImage,
	insetAlt,
	credit,
	children,
	reverse = false,
	backgroundColor,
}: PracticeIntroProps) => {
	return (
		<Section backgroundColor={backgroundColor} className={className}>
			<Container>
				<Row mdAlign={Align.center} mdReverse={reverse}>
					<Col xs={12} md={6}>
						{insetImage ? (
							<PhotoCollage
								mainImage={image}
								mainAlt={alt}
								insetImage={insetImage}
								insetAlt={insetAlt}
								reverse={reverse}
								credit={credit}
							/>
						) : (
							<CardFrame image={image} alt={alt} />
						)}
					</Col>
					<Col xs={12} md={5}>
						{children}
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
