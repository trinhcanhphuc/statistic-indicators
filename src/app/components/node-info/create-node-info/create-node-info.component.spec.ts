import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNodeInfoComponent } from './create-node-info.component';

describe('CreateNodeInfoComponent', () => {
  let component: CreateNodeInfoComponent;
  let fixture: ComponentFixture<CreateNodeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNodeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNodeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
