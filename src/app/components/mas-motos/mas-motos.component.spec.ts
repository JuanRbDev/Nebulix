import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasMotosComponent } from './mas-motos.component';

describe('MasMotosComponent', () => {
  let component: MasMotosComponent;
  let fixture: ComponentFixture<MasMotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasMotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
