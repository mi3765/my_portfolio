package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/mi3765/server/database" // データベース操作のパッケージをインポート

	"github.com/aws/aws-lambda-go/events"
)

type PostWork struct {
	WorkID      int      `json:"work_id"`
	UserID      int      `json:"user_id"`
	WorkTitle   string   `json:"work_title"`
	WorkTags    []string `json:"work_tags"`
	WorkImages  []string `json:"work_images"`
	WorkPeriod  string   `json:"work_period"`
	WorkMessage string   `json:"work_message"`
	PostDate    string   `json:"post_date"`
}

func CreatePostWorkHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var postWork database.PostWork
	err := json.Unmarshal([]byte(request.Body), &postWork)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Invalid request data",
		}, nil
	}

	err = database.CreatePostWork(postWork)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to create post: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusCreated,
		Body:       "Work created successfully",
	}, nil
}

func GetPostWorkHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	workID := request.PathParameters["work_id"]

	postWork, err := database.GetPostWork(workID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: httpStatusInternalServerError,
			Body:       fmt.Sprintf("Failed to fetch work: %s¥n", err.Error()),
		}, nil
	}

	responseBody, err := json.Marshal(postWork)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to marshal response: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       string(responseBody),
	}, nil
}

func UpdatePostWorkHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	workID := request.PathParameters["work_id"]
	var updatedPostWork database.PostWork
	err := json.Unmarshal([]byte(request.Body), &updatedPostWork)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Invalid request data",
		}, nil
	}

	err = database.UpdatePostWork(workID, updatedPostWork)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCide: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to update work: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       "Work updated successfully",
	}, nil

}

func DeletePostWorkHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	workID := request.PathParameters["work_id"]

	err := database.DeletePostWork(workID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to delete work: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       "Work deleted successfully",
	}, nil
}
