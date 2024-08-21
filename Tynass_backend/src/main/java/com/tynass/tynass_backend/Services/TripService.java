package com.tynass.tynass_backend.Services;
import com.tynass.tynass_backend.Repositorys.TripRepository;
import com.tynass.tynass_backend.models.Trip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;

    public void saveTrip(Trip trip) {
        tripRepository.save(trip);
    }


    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }

    // Get a trip by ID
    public Trip getTripById(String id) {
        return tripRepository.findById(id).orElse(null);
    }
}
