# git 命令行

<img src="https://github.com/txs1992/mt-blog/blob/master/docs/images/git.png"></img>

## 目录
  1.  [本地库](##本地库)

  2.  [远程仓库](#远程仓库)

  3.  [分支管理](#分支管理)

      3.1 [创建与合并分支](#创建与合并分支)

      3.2 [解决冲突](#解决冲突)

  4.  [标签管理](#标签管理)

      4.1 [创建标签](#创建标签)

      4.2 [操作标签](#操作标签)

<br/>

## 本地库

>初始化一个 Git 版本库

    git init

>查看 Git 版本库状态

    git status

>查看被改动文件的详细信息

    git diff <fileName>

>将文件加入缓存区

    git add <fileName>

>提交到版本库

    git commit -m 'message'

>查看版本库操作日志

    git log

>格式显示版本库操作日志

    git log --pretty=oneline

>回滚（重置）版本库

    git reset --hard <版本号>

>**工作区（Woking Directory）**

    就是你在电脑里能看到的目录，或者说你当前 Git 版本库所在的文件夹

>**版本库（Repository）**

  工作区有一个隐藏的目录 .git,这个不算工作区,而是 Git 的版本库
  Git的版本库里存了很多东西，其中最重要的就是称为 `stage`(或者叫 `index`) 的暂存区，
  还有 Git 为我们自动创建的第一个分支 `master`，以及指向 `master` 的一个指针叫做 `HEAD`。

>撤销工作区修改

    git checkout -- <fileName>

>撤销暂存区修改

    git reset HEAD <fileName>

>删除文件

    git rm <fileName>

<br/>

## 远程仓库

>关联远程仓库

    git remote add origin git@github.com:<github地址>/<仓库名称>.git

>将内容推送的远程库

    git push -u origin <分支>
    git push origin <分支>

  第一次推送 `master` 分支时，加上了 `-u` 参数，Git 不但会把本地的 `master` 分支内容推送到远程新的 `master` 分支，
  还会把本地的 `master` 分支和远程的 `master` 分支关联起来，在以后的推送或者拉取时就可以简化命令。

>克隆远程库

    git clone git@github.com:<github地址>/<仓库名称>.git

<br/>

## 分支管理

### 创建与合并分支

>创建并切换分支

    git checkout -b <branchName>

>查看分支

    git branch

>切换分支

    git checkout <branchName>

>合并分支

    git merge <branchName>

>删除分支

    git branch -d <branchName>

### 解决冲突

>查看分支合并情况

    git log --graph --pertty=oneline --abbrev-commit

>储藏

    git stash

>查看储藏列表

    git stash list

>应用储藏

    git stash apply <stash@{xx}>

>删除储藏

    git stash drop <index | stash>

>应用并删除储藏

    git stash pop <index | stash>

>显示储藏信息

    git stash show <index | stash>

>查看远程库信息

    git remote

>查看远程库详细信息

    git remote -v

>推送分支

    git push origin <branchName>
<br/>

## 标签管理

### 创建标签

>创建标签

    git tag <name>

>查看标签

    git tag

>为commit id 添加标签

    git tag <commit id>

>查看标签信息

    git show <tagName>

>创建带有说明的标签

    git tag -a <tagName> -m 'your message'

### 操作标签

>删除标签

    git tag -d <tagName>


>推送标签到远程

    git push origin <tagName>

>推送所以标签

    git push origin --tags

>删除远程标签

  删除远程标签需，要先删除本地标签，然后再执行

    git push origin :refs/tags/<tagNameg>
