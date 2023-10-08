import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessNewsComponent } from './access-news.component';

describe('AccessNewsComponent', () => {
  let component: AccessNewsComponent;
  let fixture: ComponentFixture<AccessNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessNewsComponent]
    });
    fixture = TestBed.createComponent(AccessNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
