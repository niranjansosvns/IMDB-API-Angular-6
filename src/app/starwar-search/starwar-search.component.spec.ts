import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarSearchComponent } from './starwar-search.component';

describe('StarwarSearchComponent', () => {
  let component: StarwarSearchComponent;
  let fixture: ComponentFixture<StarwarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
