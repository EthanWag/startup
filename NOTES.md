# How to get an online certificate using AWS for webpages
  In order to get a certificate it's relatively simple. If you ssh into your website using (command below) you can navigate to your Caddyfile and update your certificate there. In order to do so, you will need to already have a DNS but once you do just replace all "domainnamehere"
   with your current DNS and save the file. Finally in order to push updates be sure to use the command "sudo service caddy restart" which pushes all changes
  - ssh -i "your private key here" ubuntu@"Ip address here" 
