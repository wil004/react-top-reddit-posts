Dit project is een SPA (single page application) waarbij er gebruik wordt gemaakt van dynamic routing.
In totaal zijn er 2 routes eentje voor de overzichten pagina en 1 voor de informatie pagina.

In dit project worden de gegevens over de actuele top 100 reddit posts uit een database gehaald d.m.v. een api.

Door useEffect toe te voegen is het mogelijk de opgevraagde data in een useState variabele op te slaan.
Gebruikte ik hier geen useEffect voor dan re-renderde de pagina na elke waarde-toewijzing aan de state variabele
waardoor je dan dus in een oneindige loop terecht komt.

Dankzij useEffect (en de map method met wat conditional statements) worden er
steeds maar 10 posts per pagina weergeven (anders was de laadtijd wel erg lang).
Hiervoor heb ik een pageNumber state variabele aangemaakt! Elke keer als deze verandert, 
rendert de pagina opnieuw 10 posts.

De 10 posts worden stuk voor stuk op de pagina geinjecteerd door de map methode aan te roepen
op de state variabele waar de data (objecten) in staan opgeslagen.
In de map methode wordt er ook steeds een NavLink aangemaakt met een unieke id.

Deze unieke id hoort bij 1 object en komt uit de database.
Wanneer je op de link klikt en je naar de Subreddit pagina navigeert, wordt dit id opgeslagen d.m.v. useParams().
De opgehaalde database in de useState variabele wordt ook meegestuurd via een property naar de andere pagina.
Hier wordt gebruik gemaakt van de find method om te zoeken welk object-id overeenkomt
met de id van de useParameter(), hiervoor gebruik je uiteraard de in de property meegestuurde stateVariabele
(hier roep je namelijk de find method op aan).
Wanneer deze gevonden is wordt dit object in een variabele gestopt.
Dit object wordt weer gebruikt voor een api call naar een andere upi endpoint.
Met dit object haal je dus verder gedetailleerde data van het object op d.m.v. een api.
Uit de opgehaalde data van het nieuwe endpoint wordt de informatie pagina opgebouwd.
Met useHistory() kan je op de ga terug knop drukken om terug te gaan naar de homepagina.
Je kan er ook voor kiezen naar de reddit pagina zelf toe te gaan!

Ook kun je direct via home naar een reddit pagina toe navigeren dit doe je door op go to reddit page te klikken.

INSTALLATIE GUIDE:
Als het goed is staan alle dependencies in de package json en kunnen ze worden geïnstalleerd met.
- Npm install
Er wordt gebruik gemaakt van axios om data uit de database te fetchen en van react-router-dome@5.2.0

![img_1.png](img_1.png)

![img.png](img.png)

![img_2.png](img_2.png)

![img_3.png](img_3.png)
