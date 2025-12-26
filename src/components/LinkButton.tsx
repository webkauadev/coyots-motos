import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLinkClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type LinkType = 'whatsapp' | 'whatsapp_atacado' | 'whatsapp_oficina' | 'mercadolivre' | 'instagram' | 'location';

interface LinkButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  variant: "whatsapp" | "mercadolivre" | "instagram" | "outline";
  linkType: LinkType;
  className?: string;
}

const LinkButton = ({ href, label, icon: Icon, variant, linkType, className }: LinkButtonProps) => {
  const handleClick = () => {
    trackLinkClick({
      linkType,
      linkLabel: label,
      linkUrl: href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="w-full block"
    >
      <Button
        variant={variant}
        size="xl"
        className={cn(
          "w-full justify-start gap-4 text-left",
          className
        )}
      >
        <Icon className="shrink-0" />
        <span className="flex-1">{label}</span>
      </Button>
    </a>
  );
};

export default LinkButton;
