 /**
 * @apiDescription
 * api url 使用 json 檔案中的url,使用 / 表示
 * 
 */

 /** 
 * @apiDefine ReturnDataInfo
 * @apiSuccess (回傳參數說明) {Integer} code 成功 = 1,失敗請參考失敗回傳
 * @apiSuccess (回傳參數說明) {String} data 成功資料內容(失敗不會有此參數)
 * @apiSuccess (回傳參數說明) {String} msg 失敗訊息(成功不會有此參數)
 * 
 */

/**
 * @api {POST} / getMember獲取會員資料
 * @apiName getMember
 * @apiGroup Use apiDefine apiUse
 * @apiVersion 1.0.0
 * 
 * @apiParam {Integer} AAA 參數解說
 * @apiParam {String} BBB 參數解說
 *
 * @apiUse ReturnDataInfo
 *
 * @apiSuccessExample {json} 成功回傳
 * {"code":"1","data":[{"id":"10532","title":"title","img":"test.png","video":"test.mp3","status":"1","hdd":"/","series":"201912090001","updated_at":"2019-12-09 11:25:11"}]}
 *  
 * @apiErrorExample {json} 失敗回傳
 * {"code":-1,"msg":" something error "}
 * {"code":-2,"msg":" account or token error "}
 * 
 *
 */

 /**
 * @api {POST} / 分類1-1標題名稱
 * @apiName 分類1-1項目名稱
 * @apiGroup One
 * @apiVersion 1.0.0
 * 
 * @apiParam {Integer} AAA 參數解說
 * @apiParam {String} BBB 參數解說
 *
 * @apiSuccess (回傳參數說明) {Integer} code 處理狀態
 * @apiSuccess (回傳參數說明) {String} msg 回傳訊息
 * @apiSuccess (回傳參數說明) {String} data 回傳內容
 *
 * @apiSuccessExample {json} 成功回傳範例
 * {"img_url":[{"img_url":"https://test"}],"film_url":[{"film_url":"https://test"}]}
 * 
 * @apiErrorExample {json} 失敗回傳範例
 * {"code":-1,"msg":" something error "}
 *
 */

/**
 * @api {GET} / 分類1-2標題名稱
 * @apiName 分類1-2項目名稱
 * @apiGroup One
 * @apiVersion 1.0.0
 *
 * @apiParam {Integer} AAA 參數解說
 * @apiParam {String} BBB 參數解說
 *
 * @apiSuccess (回傳參數說明) {Integer} code 處理狀態
 * @apiSuccess (回傳參數說明) {String} msg 回傳訊息
 * @apiSuccess (回傳參數說明) {String} data 回傳內容
 *
 * @apiSuccessExample {json} 成功回傳範例
 * {"img_url":[{"img_url":"https://test"}],"film_url":[{"film_url":"https://test"}]}
 * 
 * @apiErrorExample {json} 失敗回傳範例
 * {"code":-1,"msg":" something error "}
 *
 */

/**
 * @api {POST} / 分類1-1標題名稱 
 * @apiName 分類1-1項目名稱
 * @apiGroup TWO
 * @apiVersion 1.0.0
 *
 * @apiParam {Integer} AAA 參數解說
 * @apiParam {String} BBB 參數解說
 *
 * @apiSuccess (回傳參數說明) {Integer} code 處理狀態
 * @apiSuccess (回傳參數說明) {String} msg 回傳訊息
 * @apiSuccess (回傳參數說明) {String} data 回傳內容
 *
 * @apiSuccessExample {json} 成功回傳範例
 * {"img_url":[{"img_url":"https://test"}],"film_url":[{"film_url":"https://test"}]}
 * 
 * @apiErrorExample {json} 失敗回傳範例
 * {"code":-1,"msg":" something error "}
 *
 */
