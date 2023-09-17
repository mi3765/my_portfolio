package models

type PostArticle struct {
	ArticleID      int      `json:"article_id"`
	UserID         int      `json:"user_id"`
	ArticleTitle   string   `json:"article_title"`
	ArticleTags    []string `json:"article_tags"`
	ArticleImages  []string `json:"article_images"`
	ArticleMessage string   `json:"article_message"`
	PostDate       string   `json:"post_date"`
}
