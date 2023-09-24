package main

import (
	"net/http"

	"github.com/mi3765/server/database"
	"github.com/mi3765/server/handlers"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	database.InitDynamoDB()

	// HTTPサーバーのルーティング
	http.HandleFunc("/api/createuser", handlers.CreateUserHandler)
	http.HandleFunc("/api/getuser", handlers.GetUserHandler)
	http.HandleFunc("/api/updateuser", handlers.UpdateUserHandler)
	http.HandleFunc("/api/deleteuser", handlers.DeleteUserHandler)

	http.HandleFunc("/api/createpostwork", handlers.CreatePostWorkHandler)
	http.HandleFunc("/api/getpostwork", handlers.GetPostWorkHandler)
	http.HandleFunc("/api/updatepostwork", handlers.UpdatePostWorkHandler)
	http.HandleFunc("/api/deletepostwork", handlers.DeletePostWorkHandler)

	http.HandleFunc("/api/createpostarticle", handlers.CreatePostArticleHandler)
	http.HandleFunc("/api/getpostarticle", handlers.GetPostArticleHandler)
	http.HandleFunc("/api/updatepostarticle", handlers.UpdatePostArticleHandler)
	http.HandleFunc("/api/deletepostarticle", handlers.DeletePostArticleHandler)

	// Lambda関数を起動
	lambda.Start(lambdaHandler)
}

// Lambdaハンドラー
func lambdaHandler() {
	// Lambda関数の処理
}
