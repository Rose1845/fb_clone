import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSideBar";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSideBar";
import Story from "@/components/Story";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <>
      <Head>
        <title>fbCLone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <LeftSidebar />
        <RightSidebar/>
        <Feed/>
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
