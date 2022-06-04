package main

import (
	"fmt"
	"os"
	"strconv"

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
	rotation, err := client.Riot.LoL.Champion.GetFreeRotation()
	for _, champ := range rotation.FreeChampionIDs {
		champStringId := strconv.Itoa(champ)

		champname, _ := client.DataDragon.GetChampionByID(champStringId)
		fmt.Printf("%v\n", champname.Name)

	}

	summoner, _ := client.Riot.Summoner.GetByName("Shutt90")
	fmt.Printf("%s is a level %d summoner\n", summoner.Name, summoner.SummonerLevel)
	champion, _ := client.DataDragon.GetChampion("Jhin")
	mastery, err := client.Riot.ChampionMastery.Get(summoner.ID, champion.Key)
	if err != nil {
		fmt.Printf("%s has not played any games on %s\n", summoner.Name, champion.Name)
	} else {
		fmt.Printf("%s has mastery level %d with %d points on %s\n", summoner.Name, mastery.ChampionLevel,
			mastery.ChampionPoints, champion.Name)
	}
}
