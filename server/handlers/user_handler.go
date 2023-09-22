package handlers

import (
	"encoding/json"
	"net/http"
)

type User struct {
	UserID   int    `json:"user_id"`
	UserName string `json:"user_name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func CreateUserHandler(w http.ResponseWriter, r *http.Request) {

}

// GetUserHandlerはユーザー情報を取得するハンドラです。
func GetUserHandler(w http.ResponseWriter, r *http.Request) {
	// ユーザーIDを取得
	userID := r.URL.Query().Get("user_id")

	// ユーザー情報をデータベースから取得するロジックを実行
	// ここではダミーデータを返す例を示します
	user := User{
		UserID:   1,
		UserName: "example_user",
		Email:    "user@example.com",
		Password: "hashed_password",
	}

	// ユーザー情報をJSONにエンコードしてレスポンスに書き込む
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(user); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// UpdateUserHandlerはユーザー情報を更新するハンドラです。
func UpdateUserHandler(w http.ResponseWriter, r *http.Request) {
	// リクエストボディからユーザー情報をデコード
	var updatedUser User
	if err := json.NewDecoder(r.Body).Decode(&updatedUser); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// ユーザー情報をデータベースに更新するロジックを実行
	// ここではダミーデータを更新したと仮定します

	// 更新が成功した場合、成功メッセージを返す
	successMessage := "ユーザー情報が更新されました"
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(successMessage); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// 他のユーザーハンドラ機能を追加できます

func DeleteUserHandler(w http.ResponseWriter, r *http.Request) {

}
