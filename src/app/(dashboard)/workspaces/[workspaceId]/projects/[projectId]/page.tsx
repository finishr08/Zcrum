import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";
import ProjectIdClient from "./client";

const PrpjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdClient />;
};

export default PrpjectIdPage;
