import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	images: {
		formats: ["image/avif", "image/webp"],
		qualities: [75, 85],
		minimumCacheTTL: 2678400, // 31 days
	},
};

export default withNextIntl(nextConfig);
