package com.tynass.tynass_backend.Controllers;
import com.tynass.tynass_backend.Services.TripService;
import com.tynass.tynass_backend.models.Trip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TripController {

    @Autowired
    private TripService tripService;

    @PostMapping("/trips")
    public ResponseEntity<String> saveTrip(@RequestBody Trip trip) {
        try {
            tripService.saveTrip(trip);
            return ResponseEntity.ok("HTML content saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving HTML content");
        }
    }
    @GetMapping("/trips")
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }
    @GetMapping("/trips/{id}")
    public ResponseEntity<Trip> getTripById(@PathVariable String id) {
        Trip trip = tripService.getTripById(id);
        if (trip != null) {
            return ResponseEntity.ok(trip);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

