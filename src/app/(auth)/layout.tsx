"use client";
import { RootState } from "@/redux/rootReducer";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const UnAuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default UnAuthLayout;
