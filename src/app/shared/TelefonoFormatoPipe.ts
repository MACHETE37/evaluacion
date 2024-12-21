import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonoFormato'
})
export class TelefonoFormatoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Elimina los caracteres no numéricos
    const sanitizedValue = value.replace(/\D/g, '');

    // Aplica el formato: +569 XXXX XXXX
    const formattedValue = `+569 ${sanitizedValue.slice(3, 7)} ${sanitizedValue.slice(7, 11)}`;

    return formattedValue;
  }
}