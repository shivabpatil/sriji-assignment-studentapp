import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDailogComponent } from './delete-dailog.component';

describe('DeleteDailogComponent', () => {
  let component: DeleteDailogComponent;
  let fixture: ComponentFixture<DeleteDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
