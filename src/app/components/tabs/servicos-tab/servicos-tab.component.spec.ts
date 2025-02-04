import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosTabComponent } from './servicos-tab.component';

describe('ServicosTabComponent', () => {
  let component: ServicosTabComponent;
  let fixture: ComponentFixture<ServicosTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
