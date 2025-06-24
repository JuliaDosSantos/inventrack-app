import React from 'react';

const ComboBox = ({ options, value, onChange, label }) => {
  return (
    <div>
      <label className="text-xs">{label}</label>
      <select value={value} onChange={onChange} className="w-full px-4 py-2 bg-zinc-700 focus-within:outline-none rounded">
        <option value="">Selecione uma opção</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;