import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as instantsearch from 'instantsearch.js'

@Component({
  selector: 'search-ui',
  templateUrl: './search-ui.component.html',
  styleUrls: ['./search-ui.component.css']
})
export class SearchUiComponent implements OnInit {

  search: any;

  constructor() { }

  ngOnInit() {
    const options = environment.algolia;
    this.search = instantsearch(options);

    this.search.addWidget(
        instantsearch.widgets.searchBox({
          container: '#search-box',
          autofocus: false,
          placeholder: 'recherchez une anoonce',
          poweredBy: true
        })
    );
    // initialize hits widget
    this.search.addWidget(
        instantsearch.widgets.hits({
          container: '#hits',
          templates: {
            empty: 'Aucuns résultats ne correspond à votre recherche',
            item: `<div class="ui items">
            <div class="item" style="margin-bottom: 15px">
              <div class="ui small image">
                    <img src=https://image.tmdb.org/t/p/w300{{image_path}} >
              </div>
              <div class="content">
                <div class="header">{{{_highlightResult.name.value}}}</div>
                <div class="meta">
                  <span class="price"><strong>Result {{objectID}}</strong>:</span>
                  <span class="stay">{{{_highlightResult.name.value}}}</span>
                </div>
                <div class="description">
                  <p></p>
                </div>
              </div>
            </div>`
          },
          escapeHits: true
        })
    );

    this.search.addWidget(
        instantsearch.widgets.stats({
          container: '#stats'
        })
    );

    this.search.addWidget(
        instantsearch.widgets.pagination({
          container: '#pagination',
          maxPages: 20,
        })
    );

    this.search.addWidget(
        instantsearch.widgets.analytics({
          pushFunction: (query, state, results) => {
            console.log(query)
            console.log(state)
            console.log(results)
          }
        })
    );

    this.search.start();
  }

}
