import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneysComponent } from './attorneys.component';

describe('AttorneysComponent', () => {
  let component: AttorneysComponent;
  let fixture: ComponentFixture<AttorneysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
