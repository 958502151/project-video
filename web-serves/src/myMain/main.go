package main

import (
	"fmt"

	"../config"
	"../until"
)

func main() {
	config.M()
	fmt.Println("Hello World")
	opend, db := until.OpenDB()
	fmt.Println(db)
	if opend {
		fmt.Println("open success")
	} else {
		fmt.Println("open faile:")
	}
	until.QueryFromDB(db)
}
