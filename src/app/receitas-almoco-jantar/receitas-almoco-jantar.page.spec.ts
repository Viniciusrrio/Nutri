import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitasAlmocoJantarPage } from './receitas-almoco-jantar.page';

describe('ReceitasAlmocoJantarPage', () => {
  let component: ReceitasAlmocoJantarPage;
  let fixture: ComponentFixture<ReceitasAlmocoJantarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasAlmocoJantarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
