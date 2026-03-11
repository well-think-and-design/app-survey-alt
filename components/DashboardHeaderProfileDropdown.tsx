import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentProfile } from "@/utils/supabase/profile";
import { logout } from "@/app/auth/actions";

export default async function DashboardHeaderProfileDropdown() {
  const profile = await getCurrentProfile();

  return (
    <nav className="flex items-center">
      <Button variant="ghost" size="icon" className="mr-2">
        <Bell className="h-4 w-4" />
        <span className="sr-only">通知</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
            <span className="sr-only">ユーザーメニューを開く</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {profile?.display_name || "マイアカウント"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>プロフィール</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>設定</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>ヘルプ</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={logout} className="w-full">
              <button type="submit" className="flex w-full">
                <LogOut className="mr-2 h-4 w-4" />
                <span>ログアウト</span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
