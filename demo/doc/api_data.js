define({ "api": [
  {
    "description": "<p>api url 使用 json 檔案中的url,使用 / 表示</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./api.js",
    "group": "C__xampp_htdocs_111_pratice_apidoc_test_demo_api_js",
    "groupTitle": "C__xampp_htdocs_111_pratice_apidoc_test_demo_api_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__xampp_htdocs_111_pratice_apidoc_test_demo_doc_main_js",
    "groupTitle": "C__xampp_htdocs_111_pratice_apidoc_test_demo_doc_main_js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/",
    "title": "分類1-1標題名稱",
    "name": "__1_1____",
    "group": "One",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "AAA",
            "description": "<p>參數解說</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BBB",
            "description": "<p>參數解說</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "回傳參數說明": [
          {
            "group": "回傳參數說明",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>處理狀態</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>回傳內容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回傳範例",
          "content": "{\"img_url\":[{\"img_url\":\"https://test\"}],\"film_url\":[{\"film_url\":\"https://test\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失敗回傳範例",
          "content": "{\"code\":-1,\"msg\":\" something error \"}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.js",
    "groupTitle": "One"
  },
  {
    "type": "GET",
    "url": "/",
    "title": "分類1-2標題名稱",
    "name": "__1_2____",
    "group": "One",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "AAA",
            "description": "<p>參數解說</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BBB",
            "description": "<p>參數解說</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "回傳參數說明": [
          {
            "group": "回傳參數說明",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>處理狀態</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>回傳內容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回傳範例",
          "content": "{\"img_url\":[{\"img_url\":\"https://test\"}],\"film_url\":[{\"film_url\":\"https://test\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失敗回傳範例",
          "content": "{\"code\":-1,\"msg\":\" something error \"}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.js",
    "groupTitle": "One"
  },
  {
    "type": "POST",
    "url": "/",
    "title": "分類1-1標題名稱",
    "name": "__1_1____",
    "group": "TWO",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "AAA",
            "description": "<p>參數解說</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BBB",
            "description": "<p>參數解說</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "回傳參數說明": [
          {
            "group": "回傳參數說明",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>處理狀態</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>回傳訊息</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>回傳內容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回傳範例",
          "content": "{\"img_url\":[{\"img_url\":\"https://test\"}],\"film_url\":[{\"film_url\":\"https://test\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失敗回傳範例",
          "content": "{\"code\":-1,\"msg\":\" something error \"}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.js",
    "groupTitle": "TWO"
  },
  {
    "type": "POST",
    "url": "/",
    "title": "getMember獲取會員資料",
    "name": "getMember",
    "group": "Use_apiDefine_apiUse",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "AAA",
            "description": "<p>參數解說</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BBB",
            "description": "<p>參數解說</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回傳",
          "content": "{\"code\":\"1\",\"data\":[{\"id\":\"10532\",\"title\":\"title\",\"img\":\"test.png\",\"video\":\"test.mp3\",\"status\":\"1\",\"hdd\":\"/\",\"series\":\"201912090001\",\"updated_at\":\"2019-12-09 11:25:11\"}]}",
          "type": "json"
        }
      ],
      "fields": {
        "回傳參數說明": [
          {
            "group": "回傳參數說明",
            "type": "Integer",
            "optional": false,
            "field": "code",
            "description": "<p>成功 = 1,失敗請參考失敗回傳</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>成功資料內容(失敗不會有此參數)</p>"
          },
          {
            "group": "回傳參數說明",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>失敗訊息(成功不會有此參數)</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "失敗回傳",
          "content": "{\"code\":-1,\"msg\":\" something error \"}\n{\"code\":-2,\"msg\":\" account or token error \"}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.js",
    "groupTitle": "Use_apiDefine_apiUse"
  }
] });
