import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpInfoComponent } from './erp-info.component';

describe('ErpInfoComponent', () => {
  let component: ErpInfoComponent;
  let fixture: ComponentFixture<ErpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
