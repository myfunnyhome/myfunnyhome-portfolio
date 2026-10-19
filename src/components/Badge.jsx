import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[3px] border px-2.5 py-1.25 font-archivo text-[11px] font-medium leading-[1.1] tracking-[0.33px] whitespace-nowrap",
  {
    variants: {
      status: {
        completed: "border-accent text-accent",
        inProgress: "border-rule text-ash",
      },
    },
  },
);

export default function Badge({ status, className, children }) {
  return <span className={cn(badgeVariants({ status }), className)}>{children}</span>;
}
