"use client";

import React, { ChangeEvent } from "react";

interface Props {
  children: React.ReactNode;
  value: string;
  onChange: (e: string) => void;
  label: string;
  isRequired?: boolean;
  id: string;
}

const SelectField: React.FC<Props> = ({
  children,
  value,
  onChange,
  label,
  isRequired = false,
  id,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        name={id}
        title={label}
        value={value}
        required={isRequired}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 rounded-[4px] mt-3 border border-gray-300 bg-gray-200/15 focus:ring-[#17594F] focus:border-[#17594F]"
      >
        {children}
      </select>
    </div>
  );
};

export default SelectField;
