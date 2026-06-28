import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import portfolioConfig from '@/config/portfolio.config';

// Set document metadata from the single source of truth.
document.title = `${portfolioConfig.personal.name} — ${portfolioConfig.personal.title}`;
const description = document.createElement('meta');
description.name = 'description';
description.content = portfolioConfig.summary;
document.head.appendChild(description);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
