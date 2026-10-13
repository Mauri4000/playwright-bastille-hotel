import { IFactory } from '../core/interfaces/IFactory';
import { ReservationBuilder, ReservationData } from '../builders/ReservationBuilder';
import { DateUtils } from '../utils/DateUtils';

/**
 * ReservationFactory — Factory pattern.
 * Provides named presets so steps don't need to configure builders manually.
 */
export class ReservationFactory implements IFactory<ReservationData> {
  private readonly builder = new ReservationBuilder();

  /** Generic create with optional overrides */
  create(overrides: Partial<ReservationData> = {}): ReservationData {
    const base = this.builder.reset().build();
    return { ...base, ...overrides };
  }

  /** A standard 2-night reservation starting tomorrow */
  standard(): ReservationData {
    return this.builder.reset()
      .withGuestName('Juan Turista')
      .withRoom('A1')
      .forNights(2)
      .build();
  }

  /** Corporate reservation (empresa) */
  corporate(): ReservationData {
    return this.builder.reset()
      .withGuestName('Empresa ABC')
      .withRoom('B3')
      .forNights(5)
      .asEmpresa()
      .withInvoice()
      .withPrice(250)
      .build();
  }

  /** Guest with pet */
  withPet(): ReservationData {
    return this.builder.reset()
      .withGuestName('María López')
      .withRoom('A2')
      .forNights(3)
      .withPet()
      .build();
  }

  /** Maintenance block */
  maintenance(roomId = 'B5'): ReservationData {
    return this.builder.reset()
      .withGuestName('Mantenimiento')
      .withRoom(roomId)
      .withStatus('mantenimiento')
      .withCheckIn(DateUtils.tomorrow())
      .withCheckOut(DateUtils.daysFromNow(2))
      .build();
  }

  /** Habilitación urgente */
  urgente(roomId = 'A3'): ReservationData {
    return this.builder.reset()
      .withGuestName('HABILITAR')
      .withRoom(roomId)
      .withStatus('habilitacion')
      .withCheckIn(DateUtils.today())
      .withCheckOut(DateUtils.today())
      .build();
  }
}
