"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          alt="userInfo"
          width={60}
          height={60}
        />
        <div className="font-bold">
          Name: <span>{session?.user?.name}</span>
        </div>
        <div className="font-bold">
          Email: <span>{session?.user?.email}</span>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
