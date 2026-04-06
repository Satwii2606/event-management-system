package event.example.eventsystem.controller;

import event.example.eventsystem.model.Event;
import event.example.eventsystem.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository repo;

    @GetMapping
    public List<Event> getAllEvents() {
        return repo.findAll();
    }

    @PostMapping
    public Event addEvent(@RequestBody Event event) {
        return repo.save(event);
    }
}
