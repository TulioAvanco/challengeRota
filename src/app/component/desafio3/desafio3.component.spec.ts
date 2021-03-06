/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Desafio3Component } from './desafio3.component';

describe('Desafio3Component', () => {
  let component: Desafio3Component;
  let fixture: ComponentFixture<Desafio3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desafio3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desafio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
