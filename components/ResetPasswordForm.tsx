"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { resetPassword } from "@/app/auth/actions";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function GetCodeHiddenInput() {
  const searchParams = useSearchParams();
  return (
    <Input type="hidden" name="code" value={searchParams.get("code")!} />
  );
}

export default function ResetPasswordForm() {
  const initialState = { message: "" };
  const [formState, formAction] = useActionState(resetPassword, initialState);

  return (
    <form action={formAction}>
      <div className="grid gap-2">
        <Label htmlFor="password">新しいパスワード</Label>
        <Input
          id="password"
          type="password"
          placeholder="新しいパスワードを入力"
          name="password"
          required
        />
        <Input
          id="confirm_password"
          type="password"
          placeholder="パスワードを再入力"
          name="confirm_password"
          required
        />
        <Suspense>
          <GetCodeHiddenInput />
        </Suspense>
      </div>
      <Button className="mt-4 w-full" type="submit">
        パスワードを更新
      </Button>
      {formState?.message && (
        <p className="py-2 text-center text-sm text-destructive">
          {formState.message}
        </p>
      )}
    </form>
  );
}
