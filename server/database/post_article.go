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

type PostArticle struct {
	ArticleID      int      `json:"article_id"`
	UserID         int      `json:"user_id"`
	ArticleTitle   string   `json:"article_title"`
	ArticleTags    []string `json:"article_tags"`
	ArticleImages  []string `json:"article_images"`
	ArticleMessage string   `json:"article_message"`
	PostDate       string   `json:"post_date"`
}

const region string = "ap-northeast-1"

var client *dynamodb.Client

func init() {
	var err error
	var context = context.Background()

	cfg, err := config.LoadDefaultConfig(context, config.WithRegion(region))
	if err != nil {
		fmt.Printf("load config: %s\n", err.Error())
		return
	}

	client = dynamodb.NewFromConfig(cfg)
}

func CreatePostArticle() {
	putInputArticle := PostArticle{}

	av, err := attributevalue.MarshalMap(putInputArticle)
	if err != nil {
		fmt.Printf("dynamodb marshal: %s\n", err.Error())
	}
	_, err = client.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String("PostArticle"),
		Item:      av,
	})
	if err != nil {
		fmt.Printf("put item: %s\n", err.Error())
		return
	}
}

func ReadPostArticle() {
	getInputArticle := &dynamodb.GetItemInput{
		TableName: aws.String("PostArticle"),
		Key: map[string]types.AttributeValue{
			"ArticleID": &types.AttributeValueMemberS{
				Value: "1", // ArticleIDの値を指定
			},
		},
	}

	output, err := client.GetItem(context.TODO(), getInputArticle)
	if err != nil {
		fmt.Printf("get item: %s\n", err.Error())
		return
	}
	gotPostArticle := PostArticle{}
	err = attributevalue.UnmarshalMap(output.Item, &gotPostArticle)
	if err != nil {
		fmt.Printf("dynamodb unmarshal: %s\n", err.Error())
		return
	}
}

func UpdatePostArticle() {
	update := expression.UpdateBuilder{}.Set(
		expression.Name("ArticleTitle").Value("新しいタイトル"),
		expression.Name("ArticleMessage").Value("新しいメッセージ"),
	)

	expr, err := expression.NewBuilder().WithUpdate(update).Build()
	if err != nil {
		fmt.Printf("build update expression: %s\n", err.Error())
		return
	}

	updateInputArticle := &dynamodb.UpdateItemInput{
		TableName:                 aws.String("PostArticle"),
		Key:                       map[string]types.AttributeValue{"ArticleID": &types.AttributeValueMemberS{Value: "1"}},
		ExpressionAttributeNames:  expr.Names(),
		ExpressionAttributeValues: expr.Values(),
		UpdateExpression:          expr.Update(),
	}

	_, err = client.UpdateItem(context.TODO(), updateInputArticle)
	if err != nil {
		fmt.Printf("update item: %s\n", err.Error())
		return
	}
}

func DeletePostArticle() {
	deleteInputArticle := &dynamodb.DeleteItemInput{
		TableName: aws.String("PostArticle"),
		Key: map[string]types.AttributeValue{
			"ArticleID": &types.AttributeValueMemberS{
				Value: "1", // 削除するArticleIDの値を指定
			},
		},
	}

	_, err := client.DeleteItem(context.TODO(), deleteInputArticle)
	if err != nil {
		fmt.Printf("delete item: %s\n", err.Error())
		return
	}
}
