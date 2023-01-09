let requestURL = 'https://yamacraft.github.io/note/index.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';

request.send();

request.onload = function () {
    let list = request.response;
    list = JSON.parse(JSON.stringify(list));

    let section = document.querySelector('.latest_blog_article');
    list.entry.forEach(element => {

        let title = element.title;
        let url = element.url;
        let published = element.published;
        let year = published.substr(0, 4);
        let month = published.substr(5, 2);
        let day = published.substr(8, 2)
        let code = `<li><a href="${url}">(${year}/${month}/${day}) ${title}</a></li>`
        section.insertAdjacentHTML('beforeend', code);
    });
}
