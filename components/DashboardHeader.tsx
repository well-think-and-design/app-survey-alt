import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { getCurrentProfile } from "@/utils/supabase/profile";
import DashboardHeaderProfileDropdown from "./DashboardHeaderProfileDropdown";
import { Badge } from "@/components/ui/badge";

const adminNavItems = [
  { href: "/dashboard", label: "ホーム" },
  { href: "/dashboard/organizations", label: "顧客企業" },
  { href: "/dashboard/surveys", label: "アンケート" },
  { href: "/dashboard/portfolio", label: "ポートフォリオ" },
] as const;

const customerNavItems = [
  { href: "/dashboard", label: "ホーム" },
  { href: "/dashboard/surveys", label: "アンケート" },
  { href: "/dashboard/portfolio", label: "ポートフォリオ" },
] as const;

export default async function DashboardHeader() {
  const profile = await getCurrentProfile();
  const isAdmin = profile?.role === "admin";
  const navItems = isAdmin ? adminNavItems : customerNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            className="mr-4 flex items-center space-x-2"
            href="/dashboard"
          >
            <Image src="/logo.png" alt="AppSurvey" width={25} height={25} />
            <span className="font-heading text-sm font-bold tracking-tight">
              AppSurvey
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  i === 0 ? "text-foreground" : "text-foreground/60"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button variant="outline" size="icon" className="mr-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">メニューを開く</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="検索..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          {profile && (
            <Badge variant={isAdmin ? "default" : "secondary"} className="mr-2 hidden sm:inline-flex">
              {isAdmin ? "管理者" : "顧客"}
            </Badge>
          )}
          <DashboardHeaderProfileDropdown />
        </div>
      </div>
    </header>
  );
}
