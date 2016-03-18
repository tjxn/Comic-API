<p>
Used in Team Charbroiled's Comic Web App.
<br>
This API is run on glacial-retreat-45891.herokuapp.com
</p>

|            | GET                          | PUT                            | POST               | DELETE                         |
|------------|------------------------------|--------------------------------|--------------------|--------------------------------|
| /Comic     |     Retrieve every Comic     |               N/A              | Create a New Comic |               N/A              |
| /Comic/:id | Retrieve Comic with given ID | Update Comic with specified ID |         N/A        | Delete Comic with specified ID |

<p>
Definition of a Comic (JSON):<br>
{<br>
    "Title": String,<br>
    "Public": Boolean,<br>
    "Contributors": {<br>
        "Contributor_1": String,<br>
        "Contributor_2": String,<br>
        "Contributor_3": String,<br>
        "Contributor_4": String,<br>
        "Contributor_5": String<br>
    },<br>
    "Panels": {<br>
        "Panel_1": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_2": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_3": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_4": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_5": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_6": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_7": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_8": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        },<br>
        "Panel_9": {<br>
            "Image_URL": String,<br>
            "Text": String<br>
        }<br>
    }<br>
}<br>
</p>