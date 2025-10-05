import React from "react";
import Button from "../Button";
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
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <Button
            key={option.value}
            onClick={() => onChange(option.value)}
            variant="secondary"
            inverse={!isActive}
            className={styles.toggleButton}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};

export default Toggle;
