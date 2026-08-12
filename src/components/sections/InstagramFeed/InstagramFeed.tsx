import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Instagram } from "@/components/atoms/SocialIcons";
import { Section } from "@/components/organisms/Section";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./InstagramFeed.module.scss";

const PROFILE_URL = "https://www.instagram.com/smup_yoga/";
const HANDLE = "@smup_yoga";

// ponytail: static frames, not the live Graph API. Instagram Basic Display was shut
// down in Dec 2024 and the Graph API needs a business account + reviewed app + a
// refreshed long-lived token. Swap this array for a fetch when that token exists.
//
// Order matters: the mosaic sizes tiles by position, so the most recent post goes
// first (largest tile, captioned). See $mosaic in InstagramFeed.module.scss.
const FRAMES = [
	"PXL_20250726_110233771.MP",
	"PXL_20250101_151738219",
	"PXL_20250112_213048967.MP",
	"PXL_20250823_080536915",
	"PXL_20250726_114904897.MP",
	"PXL_20250823_075608610",
	"PXL_20250601_164142948.MP",
	"photo_2_2025-09-03_09-38-20",
	"PXL_20250112_213040356",
];

export const InstagramFeed = () => {
	const t = useTranslations("instagram");

	return (
		<div id="instagram">
			<Section>
				<Container>
					<Row xsJustify={Justify.center}>
						<Col xs={12} lg={10}>
							<SectionTitle text={t("title")} center />
							<p className={classNames(styles.intro, "text--p-lg", "text--align-center")}>
								{t("subtitle")}
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className={classNames(styles.collage)}>
								{FRAMES.map((frame, index) => (
									<Link
										key={frame + index}
										href={PROFILE_URL}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={t("tileAlt", { handle: HANDLE })}
										className={classNames(styles.tile)}
									>
										<span className={classNames(styles.frame)}>
											<Image
												className={classNames(styles.image)}
												src={`/images/${frame}.jpg`}
												blurDataURL={`/images/${frame}_placeholder.jpg`}
												placeholder="blur"
												alt=""
												sizes="(max-width: 768px) 50vw, 33vw"
												fill
											/>
											<span className={classNames(styles.overlay)}>
												<Instagram size={28} />
											</span>
										</span>
										{index === 0 && (
											<span className={classNames(styles.caption)}>
												<span className={classNames(styles.captionLabel)}>
													{t("latestLabel")}
												</span>
												{t("latestCaption")}
											</span>
										)}
									</Link>
								))}
							</div>
						</Col>
					</Row>
					<Row xsJustify={Justify.center}>
						<Col xs={12}>
							<Link
								href={PROFILE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className={classNames(styles.cta)}
							>
								<Instagram size={20} /> {HANDLE}
							</Link>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);
};
