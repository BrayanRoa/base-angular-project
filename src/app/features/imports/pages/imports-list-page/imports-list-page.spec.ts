import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsListPage } from './imports-list-page';

describe('ImportsListPage', () => {
  let component: ImportsListPage;
  let fixture: ComponentFixture<ImportsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportsListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
