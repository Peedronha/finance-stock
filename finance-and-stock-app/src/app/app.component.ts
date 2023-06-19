import {Component, OnDestroy, OnInit} from '@angular/core';
import {distinctUntilChanged, Subscription} from 'rxjs'
import { MediaObserver,MediaChange} from '@angular/flex-layout';
import { environment } from './../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css']
})
export class AppComponent implements OnInit, OnDestroy{

  mediaSub: Subscription | any;
  deviceXS: boolean | any ;
  private activeMediaQuery: string = '';

  constructor(private mediaObserver:MediaObserver){
    console.log(environment.production);
  }
  ngOnInit(){
    const getAlias = (MediaChange: MediaChange[]) => {
      return MediaChange[0].mqAlias;
    };
    this.mediaSub=this.mediaObserver.asObservable().pipe(
      distinctUntilChanged(
        (x: MediaChange[], y:MediaChange[]) => getAlias(x) === getAlias(y)
      )
    )
      .subscribe((change)=>{
        change.forEach((item) =>{
          this.activeMediaQuery = item ?`'${item.mqAlias}' = (${item.mediaQuery})` : '';
          if (item.mqAlias === 'md'){
            this.loadMobileContent();
          }
          console.log('activeMediaQuery', this.activeMediaQuery);
        });
    });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe()
  }

  loadMobileContent(){
    console.log('laod mobile content')
  }
  title = 'finance-and-stock-app';

}
