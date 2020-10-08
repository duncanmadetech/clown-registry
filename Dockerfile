FROM node:12.19.0-buster-slim
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN set -x \
    && addgroup --system --gid 101 app \
    && adduser --system --disabled-login --ingroup app --gecos "app user" --shell /bin/false --uid 101 app
COPY ./ .
RUN chown -R app:app /opt/app
USER app
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "pm2" ]
