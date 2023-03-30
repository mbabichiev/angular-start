import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CarComponent],
    bootstrap: [CarComponent],
    exports: [CarComponent]
})

export class CarModule { }