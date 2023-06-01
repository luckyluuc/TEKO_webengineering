# Notizen Deployment
## Statisches Hosting
GitHub Pages

Neues Repo erstellen
luckyluuc/luckyluuc.github.io



``` shell
cd WebstormProjects
ls -al
mkdir hosting_example
cd hosting_example
git clone https://github.com/luckyluuc/luckyluuc.github.io
cd luckyluuc.github.io
echo "Hello World" > index.html
git add --all
git commit -m "Initial commit"
git push -u origin main
```
Für push wird Username und PW verlangt, PW funktioniert aber nicht, man muss einen  Personal Access Token eingeben.

> remote: Support for password authentication was removed on August 13, 2021. <br>
> remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication. <br>
> fatal: Authentication failed for 'https://github.com/luckyluuc/luckyluuc.github.io/'

Infos dazu: <br>
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token

Anschliessend, wenn der push erfolgreich war, wird hier "Hello World" angezeigt: <br>
https://luckyluuc.github.io

## Docker / Docker compose
1. Docker herunterladen und installieren [Docker Desktop](https://www.docker.com/)
2. Neuen Folder anlegen (bspw. docker_example)
3. Anzuzeigender Inhalt erstellen (bspw. docker_example/index.html)
4. Ein neues Dockerfile erstellen im Rootpfad (bspw. docker_example/Dockerfile) <br>
Folgenden Inhalt ins Dockerfile schreiben: <br>
```Dockerfile
FROM nginx:latest

COPY . /usr/share/nginx/html

RUN chmod g+rx -R /usr/share/nginx/html
```
5. via Terminal in docker_example folder wechseln um Container-Image zu builden starten
``` shell
docker build . --tag webeengineering
docker run --name webenengineering --detach --publish 80:80 webengineering
```
6. auf localhost (so im Browser eingeben) wird der Inhalt nun angezeigt

### Docker compose
1. Container stoppen und löschen
``` shell
docker stop webengineering
docker rm webengineering
```
2. Im Rootpfad ein docker-compose.yml-File erstellen und mit nachstehendem Inhalt befüllen: <br>
```` yaml
version: "1"
services:
  web:
    build: .
    container_name: webengineering
    restart: always
    ports:
      - "80:80"
````
3. Image neu builden und starten (wenn schon gebuilded kann --build weggelassen werden)
```` shell
docker-compose up --build
````
4. Container stoppen mit CTRL+C