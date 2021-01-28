var favoris = [];

exports.getFavoris = (_, res) => {
    res.json(favoris);
} 

exports.toggleFavori = (req, res) => {
    var id = req.params.id;
    var index = favoris.indexOf(id);

    if (index == -1){
        favoris.push(id);
    } else {
        favoris.splice(index, 1);
    }

    res.json(favoris);
}