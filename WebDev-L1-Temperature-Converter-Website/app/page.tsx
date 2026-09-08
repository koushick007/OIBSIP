import { redirect } from "next/navigation"

export default function Page() {
  // The temperature converter is a static vanilla HTML/CSS/JS app served from /public.
  redirect("/index.html")
}
