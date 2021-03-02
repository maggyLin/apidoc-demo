<a name="top"></a>
# demo v1.0.0

這是一個簡單的apidoc的demo &lt;br&gt; 

 - [One](#One)
   - [分類1-1標題名稱](#分類1-1標題名稱)
   - [分類1-2標題名稱](#分類1-2標題名稱)
 - [TWO](#TWO)
   - [分類1-1標題名稱](#分類1-1標題名稱)
 - [Use_apiDefine_apiUse](#Use_apiDefine_apiUse)
   - [getMember獲取會員資料](#getMember獲取會員資料)

___


# <a name='One'></a> One

## <a name='分類1-1標題名稱'></a> 分類1-1標題名稱
[Back to top](#top)

```
POST /
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| AAA | `Integer` | <p>參數解說</p> |
| BBB | `String` | <p>參數解說</p> |

### Success response

#### Success response - `回傳參數說明`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| code | `Integer` | <p>處理狀態</p> |
| msg | `String` | <p>回傳訊息</p> |
| data | `String` | <p>回傳內容</p> |

### Success response example

#### Success response example - `成功回傳範例`

```json
{"img_url":[{"img_url":"https://test"}],"film_url":[{"film_url":"https://test"}]}
```

### Error response example

#### Error response example - `失敗回傳範例`

```json
{"code":-1,"msg":" something error "}
```

## <a name='分類1-2標題名稱'></a> 分類1-2標題名稱
[Back to top](#top)

```
GET /
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| AAA | `Integer` | <p>參數解說</p> |
| BBB | `String` | <p>參數解說</p> |

### Success response

#### Success response - `回傳參數說明`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| code | `Integer` | <p>處理狀態</p> |
| msg | `String` | <p>回傳訊息</p> |
| data | `String` | <p>回傳內容</p> |

### Success response example

#### Success response example - `成功回傳範例`

```json
{"img_url":[{"img_url":"https://test"}],"film_url":[{"film_url":"https://test"}]}
```

### Error response example

#### Error response example - `失敗回傳範例`

```json
{"code":-1,"msg":" something error "}
```

# <a name='TWO'></a> TWO

## <a name='分類1-1標題名稱'></a> 分類1-1標題名稱
[Back to top](#top)

```
POST /
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| AAA | `Integer` | <p>參數解說</p> |
| BBB | `String` | <p>參數解說</p> |

### Success response

#### Success response - `回傳參數說明`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| code | `Integer` | <p>處理狀態</p> |
| msg | `String` | <p>回傳訊息</p> |
| data | `String` | <p>回傳內容</p> |

### Success response example

#### Success response example - `成功回傳範例`

```json
{"img_url":[{"img_url":"https://test"}],"film_url":[{"film_url":"https://test"}]}
```

### Error response example

#### Error response example - `失敗回傳範例`

```json
{"code":-1,"msg":" something error "}
```

# <a name='Use_apiDefine_apiUse'></a> Use_apiDefine_apiUse

## <a name='getMember獲取會員資料'></a> getMember獲取會員資料
[Back to top](#top)

```
POST /
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| AAA | `Integer` | <p>參數解說</p> |
| BBB | `String` | <p>參數解說</p> |

### Success response

#### Success response - `回傳參數說明`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| code | `Integer` | <p>成功 = 1,失敗請參考失敗回傳</p> |
| data | `String` | <p>成功資料內容(失敗不會有此參數)</p> |
| msg | `String` | <p>失敗訊息(成功不會有此參數)</p> |

### Success response example

#### Success response example - `成功回傳`

```json
{"code":"1","data":[{"id":"10532","title":"title","img":"test.png","video":"test.mp3","status":"1","hdd":"/","series":"201912090001","updated_at":"2019-12-09 11:25:11"}]}
```

### Error response example

#### Error response example - `失敗回傳`

```json
{"code":-1,"msg":" something error "}
{"code":-2,"msg":" account or token error "}
```
