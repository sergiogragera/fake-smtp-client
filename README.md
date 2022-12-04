# Fake SMTP Angular Client

*Simple SMTP Client which manage emails received in Fake SMTP Server*

## Introduction

This is a simple Angular client of [Fake SMTP Server](https://github.com/gessnerfl/fake-smtp-server).

# Running Fake SMTP Server locally

**Note:** You need Node 14 installed to run Fake SMTP Client. 

## Run SMTP Server

Run dockerized SMTP Server image
   
```
docker-compose up -d
```

## Run SMTP Client from sources

In order to run this application locally from sources, execute:

    yarn start

Afterwards, the web interface is be availabe under http://localhost:4200.
