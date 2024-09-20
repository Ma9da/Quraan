import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuraanListComponent } from './quraan-list.component';

describe('QuraanListComponent', () => {
  let component: QuraanListComponent;
  let fixture: ComponentFixture<QuraanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuraanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuraanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
