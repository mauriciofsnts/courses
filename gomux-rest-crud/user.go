package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
}

var DB *gorm.DB
var err error

const DNS = "host=localhost user=postgres password=123 dbname=gorm port=5432 sslmode=disable"

func InitialMigration() {
	DB, err = gorm.Open(postgres.Open(DNS), &gorm.Config{})

	if err != nil {
		fmt.Println(err.Error())
		panic("Cannot connect to db")
	}

	DB.AutoMigrate(&User{})

}

func GetUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var users []User

	DB.Find(&users)
	json.NewEncoder(w).Encode(users)
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	var user User

	DB.First(&user, params["id"])
	json.NewEncoder(w).Encode(user)
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var user User

	json.NewDecoder(r.Body).Decode(&user)
	DB.Create(&user)

	json.NewEncoder(w).Encode(user)
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	var user User

	DB.First(&user, params["id"])

	json.NewDecoder(r.Body).Decode(&user)
	DB.Save(&user)

	json.NewEncoder(w).Encode(user)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	var user User

	DB.Delete(&user, params["id"])
	json.NewEncoder(w).Encode("The user is deleted successfully")
}
