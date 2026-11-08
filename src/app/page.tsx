"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { mutate } = useLogout();
  const router = useRouter();
  const { data, isLoading } = useCurrent();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in")
    }
  }, [data]);

  return (
    <div>
      Only visible to authorised users.
      <Button onClick={() => mutate()}>
        Logout
      </Button>
    </div>
  );
};
