"use client";
import { message } from "antd";
import { Layout, Menu, Button, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogout } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
const { Header } = Layout;
const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "Home",
  },
  {
    label: <Link href="/about">About</Link>,
    key: "About",
  },
  {
    label: <Link href="/contact">Contact</Link>,
    key: "Contact",
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("Home");
  const [authStatus, setAuthStatus] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated", isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleOnClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const handleLogout = async () => {
    await dispatch(fetchLogout());
    message.success("Logout successful");
    router.push("/login");
  };

  useEffect(() => {
    setAuthStatus
  })

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image src="/logo.svg" alt="MemoBuddy Logo" width={150} height={150} />
      <Menu
        theme="light"
        onClick={handleOnClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {isAuthenticated ? (
        <Space size="middle" align="center">
          <Button onClick={handleLogout}>Logout</Button>
        </Space>
      ) : (
        <Space size="middle" align="center">
          <Link href="/login">
            <Button>Log in</Button>
          </Link>
          <Link href="register">
            <Button>Register</Button>
          </Link>
        </Space>
      )}
    </Header>
  );
};

export default Navbar;
