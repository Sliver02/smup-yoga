"use client";

import { Dropdown } from "@/components/atoms/Dropdown";
import { locales, usePathname, useRouter } from "@/i18n/routing";
import classNames from "classnames";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import styles from "./LanguageSwitcher.module.scss";

export interface LanguageSwitcherProps {
	className?: string;
}

/** Each language named in its own language ("italiano", "English"). */
const languageName = (locale: string) =>
	new Intl.DisplayNames([locale], { type: "language" }).of(locale) ?? locale.toUpperCase();

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
	const t = useTranslations("header");
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	return (
		<Dropdown
			className={classNames(styles.switcher, className)}
			ariaLabel={t("language")}
			popupClassName={styles.popup}
			hideChevron
			label={
				<span className={styles.globe}>
					<Globe size={26} aria-hidden />
					<span className={styles.badge}>{locale.toUpperCase()}</span>
				</span>
			}
			items={locales.map((target) => ({
				label: languageName(target),
				// `pathname` is locale-stripped, so this keeps the visitor on the same page.
				onClick: () => router.replace(pathname, { locale: target }),
			}))}
		/>
	);
};
