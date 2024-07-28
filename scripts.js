document.addEventListener('DOMContentLoaded', function () {
    console.log('Blog sitesi yüklendi!');

    const content = document.getElementById('content');

    const pages = {
        home: `
            <h2>Hoş Geldiniz!</h2>
           <p>Bu, CodeBlog | Blog'un ana sayfasıdır. Burada blog yazılarımı, projelerimi ve daha fazlasını
            bulabilirsiniz.</p>
        `,
        about: `
            <h2>Hakkımda</h2>
            <p>Merhaba! Benim adım Yusuf. Yazılım geliştiricisiyim ve bu benim kişisel blogum.</p>
        `,
        projects: `
            <h2>Projelerim</h2>
            <p>Burada üzerinde çalıştığım projeler hakkında bilgi bulabilirsiniz.</p>
        `,
        social: `
            <h2>Sosyal Medya</h2>
            <p>Beni sosyal medya hesaplarımdan takip edebilirsiniz:</p>
            <ul>
                <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                <li><a href="https://github.com/" target="_blank">GitHub</a></li>
                <!-- Diğer sosyal medya linkleri buraya eklenebilir -->
            </ul>
        `
    };

    document.getElementById('home').addEventListener('click', function () {
        content.innerHTML = pages.home;
    });

    document.getElementById('about').addEventListener('click', function () {
        content.innerHTML = pages.about;
    });

    document.getElementById('projects').addEventListener('click', function () {
        content.innerHTML = pages.projects;
    });

    document.getElementById('social').addEventListener('click', function () {
        content.innerHTML = pages.social;
    });
});
