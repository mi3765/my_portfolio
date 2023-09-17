package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/postArticle", postArticleHandler)
	http.ListenAndServe(":8080", nil)
}

func postArticleHandler(w http.ResponseWriter, r *http.Request) {
	// POSTリクエストの処理
	if r.Method == http.MethodPost {
		// リクエストのボディからデータを受け取る
		// ここでデータを処理し、必要なレスポンスを返す
		// 例: データベースに記事を保存し、成功メッセージを返す
		fmt.Fprintf(w, "記事が投稿されました")
	}
}
