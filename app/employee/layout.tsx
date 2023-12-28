import Navigation from "../components/Navigation";
import { getServerSession } from "next-auth/next"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const session = await getServerSession()
  return (
    <div className="lg:grid lg:grid-cols-[20%_80%]">
      {session && <Navigation />}
      {children}
    </div>
  );
}
