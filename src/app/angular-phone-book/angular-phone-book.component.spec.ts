import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPhoneBookComponent } from './angular-phone-book.component';

describe('AngularPhoneBookComponent', () => {
  let component: AngularPhoneBookComponent;
  let fixture: ComponentFixture<AngularPhoneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPhoneBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
