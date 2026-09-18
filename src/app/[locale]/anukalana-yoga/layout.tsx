import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.ANUKALANA);

export default function AnukalanaYogaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
