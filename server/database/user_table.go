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

var client *dynamodb.Client

func init() {
	var err error
	var context = context.Background()

	c, err := config.LoadDefaultConfig(context, config.WithRegion(region))
	if err != nil {
		fmt.Printf("load config: %s¥n", err.Error())
		return
	}

	client = dynamodb.NewFormConfig(c)
}

func CreateUser() {
	putInputUser := User{}

	av, err := attributevalue.MarshalMap(putInputUser)
	if err != nil {
		fmt.Printf("dynamodb marshal: %s¥n", err.Error())
	}
	_, err = client.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("User"),
		Item:      av,
	})
	if err != nil {
		fmt.Printf("put item: %s¥n", err.Error())
		return
	}
}

func ReadUser() {
	getInputUser := &dynamodb.GetItemInput{
		TableName: aws.String("User"),
		Key: map[string]types.AttributeValue{
			"UserID": &types.AttributeValueIDS{
				value: "",
			},
		},
	}

	output, err := client.GetItem(context.TODO(), getInputUser)
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
}

func UpdateUser() {
	update := expression.UpdateBuilder{}.Set(
		expression.Name("UserName").Value("新しいタイトル"),
		expression.Name("UserID").Value("新しいメッセージ"),
	)

	expr, err := expression.NewBuilder().WithUpdate(update).Build()
	if err != nil {
		fmt.Printf("build update expression: %s\n", err.Error())
		return
	}

	updateInputUser := &dynamodb.UpdateItemInput{
		TableName:                 aws.String("User"),
		Key:                       map[string]types.AttributeValue{"UserD": &types.AttributeValueMemberS{Value: "1"}},
		ExpressionAttributeNames:  expr.Names(),
		ExpressionAttributeValues: expr.Values(),
		UpdateExpression:          expr.Update(),
	}

	_, err = client.UpdateItem(context.TODO(), updateInputUser)
	if err != nil {
		fmt.Printf("update item: %s\n", err.Error())
		return
	}
}

func DeleteUser() {
	deleteInputUser := &dynamodb.DeleteItemInput{
		TableName: aws.String("User"),
		Key: map[string]types.AttributeValue{
			"UserID": &types.AttributeValueIDS{
				Value: "1",
			},
		},
	}
	_, err := client.DeleteItem(context.TODO(), deleteInputUser)
	if err != nil {
		fmt.Printf("delete item: %s¥n", err.Error())
		return
	}
}
