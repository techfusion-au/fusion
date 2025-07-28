"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@supabase/supabase-js";

interface UserAvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function UserAvatar({ size = "md", className = "" }: UserAvatarProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base"
  };

  if (loading) {
    return (
      <div className={`${sizeClasses[size]} ${className} rounded-full bg-white/10 animate-pulse`} />
    );
  }

  if (!user) return null;

  const avatarUrl = user.user_metadata?.avatar_url;
  const fullName = user.user_metadata?.full_name || user.email;
  const initials = fullName
    ?.split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || user.email?.[0]?.toUpperCase() || '?';

  return (
    <div className={`${sizeClasses[size]} ${className} rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center`}>
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={fullName || "User avatar"}
          width={size === "sm" ? 32 : size === "md" ? 40 : 48}
          height={size === "sm" ? 32 : size === "md" ? 40 : 48}
          className="rounded-full"
        />
      ) : (
        <span className="font-medium text-white">
          {initials}
        </span>
      )}
    </div>
  );
} 