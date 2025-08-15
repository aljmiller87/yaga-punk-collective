import React from "react";
import styles from "./styles.module.scss";

interface ToggleOption {
  label: string;
  value: string;
}

interface ToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  options,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`${styles.toggle} ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`${styles.toggleButton} ${
            value === option.value ? styles.active : ""
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
