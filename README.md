Used in Team Charbroiled's Comic Web App.
<br>
This JSON REST API is run on [glacial-retreat-45891.herokuapp.com](glacial-retreat-45891.herokuapp.com) and is written in Typescript.<br>
<br>
Libraries Used Include:<br>
mongoose - http://mongoosejs.com/docs/ - /routes/api.ts<br>
<br>
<br>

|            | GET                          | PUT                            | POST               | DELETE                         |
|------------|------------------------------|--------------------------------|--------------------|--------------------------------|
| /Comic     |     Retrieve every Comic     |               N/A              | Create a New Comic |               N/A              |
| /Comic/:id | Retrieve Comic with given ID | Update Comic with specified ID |         N/A        | Delete Comic with specified ID |

<p>
Definition of a Comic (JSON):<br>
{<br>
&nbsp;&nbsp;&nbsp; "Title": String,<br>
&nbsp;&nbsp;&nbsp; "Public": Boolean,<br>
&nbsp;&nbsp;&nbsp; "Contributors": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Contributor_1": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Contributor_2": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Contributor_3": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Contributor_4": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Contributor_5": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panels": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Panel_1": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_2": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_3": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_4": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_5": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_6": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_7": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_8": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"Panel_9": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Image_URL": String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Text": String<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
}<br>
</p>
