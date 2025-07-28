import React from 'react';

interface AdBannerProps {
  size: 'leaderboard' | 'rectangle' | 'sidebar' | 'mobile';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, className = '' }) => {
  const getAdDimensions = () => {
    switch (size) {
      case 'leaderboard':
        return { width: '728px', height: '90px' };
      case 'rectangle':
        return { width: '300px', height: '250px' };
      case 'sidebar':
        return { width: '160px', height: '600px' };
      case 'mobile':
        return { width: '320px', height: '100px' };
      default:
        return { width: '300px', height: '250px' };
    }
  };

  const dimensions = getAdDimensions();

  return (
    <div 
      className={`bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center ${className}`}
      style={{ 
        width: dimensions.width, 
        height: dimensions.height,
        maxWidth: '100%'
      }}
    >
      {/* AdSense code will be inserted here */}
      {/*
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
                crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{display:"block"}}
             data-ad-client="ca-pub-XXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      */}
      <div className="text-gray-500 text-center">
        <div className="text-sm font-semibold">Advertisement</div>
        <div className="text-xs mt-1">{dimensions.width} x {dimensions.height}</div>
      </div>
    </div>
  );
};

export default AdBanner;