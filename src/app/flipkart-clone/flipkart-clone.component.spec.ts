import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartCloneComponent } from './flipkart-clone.component';

describe('FlipkartCloneComponent', () => {
  let component: FlipkartCloneComponent;
  let fixture: ComponentFixture<FlipkartCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartCloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
