import { PageLayoutProps } from "@/types/Types";

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return <div className={`px-4 py-4 ${className}`}>{children}</div>;
};

export default PageLayout;
