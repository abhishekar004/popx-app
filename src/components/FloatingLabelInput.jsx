import { useState } from 'react';
import styles from './FloatingLabelInput.module.css';

export default function FloatingLabelInput({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={isFloating ? placeholder : ''}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label className={`${styles.label} ${isFloating ? styles.floating : ''}`}>
        {label}
      </label>
    </div>
  );
}
