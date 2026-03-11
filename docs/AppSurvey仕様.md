### 1. プロジェクト概要

- AppSurvey: 企業のアプリケーション（DX資産）を対象としたアンケート・診断システム
- 「AppSurvey Powered by AI SWITCH」ブランド名    

### 2. 主要機能

- ログイン画面（Google OIDC, supabaseのAuthorizationを利用）
- 顧客企業・アプリケーション管理（一覧、新規登録、編集、削除）
- 調査対象者別アンケート作成・配信    
- スワイプ形式のアンケート回答UI(4. スワイプ型UIは以下を利用するを参照）
- 評価軸（5軸55項目）に基づくスコア計算    
- Dify連携によるAI分析
- アプリケーションポートフォリオ（バブルチャート）
- ユーザー招待・権限管理（admin / customer ロール）    

### 3. 技術スタック

- Next.js 15 (App Router, Turbopack), React 19, TypeScript    
- Supabase (PostgreSQL, Auth, RLS)    
- Tailwind CSS, Radix UI / shadcn/ui    
- Zustand, React Hook Form + Zod, Recharts    
- Azure AD OAuth, Microsoft Graph（メール送信）    
- Dify（AI分析ワークフロー）

### 4. スワイプ型UIは以下を利用する

npm install　https://github.com/well-think-and-design/swipe-survey-ui

### 5. その他
- アカウント管理はsupabaseのAuthorizationを使用する