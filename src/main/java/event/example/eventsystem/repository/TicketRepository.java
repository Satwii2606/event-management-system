package event.example.eventsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import event.example.eventsystem.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
}
