import clsx from "clsx";

type HeaderProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Header({ className, style }: HeaderProps) {
  return (
    <div
      className={clsx(
        "h-20 w-full border-b-2 border-slate-200 px-4",
        className
      )}
      style={style}
    >
      Header
    </div>
  );
}
