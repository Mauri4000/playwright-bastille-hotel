import { IFactory } from '../core/interfaces/IFactory';
import { TransactionBuilder, TransactionData } from '../builders/TransactionBuilder';

/**
 * TransactionFactory — Factory pattern.
 * Provides preset transaction scenarios for financial E2E tests.
 */
export class TransactionFactory implements IFactory<TransactionData> {
  private readonly builder = new TransactionBuilder();

  create(overrides: Partial<TransactionData> = {}): TransactionData {
    return { ...this.builder.reset().build(), ...overrides };
  }

  /** Standard room income */
  roomIncome(amount = 350): TransactionData {
    return this.builder.reset()
      .withDescription('Pago habitación A1')
      .withAmount(amount)
      .withCategory('Habitación')
      .build();
  }

  /** Supply expense */
  supplyExpense(amount = 50): TransactionData {
    return this.builder.reset()
      .withDescription('Compra de insumos')
      .withAmount(amount)
      .asEgreso()
      .withCategory('Insumos')
      .withCaja('CAJA CHICA')
      .build();
  }

  /** Bank transfer */
  bankTransfer(amount = 1000): TransactionData {
    return this.builder.reset()
      .withDescription('Transferencia BNB')
      .withAmount(amount)
      .withCaja('CUENTA BNB')
      .build();
  }
}
