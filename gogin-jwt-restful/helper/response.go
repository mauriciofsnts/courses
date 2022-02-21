package helper

import "strings"

// Response is used for static shape json return
type Response struct {
	Status  bool        `json:"status"`
	Message string      `json:"message"`
	Error   interface{} `json:"errors"`
	Data    interface{} `json:"data"`
}

// Empty object is used when data doesnt want to be null on json
type EmptyObj struct{}

// BuildResponse method is to inject data value to dynamic success response
func BuildResponse(status bool, message string, data interface{}) Response {
	res := Response{
		Status:  status,
		Message: message,
		Data:    data,
		Error:   nil,
	}

	return res
}

// BuildErrorResponse method is iject data value to dynamic failed response
func BuildErrorResponse(message string, err string, data interface{}) Response {

	splittedErrors := strings.Split(err, "\n")

	res := Response{
		Status:  false,
		Message: message,
		Error:   splittedErrors,
		Data:    data,
	}

	return res
}
