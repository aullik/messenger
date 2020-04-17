FROM node:13.13.0 as build-stage
WORKDIR /app
COPY patch.js package.json yarn.lock ./
ENV PATH="./node_modules/.bin:$PATH"
RUN yarn install
COPY . ./
RUN ng build --prod

FROM nginx:1.17
COPY --from=build-stage /app/dist/social/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
