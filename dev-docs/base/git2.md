# Git

你此前做过的项目一定要用过 Git，而且必须是命令行，如果没用过，你自己也得恶补一下。对 Git 的基本应用比较熟悉的同学，可以跳过这一部分了。macOS 自带 Git，Windows 需要安装 Git 客户端，去 Git 官网 下载即可。

国内比较好的 Git 服务商有 coding.net，国外有大名鼎鼎的 GitHub，但是有时会有网络问题，因此建议大家注册一个 coding.net 账号然后创建项目，来练练手。

> 题目：常用的 Git 命令有哪些？如何使用 Git 多人协作开发？

## 常用的 Git 命令

首先，通过git clone <项目远程地址>下载下来最新的代码，例如git clone git@git.coding.net:username/project-name.git，默认会下载master分支。

然后修改代码，修改过程中可以通过git status看到自己的修改情况，通过git diff <文件名>可查阅单个文件的差异。

最后，将修改的内容提交到远程服务器，做如下操作

```
git add .
git commit -m "xxx"
git push origin master
```

如果别人也提交了代码，你想同步别人提交的内容，执行git pull origin master即可。

## 如何多人协作开发

多人协作开发，就不能使用master分支了，而是要每个开发者单独拉一个分支，使用git checkout -b branchname，运行git branch可以看到本地所有的分支名称。

自己的分支，如果想同步master分支的内容，可运行git merge master。切换分支可使用git checkout branchname。

在自己的分支上修改了内容，可以将自己的分支提交到远程服务器

```
git add .
git commit -m "xxx"
git push origin <branchname>
```

最后，待代码测试没问题，再将自己分支的内容合并到master分支，然后提交到远程服务器。

```
git checkout master
git merge <branchname>
git push origin master
```

## 关于 SVN

关于 SVN 笔者的态度和针对 IE 低版本浏览器的态度一样，你只需要查询资料简单了解一下。面试的时候可能会问到，但你只要熟悉了 Git 的操作，面试官不会因为你不熟悉 SVN 而难为你。前提是你要知道一点 SVN 的基本命令，自己上网一查就行。

不过 SVN 和 Git 的区别你得了解。SVN 是每一步操作都离不开服务器，创建分支、提交代码都需要连接服务器。而 Git 就不一样了，你可以在本地创建分支、提交代码，最后再一起 push 到服务器上。因此，Git 拥有 SVN 的所有功能，但是却比 SVN 强大得多。（Git 是 Linux 的创始人 Linus 发明的东西，因此也倍得推崇。）

## 参考网址
[掘进小册]()