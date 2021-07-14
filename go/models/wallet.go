package models

import (
 "mese-dex/go/config"
 "fmt"
 _ "github.com/go-sql-driver/mysql"
)

// Fetch all wallet data
func Get_All_Wallets(wallet *[]Wallet) (err error) {
 if err = config.DB.Find(wallet).Error; err != nil {
  return err
 }
 return nil
}

// Insert new data
func Create_Wallet(wallet *Wallet) (err error) {
 if err = config.DB.Create(wallet).Error; err != nil {
  return err
 }
 return nil
}

// Fetch only one wallet by id
func Get_Wallet_By_ID(wallet *Wallet, id string) (err error) {
 if err = config.DB.Where("id = ?", id).First(wallet).Error; err != nil {
  return err
 }
 return nil
}

// Update wallet
func Update_Wallet(wallet *Wallet, id string) (err error) {
 fmt.Println(wallet)
 config.DB.Save(wallet)
 return nil
}

// Delete wallet
func Delete_Wallet(wallet *Wallet, id string) (err error) {
 config.DB.Where("id = ?", id).Delete(wallet)
 return nil
}
