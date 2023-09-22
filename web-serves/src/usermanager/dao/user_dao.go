package dao

import (
	"github.com/astaxie/beego/orm"
)

type TUmUser struct {
	UserId           int    `orm:"column(user_id);auto"`
	Username         string `orm:"column(username);size(32)"`
	Email            string `orm:"column(email);size(255);null"`
	Password         string `orm:"column(password);size(255)"`
	Status           int    `orm:"column(status);null" description:"1:正常;2:待激活;3:已停用"`
	Image            string `orm:"column(image);size(255);null"`
	FirstName        string `orm:"column(first_name);size(32);null"`
	LastName         string `orm:"column(last_name);size(32);null"`
	Phone            string `orm:"column(phone);size(32);null"`
	LockedExpiretime string `orm:"column(locked_expiretime);type(datetime);null" description:"用户锁定失效时间"`
	CreateTime       string `orm:"column(create_time);type(datetime);null;auto_now_add"`
	UpdateTime       string `orm:"column(update_time);type(datetime);null"`
}

func (t *TUmUser) TableName() string {
	return "t_um_user"
}

func QueryUserInfo(id int) (TUmUser, error) {
	o := orm.NewOrm()
	user := TUmUser{}
	err := o.QueryTable(new(TUmUser)).Filter("user_id", id).One(&user)
	if err != nil {
		return user, err
	}
	return user, err
}
