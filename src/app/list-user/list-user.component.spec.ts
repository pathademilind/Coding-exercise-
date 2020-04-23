import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserComponent } from './list-user.component';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ListUserComponent', () => {
  let comp: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
let de:DebugElement;
let el:HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(()=>{
    fixture = TestBed.createComponent(ListUserComponent);
      comp = fixture.componentInstance;
// de = fixture.debugElement.query(By)
// el= fi÷
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
