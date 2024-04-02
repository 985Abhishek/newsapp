import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      "source": {
      "id": "polygon",
      "name": "Polygon"
      },
      "author": "Michael McWhertor",
      "title": "Overwatch 2 is allowed to be fun this week",
      "description": "The April Fools’ Day 2024 patch for Overwatch 2 is more than just googly eyes: Balance Overwatch in the arcade is a great place to try out weird new hero changes.",
      "url": "https://www.polygon.com/24118989/overwatch-2-april-fools-2024-balance-patch",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/FkzuLtN64RkfH-pMlt9hdHsWY1c=/0x92:1800x1034/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25367376/overwatc_2_afd.jpg",
      "publishedAt": "2024-04-02T17:17:27Z",
      "content": "Image: Blizzard Entertainment\r\n\n \n\n Blizzard brought some silly new ideas to the shooter for April Fools’ Day A new patch for Overwatch 2 rolled out Monday that promises a “really, really, really bal… [+14815 chars]"
      },
      {
        "source": {
        "id": null,
        "name": "TheWrap"
        },
        "author": "Eileen AJ Connelly",
        "title": "Taylor Swift Joins Forbes’ Billionaires Rankings",
        "description": "The \"Gold Rush\" singer is the first to make the magazine's list of the world's richest people on just music and ticket sales\nThe post Taylor Swift Joins Forbes’ Billionaires Rankings appeared first on TheWrap.",
        "url": "https://www.thewrap.com/taylor-swift-billionaire-rankings/",
        "urlToImage": "https://www.thewrap.com/wp-content/uploads/2023/06/Tswift-Eras-Lover.jpg",
        "publishedAt": "2024-04-02T17:15:23Z",
        "content": "Taylor Swift joined the ranks of celebrity billionaires Tuesday when she became the most famous newcomer on Forbes Magazines annual list of the richest people in the world. \r\nThe Mastermind singer ma… [+2888 chars]"
        },
  ];
  constructor() {
    super();
    console.log("Hello I ma a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key = {element.url}>
                <Newsitem 
                  title={element.title.slice(0,45)}
                  description={element.description.slice(0,88)}
                  imageUrl={element.urlToImage}
                  newsUrl= {element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
