"use client";
import React from "react";
import styles from "./styles.module.scss";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { value: "all", label: "All" },
  { value: "events", label: "Events" },
  { value: "activism", label: "Activism" },
  { value: "general", label: "General" },
  { value: "performances", label: "Performances" },
  { value: "behind-the-scenes", label: "Behind the Scenes" },
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <label htmlFor="category-filter" className={styles.filterLabel}>
        Filter by Category:
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={styles.filterSelect}
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}
