import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.PRIVATE_LESSONS);

export default function PrivateLessonsLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
