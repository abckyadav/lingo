import { getIsAdmin } from "@/lib/admin";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

type AdminPageProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default async function AdminPage({ className, style }: AdminPageProps) {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) redirect("/");

  return (
    <div className={cn("", className)} style={style}>
      <App />
    </div>
  );
}
