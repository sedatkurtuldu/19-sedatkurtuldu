import { getServerAuthSession } from "~/server/auth";
import Navbar from "./_components/Navbar";
import AuthPage from "./_components/AuthPage";
import UnAuthPage from "./_components/UnAuthPage";

export default async function Home() {

  const session = await getServerAuthSession();

  return (
    <>
    <Navbar />
    <main>
    {session ? (
      <AuthPage />
    ) : (
      <UnAuthPage />
    )}

    </main>
    
  </>
  );
}
