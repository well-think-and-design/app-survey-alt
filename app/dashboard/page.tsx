import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/utils/supabase/profile";

export default async function Dashboard() {
  const profile = await getCurrentProfile();

  if (!profile) {
    redirect("/login");
  }

  return (
    <main className="flex-1">
      <div className="container py-8">
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          ようこそ、{profile.display_name} さん
        </h1>
        <p className="mt-2 text-muted-foreground">
          AppSurvey ダッシュボードへようこそ。
        </p>
      </div>
    </main>
  );
}
