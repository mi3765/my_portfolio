package models

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
