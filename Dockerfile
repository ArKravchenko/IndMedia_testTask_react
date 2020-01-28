FROM node

#COPY ["./vue/indmediaVueApp","vars/vue"]
COPY ["./react/","vars/react"]

#COPY ["./vue/indmediaVueApp/.env","vars/vue/.env"]

#WORKDIR ./vars/vue/
#RUN yarn install

WORKDIR ./vars/react/
RUN yarn install

#RUN mkdir /build
#EXPOSE 8080
#RUN cd /build
#RUN mkdir /outter

#VOLUME /vars/razzle-test/outter

#ARG RAZZLE_API_URL
#WORKDIR vars/razzle-test

#RUN yarn build

#CMD echo server started && cp -r -n build/public/ outter && yarn start:prod

CMD  yarn serve-wp && echo react started 
#CMD yarn serve && echo vue started
