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

## Docker


