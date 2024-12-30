import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1">
          <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <SidebarTrigger />
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                onClick={toggleSignIn}
              >
                <UserCircle className="h-5 w-5" />
                <span>{isSignedIn ? "Sign Out" : "Sign In"}</span>
              </Button>
            </div>
          </header>
          <main className="container py-6 md:py-10">
            <div className="animate-fadeIn">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;