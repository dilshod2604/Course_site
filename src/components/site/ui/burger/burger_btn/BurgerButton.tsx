"use client";
import React from "react";
import scss from "./BurgerButton.module.scss";
import { useBurgerStore } from "@/src/store/useBurgerStore";
const BurgerButton = () => {
  const { isOpen, setIsOpen } = useBurgerStore();
  return (
    <div
      className={`${scss.BurgerButton} ${isOpen ? scss.active : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
