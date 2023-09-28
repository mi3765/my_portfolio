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

func CreatePostWork() {
	putInputWork := PostWork{}

	av, err := attributevalue.MarshalMap(putInputWork)
	if err != nil {
		fmt.Printf("dynamodb marshal: %s¥n", err.Error())
	}
	_, err = client.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("PostWork"),
		Item:      av,
	})
	if err != nil {
		fmt.Printf("put item: %s¥n", err.Error())
		return
	}
}

func ReadPostWork() {
	getInputWork := &dynamodb.GetItemInput{
		TableName: aws.String("PostWork"),
		Key: map[string]types.AttributeValue{
			"WorkID": &types.AttributeValueIDS{
				value: "1",
			},
		},
	}

	output, err := client.GetItem(context.TODO(), getInputWork)
	if err != nil {
		fmt.Printf("get item: %s¥n", err.Error())
		return
	}
	gotPostWork := PostWork{}
	err = attributevalue.UnmashalMap(output.Item, &gotPostWork)
	if err != nil {
		fmt.Printf("dynamodb unmarshal: %s¥n", err.Error())
		return
	}
}

func UpdatePostWork() {
	update := expression.UpdateBuilder{}.Set(
		expression.Name("WorkTitle").Value("新しいタイトル"),
		expression.Name("WorkMessage").Value("新しいメッセージ"),
	)

	expr, err := expression.NewBuilder().WithUpdate(update).Build()
	if err != nil {
		fmt.Printf("build update expression: %s\n", err.Error())
		return
	}

	updateInputWork := &dynamodb.UpdateItemInput{
		TableName:                 aws.String("PostWork"),
		Key:                       map[string]types.AttributeValue{"WorkID": &types.AttributeValueMemberS{Value: "1"}},
		ExpressionAttributeNames:  expr.Names(),
		ExpressionAttributeValues: expr.Values(),
		UpdateExpression:          expr.Update(),
	}

	_, err = client.UpdateItem(context.TODO(), updateInputWork)
	if err != nil {
		fmt.Printf("update item: %s\n", err.Error())
		return
	}
}

func DeletePostWork() {
	// Delete
	deleteInputWork := &dynamodb.DeleteItemInput{
		TableName: aws.String("PostWork"),
		Key: map[string]types.AttributeValue{
			"WorkID": &types.AttibuteValueIDS{
				Value: "1",
			},
		},
	}
	_, err := client.DeleteItem(context.TODO(), deleteInputWork)
	if err != nil {
		fmt.Printf("delete item: %s¥n", err.Error())
		return
	}
}
