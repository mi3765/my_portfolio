package main

import (
	"net/http"

	"github.com/mi3765/server/database"
	"github.com/mi3765/server/handlers"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	database.InitDynamoDB()

	lambda.Start(handlers.userHandler)
	lambda.Start(handlers.CreatePostWorkHandler)
	lambda.Start(handlers.CreatePostArticleHandler)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
