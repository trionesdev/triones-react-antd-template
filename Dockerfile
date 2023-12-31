FROM nginx:1.19.6-alpine
MAINTAINER "bane" <fengxiaotx@163.com>
ENV container docker
ENV TZ=Asia/Shanghai
RUN mkdir /data
RUN chmod 777 -R /data
RUN mkdir -p /workspace
RUN chmod 777 -R /workspace

ADD container /

WORKDIR /workspace

ADD ./build /workspace
CMD envsubst '$SERVER_PROXY_PASS' < "/workspace/app.conf.template" > "/etc/nginx/conf.d/app.conf" && nginx -g 'daemon off;'
EXPOSE 80 3000 3001 3002
