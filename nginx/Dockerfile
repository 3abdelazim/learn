FROM nginx

RUN rm /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl /etc/ssl
COPY letsencrypt /etc/letsencrypt
