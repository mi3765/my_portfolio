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

func dynamoPostWork() {
	var err error
	var context = context.Background()

	c, err := config.LoadDefaultConfig(context, config.WithRegion(region))
	if err != nil {
		fmt.Printf("load config: %s¥n", err.Error())
		return
	}

	client := dynamodb.NewFormConfig(c)

	// Create
	putInputWork := PostWork{}

	av, err := attributevalue.MarshalMap(putInputWork)
	if err != nil {
		fmt.Printf("dynamodb marshal: %s¥n", err.Error())
	}
	_, err = client.PutItem(context, &dynamodb.PutItemInput{
		TableName: aws.String("PostWork"),
		Item:      av,
	})
	if err != nil {
		fmt.Printf("put item: %s¥n", err.Error())
		return
	}

	// Read
	getInputWork := &dynamodb.GetItemInput{
		TableName: aws.String("PostWork"),
		Key: map[string]types.AttributeValue{
			"WorkID": &types.AttributeValueIDS{
				value: "",
			},
		},
	}

	output, err := client.GetItem(context, getInputWork)
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

	// Update
	update := expression.UpdateBuilder{}.Set()

	expression, err := expression.NewBuilder().WithUpdate(update).Build()
	if err != nil {
		fmt.Printf("build update expression: %s¥n", err.Error())
		return
	}

	updateInputWork := &dynamodb.UpdateItemInput{
		TableName: aws.String("PostWork"),
		Key: map[string]types.AttributeValue{
			"WorkID": &types.AttributeValueIDS{
				value: "",
			},
		},
		// TODO: Update要素の記述
	}
	_, err = client.UpdateItem(context, updateInputWork)
	if err != nil {
		fmt.Printf("update item: %s¥n", err.Error())
		return
	}

	// Delete
	deleteInputWork := &dynamodb.DeleteItemInput{
		TableName: aws.String("PostWork"),
		Key: map[string]types.AttributeValue{
			"WorkID": &types.AttibuteValueIDS{
				Value: "",
			},
		},
	}
	_, err = client.DeleteItem(context, deleteInputWork)
	if err != nil {
		fmt.Printf("delete item: %s¥n", err.Error())
		return
	}
}
