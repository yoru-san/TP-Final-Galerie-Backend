var favoris = [];

exports.getFavori = (req, res) => {
    console.log(req);
} 

exports.toggleFavori = (req, res) => {
    console.log("Favoris:")
    console.log(favoris);
    var id = req.params.id;
    var index = favoris.indexOf(id);

    if (index == -1){
        favoris.push(id);
    } else {
        favoris.splice(index, 1);
    }

    res.json(favoris);
}