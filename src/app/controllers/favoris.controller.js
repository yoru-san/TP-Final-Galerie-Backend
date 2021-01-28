var notifHandler = require('../notificationHandler.js');

var favoris = [];

exports.getFavoris = (_, res) => {
    res.json(favoris);
}

exports.toggleFavori = (req, res) => {
    var id = req.params.id;
    var index = favoris.indexOf(id);

    if (index == -1) {
        favoris.push(id);
        notifHandler.sendNotification('Favori ajouté', 'Votre favori a été ajouté.');
    } else {
        favoris.splice(index, 1);
        notifHandler.sendNotification('Favori retiré', 'Votre favori a été retiré.');
    }

    res.json(favoris);
}