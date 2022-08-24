FROM alpine
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn \
      bash \
      ffmpeg \
      chromium \
      imagemagick \
      ffmpeg \
      libwebp \
      libwebp-tools
RUN apk add npm
WORKDIR /app
COPY ./ ./
CMD ["node", "."]
