package config

import (
	"errors"
	"fmt"
	"os"
	"strconv"

	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

// Database configuration
type DB_Config struct {
	host     string
	port     int
	user     string
	db_name  string
	password string
}

func Build_DB_Config() (*DB_Config, error) {
	port, err := strconv.Atoi(os.Getenv("GO_DB_PORT"))
	if err != nil {
		fmt.Printf("failed to make algod client: %s\n", err)
		return nil, errors.New("database port not numeric")
	}

	db_config := DB_Config{
		host:     os.Getenv("GO_DB_HOST"),
		port:     port,
		user:     os.Getenv("GO_DB_USERNAME"),
		password: os.Getenv("GO_DB_PASSWORD"),
		db_name:  os.Getenv("GO_DB_DATABASE"),
	}
	return &db_config, nil
}

func Build_DB_Conn_Str(db_config *DB_Config) string {
	return fmt.Sprintf(
		"%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True&loc=Local",
		db_config.user,
		db_config.password,
		db_config.host,
		db_config.port,
		db_config.db_name,
	)
}
