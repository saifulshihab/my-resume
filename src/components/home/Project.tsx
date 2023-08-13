import React from "react";

interface IProject {
  name: string;
  desc: string;
  stack: string;
  link: string;
}

const Project: React.FC<IProject> = (props) => {
  const { name, desc, stack, link } = props;
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">{name}</p>
      </div>
      <div className="flex flex-col text-xs mt-1">
        <p className="text-justify">{desc}</p>
        <p className="italic">
          <span className="font-semibold mr-1">Stack:</span>
          {stack}
        </p>
        <p className="italic">
          <span className="font-semibold mr-1">Live:</span>
          <a
            className="text-primary hover:underline"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
