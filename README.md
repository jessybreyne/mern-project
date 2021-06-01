# mern-project

Réseau social en React JS, MongoDB et NodeJS.

Configuration : Créer un fichier /config/.env avec dedans:
```
PORT=5000
DB_USER_PASS=login:passmongo
TOKEN_SECRET=secretoken
CLIENT_URL=http://localhost:3000
```

npm start à la racine pour lancer nodejs
npm start dans le dossier client pour lancer la vue ReactJS

Attention, la sécurité est mal gérée dans le projet, il faut par exemple vérifier l'authentification de l'utilisateur avant de faire certaines actions.

Réalisé en suivant les vidéos de la chaine youtube Fromscratch.
