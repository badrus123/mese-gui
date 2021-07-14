package controllers

import (
 "mese-dex/go/models"
 "fmt"
 "net/http"
 "github.com/gin-gonic/gin"
)

// Get all wallets
func Get_Wallets(c *gin.Context) {
 var wallet []models.Wallet
 err := models.Get_All_Wallets(&wallet)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, wallet)
 }
}

// Create wallet
func Create_Wallet(c *gin.Context) {
 var wallet models.Wallet
 c.BindJSON(&wallet)
 err := models.Create_Wallet(&wallet)
 if err != nil {
  fmt.Println(err.Error())
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, wallet)
 }
}

// Get wallet by id
func Get_Wallet_By_ID(c *gin.Context) {
 id := c.Params.ByName("id")
 var wallet models.Wallet
 err := models.Get_Wallet_By_ID(&wallet, id)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, wallet)
 }
}

// Update wallet information
func Update_Wallet(c *gin.Context) {
 var wallet models.Wallet
 id := c.Params.ByName("id")
 err := models.Get_Wallet_By_ID(&wallet, id)
 if err != nil {
  c.JSON(http.StatusNotFound, wallet)
 }
 c.BindJSON(&wallet)
 err = models.Update_Wallet(&wallet, id)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, wallet)
 }
}

// Delete the wallet
func Delete_Wallet(c *gin.Context) {
 var wallet models.Wallet
 id := c.Params.ByName("id")
 err := models.Delete_Wallet(&wallet, id)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, gin.H{"id" + id: "deleted successfully"})
 }
}
