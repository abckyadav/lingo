import clsx from "clsx";

type FooterProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Footer({ className, style }: FooterProps) {
  return (
    <div
      className={clsx(
        "hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2",
        className
      )}
      style={style}
    >
      Footer
    </div>
  );
}
