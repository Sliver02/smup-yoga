import { BaseProps } from "@/common/globalInterfaces";
import { Breadcrumb, BreadcrumbItem } from "@/components/atoms/Breadcrumb";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import defaultBackground from "@public/images/IMG_2617.png";
import styles from "./Hero.module.scss";

export interface HeroProps extends BaseProps {
	title: string;
	subtitle: string;
	compact?: boolean;
	backgroundImage?: StaticImageData;
	breadcrumbItems?: BreadcrumbItem[];
}

export const Hero = ({
	className,
	title,
	subtitle,
	compact = false,
	backgroundImage = defaultBackground,
	breadcrumbItems,
}: HeroProps) => {
	return (
		<div
			className={classNames(className, styles.hero, {
				[styles.compact]: compact,
			})}
			id={compact ? undefined : "home"}
		>
			<Image
				className={classNames(className, styles.backgroundImage)}
				alt="Yoga nature alps Dolomites"
				src={backgroundImage}
				placeholder="blur"
				priority
				fill
			/>

			<div
				className={classNames(styles.textWrapper, {
					"text--align-center": !compact,
				})}
			>
				<Container>
					<Row xsJustify={compact ? Justify.start : Justify.center}>
						<Col xs={12} lg={compact ? 10 : 8}>
							<h1>{title}</h1>
							<p
								className={classNames(
									"text--strong",
									"text--p-xxl",
									"text--strong"
								)}
							>
								{subtitle}
							</p>
						</Col>
						{breadcrumbItems && breadcrumbItems.length > 0 && (
							<Col xs={12}>
								<Breadcrumb items={breadcrumbItems} />
							</Col>
						)}
					</Row>
				</Container>
			</div>
		</div>
	);
};
