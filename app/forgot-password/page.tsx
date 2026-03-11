import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="mx-auto w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex justify-center py-4">
            <Image src="/logo.png" alt="AppSurvey" width={50} height={50} />
          </div>
          <CardTitle className="font-heading text-2xl font-bold">
            パスワードをお忘れですか？
          </CardTitle>
          <CardDescription>
            登録済みのメールアドレスを入力してください
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ForgotPasswordForm />
        </CardContent>
        <CardFooter className="flex-col text-center">
          <Link
            className="w-full text-sm text-muted-foreground"
            href="/login"
          >
            ログインに戻る
          </Link>
          <Link
            className="w-full text-sm text-muted-foreground"
            href="/signup"
          >
            アカウントをお持ちでない方はこちら
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
