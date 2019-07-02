import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarDetailComponent } from './starwar-detail.component';

describe('StarwarDetailComponent', () => {
  let component: StarwarDetailComponent;
  let fixture: ComponentFixture<StarwarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
