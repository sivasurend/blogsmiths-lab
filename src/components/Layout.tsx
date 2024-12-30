import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navigation = [
    { name: "Topic Generator", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Content Generator", path: "/content" },
    { name: "SEO Optimizer", path: "/seo" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex gap-6 md:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="container py-6 md:py-10">
        <div className="animate-fadeIn">{children}</div>
      </main>
    </div>
  );
};

export default Layout;