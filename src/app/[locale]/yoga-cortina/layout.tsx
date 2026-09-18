import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.CORTINA);

export default function YogaCortinaLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
