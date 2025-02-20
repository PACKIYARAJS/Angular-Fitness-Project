import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassswordComponent } from './change-passsword.component';

describe('ChangePassswordComponent', () => {
  let component: ChangePassswordComponent;
  let fixture: ComponentFixture<ChangePassswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePassswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
