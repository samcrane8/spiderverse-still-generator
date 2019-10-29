FROM nginx:1.15.12-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /static
COPY static /static_files

CMD ["nginx", "-g", "daemon off;"]