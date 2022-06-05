package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

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

	champMap := make(map[string]int)

	for _, champ := range allChamps {

		currentChamp, err := client.Riot.LoL.ChampionMastery.Get(summoner.ID, champ.Key)

		if err != nil {
			fmt.Printf("Error: %v\n", err)
			continue
		}

		champMap[champ.ID] = currentChamp.ChampionPoints

	}

	http.HandleFunc("/champs", func(w http.ResponseWriter, r *http.Request) {
		champJson, err := json.Marshal(champMap)
		if err != nil {
			log.Fatal("Error marshalling", err)
			w.WriteHeader(http.StatusNotImplemented)
		}

		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(champJson)

	})

	log.Fatal(http.ListenAndServe(":8080", nil))

}
