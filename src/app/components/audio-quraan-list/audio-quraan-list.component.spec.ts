import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioQuraanListComponent } from './audio-quraan-list.component';

describe('AudioQuraanListComponent', () => {
  let component: AudioQuraanListComponent;
  let fixture: ComponentFixture<AudioQuraanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioQuraanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioQuraanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
