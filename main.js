Notification système
👇


body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background-color: #f5f5f5;
    overflow-y: auto;
}

.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
}

header {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px;
}

.notification {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notification-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.icon {
    font-size: 18px;
    margin-right: 10px;
    color: #666;
}

.title {
    flex-grow: 1;
    font-size: 16px;
    color: #666;
}

.date {
    font-size: 14px;
    color: #999;
}

.message {
    font-size: 16px;
    color: #333;
    line-height: 1.4;
    margin: 0 0 10px 0;
}

.more {
    color: #007aff;
    cursor: pointer;
}

.learn-more {
    display: block;
    text-align: right;
    font-size: 14px;
    color: #007aff;
    text-decoration: none;
}

.learn-more span {
    margin-left: 5px;
}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boîte de réception</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Boîte de réception</h1>
        </header>
        <main>
            <div class="notification">
                <div class="notification-header">
                    <span class="icon">🔔</span>
                    <span class="title">Notifications système</span>
                    <span class="date">2024-12-04</span>
                </div>
                <p class="message">Améliore l'éclairage de tes vidéos à l'aide de la fonctionnalité d'ajust de ...<br>Améliore sans effort et en un clic l'éclairage dans tes vidéos à l'aide de la fonctionnalité d'ajout de lumière sur l'application pou... <span class="more">Plus</span></p>
                <a href="#" class="learn-more">En savoir plus <span>></span></a>
            </div>
            <div class="notification">
                <div class="notification-header">
                    <span class="icon">🔔</span>
                    <span class="title">Notifications système</span>
                    <span class="date">2024-11-21</span>
                </div>
                <p class="message">Crée des stickers à partir de texte avec l'IA sur l'application pour ordin...<br>Donne vie à tes idées de stickers ! Saisis simplement quelques mots et obtiens différents stickers de styles divers. Tel... <span class="more">Plus</span></p>
                <a href="#" class="learn-more">En savoir plus <span>></span></a>
            </div>
            <div class="notification">
                <div class="notification-header">
                    <span class="icon">🔔</span>
                    <span class="title">Notifications système</span>
                    <span class="date">2024-11-14</span>
                </div>
                <p class="message">Modifie aisément les voix dans tes vidéos sur l'application pour ordinat...<br>Adapte n'importe quelle voix en fonction des... <span class="more">Plus</span></p>
                <a href="#" class="learn-more">En savoir plus <span>></span></a>
            </div>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>









body {
    margin: 0;
    font-family: Arial, sans-serif;
    overflow-y: auto;
}

.container {
    height: 100vh;
    overflow-y: auto;
    position: relative;
}

.header {
    position: relative;
    height: 300px;
    background-size: cover;
    background-position: center;
    transition: height 0.3s ease;
}

.header-content {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: white;
    align-items: center;
}

.logo {
    width: 50px;
    height: auto;
}

.time {
    font-size: 18px;
}

.icons span {
    margin-left: 10px;
}

.settings {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.ad-banner {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
}

.ad-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.7;
}

.ad-text h2 {
    margin: 0;
    font-size: 24px;
}

.donate-btn {
    background-color: #00ff00;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
}

.new-project {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: #e0f7ff;
    border-radius: 20px;
    margin: 10px;
    transition: all 0.3s ease;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    margin-top: 50px; /* Soulève les widgets pour qu'ils soient visibles */
    position: relative;
    z-index: 1;
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f0f0f0;
    border-radius: 10px;
    cursor: pointer;
}

.icon {
    font-size: 20px;
}

.scrolled .header {
    height: 0;
    overflow: hidden;
}

.scrolled .new-project {
    padding: 5px;
    font-size: 14px;
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #fff;
    padding: 10px 0;
    border-top: 1px solid #ccc;
}

.nav-item {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-icon {
    font-size: 20px;
    color: #000;
}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Interactive</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header" style="background-image: url('photo1.png');">
            <div class="header-content">
                <img src="logo.png" alt="Logo" class="logo">
                <div class="icons">
                    <span class="time">21:12</span>
                    <span>😊</span>
                    <span>📷</span>
                    <span>🛒</span>
                </div>
                <button class="settings">Paramètre</button>
            </div>
            <div class="ad-banner">
                <img src="photo2.png" alt="Background Image" class="ad-bg">
                <div class="ad-text">
                    <h2>Barakah Effect</h2>
                    <p>Our brothers and sisters in Yemen, Indonesia, and Gaza need us desperately.</p>
                    <button class="donate-btn">Donate Today</button>
                </div>
            </div>
        </header>
        <main>
            <section class="new-project">
                <span>Nouveau projet</span>
            </section>
            <div class="grid">
                <div class="item">Course <span class="icon">🏁</span></div>
                <div class="item">Jeux de rôles <span class="icon">⚔️</span></div>
                <div class="item">Stratégie <span class="icon">🎮</span></div>
                <div class="item">Sport <span class="icon">🏸</span></div>
                <div class="item">Cartes <span class="icon">🃏</span></div>
                <div class="item">Jeux de société <span class="icon">🏠</span></div>
                <div class="item">Action <span class="icon">🎬</span></div>
                <div class="item">Simulation <span class="icon">🎮</span></div>
                <div class="item">Réflexion <span class="icon">🧩</span></div>
                <div class="item">Aventure <span class="icon">🌍</span></div>
            </div>
        </main>
        <nav class="bottom-nav">
            <button class="nav-item">Accueil <span class="nav-icon">🏠</span></button>
            <button class="nav-item">Mess <span class="nav-icon">💬</span></button>
            <button class="nav-item">Profil <span class="nav-icon">👤</span></button>
        </nav>
    </div>
    <script src="script.js"></script>
</body>
</html>
