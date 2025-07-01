import { Router } from './components/Router.js';



export function App() {
    const $app=document.querySelector('#app')
    $app.innerHTML = `
      <div>
         <h1 class="text-3xl font-bold underline text-center text-amber-400">
         Hello world!
         <i class="fas fa-file-csv text-blue-600"></i>
        </h1>
      </div>
    `
    
}