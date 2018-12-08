import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNodeInfoComponent } from './list-node-info.component';

describe('ListNodeInfoComponent', () => {
  let component: ListNodeInfoComponent;
  let fixture: ComponentFixture<ListNodeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNodeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNodeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
