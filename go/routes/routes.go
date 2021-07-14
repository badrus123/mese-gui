package routes

import (
	"mese-dex/go/controllers"
	"mese-dex/go/controllers/algod"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

// Configure routes
func Setup_Router(env string) *gin.Engine {
	routes := gin.Default()

	if env == "development" {
		routes.Use(cors.Default())
	}

	// Routes for Vue frontend
	web_routes := routes.Group("/web")
	{
		web_routes.GET("/connect", algod.Connect)
		web_routes.GET("/portfolio/:addr", algod.Portfolio_Info)
	}

	wallet_routes := routes.Group("/wallet-api")
	{
		wallet_routes.GET("wallet", controllers.Get_Wallets)
		wallet_routes.POST("wallet/:address", controllers.Create_Wallet)
		wallet_routes.GET("wallet/:id", controllers.Get_Wallet_By_ID)
		wallet_routes.PUT("wallet/:id", controllers.Update_Wallet)
		wallet_routes.DELETE("wallet/:id", controllers.Delete_Wallet)
	}

	routes.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})

	return routes
}
