# Työaikakirjausjärjestelmä - Team Red

Projekti on toteutettu Haaga-Helian Ohjelmistoprojekti2 kurssilla.
Toteuttava tiimi: Sonja Helminen, Katja Jääskeläinen, Kristin Luik, Ulla Montonen ja Anton Rezin. 


## Sovelluksen tarkoitus

Sovelluksen tarkoitus on toimia työaikakirjausjärjestelmänä, esimerkiksi yksityisyrittäjille, joiden on pidettävä kirjaa tehdystä työstä ja sen kestosta. Käyttäjällä voi samanaikaisesti olla hallinnoitavana useita projekteja, joille voidaan kohdentaa omia työaikakirjauksia. Sovelluksessa käyttäjä voi kirjoittaa muistiinpanoja tehdystä työstä ja merkitä työn keston sekä päivämäärän. Lisäksi työtunnit voidaan laskea yhteen käyttäjän valitsemalta ajanjaksolta tai projektilta.


## Tärkeimmät ominaisuudet

Sovellus vaatii rekisteröitymisen. Rekisteröitynyt käyttäjä voi luoda projekteja ja tehdä projekteille työaikakirjauksia.

## Toteutusteknologiat
* Spring Boot 3.2.1
* Java 21.0.2
* React 18.2.0
* JavaScript
* Node 20.11.0

## Tietokanta

![työaikaseuranta](https://github.com/TeamRed-Ohjelmistoprojekti2/TimeManagement/assets/91193039/da0099c9-94fb-4109-b955-0dba29ac7042)

### Project / projekti

| Attribute     | Type                    | Description                    |
|:------------- |:------------------------|:-------------------------------|
| id (PK)       | Long /Integer           | Project id                     |
| title         | String / Varchar        | Projektin nimi                 |
| List<Entry>   | entries / OneToMany     | Projektiin liittyvät kirjaukset|

### Entry / työaikakirjaus

| Attribute       | Type                    | Description                    |
|:--------------- |:------------------------|:-------------------------------|
| enty_id (PK)    | Long / Integer          | Entry id                       |
| comment         | String / Varchar        | Kirjauksen kommentti           |
| entry_date      | LocalDate / Date        | Kirjauksen päivämäärä          |
| start_time      | LocalTime / Time        | Aloitusajankohta               |
| end_time        | LocalTime / Time        | Lopetusajankohta               |
| project_id (FK) | JoinColumn / ManyToONe  | Viittaus proejktiin            |
| appUser_id (FK) | JoinColumn / ManyToONe  | Viittaus käyttäjään            |

### AppUser / käyttäjä

| Attribute     | Type                    | Description                    |
|:------------- |:------------------------|:-------------------------------|
| id (PK)       | Long / Integer          | AppUser id                     |
| first_name    | String / Varchar        | Käyttäjän etunimi              |
| last_name     | String / Varchar        | Käyttäjän sukunimi             |
| email         | String / Varchar        | Käyttäjän sähköposti           |
| password_hash | String / Varchar        | Salasana hash muodossa         |
| List<Entry>   | entries / OneToMany     | Projektiin liittyvät kirjaukset|

## Api-dokumentaatio

* [Entry](api-docs/entry/)
* [Project](api-docs/project/)

## Backlogit

* [Sprint backlog](https://github.com/orgs/TeamRed-Ohjelmistoprojekti2/projects/3/views/2)
* [Product backlog](https://github.com/orgs/TeamRed-Ohjelmistoprojekti2/projects/3)
