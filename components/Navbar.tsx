import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarLinks } from "./NavbarLinks";
import { MobileMenu } from "./MobileMenu";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./ui/button";
import { UserNav } from "./UserNav";
import { LogIn, UserPlus } from "lucide-react";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="uscreen Logo"
            width={164}
            height={164}
            priority
          />
        </Link>
      </div>

      <NavbarLinks />

      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        {user ? (
          <UserNav
            email={user.email as string}
            name={user.given_name as string}
            userImage={
              user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
          />
        ) : (
          <div className="flex items-center gap-x-2">
            <Button asChild>
              <LoginLink className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Login
              </LoginLink>
            </Button>

            <Button variant="secondary" asChild>
              <RegisterLink className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Register
              </RegisterLink>
            </Button>
          </div>
        )}

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
