import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CarModule } from './car/car.module';
import { AppComponent} from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, CarModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }