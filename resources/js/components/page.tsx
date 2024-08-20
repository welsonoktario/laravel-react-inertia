import { PageSubtitle, PageTitle } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export type PageHeaderProps = React.InputHTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
};

const PageHeader = ({
  title,
  subtitle,
  className,
  ...props
}: PageHeaderProps) => {
  return (
    <div className={cn("space-y-2 text-center", className)} {...props}>
      <PageTitle>{title}</PageTitle>
      {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
    </div>
  );
};

export { PageHeader };
