import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasfirFormComponent } from './tasfir-form.component';

describe('TasfirFormComponent', () => {
  let component: TasfirFormComponent;
  let fixture: ComponentFixture<TasfirFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasfirFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasfirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
