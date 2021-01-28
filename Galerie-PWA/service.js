function getFavoris() {
    return fetch(`http://localhost:8080/favoris`)
        .then((response) => response.json());
}

function getImages() {
    return fetch(`http://localhost:8080/images`)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

function toggleFavori(id, isFavori) {
    var authorization;
    fetch(`http://localhost:8080/toggleFavori/${id}`, { method: 'PUT' })
        .then((res) => {
            Notification.requestPermission().then(function (result) {
                authorization = result;

                var title, body;
                if (!isFavori) {
                    title = "Favori ajouté"
                    body = "L'image a été ajouté en favori."
                } else {
                    title = "Favori retiré"
                    body = "L'image a été retiré des favori."
                }

                if (authorization === 'granted') {
                    new Notification(title, { body: body });
                } else {
                    alert(body);
                }
            });
        })
}