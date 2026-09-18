import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.PILATES);

export default function PilatesLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
