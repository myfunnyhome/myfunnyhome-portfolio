import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-5 py-24 text-center">
      <h1 className="font-archivo text-5xl font-semibold">404</h1>
      <p className="text-ash">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="rounded-sm border border-rule px-4 py-2 font-archivo text-sm font-medium"
      >
        홈으로 이동
      </Link>
    </main>
  );
}
