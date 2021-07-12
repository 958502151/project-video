package main

import (
	"fmt"
	"github.com/astaxie/beego"
	"usermanager/dao"
	_ "usermanager/routers"
)

func init() {
	err := dao.InitDatabase()
	if err != nil {
		fmt.Println(err.Error())
	}
}

func main() {
	beego.Run()
}
