import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.ABOUT);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
