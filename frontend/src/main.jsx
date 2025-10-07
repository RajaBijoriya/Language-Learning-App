import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'  // ✅ important: global Mantine styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider  theme={{
    fontFamily: 'SF Pro Text, sans-serif',
    primaryColor: 'teal',
    defaultRadius: 'md',
  }}>
      <App />
    </MantineProvider>
  </StrictMode>
);
