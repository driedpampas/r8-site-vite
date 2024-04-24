import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import M3 from './theme/M3/M3';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
    <StrictMode>
        <M3>
            <App />
        </M3>
    </StrictMode>
);
