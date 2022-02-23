const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
            <img src="img/dark-logo.png" height="50px" width="100px" class="board-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search band,product">
                    <button class="search-btn"><a href="search.html" target="_blank" class="sch">Search</a></button>
                </div>
                <a href="404.html" target="_blank"><img src="img/user.png" alt=""></a>
                <a href="product.html" target="_blank"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#collection-women" class="link">women</a></li>
            <li class="link-item"><a href="#collection-men" class="link">men</a></li>
            <li class="link-item"><a href="#collection-acc" class="link">accessories</a></li>
            <li class="link-item"><a href="#footer" " class="link">about</a></li>
        </ul>
    `;
}

createNav();