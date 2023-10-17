import Hello from "@/components/Hello"
import Main from "@/components/Main"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Hello/>
        <Main/>
      </div>
    </main>
  )
}
