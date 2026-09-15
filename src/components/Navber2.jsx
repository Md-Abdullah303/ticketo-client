import React from "react";
import Navbar from "./Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navber2 = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session.user;
  return (
    <div>
      <Navbar userData={userData} />
    </div>
  );
};

export default Navber2;
