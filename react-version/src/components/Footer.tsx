import React from 'react';
import logoYyw from '../assets/logo_yyw.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-hairline bg-canvas text-xs text-stone">
      <div className="max-w-[1160px] mx-auto px-8 md:px-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logoYyw} alt="YYW" className="w-[30px] h-[30px] object-contain grayscale opacity-85" />
            <span className="font-semibold text-ink">유용완 Yoo Yongwan</span>
          </div>
          <p className="font-mono">&copy; {currentYear} 유용완 · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
