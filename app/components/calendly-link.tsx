import Link from "next/link";
import { SCHEDULE_DISCOVERY_PATH } from "@/lib/site-config";

type CalendlyLinkProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function CalendlyLink({ children, className, onClick }: CalendlyLinkProps) {
  return (
    <Link href={SCHEDULE_DISCOVERY_PATH} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
