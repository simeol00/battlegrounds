import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHead: React.FC = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  const getPageMeta = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Battlegrounds - Play Free HTML5 Games Online | No Downloads Required',
          description: 'Discover thousands of free HTML5 games at Battlegrounds. Play action, puzzle, racing, and arcade games instantly. No downloads, no registration required.',
          keywords: 'free games, HTML5 games, online games, browser games, play games online, action games, puzzle games'
        };
      case '/categories':
        return {
          title: 'Game Categories - Browse Games by Type | Battlegrounds',
          description: 'Browse our extensive collection of games by category. Find action, puzzle, racing, arcade, and more game types at Battlegrounds.',
          keywords: 'game categories, action games, puzzle games, racing games, arcade games'
        };
      default:
        return {
          title: 'Battlegrounds - Free HTML5 Games',
          description: 'Play free HTML5 games online at Battlegrounds',
          keywords: 'free games, HTML5 games, online games'
        };
    }
  };

  const meta = getPageMeta();

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Battlegrounds Gaming" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://battlegrounds.com${location.pathname}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content="https://battlegrounds.com/og-image.jpg" />
      <meta property="og:site_name" content="Battlegrounds" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://battlegrounds.com${location.pathname}`} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content="https://battlegrounds.com/og-image.jpg" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Battlegrounds",
          "description": "Free HTML5 games online",
          "url": "https://battlegrounds.com",
          "publisher": {
            "@type": "Organization",
            "name": "Battlegrounds Gaming",
            "logo": "https://battlegrounds.com/logo.png"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://battlegrounds.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      <link rel="canonical" href={`https://battlegrounds.com${location.pathname}`} />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Helmet>
  );
};

export default SEOHead;