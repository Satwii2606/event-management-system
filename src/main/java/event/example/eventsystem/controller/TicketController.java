package event.example.eventsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import event.example.eventsystem.model.Ticket;
import event.example.eventsystem.repository.TicketRepository;

@RestController
@CrossOrigin("*")
public class TicketController {

    @Autowired
    private TicketRepository repo;

    @PostMapping("/tickets")
    public Ticket bookTicket(@RequestBody Ticket ticket) {
        return repo.save(ticket);
    }

    @GetMapping("/tickets")
    public List<Ticket> getTickets() {
        return repo.findAll();
    }
}
