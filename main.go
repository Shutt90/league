package main

import (
	"os"

	"github.com/KnutZuidema/golio"
	"github.com/KnutZuidema/golio/api"
	"github.com/joho/godotenv"
)

func main() {

	godotenv.Load()

	key := os.Getenv("API_KEY")

	client := golio.NewClient(key)
	golio.WithRegion(api.RegionEuropeWest)

}
