import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProviderSigninBlock from "@/components/ProviderSigninBlock";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="mx-auto w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex justify-center py-4">
            <Link href="/">
              <Image src="/logo.png" alt="AppSurvey" width={50} height={50} />
            </Link>
          </div>
          <CardTitle className="font-heading text-2xl font-bold">
            ログイン
          </CardTitle>
          <CardDescription>ログイン方法を選択してください</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                または
              </span>
            </div>
          </div>
          <ProviderSigninBlock />
        </CardContent>
        <CardFooter className="flex-col text-center">
          <Link
            className="w-full text-sm text-muted-foreground"
            href="/forgot-password"
          >
            パスワードをお忘れですか？
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
