#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 本地仓库提交
git add -A
git commit -m 'deploy'

# 提交到远程仓库
git push

# 输出当前目录
cd -