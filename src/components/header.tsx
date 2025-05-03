"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header({ isAdmin }: { isAdmin: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://i.etsystatic.com/35048573/r/il/89f712/5234301949/il_fullxfull.5234301949_4jg7.jpg"
            alt="St. Athanasius Orthodox Church"
            width={40}
            height={40}
            className="rounded-full flex-shrink-0"
          />
          <span className="text-xl font-bold">
            St. Athanasius Orthodox Church
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/calendar"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/calendar") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Calendar
          </Link>
          <Link
            href="/donate"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/donate") ? "text-primary" : "text-muted-foreground"
            )}
          >
            Donate
          </Link>
          {isAdmin && (
            <Link
              href="/admin"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/admin") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Admin
            </Link>
          )}
        </nav>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-t">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/calendar"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/calendar") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Calendar
            </Link>
            <Link
              href="/donate"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/donate") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Donate
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/admin") ? "text-primary" : "text-muted-foreground"
                )}
                onClick={closeMenu}
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
