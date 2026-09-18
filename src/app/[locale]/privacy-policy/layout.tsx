import { RouteEnum } from "@/common/routeEnum";
import { pageMeta } from "@/common/seo";

export const generateMetadata = pageMeta(RouteEnum.PRIVACY);

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
