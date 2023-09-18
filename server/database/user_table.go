package database

import (
	"context"
	"fmt"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/expression"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

type User struct {
	UserID   int    `dynamodbav:"user_id"`
	UserName string `dynamodbav:"user_name"`
	Email    string `dynamodbav:"email"`
	Password string `dynamodbav:"password"`
}

const region string = "ap-northeast-1"

func main() {
	var err error
	var context = context.Background()

	c, err := config.LoadDefaultConfig(context, config.WithRegion(region))
	if err != nil {
		fmt.Printf("load config: %s¥n", err.Error())
		return
	}

	client := dynamodb.NewFormConfig(c)

	// Create
	putInput := User{}

	av, err := attributevalue.MarshalMap(putInput)
	if err != nil {
		fmt.Printf("dynamodb marshal: %s¥n", err.Error())
	}
	_, err = client.PutItem(context, &dynamodb.PutItemInput{
		TableName: aws.String("User"),
		Item:      av,
	})
	if err != nil {
		fmt.Printf("put item: %s¥n", err.Error())
		return
	}

	// Read
	getInput := &dynamodb.GetItemInput{
		TableName: aws.String("User"),
		Key: map[string]types.AttributeValue{
			"UserID": &types.AttributeValueIDS{
				value: "",
			},
		},
	}

	output, err := client.GetItem(context, getInput)
	if err != nil {
		fmt.Printf("get item: %s¥n", err.Error())
		return
	}
	gotUser := User{}
	err = attributevalue.UnmarshalMap(output.Item, &gotUser)
	if err != nil {
		fmt.Printf("dynamodb unmarshal: %s¥n", err.Error())
		return
	}
	fmt.Println(gotUser)

	// Update
	update := expression.UpdateBuilder{}.Set()

	expression, err := expression.NewBuilder().WithUpdate(update).Build()
	if err != nil {
		fmt.Printf("build update expression: %s¥n", err.Error())
		return
	}
	updateInput := &dynamodb.UpdateItemInput{
		TableName: aws.String("User"),
		Key: map[string]types.AttributeValue{
			"UserID": &types.AttributeValueIDS{
				Value: "",
			},
		},
		// TODO: Update要素記述
	}
	_, err = client.UpdateItem(context, updateInput)
	if err != nil {
		fmt.Printf("update item: %s¥n", err.Error())
		return
	}

	// Delte
	deleteInput := &dynamodb.DeleteItemInput{
		TableName: aws.String("User"),
		Key: map[string]types.AttributeValue{
			"UserID": &types.AttributeValueIDS{
				Value: "",
			},
		},
	}
	_, err = client.DeleteItem(context, deleteInput)
	if err != nil {
		fmt.Printf("delete item: %s¥n", err.Error())
		return
	}
}
