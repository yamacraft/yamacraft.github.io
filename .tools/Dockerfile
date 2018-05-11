FROM alpine:3.6

RUN apk update
RUN apk add --no-cache python3

WORKDIR app
CMD python3 -m http.server 8000