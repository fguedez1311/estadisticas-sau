export function Header(){
    const $header = document.createElement('header')
    $header.classList.add('bg-white', 'shadow-md')
    $header.innerHTML = `
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
                <div class="logo-container">
                    <img src="/assets/img/logo1.png" alt="Logo" class="logo-ine">
                    
                </div>
            
                <nav class="hidden md:flex">
                    <a href="#" class="nav-link active-nav text-blue-600 font-medium" id="home-link">Home</a>
                    <a href="#" class="nav-link text-gray-700 hover:text-blue-600 font-medium" id="delta-link">Delta Amacuro</a>
                    <a href="#" class="nav-link text-gray-700 hover:text-blue-600 font-medium" id="municipio-link">Municipio</a>
                    <a href="#" class="nav-link text-gray-700 hover:text-blue-600 font-medium" id="parroquia-link">Parroquia</a>
                    <a href="#" class="nav-link text-gray-700 hover:text-blue-600 font-medium" id="nomenclador-link">Nomenclador</a>
                </nav>
            
            
                <button class="md:hidden text-gray-700" id="mobile-menu-button">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
        </div>
        
        <!-- Menú móvil -->
        <div class="md:hidden hidden bg-white py-2 px-4 shadow-lg" id="mobile-menu">
            <a href="#" class="block py-2 text-blue-600 font-medium" id="mobile-home-link">Home</a>
            <a href="#" class="block py-2 text-gray-700 hover:text-blue-600" id="mobile-delta-link">Delta Amacuro</a>
            <a href="#" class="block py-2 text-gray-700 hover:text-blue-600" id="mobile-municipio-link">Municipio</a>
            <a href="#" class="block py-2 text-gray-700 hover:text-blue-600" id="mobile-parroquia-link">Parroquia</a>
            <a href="#" class="block py-2 text-gray-700 hover:text-blue-600" id="mobile-nomenclador-link">Nomenclador</a>
        </div>
    `
    return $header
}