import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="mx-auto w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex justify-center py-4">
            <Image src="/logo.png" alt="AppSurvey" width={50} height={50} />
          </div>
          <CardTitle className="font-heading text-2xl font-bold">
            新しいパスワードを入力
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
