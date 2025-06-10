"use client";

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch: React.FC = () => {
  const [theme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    // Force dark theme
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
    
    // Update meta tag for theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#0a0f1d');
    }
  }, []);
  
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={false} 
          disabled={true}
        />
        <div className="switch-inner opacity-50 cursor-not-allowed">
          <span className="switch-icon moon-icon">
            <FaMoon size={14} color="#d4af37" />
          </span>
          <span className="switch-icon sun-icon">
            <FaSun size={14} color="#f8cc35" />
          </span>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitch; 