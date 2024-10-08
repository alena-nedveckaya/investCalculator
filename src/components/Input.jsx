import { useState } from 'react';

export default function Input({ label, name, onChange, value }) {
  const handleChange = (event) => {
    const value =
      event.target.value.length > 0 ? Number(event.target.value) : '';
    onChange(name, value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="number" value={value} onChange={handleChange} name={name} />
    </div>
  );
}
