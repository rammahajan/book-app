FROM node:12

COPY package.json /tmp/package.json

RUN cd /tmp && npm install -ddd && npm prune -ddd && npm dedupe -ddd
RUN mkdir -p /opt/app-root && cp -a /tmp/node_modules /opt/app-root/ && rm -rf /tmp/node_modules

WORKDIR /opt/app-root/
COPY . /opt/app-root

RUN npm run build

EXPOSE 8000
CMD ["node", "build/index.js"]
