FROM nginx:1.16.0-alpine

COPY ./dist/angularfront /usr/share/nginx/html

RUN ls /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]