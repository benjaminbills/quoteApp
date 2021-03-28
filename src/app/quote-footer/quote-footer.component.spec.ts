import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFooterComponent } from './quote-footer.component';

describe('QuoteFooterComponent', () => {
  let component: QuoteFooterComponent;
  let fixture: ComponentFixture<QuoteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
