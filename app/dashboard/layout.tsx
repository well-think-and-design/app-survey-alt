import DashboardHeader from "@/components/DashboardHeader";
import type { Metadata } from "next";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ダッシュボード | AppSurvey",
  description: "AppSurvey 管理ダッシュボード",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}
