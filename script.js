function printing_table() {
    var dist = [
        {
            "Title": "Acadamy Dinosaur",
            "Description": "Acadamy Dinosaur is a movie about Dianosaurs Ofcourse",
            "Release Year": "2006",
            "Language": "English",
            "Director": "Nolan",
            "Rating": "PG",
            "Special Feat...": "Deleted Scene",
        },
        {
            "Title": "Acadamy Dinosaur",
            "Description": "Acadamy Dinosaur is a movie about Dianosaurs Ofcourse",
            "Release Year": "2006",
            "Language": "English",
            "Director": "Nolan",
            "Rating": "PG",
            "Special Feat...": "Deleted Scene",
        },
        {
            "Title": "Acadamy Dinosaur",
            "Description": "Acadamy Dinosaur is a movie about Dianosaurs Ofcourse",
            "Release Year": "2006",
            "Language": "English",
            "Director": "Nolan",
            "Rating": "PG",
            "Special Feat...": "Deleted Scene",
        },
        {
            "Title": "Acadamy Dinosaur",
            "Description": "Acadamy Dinosaur is a movie about Dianosaurs Ofcourse",
            "Release Year": "2006",
            "Language": "English",
            "Director": "Nolan",
            "Rating": "PG",
            "Special Feat...": "Deleted Scene",
        },
        {
            "Title": "Acadamy Dinosaur",
            "Description": "Acadamy Dinosaur is a movie about Dianosaurs Ofcourse",
            "Release Year": "2006",
            "Language": "English",
            "Director": "Nolan",
            "Rating": "PG",
            "Special Feat...": "Deleted Scene",
        },
        
    ];
    var i = 0;
    var j = 0;
    for (let x of dist) {

        Object.values(x).forEach(value => {
            console.log(i.toString() + j.toString() + " " + value);
            document.getElementById(i.toString() + j.toString()).innerHTML = value;
            j = j + 1;
            if (j >= Object.keys(x).length) {
                j = 0;
            }
        });
        i = i + 1;
        if (i >= dist.length) {
            i = 0;
        }
    }
    console.log(i)
    console.log(j)

}

