import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

 export class FormValidationService{    
    validateEmailOrCpf(control: FormControl) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;
    
    const value = control.value;
  
    if (!value) {
      return null; 
    }
  
    const isValidEmail = emailRegex.test(value);
    const isValidCpf = cpfRegex.test(value);
  
    if (!isValidEmail && !isValidCpf) {
      return { invalidEmailOrCPF: true };
    }
  
    return null; 
  }

  getErrorMessage(form: FormGroup, field: string): string {
    const control = form.get(field);
    
    if (control?.hasError('required')) {
      return `${field === 'username' ? 'Usuário' : 'Senha'} é obrigatório`;
    }

    if (field === 'username') {
      if (control?.hasError('invalidEmailOrCPF')) {
        return 'Usuário deve ser um email válido ou CPF';
      }
    }

    if (field === 'password') {
      if (control?.hasError('minlength')) {
        return 'Senha deve ter no mínimo 6 caracteres';
      }
    }

    return '';
  }
}