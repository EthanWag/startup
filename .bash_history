yum -y install yum-plugin-copr
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
curl localhost
ln -s /etc/caddy/Caddyfile Caddyfile
ln -s /usr/share/caddy public_html
sudo chown -R ubuntu public_html
ll
cat public_html/
ll public_html/
sudo chown -R ubuntu public_html
ll
ll public_html/
sudo chown -R ubuntu /usr/share/caddy
ll public_html/
sudo chown ubuntu /etc/caddy/Caddyfile
ll
ll Caddyfile
curl 3.94.197.3
curl localhost
sudo service caddy status
sudo service caddy restart
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
exit
node -v
nvm -v
nvm install -g npm@latest
node -v
npm -v
nvm install --lts
node -v
npm -v
npm install -g npm@latest
npm -v
npm install pm2 -g
mkdir -p ~/services/simon ~/services/startup
cd ~/services/simon && npm install
cd ~/services/startup && npm install
curl localhost:4000
node index.js 4000 startup
curl localhost:4000/config
cd ~/services/simon && pm2 start index.js -n simon -- 3000 simon
cd ~/services/startup && pm2 start index.js -n startup -- 4000 startup
pm2 save
pm2 ls
pm2 startup
sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.16.0/bin /home/ubuntu/.nvm/versions/node/v18.16.0/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
pm2 ls
curl -v http://localhost:3000/config
curl -v http://localhost:4000/config
vi ~/Caddyfile
sudo service caddy restart
ls
exit
ls
ls -l
cd services
ls
cd ..
ls
cd public_html
ls
cat index.html
exit
ls
echo 'ligma balls'
exit
ls
cd Caddyfile
nano Caddyfile
ls
clear
nano Caddyfile
clear
ls
cp Caddyfile Caddyfile_backup
;s
ls
cd Caddyfile
nano Caddyfile
sudo service caddy restart
systemctl status caddy.service
nano Caddyfile
nano Caddyfile_backup
nano Caddyfile
sudo service caddy restart
nano Caddyfile
ls
cd public_html
ls
nano index.html
ls
cd ..
ls
mkdir backups
ls
cat Caddyfile_backup
ls
clear
nano Caddyfile
ls
rm Caddyfile_backup
ls
cp Caddyfile Caddyfile_backup
ls
cat Caddyfile_backup
clar
clear
ls
mv Caddyfile_backup
mv Caddyfile_backup backups
ls
clear
cd backups
ls
cd ..
ls
mkdir simon
ls
cd simon
ls
git clone https://github.com/webprogramming260/simon-html.git
ls
cd simon html
cd simon-html/
ls
clea
clear
exit
ls
cd services
ls
cd simon
ls
cd public
ls
cd ..
ls
cd .
ls
cd ..
ls
cd ..
ls
cd simon
ls
cd simon-html
ls
cat README.md
cd ..
ls
cd ..
ls
./deployFiles.sh -k -h buyzip.org -s simon
clear
ls
exit
;s
ls
simon
ls
cd simon
ls
cd simon-html/
ls
rm -r simon
ls
cd backups
ls
exit
ls
ubuntu@ip-172-25-38-222:~$ ps ax | grep node 772 ?
exit
ps ax | grep node l772
ls
cd services
ls
simon
cd simon
ls
cat index.js
ls
cd ..
ls
cd startup
ls
ssl index.js
ls
tree 
cd node_modules
ls
cd .
cd ..
ls
cd ..
ls
cd ..
ls
cd public_html
ls
exit
ls
exit
