Metaforične razširitve
======================

Pri implementaciji smo uporabili naslednje ključne knjižnice:

* [tracking.js](https://trackingjs.com/) - zaznavanje in kadriranje obraza
* [Image Picker](http://rvera.github.com/image-picker) - izbira tapiserij
* [MediaStreamRecorder.js ](https://github.com/streamproc/MediaStreamRecorder) - snemanje zvoka
* [imgAreaSelect](http://odyniec.net/projects/imgareaselect/) - izbira odseka dogajanja


###Struktura projekta

* server - koda za shranjevanje audio datotek in zapis v podatkovno bazo, nastavitve za podatkovno bazo (naslov, uporabniško ime, geslo)
* js - koda za nalaganje in uporabo knjižnic, najpomembnejše faceTracking.js, audioRecorder.js in selectImageExceprt.js.

Vsak .html dokument ima pripadajočo .js skripto. Po korakih aplikacije si dokumenti sledijo v naslednjem zaporedju:

* index - faceTrackijg.js
* introcudction - intrduction.js
* tapiserijaPick - /jquery.imgareaselect-0.9.10/scripts/jquery.imgareaselect.js, selectTapiserije.js, image-picker/image-picker.js
* excerptPick - selectImageExcerpt.js
* excerptNameRecord - excerptNameRecord.js
* excerptNamingPlaylist- excerptNamingPlaylist.js

###Uporaba aplikacije
Uporabnik na vstopni strani klikne na gumb Start audio, ob kliku katerega se odpre dialog za izbiro mikrofona. Po izbiri
audio vhoda uporabnik klikne na gumb Start video s katerim izbere video vhod. Po izbiri video vhoda se prikaže video stream
ob katerem se zažene tudi zaznava obraza. Po uspešni zaznavi se uproabniku prikaže predstavitev projekta. V naslednjem koraku
uporabnik izbere dve tapiseriji z mitološkim ozadjem. Po potrditvi izbire uporabnik vstopi v korak
v katerem mora izbrati dva odsega dogajanja in izbrati konfliktno ali razrešitveno relacijo. V naslednjem koraku protokol zahteva poimenovanje
izbrane relacije. Na tem koraku se audio datoteka, slika uporabnika in izbrana odseka dogajanja shranijo na strežnik v datoteko **razresitve_uploads**,
predpona imena shranjenih datotek in čas pa se shranijo v podatkovno bazo.


###Struktura baze
Pri implementaciji smo uporabili MySQL bazo. Izvorna koda, ki vpisuje v bazo se nahaja v **server/database_insert.php**.
Skripta **js/audioRecorder.js** vsebuje izvorno kodo, ki kliče funkcije za shranjevanje datotek in pisanje v podatkovno bazo.
Nastavitve uporabniškega imena, gesla, ime strežnika in ime tabele so zapisane v **server/database_credentials.php**.
Tabela (aktivnost_r) za metaforične razširitve vsebuje naslednja stolpca:

* cas - datetime
* predpona - varchar(250)

###Predvajanje obstoječih zapisov - Galerija
V zadnjem koraku aplikacije se izvede koda skripte **js/excerptNamingPlaylist.js**, ki kliče **server/get_list.php** s katerim se pridobi
seznam shranjenih datotek. Predponi imena datoteke, ki se prebere iz podatkovne baze, pripnemo
**_user** in dobimo popolno ime datoteke - slike uporabika, ki je shranjena v datoteki **razsiritve_uploads**. Sama predpona
se uporabi za branje audio datoteke - izjava uporabika. Izbrana odseka dobimo tako, da predponi dodamo **_left** oziroma **_right**. 
Slika uporabika skupaj z izbranimi odseki se prikaže na pogledu do prikaza naslednjega vnosa.

###Namestitev
Pri implementaciji projekta smo si pomagali s paketom [XAMPP - strežnik Apache in PHP](https://www.apachefriends.org/index.html).
Celoten projekt, vsebino datoteke **ioi-razsiritve_base-master** skopiramo v novo ustvarjeno datoteko (v nadaljevanju **razsiritve**), ki se nahaja v **C:\xampp\htdocs** (Windows). 
Poleg tega pa potrebujemo datoteko v katero se bodo shranjevale slike in audio posnetki uporabnikov. Za ta namen v **C:\xampp\htdocs** ustvarimo
datoteko **razsiritve_uploads**. Ob zagonu strežnika je aplikacija dosegljiva na naslovu **http://localhost:8080/razsiritve/** (zadnji del naslova predstavlja 
predhodno ustvarjeno datoteko v katero smo kopirali vsebino projekta). V primeru drugačne strukture datotek, je potrebno ustrezno popraviti 
strukturo v datoteki **server/save.php** in **server/upload_images.php**.


###Uporabljene predloge:

* [Start Bootstrap](http://startbootstrap.com/) - [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/)
* [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/) is a basic one page template for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).
