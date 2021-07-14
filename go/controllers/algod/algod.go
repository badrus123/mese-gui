package algod

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"github.com/algorand/go-algorand-sdk/client/algod"
)

func Connect(c *gin.Context) {
	// Create an algod client
	algodClient, err := algod.MakeClient(os.Getenv("GO_ALGOD_ADDRESS"), os.Getenv("GO_ALGOD_TOKEN"))
	if err != nil {
		fmt.Printf("failed to make algod client: %s\n", err)
		c.AbortWithStatus(http.StatusInternalServerError)
	}

	// Print algod status
	_, err = algodClient.Status()
	if err != nil {
		fmt.Printf("error getting algod status: %s\n", err)
		c.AbortWithStatus(http.StatusBadRequest)
	}

	// Perform a healthcheck on the node
	nodeHealth := algodClient.HealthCheck()
	if nodeHealth != nil {
		fmt.Printf("error node health undesirable: %s\n", nodeHealth)
		c.AbortWithStatus(http.StatusBadRequest)
	}

	c.Status(200)
}

type pinfo struct {
	Asset  string
	Amount uint64
	Value  int
}

func Portfolio_Info(c *gin.Context) {
	acc_addr := c.Params.ByName("addr")
	// instantiate indexer client
	algodClient, err := algod.MakeClient(os.Getenv("GO_ALGOD_ADDRESS"), os.Getenv("GO_ALGOD_TOKEN"))
	if err != nil {
		fmt.Printf("failed to make algod client: %s\n", err)
		c.AbortWithStatus(http.StatusInternalServerError)
	}

	// Get account information
	acc_info, err := algodClient.AccountInformation(acc_addr)
	if err != nil {
		fmt.Printf("error getting account information: %s\n", err)
		c.AbortWithStatus(http.StatusBadRequest)
	}

	// Store Algos information
	portfolio_info := []pinfo{}
	if acc_info.Amount > 0 {
		portfolio_info = append(portfolio_info, pinfo{Asset: "Algo", Amount: acc_info.Amount, Value: 10})
	}

	// Get remaining assets
	for asset_id, asset := range acc_info.Assets {
		// Get asset name
		asset_info, err := algodClient.AssetInformation(asset_id)
		if err != nil {
			fmt.Printf("error getting asset information: %s\n", err)
			c.AbortWithStatus(http.StatusBadRequest)
		}

		if asset.Amount > 0 {
			portfolio_info = append(portfolio_info, pinfo{Asset: asset_info.UnitName, Amount: asset.Amount, Value: 10})
		}
	}

	c.JSON(http.StatusOK, portfolio_info)
}
