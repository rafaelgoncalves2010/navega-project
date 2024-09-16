import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';  // Importado aqui
import { LoginComponent } from './login.component';
import { FormValidationService } from '../../util/form-validation.service';  // Certifique-se de que o caminho está correto

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formValidationService: FormValidationService;
  let router: Router;

  beforeEach(async () => {
    const mockFormValidationService = {
      validateEmailOrCpf: jest.fn(),
      getErrorMessage: jest.fn().mockReturnValue('Erro de validação'),
    };

    const mockRouter = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        BrowserAnimationsModule, 
        LoginComponent,
      ],
      providers: [
        { provide: FormValidationService, useValue: mockFormValidationService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formValidationService = TestBed.inject(FormValidationService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('deveria criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deveria ter o formulário inválido se os campos estão vazios', () => {
    expect(component.loginForm.valid).toBeFalsy();
    expect(component.loginForm.get('username')?.valid).toBeFalsy();
    expect(component.loginForm.get('password')?.valid).toBeFalsy();
  });

  it('deveria ter o formulário válido quando o username e senha estão corretos', () => {
    component.loginForm.controls['username'].setValue('navega@navega.com');
    component.loginForm.controls['password'].setValue('navega');
    
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('deveria navegar para a rota correta se o login for bem-sucedido', () => {
    component.loginForm.controls['username'].setValue('navega@navega.com');
    component.loginForm.controls['password'].setValue('navega');
  
    component.onSubmit();
  
    expect(router.navigate).toHaveBeenCalledWith(['/my-plan/contribution']);
  });

  it('deveria exibir alerta de erro se o login for inválido', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    component.loginForm.controls['username'].setValue('invalido@navega.com');
    component.loginForm.controls['password'].setValue('senhaerrada');
  
    component.onSubmit();
  
    expect(window.alert).toHaveBeenCalledWith('Usuário ou senha inválidos.');
  });

  it('deveria chamar o método getErrorMessage do FormValidationService corretamente', () => {
    component.getErrorMessage('username');
    expect(formValidationService.getErrorMessage).toHaveBeenCalledWith(component.loginForm, 'username');
  });

});
