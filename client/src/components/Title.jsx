import clsx from "clsx";
import React from "react";

const Title = ({ title, className }) => {
  return (
    <h2 className={clsx("text-2xl font-semibold capitalize dark:text-white dark:bg-slate-900", className)}>
      {title}
    </h2>
  );
};

export default Title;