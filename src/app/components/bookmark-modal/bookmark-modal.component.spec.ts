import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkModalComponent } from './bookmark-modal.component';

describe('BookmarkModalComponent', () => {
  let component: BookmarkModalComponent;
  let fixture: ComponentFixture<BookmarkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
