import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsCreatePage } from './imports-create-page';

describe('ImportsCreatePage', () => {
  let component: ImportsCreatePage;
  let fixture: ComponentFixture<ImportsCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportsCreatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportsCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
