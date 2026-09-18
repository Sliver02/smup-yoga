import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.YIN);

export default function YinYogaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
