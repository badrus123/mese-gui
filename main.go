package main

import (
	"fmt"
	"mese-dex/go/config"
	"mese-dex/go/models"
	"mese-dex/go/routes"

	"os"

	"github.com/gin-contrib/static"
	"github.com/jinzhu/gorm"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	// Build database configuration
	db_config, err := config.Build_DB_Config()
	if err != nil {
		fmt.Printf("Database configuration Error: %s\n", err)
	}
	// Connect to database
	config.DB, err = gorm.Open("mysql", config.Build_DB_Conn_Str(db_config))
	if err != nil {
		fmt.Println("MySQL Error:", err)
	}
	defer config.DB.Close()
	// Create/Update database
	config.DB.AutoMigrate(&models.Wallet{})

	router := routes.Setup_Router(os.Getenv("NODE_ENV"))
	router.Use(static.Serve("/", static.LocalFile("./dist", true)))
	router.Run(os.Getenv("GO_URL"))
}
