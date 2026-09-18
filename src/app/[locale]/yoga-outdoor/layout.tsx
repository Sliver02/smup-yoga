import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.OUTDOOR);

export default function YogaOutdoorLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
