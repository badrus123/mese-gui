package models

type Wallet struct {
 ID      uint   `json:"id"`
 Address string `json:"address"`
}

func (b *Wallet) TableName() string {
 return "wallet"
}
