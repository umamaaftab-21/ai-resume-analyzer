import React, { useState } from 'react';

interface TargetRoleSelectorProps {
  targetRole: string;
  setTargetRole: (role: string) => void;
}

const PRESET_ROLES = [
  'Data Science Intern',
  'AI/ML Intern',
  'Data Analyst Intern',
  'Machine Learning Intern',
  'AI Engineer Intern',
  'Software/Data Intern',
  'Custom Job Title...',
];

export const TargetRoleSelector: React.FC<TargetRoleSelectorProps> = ({
  targetRole,
  setTargetRole,
}) => {
  const isCustomPreset = !PRESET_ROLES.slice(0, 6).includes(targetRole) && targetRole !== '';
  const [isCustom, setIsCustom] = useState(isCustomPreset);
  const [customRole, setCustomRole] = useState(isCustomPreset ? targetRole : '');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === 'Custom Job Title...') {
      setIsCustom(true);
      setTargetRole(customRole);
    } else {
      setIsCustom(false);
      setTargetRole(val);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomRole(val);
    setTargetRole(val);
  };

  return (
    <div className="space-y-3">
      <label className="text-xs font-semibold text-[var(--ink-secondary)] uppercase tracking-wider block">
        TARGET TRAJECTORY <span className="text-[var(--accent)]">*</span>
      </label>

      <select
        value={isCustom ? 'Custom Job Title...' : targetRole}
        onChange={handleSelectChange}
        className="w-full bg-[#161B22] border border-[var(--border)] rounded-xl px-4 py-3 text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] cursor-pointer"
      >
        <option value="" disabled className="bg-[#161B22] text-[var(--ink-secondary)]">
          Select target trajectory path...
        </option>
        {PRESET_ROLES.slice(0, 6).map((role) => (
          <option key={role} value={role} className="bg-[#161B22] text-[var(--ink)]">
            {role}
          </option>
        ))}
        <option value="Custom Job Title..." className="bg-[#161B22] text-[var(--ink)]">
          Custom Job Title...
        </option>
      </select>

      {isCustom && (
        <input
          type="text"
          placeholder="e.g. Quantitative Research Intern, GenAI Developer"
          value={customRole}
          onChange={handleCustomChange}
          className="w-full bg-[#161B22] border border-[var(--border)] rounded-xl px-4 py-3 text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
        />
      )}
    </div>
  );
};
