import React from "react";

interface IEducation {
  degree: string;
  institute: string;
  from: string;
  to?: string;
  desc: string;
}

const Education: React.FC<IEducation> = (props) => {
  const { degree, institute, from, to, desc } = props;
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">{degree}</p>
        <p className="text-sm italic">{`${from} - ${to || "Present"}`}</p>
      </div>
      <p className="text-xs italic font-semibold text-primary">{institute}</p>
      <div className="flex flex-col text-xs mt-1">
        <p className="italic text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default Education;
