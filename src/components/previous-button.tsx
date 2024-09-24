"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

const PreviousButton = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  return (
    <Button
      className="text-sm group hover:text-[#333] relative flex items-center gap-2 p-0"
      onClick={handleBackClick}
    >
      <MoveLeft />
      BACK
    </Button>
  );
};

export default PreviousButton;
