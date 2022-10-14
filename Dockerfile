FROM node:alpine as builder

WORKDIR /apps

COPY package.json .

RUN yarn install

RUN npm run build


FROM nginx
COPY --from=builder /apps/build /usr/share/nginx/html