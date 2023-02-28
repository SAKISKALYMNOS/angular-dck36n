import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  id=0;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet','Dr. IQ', this.powers[1], 'Chuck Overstreet','Dr. IQ', this.powers[1], 'Chuck Overstreet','Dr. IQ', this.powers[1], 'Chuck Overstreet','Dr. IQ', this.powers[1], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  
  newHero() {
    this.model = new Hero(1, '', '','','','','','','','','','','','','','');
  }

  skyDog(): Hero {
    const myHero =  new Hero(1., 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover', 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover', 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover', 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover', 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.optikoxwrikes); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/