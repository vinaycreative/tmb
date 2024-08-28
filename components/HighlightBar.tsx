import { LucideIcon, Ticket, TrendingUp, Wallet } from "lucide-react";
import React from "react";

const HighlightBar = () => {
  return (
    <div className="w-full bg-slate-100 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Item LucideIcon={TrendingUp} title="Popularity" value="4467.772" />
        <Item LucideIcon={Wallet} title="Budget" value="$200,000,000" />
        <Item LucideIcon={Ticket} title="Revenue" value="$1,212,034,062" />
      </div>
    </div>
  );
};

const Item = ({
  LucideIcon,
  title,
  value,
}: {
  LucideIcon: LucideIcon;
  title: string;
  value: string;
}) => {
  return (
    <div className="div flex items-center gap-2">
      <div className="rounded-full bg-sky-100 p-2 shadow-inner">
        <LucideIcon size={18} className="text-sky-500" />
      </div>
      <p className="text-[15px] text-slate-500">
        {title}: <span className="font-semibold text-slate-700">{value}</span>
      </p>
    </div>
  );
};

export default HighlightBar;
