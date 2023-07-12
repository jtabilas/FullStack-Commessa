# Guida per l'avvio del progetto Commessa con Spring e React

## Prerequisiti
Assicurati di avere i seguenti strumenti installati nel tuo sistema:

- Java Development Kit (JDK) - versione 20
- Node.js - versione 12 o successiva
- Maven - versione 3.9.3

## Configurazione del progetto

1. Clona o scarica il repository del progetto Commessa sul tuo computer.

2. Modifica l'accesso al database nel file `application.properties` che si trova nella directory `commessa/src/main/resources`.

## Avvio del backend

1. Apri il terminale o il prompt dei comandi e posizionati nella directory principale del progetto Commessa eseguendo il seguente comando:
   ```
   cd /commessa/
   ```

2. Una volta all'interno della directory principale del progetto, esegui il seguente comando per compilare e avviare il backend utilizzando Maven:
   ```
   mvn clean install
   java -jar target/<war file name>
   ```
   Questo comando avvierà l'applicazione Spring backend sulla porta predefinita 8080.

## Avvio del frontend

1. Apri un nuovo terminale o prompt dei comandi e posizionati nella directory `commessa/src/ui-commessa` del progetto Commessa eseguendo il seguente comando:
   ```
   cd /commessa/src/ui-commessa
   ```

2. Una volta all'interno della directory `ui-commessa`, esegui il seguente comando per installare le dipendenze di Node.js:
   ```
   npm install
   ```

3. Dopo aver completato l'installazione delle dipendenze, esegui il seguente comando per avviare il server di sviluppo per il frontend:
   ```
   npm start
   ```
   Questo comando avvierà il server di sviluppo React sulla porta predefinita 3000.

## Utilizzo dell'applicazione

Una volta che sia il backend che il frontend sono stati avviati con successo, puoi accedere all'applicazione Commessa nel tuo browser visitando l'URL `http://localhost:3000`.
