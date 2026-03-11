import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ForgotPasswordSuccess() {
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
            パスワードリセットメールを送信しました
          </CardTitle>
          <CardDescription>
            メールを確認して、パスワードリセットの手続きを行ってください。
            <Link href="/login" className="ml-1 text-primary underline">
              ログインに戻る
            </Link>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
