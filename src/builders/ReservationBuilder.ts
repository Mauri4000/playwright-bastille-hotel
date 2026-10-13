import { IBuilder } from '../core/interfaces/IBuilder';
import { DateUtils } from '../utils/DateUtils';

export interface ReservationData {
  guestName:    string;
  roomId:       string;
  checkIn:      string;
  checkOut:     string;
  numGuests:    number;
  status:       'ocupado' | 'reserva' | 'mantenimiento' | 'habilitacion' | 'limpieza';
  isEmpresa:    boolean;
  hasPet:       boolean;
  wantsInvoice: boolean;
  pricePerNight: number | null;
  notes:        string | null;
}

/**
 * ReservationBuilder — Builder pattern.
 * Constructs ReservationData step-by-step with a fluent API.
 * Returns a plain object; nothing is saved to the DB here.
 */
export class ReservationBuilder implements IBuilder<ReservationData> {
  private data: ReservationData = this.defaults();

  private defaults(): ReservationData {
    return {
      guestName:    'Test Guest',
      roomId:       'A1',
      checkIn:      DateUtils.tomorrow(),
      checkOut:     DateUtils.daysFromNow(3),
      numGuests:    1,
      status:       'reserva',
      isEmpresa:    false,
      hasPet:       false,
      wantsInvoice: false,
      pricePerNight: null,
      notes:        null,
    };
  }

  reset(): this {
    this.data = this.defaults();
    return this;
  }

  withGuestName(name: string):   this { this.data.guestName    = name; return this; }
  withRoom(roomId: string):      this { this.data.roomId        = roomId; return this; }
  withCheckIn(date: string):     this { this.data.checkIn       = date; return this; }
  withCheckOut(date: string):    this { this.data.checkOut      = date; return this; }
  withNumGuests(n: number):      this { this.data.numGuests     = n; return this; }
  withStatus(s: ReservationData['status']): this { this.data.status = s; return this; }
  asEmpresa():                   this { this.data.isEmpresa     = true; return this; }
  withPet():                     this { this.data.hasPet        = true; return this; }
  withInvoice():                 this { this.data.wantsInvoice  = true; return this; }
  withPrice(p: number):          this { this.data.pricePerNight = p; return this; }
  withNotes(n: string):          this { this.data.notes         = n; return this; }

  /** Stay from tomorrow for N nights */
  forNights(n: number): this {
    this.data.checkIn  = DateUtils.tomorrow();
    this.data.checkOut = DateUtils.daysFromNow(n + 1);
    return this;
  }

  build(): ReservationData {
    return { ...this.data };
  }
}
