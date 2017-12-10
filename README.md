# nowa-i18n

[![NPM version](https://img.shields.io/npm/v/nowa-i18n.svg?style=flat)](https://npmjs.org/package/nowa-i18n)
[![Build Status](https://travis-ci.org/mosikoo/nowa-i18n.svg?branch=master)](https://travis-ci.org/mosikoo/nowa-i18n)

根据zh-cn.js自动生成翻译excel文档及生成en.js

---

## Feature

- 根据zh-cn.js自动生成翻译excel文档及生成en.js

## Install

```bash
$ npm i nowa -g
$ nowa install i18n
```

## Usage

```bash
$ nowa i18n --help
```

### 遍历执行目录下的i18n文件夹，整理其目录下的zh-cn.js内容生成i18n.xlsx
格式: `nowa i18n excel filepath`

```
nowa i18n excel ./
```

![excel](https://github.com/mosikoo/blog/blob/master/assets/nowa-excel-min.gif?raw=true)

### 根据翻译文档自动在相应的路径下自动生成「en.js」文件

格式：`nowa i18n json xxx.xlsx`
如：

```
nowa i18n json i18n.xlsx
```
![json](https://github.com/mosikoo/blog/blob/master/assets/json-min.gif?raw=true)

### 大致使用流程
- 在项目中建立各个i18n文件夹，及其目录下的zh-cn.js，完善里面的key值及中文填写
- 在项目的根目录下执行`nowa i18n excel ./`生成`i18n.excel`文档
- 将`i18n.excel`将给翻译小组翻译写入相应的英文(excel文档下可能有多个sheets，提醒翻译小组别漏译)
- 对翻译过的`i18n.excel`执行命令, `nowa i18n json i18n.excel`

## CHANGE_LOG
- 1.0.1 兼容window
- 1.0.3 同时存在`zh-cn.js`与`en.js`的情况下，生成的excel文档会带有`en.js`中的`value`（key值依旧以`zh-cn.js`为准）
- 1.0.4 生成`en.js`中双引改为单引号
- 1.0.6 fix: 将引号进行转义
