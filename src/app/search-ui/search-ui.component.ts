import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as instantsearch from 'instantsearch.js'
import {$} from "protractor";

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
          placeholder: 'recherchez une anonce',
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
                    <img src={{img_url}} style="width: 500px">
              </div>
              <div class="content">
                <div class="header">{{{_highlightResult.name.value}}}</div>
                <div class="meta">
                  <span class="price"><strong>Domaine :</strong> {{domaine}} <strong style="margin-left: 4%"> Capacité d'accueil :</strong> {{nb_seat}}
                  <strong style="margin-left: 4%"> Lieu :</strong> {{city}}</span>
                  <!--<span class="stay">{{{_highlightResult.name.value}}}</span>-->
                </div>
                <div class="description">
                  <p>
                  <strong>Desciption : </strong>Ici une description de l'annonce merveilleusement bien rédiger par l'utilisateur :) 500 charactère max je pense...
                  </p>
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
          instantsearch.widgets.refinementList({
              container: '#domaine_filter',
              attributeName: 'domaine',
              operator: 'or',
              cssClasses: {
                  list: 'item-filter',
                  count: 'badge pull-left',
                  active: 'active'
              },
              templates: {
                  header: 'Domaine :'
              }
          })
      );

      this.search.addWidget(
          instantsearch.widgets.refinementList({
              container: '#city_filter',
              attributeName: 'city',
              operator: 'or',
              templates: {
                  header: 'Ville :'
              }
          })
      );

/*    this.search.addWidget(
        instantsearch.widgets.rangeSlider({
            container: '#seat_filter',
            attributeName: 'nb_seat',
            templates: {
                header: 'Capacité d\'accueil'
            },
            min: 1,
            max: 10
        })
    );*/

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
