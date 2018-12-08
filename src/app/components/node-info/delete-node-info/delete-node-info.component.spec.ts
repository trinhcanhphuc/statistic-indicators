import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNodeInfoComponent } from './delete-node-info.component';

describe('DeleteNodeInfoComponent', () => {
  let component: DeleteNodeInfoComponent;
  let fixture: ComponentFixture<DeleteNodeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNodeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNodeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
