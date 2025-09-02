import React, { useEffect, useState } from "react";
import { wrapFieldsWithMeta } from "tinacms";

interface ZineThemeFieldProps {
  field: {
    name: string;
    label: string;
    description?: string;
  };
  input: {
    name: string;
    value: string;
    onChange: (value: string) => void;
  };
  meta: any;
  form: any;
}

interface ZineThemeCategory {
  title: string;
  subtheme: string[];
}

// Hardcoded theme categories based on your content files
// This ensures the component works even if the dynamic fetching isn't working
const fallbackThemeCategories: ZineThemeCategory[] = [
  {
    title: "1) Radical Politics & Resistance",
    subtheme: [
      "Anti-fascism / Anticapitalism",
      "Mutual aid & community defense",
      "Land back / decolonial struggles",
      "Border abolition / migration",
      "Labor organizing & DIY economics",
      "Police & prison abolition",
      "Direct action reports & tactics",
    ],
  },
  {
    title: "2) Music, Noise & Punk Culture",
    subtheme: [
      "Band interviews & tour diaries",
      "Lo-fi gear building / DIY studio setups",
      "Show reviews / gig culture",
      "Noise as protest / sound as spell",
      "Music scenes beyond the West",
      "Zine and tape distro features",
    ],
  },
  {
    title: "3) DIY & Survival Skills",
    subtheme: [
      "Herbalism / folk medicine",
      "Urban foraging & wildcrafting",
      "Sewing, mending, patchwork",
      "Reclaimed materials & upcycling",
      "Bike repair, squatting, gear hacks",
    ],
  },
  {
    title: "4) Identity & Belonging",
    subtheme: [
      "Queer/trans punk narratives",
      "Diaspora experiences",
      "Chosen family & kinship",
      "Neurodivergence, disability, madness",
      "Intersections of faith & rebellion",
    ],
  },
  {
    title: "5) Aesthetics & Symbols",
    subtheme: [
      "Visual culture (patches, sigils, tattoos)",
      "Language / typography / zine art",
      "Sacred trash & cursed fashion",
      "Folk symbolism in punk context",
      "DIY rituals of beauty and ugliness",
    ],
  },
  {
    title: "6) Manifestos & Myth-Making",
    subtheme: [
      "Rants, screeds, proclamations",
      "Punk futurism & speculative fiction",
      "Rewritten myths / folk tales",
      "Personal mythologies",
      "Radical storytelling & collective dreaming",
    ],
  },
];

export const ZineThemeField = wrapFieldsWithMeta(
  ({ field, input, meta, form }: ZineThemeFieldProps) => {
    const [themeCategories, setThemeCategories] = useState<ZineThemeCategory[]>(
      fallbackThemeCategories
    );
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [loading, setLoading] = useState(false);

    // Try to get the current theme category from the form if it exists
    useEffect(() => {
      const currentThemeCategory = form.getFieldState("themeCategory")?.value;
      if (currentThemeCategory) {
        setSelectedCategory(currentThemeCategory);
      }
    }, [form]);

    // Get available subthemes for the selected category
    const availableSubthemes =
      selectedCategory && themeCategories.length > 0
        ? themeCategories.find((cat) => cat.title === selectedCategory)
            ?.subtheme || []
        : [];

    const handleCategoryChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const category = event.target.value;
      setSelectedCategory(category);

      // Clear the subtheme when category changes
      input.onChange("");

      // Update the form with the selected category
      form.change("themeCategory", category);
    };

    const handleSubthemeChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const subtheme = event.target.value;
      input.onChange(subtheme);

      // Update the form with the selected subtheme
      form.change("subtheme", subtheme);
    };

    return (
      <div className="tina-field">
        <label className="tina-label">{field.label}</label>
        {field.description && (
          <p className="tina-description">{field.description}</p>
        )}

        {/* Category Selection */}
        <div className="tina-field-group">
          <label className="tina-sublabel">Theme Category</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="tina-input"
          >
            <option value="">Select a theme category...</option>
            {themeCategories.map((category) => (
              <option key={category.title} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* Subtheme Selection */}
        {selectedCategory && availableSubthemes.length > 0 && (
          <div className="tina-field-group">
            <label className="tina-sublabel">Subtheme</label>
            <select
              value={input.value || ""}
              onChange={handleSubthemeChange}
              className="tina-input"
            >
              <option value="">Select a subtheme...</option>
              {availableSubthemes.map((subtheme) => (
                <option key={subtheme} value={subtheme}>
                  {subtheme}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Display selected values */}
        {selectedCategory && input.value && (
          <div className="tina-field-summary">
            <p>
              <strong>Selected:</strong> {selectedCategory} → {input.value}
            </p>
          </div>
        )}
      </div>
    );
  }
);
