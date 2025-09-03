import { BaseProps } from "@/common/globalInterfaces";

export interface CardDisplayProps extends BaseProps {
  title: string;
  image: string;
  description?: string;
}
