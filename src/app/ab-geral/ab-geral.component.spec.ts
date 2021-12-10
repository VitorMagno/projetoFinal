import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbGeralComponent } from './ab-geral.component';

describe('AbGeralComponent', () => {
  let component: AbGeralComponent;
  let fixture: ComponentFixture<AbGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
