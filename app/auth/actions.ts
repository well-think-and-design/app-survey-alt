"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const PUBLIC_URL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000";

export async function resetPassword(
  currentState: { message: string },
  formData: FormData
) {
  const supabase = await createClient();
  const passwordData = {
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
    code: formData.get("code") as string,
  };
  if (passwordData.password !== passwordData.confirm_password) {
    return { message: "パスワードが一致しません" };
  }

  await supabase.auth.exchangeCodeForSession(passwordData.code);

  const { error } = await supabase.auth.updateUser({
    password: passwordData.password,
  });
  if (error) {
    return { message: error.message };
  }
  redirect("/forgot-password/reset/success");
}

export async function forgotPassword(
  currentState: { message: string },
  formData: FormData
) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${PUBLIC_URL}/forgot-password/reset`,
  });

  if (error) {
    return { message: error.message };
  }
  redirect("/forgot-password/success");
}

export async function signup(
  currentState: { message: string },
  formData: FormData
) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
  };

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${PUBLIC_URL}/auth/callback`,
      data: {
        email_confirm: process.env.NODE_ENV !== "production",
        full_name: data.name,
      },
    },
  });

  if (signUpError) {
    if (signUpError.message.includes("already registered")) {
      return {
        message:
          "このメールアドレスは既に登録されています。ログインしてください。",
      };
    }
    return { message: signUpError.message };
  }

  if (!signUpData?.user) {
    return { message: "ユーザーの作成に失敗しました" };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function loginUser(
  currentState: { message: string },
  formData: FormData
) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { message: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${PUBLIC_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}

export async function signInWithGithub() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${PUBLIC_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}
