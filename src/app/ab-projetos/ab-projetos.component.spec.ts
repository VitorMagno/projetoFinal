import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbProjetosComponent } from './ab-projetos.component';

describe('AbProjetosComponent', () => {
  let component: AbProjetosComponent;
  let fixture: ComponentFixture<AbProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbProjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
