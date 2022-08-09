import React from 'react';
import card from './card';
let data = require("../data/sampleNews.json")

function NewsPage() {
          return(
            <div>{
                data.map((element, index) => {
                    return(
                        <Card 
                        key={index}
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        date={element.publishedAt}
                        source={element.source.name}
                        />
                    );               
              })
            }
             
              </div> 
          )}

export default NewsPage;