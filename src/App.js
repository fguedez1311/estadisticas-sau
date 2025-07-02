import { Header } from './components/Header.js';
import { Router } from './components/Router.js';

export function App() {
    const $app=document.querySelector('#app')
    $app.appendChild(Header())
    
}
