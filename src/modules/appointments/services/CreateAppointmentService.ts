import { startOfHour } from 'date-fns';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  providerId: string;
  date: Date;
}

class CreateAppointmentService {
  // eslint-disable-next-line prettier/prettier
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  public async execute({ date, providerId }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentIsSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentIsSameDate) {
      throw new AppError('This appointment has been boked');
    }

    const appointment = await this.appointmentsRepository.create({
      providerId,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
