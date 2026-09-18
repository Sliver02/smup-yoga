import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.KID);

export default function KidsYogaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
