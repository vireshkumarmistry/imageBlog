"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface CustomButtonProps {
  icon?: React.ReactNode;
  buttonText: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({ icon, buttonText, className = "" }) => {
    const router = useRouter();

    const handleBackClick = React.useCallback(() => {
      router.back();
    }, [router]);

    return (
      <Button
        className={`text-sm group hover:text-[#333] relative flex items-center gap-2 p-0 ${className}`}
        onClick={handleBackClick}
      >
        {icon}
        {buttonText}
      </Button>
    );
  }
);

export default CustomButton;
