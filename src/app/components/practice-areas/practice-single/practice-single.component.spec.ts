import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSingleComponent } from './practice-single.component';

describe('PracticeSingleComponent', () => {
  let component: PracticeSingleComponent;
  let fixture: ComponentFixture<PracticeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
