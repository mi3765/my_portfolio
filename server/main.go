package main

import (
	"database"
	"handlers"
	"net/http"
)

func main() {
	database.InitDynamoDB()

	http.HandleFunc("/api/user", handlers.UserHandler)
	http.HandleFunc("api/post-article", handlers.PostArticleHandler)
	http.HandleFunc("api/post-work", handlers.postWorkHandler)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
