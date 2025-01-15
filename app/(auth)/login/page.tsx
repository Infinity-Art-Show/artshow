import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Infinity Art Show",
  description: "Sign in to your Infinity Art Show account",
};

export default async function LoginPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <div className="min-h-[60vh]">{/* Login form will be added here */}</div>
    </main>
  );
}
