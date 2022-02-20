import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilsitemComponent } from './skilsitem.component';

describe('SkilsitemComponent', () => {
  let component: SkilsitemComponent;
  let fixture: ComponentFixture<SkilsitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilsitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
