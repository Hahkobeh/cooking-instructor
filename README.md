# [Access the website here!](https://cooking-instructor.vercel.app/)

Note: Please use Google Chrome when accessing the site link or running it locally.

# About

This is our cooking instructor application, it is aimed at helping prospective chefs learn to cook.

It has been built for CPSC 481: Human computer Interations @ University of Calgary

## Authors

Jacob Artuso\
Calder Sloman\
Achraf Abdelrhafour\
Colton Nguyen\
Mohammad Fahd

## Running Locally

### Requirements

[NodeJS](https://nodejs.org/en)\
Recommended Version: v20.10.0

### How to run locally

Clone Git repository

```
$ git clone git@github.com:Hahkobeh/cooking-instructor.git
```

Download dependancies

```
npm i
```

Run development Environment

```
npm run dev
```

Create an account using the register functionality or use an existing account.

A sample account to use:

```
Username: Jacob
Password: 123
```

### Potential debug

If you register a new user or change an existing user's information, the log out functionality will work and you will be able to log back in with the same username, password, and data. But if you refresh the page any new user data will be wiped.

This application makes use of localStorage, so if an issue arises you may need to clear your cache for this website.
