"use client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React, { ReactNode } from "react";
import { api } from "../redux/api";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
