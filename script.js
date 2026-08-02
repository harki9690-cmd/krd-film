*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#111;
    color:#fff;
}

a{
    text-decoration:none;
    color:#fff;
}

header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 60px;
    background:rgba(0,0,0,.85);
    backdrop-filter:blur(12px);
    z-index:1000;
}

.logo{
    font-size:35px;
    font-weight:800;
}

.logo span{
    color:#e50914;
}

nav{
    display:flex;
    gap:25px;
}

nav a:hover{
    color:#e50914;
}

.search{
    display:flex;
    align-items:center;
    background:#fff;
    border-radius:30px;
    padding:10px 15px;
}

.search input{
    border:none;
    outline:none;
    font-size:15px;
    width:180px;
}

.search i{
    color:#555;
}

.hero{
    height:100vh;
    background:url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600") center/cover no-repeat;
    display:flex;
    align-items:center;
}

.overlay{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.65);
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:0 80px;
}

.overlay h1{
    font-size:70px;
    max-width:650px;
}

.overlay p{
    font-size:22px;
    margin:25px 0;
}

.overlay button{
    width:220px;
    padding:18px;
    border:none;
    border-radius:40px;
    background:#e50914;
    color:#fff;
    font-size:20px;
    cursor:pointer;
}

.movies{
    padding:70px 60px;
}

.movies h2{
    font-size:32px;
    margin-bottom:25px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
    gap:25px;
}

.card{
    background:#1b1b1b;
    border-radius:12px;
    overflow:hidden;
    transition:.3s;
    cursor:pointer;
}

.card:hover{
    transform:translateY(-8px) scale(1.03);
    box-shadow:0 15px 35px rgba(229,9,20,.35);
}

.card img{
    width:100%;
    height:320px;
    object-fit:cover;
}

.card h3{
    padding:15px;
    text-align:center;
    font-size:18px;
}

footer{
    background:#000;
    text-align:center;
    padding:60px 20px;
    margin-top:60px;
}

footer h2{
    color:#e50914;
    margin-bottom:15px;
}

footer p{
    color:#bbb;
    margin:10px 0;
}

@media(max-width:768px){

header{
    flex-direction:column;
    gap:15px;
    padding:20px;
}

nav{
    flex-wrap:wrap;
    justify-content:center;
    gap:15px;
}

.search{
    width:100%;
}

.search input{
    width:100%;
}

.overlay{
    padding:0 25px;
}

.overlay h1{
    font-size:42px;
}

.overlay p{
    font-size:18px;
}

.movies{
    padding:40px 20px;
}
}