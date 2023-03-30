import { Component } from '@angular/core';


class Car {
    id: number;
    brand: string;
    model: string;
    country: string;
    price: number;

    constructor(id: number, brand: string, model: string, country: string, price: number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.country = country;
        this.price = price;
    }
}


@Component({
    selector: 'car-comp',
    template: `<div class="page-header">
        <h1> Cars </h1>
    </div>
    <div class="panel">
        <table class="table table-striped">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Country</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                <tr *ngFor="let car of cars">
                    <td>{{car.id}}</td>
                    <td>{{car.brand}}</td>
                    <td>{{car.model}}</td>
                    <td>{{car.country}}</td>
                    <td>{{car.price}} $</td>
                </tr>
            </tbody>
        </table>
    </div>`
})


export class CarComponent {
    cars: Car[] =
        [
            { id: 1, brand: "BMW", model: "x5", country: "Germany", price: 7000000 },
            { id: 2, brand: "BMW", model: "x6", country: "Germany", price: 8000000 },
            { id: 3, brand: "BMW", model: "x7", country: "Germany", price: 9000000 },
            { id: 4, brand: "BMW", model: "x8", country: "Germany", price: 10000000 },
        ];
}