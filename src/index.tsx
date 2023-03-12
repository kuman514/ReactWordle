import React from 'react';
import { createRoot } from 'react-dom/client';

import '^/index.css';
import App from '^/App';

(() => {
  const rootNode = document.getElementById('root');
  if (!rootNode) {
    return;
  }
  const root = createRoot(rootNode);
  root.render(<App />);
})();
