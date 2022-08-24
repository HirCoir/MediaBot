FROM alpine

RUN apk add --no-cache \
      chromium \
      nodejs \
      yarn \
      bash \
      git \
      python3 \
      py-pip

RUN apk add npm
WORKDIR /app

COPY ./ ./
RUN npm install
CMD ["npm", "start"]
