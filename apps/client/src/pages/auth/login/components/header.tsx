import React from "react";

interface Props {
  title: string;
  label: string;
}
export const Header: React.FC<Props> = ({ title, label }) => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-base text-muted-foreground">{label}</p>
    </div>
  );
};
