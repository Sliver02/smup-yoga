import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.BELLUNO);

export default function YogaBellunoLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
