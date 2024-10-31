// components/Navbar.js
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return <div>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></div><Image src="icons/logo.svg" alt="MemoBuddy Logo" width={150} height={150} />;
};

export default Navbar;
