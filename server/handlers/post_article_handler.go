package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/mi3765/my_portfolio/server/database" // データベース操作のパッケージをインポート

	"github.com/aws/aws-lambda-go/events"
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

func main() {
	http.HandleFunc("/pages/postarticle", FrontToBackPostArtcile)
	http.ListenAndServe(":3000", nil)
}

func FrontToBackPostArtcile(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		// フォームデータの解析
		err := r.ParseMultipartForm(10 << 20) // 最大10MBのデータを許容
		if err != nil {
			http.Error(w, "フォームデータの解析に失敗しました", http.StatusBadRequest)
			return
		}

		title := r.FormValue("title")
		message := r.FormValue("message")

		// ファイルの取得
		file, _, err := r.FormFile("file0") // "file0" はフォームデータのキー名
		if err != nil {
			http.Error(w, "ファイルの取得に失敗しました", http.StatusBadRequest)
			return
		}
		defer file.Close()

		// ここでフォームデータやファイルを処理するロジックを実装します
		// 例えば、データベースへの保存やファイルの保存などを行うことができます

		// サンプルとして、受け取ったデータをコンソールに出力します
		fmt.Printf("Received Title: %s\n", title)
		fmt.Printf("Received Message: %s\n", message)

		// レスポンスの作成（成功時）
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("記事が投稿されました"))
	} else {
		http.Error(w, "POSTリクエストのみ受け付けます", http.StatusMethodNotAllowed)
	}
}

func CreatePostArticleHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// リクエストデータを取得
	var postArticle database.PostArticle
	err := json.Unmarshal([]byte(request.Body), &postArticle)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Invalid request data",
		}, nil
	}

	// データベースに記事を作成
	err = database.CreatePostArticle(postArticle)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to create post: %s", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusCreated,
		Body:       "Article created successfully",
	}, nil
}

func GetPostArticleHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// リクエストから記事のIDを取得
	articleID := request.PathParameters["id"]

	// データベースから記事を取得
	postArticle, err := database.GetPostArticle(articleID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to fetch article: %s", err.Error()),
		}, nil
	}

	// 記事を JSON 形式に変換して返す
	responseBody, err := json.Marshal(postArticle)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to marshal response: %s", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       string(responseBody),
	}, nil
}

func UpdatePostArticleHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// リクエストから記事のIDと更新データを取得
	articleID := request.PathParameters["id"]
	var updatedPostArticle database.PostArticle
	err := json.Unmarshal([]byte(request.Body), &updatedPostArticle)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Invalid request data",
		}, nil
	}

	// データベースで記事を更新
	err = database.UpdatePostArticle(articleID, updatedPostArticle)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to update article: %s", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       "Article updated successfully",
	}, nil
}

func DeletePostArticleHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// リクエストから記事のIDを取得
	articleID := request.PathParameters["id"]

	// データベースから記事を削除
	err := database.DeletePostArticle(articleID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Failed to delete article: %s", err.Error()),
		}, nil
	}

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       "Article deleted successfully",
	}, nil
}
