FROM node:18-alpine as build
WORKDIR /frontend
RUN npm install -g @angular/cli@14
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginnx/conf.d/default.conf
COPY --from=build /frontend/dist/pizza-lib /usr/share/nginx/html
EXPOSE 9090

#EXPOSE 4200
#CMD echo "N" | ng serve --host 0.0.0.0 --port 4200
