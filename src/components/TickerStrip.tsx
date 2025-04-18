import React from 'react';
import { cn } from '@/lib/utils';

interface TickerStripProps {
  className?: string;
}

export const TickerStrip: React.FC<TickerStripProps> = ({ className }) => {
  return (
    <div className={cn("w-full", className)}>
      <iframe 
        src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20,1984,39&border=show&speed=50&click_target=blank&theme=light&tm-cr=FFFFFF&hr-cr=00000013&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread,chg,chg_per&tp_scl=ltr&lang=en&font=Arial, sans-serif" 
        width="100%" 
        height="85" 
        style={{ border: 'unset' }}
      />
      <div 
        id="fx-pricing-widget-copyright" 
        style={{
          textAlign: 'center',
          fontSize: '13px',
          fontFamily: 'sans-serif',
          marginTop: '10px',
          marginBottom: '10px',
          color: '#9db2bd'
        }}
      >
        <span>Powered by </span>
        <a 
          href="https://fxpricing.com/" 
          target="_blank"
          style={{
            textDecoration: 'unset',
            color: '#bb3534',
            fontWeight: 600
          }}
        >
          FX Pricing
        </a>
      </div>
    </div>
  );
};

export default TickerStrip; 