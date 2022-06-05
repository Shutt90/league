package main

import (
	"fmt"
	"os"
	"sort"

	"github.com/KnutZuidema/golio"
	"github.com/KnutZuidema/golio/api"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
)

func main() {
	godotenv.Load()
	key := os.Getenv("API_KEY")
	client := golio.NewClient(key,
		golio.WithRegion(api.RegionEuropeWest),
		golio.WithLogger(logrus.New().WithField("foo", "bar")))

	summoner, _ := client.Riot.LoL.Summoner.GetByName("Shutt90")
	fmt.Printf("%s is a level %d summoner\n", summoner.Name, summoner.SummonerLevel)

	allChamps, _ := client.DataDragon.GetChampions()

	for _, champ := range allChamps {

		currentChamp, err := client.Riot.LoL.ChampionMastery.Get(summoner.ID, champ.Key)

		if err != nil {
			fmt.Printf("Error: %v\n", err)
			continue
		}

		fmt.Printf("Champion Name: %v\n Current Mastery: %v\n", champ.ID, currentChamp.ChampionPoints)

	}

}
