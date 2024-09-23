"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const PreviousButton = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  return (
    <Button
      className="p-0 text-xs hover:underline hover:text-[#a05921]"
      onClick={handleBackClick}
    >
      <ChevronLeft size={16} /> BACK
    </Button>
  );
};

export default PreviousButton;
