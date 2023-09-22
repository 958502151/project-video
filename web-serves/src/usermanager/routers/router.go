package routers

import (
	"github.com/astaxie/beego"
	"usermanager/controllers"
)

func init() {
	beego.Router("/v1/usermanage/GetUser", &controllers.UserController{}, "post:GetUser")
}
