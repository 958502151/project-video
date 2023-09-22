package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/astaxie/beego"
	"usermanager/dao"
)

type UserController struct {
	beego.Controller
}

func (c *UserController) GetUser() {
	user, err := dao.QueryUserInfo(1)
	if err != nil {
		fmt.Println(err.Error())
	}
	data, err := json.Marshal(user)
	if err != nil {
		fmt.Println(err.Error())
	}
	_, err = c.Ctx.ResponseWriter.Write(data)
	if err != nil {
		fmt.Println(err.Error())
	}
}
