import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const app = <StrictMode><App /></StrictMode>;

// the build prerenders the page into #root so crawlers get the full content; the dev server does not
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
