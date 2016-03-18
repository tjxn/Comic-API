Used in Team Charbroiled's Comic Web App.
This is the API which is run on glacial-retreat-45891.herokuapp.com

|            | GET                          | PUT                            | POST               | DELETE                         |
|------------|------------------------------|--------------------------------|--------------------|--------------------------------|
| /Comic     |     Retrieve every Comic     |               N/A              | Create a New Comic |               N/A              |
| /Comic/:id | Retrieve Comic with given ID | Update Comic with specified ID |         N/A        | Delete Comic with specified ID |


Definition of a Comic (JSON):
{
    "Title": String,
    "Public": Boolean,
    "Contributors": {
        "Contributor_1": String,
        "Contributor_2": String,
        "Contributor_3": String,
        "Contributor_4": String,
        "Contributor_5": String
    },
    "Panels": {
        "Panel_1": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_2": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_3": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_4": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_5": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_6": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_7": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_8": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_9": {
            "Image_URL": String,
            "Text": String
        }
    }
}