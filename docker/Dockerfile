FROM node:carbon

# 创建 app 目录
WORKDIR /app

# 安装 nodemon 以实现热更新
# RUN npm install -g nodemon

# 安装 app 依赖
# 使用通配符确保 package.json 与 package-lock.json 复制到需要的地方。（npm 版本 5 以上）COPY package*.json ./

# 打包 app 源码
COPY . /app
VOLUME /app


RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "serve" ]

