import { createRoot } from 'react-dom/client';
import App from './App';

// 61d15e8d

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);


