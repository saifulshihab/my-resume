import React from "react";

interface IProps {
  title: string;
  icon?: React.ReactNode;
  bold?: boolean;
}

const SectionTitle: React.FC<IProps> = (props) => {
  const { icon, title, bold } = props;
  return (
    <div className="flex gap-3 items-center">
      {icon ? <div className="w-4 h-4">{icon}</div> : null}
      <p
        className={`text-lg text-primary font-light uppercase tracking-[10px] ${
          bold ? "font-semibold" : ""
        }`}
      >
        {title}
      </p>
      <div className="flex-1 bg-primary h-[1px] opacity-50" />
    </div>
  );
};

SectionTitle.displayName = "SectionTitle";
export default SectionTitle;
