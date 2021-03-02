

### 1.使用node.js安裝docapi
```
mpm install apidoc -g
```

### 2.資料夾(docapiAdress)內建立 apidoc.json 檔以及內容編寫的 apidoc.js
 * apidoc.json - 敘述/設置 (如下說明,詳細參考官網Settings for apidoc.json
)
```
{
  "name": "demo", 
  "version": "1.0.0",  //檔案最新版號
  "description": "這是一個簡單的apidoc的demo <br> ",
  "title": "demo",
  "url" : "http://commonurl",  //api url的前綴（端點）
  "template":{
    "withGenerator":false  //footer不要顯示編輯器內容
  }
}
```
 * apidoc.js - 模板內容

### 3.編譯生成檔案
 * i：選擇程式碼所在的目錄位置(docapiAdress)
 * o：選擇生成的目標檔案所在的位置(編譯後放docapiAdress/doc/)
```
apidoc -i docapiAdress/ -o docapiAdress/doc/
```

### 4.轉markdown (不是很完美)
 4-1. 安裝生成markdown文件的工具
 ```
  npm install  apidoc-markdown -g
 ```
 4-2. 導出Markdown文档
  * -p apidoc生成的檔案目錄
  * -o 指定输出的markdown文件目錄(包含文件名)
  * 注意目前路徑位置
 ```
  apidoc-markdown -p doc -o mk/markdown_name.md
 ```

### 參考網站
> 官方網站 : <br>
> https://apidocjs.com/#param-api-description

> 建立參考 : <br>
>https://medium.com/thinking-encode/apidoc-%E8%8F%9C%E9%B3%A5%E6%95%99%E5%AD%B8-6eb0207e26a3

> 轉markdown參考 : <br>
>https://www.jianshu.com/p/16ecf8a408e8
 

