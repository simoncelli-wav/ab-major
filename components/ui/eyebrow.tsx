import type { HTMLAttributes } from "react";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ className = "", ...props }: EyebrowProps) {
  return <p className={`eyebrow ${className}`.trim()} {...props} />;
}