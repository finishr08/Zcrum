import React from "react";
import ProjectIdClient from "./client";
import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";

const PrpjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdClient />;
};

export default PrpjectIdPage;
