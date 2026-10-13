import { IBuilder } from '../core/interfaces/IBuilder';
import { DateUtils } from '../utils/DateUtils';

export interface TransactionData {
  date:        string;
  description: string;
  amount:      number;
  type:        'ingreso' | 'egreso';
  category:    string;
  caja:        'CAJA MAYOR' | 'CAJA CHICA' | 'CUENTA BNB' | 'TARJETA';
  notes:       string | null;
}

/**
 * TransactionBuilder — Builder pattern.
 * Builds a TransactionData object for use in E2E tests.
 */
export class TransactionBuilder implements IBuilder<TransactionData> {
  private data: TransactionData = this.defaults();

  private defaults(): TransactionData {
    return {
      date:        DateUtils.today(),
      description: 'Test transaction',
      amount:      100,
      type:        'ingreso',
      category:    'Habitación',
      caja:        'CAJA MAYOR',
      notes:       null,
    };
  }

  reset(): this { this.data = this.defaults(); return this; }

  withDate(d: string):         this { this.data.date        = d; return this; }
  withDescription(d: string):  this { this.data.description = d; return this; }
  withAmount(a: number):       this { this.data.amount      = a; return this; }
  asEgreso():                  this { this.data.type        = 'egreso'; return this; }
  withCategory(c: string):     this { this.data.category    = c; return this; }
  withCaja(c: TransactionData['caja']): this { this.data.caja = c; return this; }
  withNotes(n: string):        this { this.data.notes       = n; return this; }

  build(): TransactionData { return { ...this.data }; }
}
