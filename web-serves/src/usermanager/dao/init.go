package dao

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
	"time"
)

func InitDatabase() error {
	if err := orm.RegisterDriver("mysql", orm.DRMySQL); err != nil {
		return err
	}
	addr := beego.AppConfig.String("mysql::addr")
	user := beego.AppConfig.String("mysql::user")
	password := beego.AppConfig.String("mysql::password")
	database := beego.AppConfig.String("mysql::database")
	err := registerMysqlDatabase("default", addr, user, password, database)
	if err != nil {
		return err
	}
	orm.Debug, _ = beego.AppConfig.Bool("mysql::debug")
	orm.RunCommand()
	initModel()
	return nil
}

func registerMysqlDatabase(dbAlias, addr, user, password, database string) error {
	dbStr := fmt.Sprintf("%s:%s@tcp(%s)/%s", user, password, addr, database)
	if err := orm.RegisterDataBase(dbAlias, "mysql", dbStr); err != nil {
		return err
	}
	orm.Debug = true
	orm.SetMaxIdleConns(dbAlias, 30)
	orm.SetMaxOpenConns(dbAlias, 30)
	db, err := orm.GetDB(dbAlias)
	if err != nil {
		return err
	}
	db.SetConnMaxLifetime(time.Duration(540) * time.Second)
	return nil
}

func initModel() {
	orm.RegisterModel(
		new(TUmUser),
	)
}
