package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/mi3765/my_portfolio/server/database"
)

type User struct {
	UserID   int    `json:"user_id"`
	UserName string `json:"user_name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func CreateUserHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var user database.User
	err := json.Unmarshal([]byte(request.Body), &user)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusRequest,
			Body:       "Invalid request data",
		}, nil
	}

	err = database.CreateUser(user)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to create user: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusCreated,
		Body:       "User created successfully",
	}, nil
}

func GetUserHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	userID := request.PathParameters["user_id"]

	user, err := database.GetUser(userID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to fetch user: %s¥n", err.Error()),
		}, nil
	}

	responseBody, err := json.Marshal(user)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to marshal reponse: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       string(responseBody),
	}, nil
}

func UpdateUserHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	userID := request.PathParameters["user_id"]
	var updatedUser database.User
	err := json.Unmarshal([]byte(request.Body), &updatedUser)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       "invalid request body",
		}, nil
	}

	err = database.UpdateUser(userID, updatedUser)
	if err != nil {
		return events.APIGaetwayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("failed to update user: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxtResponse{
		StatusCode: http.StatusOK,
		Body:       "User updated successfully",
	}, nil
}

func DeleteUserHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	userID := request.Parameters["user_id"]

	err := database.DeleteUser(userID)
	if err != nil {
		return events.APIGatewayProxtResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to delete user: %s¥n", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       "User deleted successfully",
	}, nil
}
