FROM node:latest as build-stage
WORKDIR /app
COPY patch.js package.json ./
#ENV PATH="./node_modules/.bin:$PATH"
RUN yarn install
COPY . ./
RUN yarn ng build --prod

FROM nginx:1.17
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist/social/ /usr/share/nginx/html/
COPY nginx-custom.conf /etc/nginx/nginx.conf
RUN echo "mainFileName=\"\$(ls /usr/share/nginx/html/main*.js)\" && \
      envsubst '\$ENABLE_AUTH \$ISSUER_URL \$REDIR_URL \$CLIENT_ID \$DB_URL' < \${mainFileName} > main.tmp && \
    mv main.tmp  \${mainFileName} && nginx -g 'daemon off;'" > run.sh
ENTRYPOINT ["sh", "run.sh"]
