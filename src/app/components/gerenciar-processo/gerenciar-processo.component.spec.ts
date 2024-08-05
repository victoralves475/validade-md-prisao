import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarProcessoComponent } from './gerenciar-processo.component';

describe('GerenciarProcessoComponent', () => {
  let component: GerenciarProcessoComponent;
  let fixture: ComponentFixture<GerenciarProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarProcessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciarProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
